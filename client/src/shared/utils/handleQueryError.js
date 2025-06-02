import { useTranslation } from 'react-i18next';

import { useSnackbarAlert } from '@shared/providers/customSnackbarsProvider';

export default function handleQueryError(error) {
  const { t } = useTranslation('errors');
  const showSnackbarAlert = useSnackbarAlert();
  showSnackbarAlert('error', t(error?.data?.code || 'ERROR'), t('ERROR'));
}
