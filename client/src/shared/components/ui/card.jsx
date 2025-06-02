import React from 'react';

import { Card as MaterialCard } from '@mui/material';

import PropTypes from 'prop-types';

const Card = ({ children, ...rest }) => {
  return (
    <MaterialCard variant="outlined" sx={{ padding: '1rem' }} {...rest}>
      {children}
    </MaterialCard>
  );
};

Card.prototype = {
  children: PropTypes.element.isRequired,
};

export default Card;
