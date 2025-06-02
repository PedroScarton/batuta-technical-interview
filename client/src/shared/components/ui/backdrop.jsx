import React from 'react';

import ReactDOM from 'react-dom';

import styles from './backdrop.module.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}>
      {props.children}
    </div>,
    props.main
      ? (document.getElementById('main') ?? document.getElementById('backdrop-hook'))
      : document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
