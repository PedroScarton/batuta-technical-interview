import React, { useContext, useMemo, useReducer } from 'react';

import PropTypes from 'prop-types';

import AuthService from '@modules/auth/services/authService';

const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return { ...prevState, userToken: action.token, message: null };
        case 'SET_SIGNING_IN':
          return { ...prevState, isSigningIn: action.value, message: null };
        case 'LOGIN_ERROR':
          return {
            ...prevState,
            message: { title: 'AUTHENTICATION_ERROR', text: action.text, status: action.status },
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
            isSigningIn: false,
            is2FARequired: false,
            message: null,
          };
      }
    },
    {
      isLoadingSession: false,
      isSigningIn: false,
      is2FARequired: false,
      message: null,
      userToken: null,
    }
  );

  const authContext = useMemo(
    () => ({
      state,
      dispatch,
      signIn: async ({ email, password }) => {
        dispatch({ type: 'SET_SIGNING_IN', value: true });

        const { error } = await AuthService.login(email, password);

        console.log(error);

        if (error) {
          console.log(error);
          dispatch({ type: 'SET_SIGNING_IN', value: false });
          dispatch({ type: 'LOGIN_ERROR', text: error.code || '400', status: 'error' });
          return;
        }

        dispatch({ type: 'SET_SIGNING_IN', value: false });

        dispatch({ type: 'SIGN_IN', token: 'authToken' });

        return 'authToken';
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    [state]
  );

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = { children: PropTypes.node };

export function useAuth() {
  return useContext(AuthContext);
}
