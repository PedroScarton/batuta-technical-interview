import React from 'react';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';

import { useSnackbarBackendError } from '@shared/utils/translateBackendError';

import { useAuth } from './authProvider';

const unauthorizedStatuses = [403];

function useGlobalErrors({
  onAuthError = () => {},
  onServerError = () => {},
  onRecover = () => {},
}) {
  const triggerError = error => {
    const { status } = error;

    if (unauthorizedStatuses.includes(status)) {
      onAuthError();
    } else if (status >= 500) {
      // If it's an unexpected error (i.e. API is down)
      // execute the provided callback
      onServerError(error);
    }
  };

  const queryCache = new QueryCache({
    onError(error) {
      if (error) {
        triggerError(error);
      }
    },
    onSuccess() {
      onRecover();
    },
  });

  const mutationCache = new MutationCache({
    onError(error) {
      if (error) {
        triggerError(error);
      }
    },
    onSuccess() {
      onRecover();
    },
  });

  return [queryCache, mutationCache];
}

export default function QueryProvider({ children }) {
  const handleError = useSnackbarBackendError();
  const signOut = useAuth()?.signOut;

  const [queryCache, mutationCache] = useGlobalErrors({
    onAuthError: () => {
      !!signOut && signOut();
    },
    onServerError: handleError,
  });

  // Create a client
  const queryClient = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
QueryProvider.propTypes = { children: PropTypes.node };
