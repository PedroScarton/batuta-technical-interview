import React, { useMemo, useState } from 'react';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { Alert, AlertTitle, Collapse, IconButton, Typography } from '@mui/material';

import { useBatutaTheme } from '@shared/hooks/theme-hooks';

const borderdAlert = palette => ({
  info: palette.primary.main,
  success: palette.system.success,
  error: palette.system.danger,
  warning: palette.system.warning,
});

const iconsAlert = {
  info: (
    <div className="mr-2 flex h-full flex-col justify-center">
      <InfoOutlinedIcon fontSize="large" />
    </div>
  ),
  success: (
    <div className="mr-2 flex h-full flex-col justify-center">
      <CheckCircleOutlinedIcon fontSize="large" />
    </div>
  ),
  error: (
    <div className="mr-2 flex h-full flex-col justify-center">
      <CancelOutlinedIcon fontSize="large" />
    </div>
  ),
  warning: (
    <div className="mr-2 flex h-full flex-col justify-center">
      <WarningAmberOutlinedIcon fontSize="large" />
    </div>
  ),
};

const CallOut = ({
  type = 'info',
  iconType,
  title,
  message,
  messageVariant = 'body-md',
  list = [],
  onClose = true,
  children,
}) => {
  const [open, setOpen] = useState(true);
  const { palette } = useBatutaTheme();
  const borderAlertColor = useMemo(
    () => borderdAlert(palette)[type] || borderdAlert(palette).info,
    [palette, type, borderdAlert]
  );
  return (
    <Collapse in={open}>
      <Alert
        action={
          onClose && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )
        }
        severity={type || 'info'}
        sx={{
          width: '100%',
          borderLeft: '0.5rem solid',
          borderColor: borderAlertColor,
          display: 'flex',
        }}
        variant="outlined"
        type="callOut"
        icon={iconsAlert[iconType ?? type] || iconsAlert.info}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message && <Typography variant={messageVariant}>{message}</Typography>}

        {list.length > 0 && (
          <div className="mt-2">
            {list.map(item => (
              <li>
                <Typography variant="body-md">{item}</Typography>
              </li>
            ))}
          </div>
        )}
        {children}
      </Alert>
    </Collapse>
  );
};

export default CallOut;
