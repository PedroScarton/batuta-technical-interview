import { useCallback, useMemo, useReducer } from 'react';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const SET_FORM_DATA = 'SET_FORM_DATA';
const VALIDATE_CHANGED = 'VALIDATE_CHANGED';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = { ...state.inputValues, [action.inputId]: action.value };
    const updatedValidities = { ...state.inputValidities, [action.inputId]: action.isValid };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      ...state,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  if (action.type === SET_FORM_DATA) {
    return {
      ...state,
      inputValues: action.inputValues,
      inputValidities: action.inputValidities,
      formIsValid: action.formIsValid,
    };
  }
  if (action.type === VALIDATE_CHANGED) {
    return {
      ...state,
      dataHasChanged: Object.keys(action.initialInputValues).some(
        key => state.inputValues[key] != action.initialInputValues[key]
      ),
    };
  }
  return state;
};

export const useForm = (
  initialInputValues = {},
  initialInputValidities = {},
  initialFormValidity = false
) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputValues: initialInputValues,
    inputValidities: initialInputValidities,
    formIsValid: initialFormValidity,
    dataHasChanged: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: FORM_INPUT_UPDATE, inputId: id, value: value, isValid: isValid });
  }, []);

  const setFormData = useCallback((inputValues, inputValidities, formIsValid = false) => {
    dispatch({ type: SET_FORM_DATA, inputValues, inputValidities, formIsValid });
  }, []);

  useMemo(() => {
    dispatch({ type: VALIDATE_CHANGED, initialInputValues });
  }, [formState.inputValues]);

  return [formState, inputHandler, setFormData];
};
