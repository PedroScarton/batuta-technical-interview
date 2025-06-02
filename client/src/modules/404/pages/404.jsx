import React from 'react';

import { Divider, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';

const NotFound = ({ content = undefined, icon = undefined, onClose, sidePanel }) => {
  const { t } = useTranslation('');

  return (
    <div
      className={`mt-40 flex ${sidePanel ? 'flex-col' : 'w-full flex-row'} items-center justify-center gap-4 p-8`}
    >
      <div className="flex items-center justify-center gap-4">
        {icon}
        <div>
          <Typography variant="display-lg" color="primary">
            {t(content?.title) || '404'}
          </Typography>
        </div>
      </div>

      <Divider orientation={sidePanel ? 'horizontal' : 'vertical'} variant="middle" flexItem />
      <div className={sidePanel ? 'flex w-full items-center justify-center text-center' : 'w-full'}>
        <Typography variant="title-md">{t(content?.description || 'CONTENT_NOT_FOUND')}</Typography>
      </div>
      {onClose && <Button id="notFound-onClose-button" onClick={onClose} label={t('BACK')} />}
    </div>
  );
};

export default NotFound;
