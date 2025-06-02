import { useReducer } from 'react';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_BLUR = 'INPUT_BLUR';
export const INPUT_FOCUS = 'INPUT_FOCUS';
export const INPUT_RESET = 'INPUT_RESET';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_FOCUS:
      return {
        ...state,
        focused: true,
      };
    case INPUT_BLUR:
      return {
        ...state,
        focused: false,
        touched: true,
      };
    case INPUT_RESET:
      return {
        value: '',
        isValid: false,
        focused: false,
        touched: false,
      };
    default:
      break;
  }
};

export const useInput = (
  initialValue = '',
  initialValidity = false,
  touched = false,
  focused = false
) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isValid: initialValidity,
    touched: touched,
    focused: focused,
  });
  return [inputState, dispatch];
};
