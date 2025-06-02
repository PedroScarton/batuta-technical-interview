import React from 'react';

import { InfoOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';

const WarningMessage = ({ message }) => {
  return (
    <div className="flex flex-1">
      <InfoOutlined className="mr-2 mt-1" fontSize="small" />
      <div>
        <Typography variant={'body-sm'}>{message}</Typography>
      </div>
    </div>
  );
};

export default WarningMessage;
