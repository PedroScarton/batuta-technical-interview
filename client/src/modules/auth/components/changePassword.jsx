import React, { useMemo } from 'react';

import Stack from '@mui/material/Stack';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';
import Input from '@shared/components/form/input';
import Margin from '@shared/components/layout/margin';
import { DataSuspense } from '@shared/components/suspense/dataSuspense';
import Card from '@shared/components/ui/card';
import LoadingSpinner from '@shared/components/ui/loadingSpinner';
import { useAuthInfo } from '@shared/providers/currentUserProvider';
import { useSnackbarAlert } from '@shared/providers/customSnackbarsProvider';
import { useSnackbarBackendError } from '@shared/utils/translateBackendError';

import { useForm } from '@hooks/form-hook';
import { VALIDATOR_PASSWORD, VALIDATOR_REQUIRE } from '@utils/validators';

import { useUpdatePassword } from '../services/authService';
import styles from './changePassword.module.css';

export default function ChangePassword() {
  const { t } = useTranslation('auth');

  const { info, loading: loadingInfo } = useAuthInfo();

  const twoFactorEnabled = info && info.twoFactorEnabled;

  const handleError = useSnackbarBackendError();
  const showSnackbarAlert = useSnackbarAlert();

  const inputs = { currentPassword: '', newPassword: '', token: '' };
  const validities = useMemo(
    () => ({
      currentPassword: false,
      newPassword: false,
      token: !twoFactorEnabled,
    }),
    [twoFactorEnabled]
  );
  const [formState, inputHandler] = useForm(inputs, validities);

  const { mutate, isError, isPending, error } = useUpdatePassword();

  const _onUpdate = event => {
    event?.preventDefault();
    const { formIsValid, inputValues } = formState;

    formIsValid &&
      mutate(inputValues, {
        onSuccess: () => {
          showSnackbarAlert('success', t('CHANGE_PASSWORD_SUCCESS'), t('PASSWORD_CHANGED'));
        },
        onError: handleError,
      });
  };

  return loadingInfo ? (
    <LoadingSpinner />
  ) : (
    <Card className={styles.container}>
      <form className={styles.form} onSubmit={_onUpdate}>
        <Input
          type="password"
          id="currentPassword"
          label={t('CURRENT_PASSWORD')}
          helperText={t('CURRENT_PASSWORD_HELPER')}
          errorText={t('PASSWORD_ERROR')}
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          required
        />
        <Margin top={10} />
        <Input
          type="password"
          id="newPassword"
          label={t('NEW_PASSWORD')}
          helperText={t('PASSWORD_HELPER')}
          errorText={t('PASSWORD_ERROR')}
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_PASSWORD()]}
          required
        />
        <DataSuspense loading={loadingInfo}>
          {twoFactorEnabled && (
            <>
              <Margin top={10} />
              <Input
                id="token"
                label={t('2FA_TOKEN')}
                onInput={inputHandler}
                helperText={t('2FA_TOKEN_HELPER')}
                errorText={t('2FA_TOKEN_ERROR')}
                validators={[VALIDATOR_REQUIRE()]}
                required
              />
            </>
          )}
        </DataSuspense>
        <Margin top={20} />
        <DataSuspense loading={isPending} error={error}></DataSuspense>

        <Stack direction="row-reverse" spacing={2}>
          <Button
            id="auth-changePassword-button"
            variant="contained"
            disabled={!formState.formIsValid}
            loading={isPending}
            type="submit"
            label={t('CHANGE')}
          />
        </Stack>
      </form>
    </Card>
  );
}

ChangePassword.propTypes = {
  twoFactorEnabled: PropTypes.bool,
};
