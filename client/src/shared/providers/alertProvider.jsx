import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';

import PropTypes from 'prop-types';

import Alert from '@shared/components/ui/alert';

const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

let logoutTimer;

const AlertContext = createContext({
  setAlert: () => {},
  closeAlert: () => {},
  isOpen: false,
  type: '',
  title: '',
  message: '',
});

export const alertContext = () => {
  const [alertState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case OPEN:
          return {
            ...state,
            isAlertOpen: true,
            title: action.title,
            message: action.message,
            alertType: action.alertType,
          };
        case CLOSE:
          return {
            ...state,
            isAlertOpen: false,
            title: '',
            message: '',
            alertType: '',
          };
      }
    },
    {
      isAlertOpen: false,
      title: '',
      message: '',
      alertType: '',
    }
  );

  const setAlert = useCallback((title, message, type) => {
    dispatch({
      type: OPEN,
      title,
      message,
      alertType: type,
    });
  }, []);

  const closeAlert = () => {
    dispatch({ type: CLOSE });
  };

  useEffect(() => {
    if (alertState.isAlertOpen) {
      logoutTimer = setTimeout(closeAlert, 10 * 500); // 10 seconds
    } else {
      clearTimeout(logoutTimer);
    }
  }, [alertState.isAlertOpen]);
  return {
    setAlert,
    closeAlert,
    isOpen: alertState.isAlertOpen,
    type: alertState.alertType,
    title: alertState.title,
    message: alertState.message,
  };
};

export function useAlert() {
  return useContext(AlertContext);
}

const AlertProvider = ({ children }) => {
  const { isOpen, type, title, message, setAlert, closeAlert } = alertContext();
  return (
    <AlertContext.Provider
      value={{
        isOpen: isOpen,
        type: type,
        title: title,
        message: message,
        setAlert: setAlert,
        closeAlert: closeAlert,
      }}
    >
      <Alert isOpen={isOpen} type={type} title={title} message={message} onClose={closeAlert} />
      {children}
    </AlertContext.Provider>
  );
};
AlertProvider.propTypes = {
  children: PropTypes.node,
};

export default AlertProvider;
