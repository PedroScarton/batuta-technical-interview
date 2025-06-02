import React, { useCallback } from 'react';

import { SnackbarProvider, useSnackbar } from 'notistack';

import AlertBatuta from '@shared/components/ui/alert';

const positionAlert = {
  horizontal: 'right',
  vertical: 'bottom',
};

const CustomSnackbarProvider = ({ children }) => {
  const { horizontal, vertical } = positionAlert;

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
      autoHideDuration={4000}
      preventDuplicate
      components={{
        SnackbarContent: AlertBatuta,
      }}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;

export const useSnackbarAlert = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useCallback(
    (type, message, title) => {
      const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
      const closeEnqueuedAlert = () => closeSnackbar(uniqueId);
      enqueueSnackbar(
        <AlertBatuta type={type} message={message} title={title} onClose={closeEnqueuedAlert} />,
        {
          key: uniqueId,
        }
      );
      return closeEnqueuedAlert;
    },
    [enqueueSnackbar, closeSnackbar]
  );
};
