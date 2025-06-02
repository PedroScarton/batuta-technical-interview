import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useSnackbarAlert } from '@shared/providers/customSnackbarsProvider';

function getErrorCode(error) {
  return error?.data?.meta?.code ?? error?.data?.code ?? 'ERROR';
}

export default function translateBackendError(t, error, type = 'MESSAGE') {
  const translatedValues = {};
  if (error?.data?.meta) {
    for (const [key, value] of Object.entries(error?.data?.meta)) {
      translatedValues[key] = t(value);
    }
  }

  const translatedError = t(`${getErrorCode(error)}.${type}`, {
    replace: translatedValues,
  });
  if (translatedError.search(/\{\{\w+\}\}/) != -1) return t(`ERROR.${type}`);
  return translatedError;
}

export function useSnackbarBackendError() {
  const { t } = useTranslation('error');
  const showSnackbarAlert = useSnackbarAlert();
  let activeErrors = new Map();
  const handleError = useCallback(
    error => {
      const errorCode = getErrorCode(error);
      const message = translateBackendError(t, error),
        title = translateBackendError(t, error, 'TITLE');
      activeErrors.get(errorCode)?.();
      const closeCallback = showSnackbarAlert('error', message, title);
      activeErrors.set(errorCode, closeCallback);
    },
    [showSnackbarAlert]
  );
  return handleError;
}
