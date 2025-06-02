import React from 'react';

const Margin = props => (
  <div
    style={{
      marginTop: props.top && props.top,
      marginBottom: props.bottom && props.bottom,
      marginRight: props.right && props.right,
      marginLeft: props.left && props.left,
    }}
  />
);

export default Margin;
