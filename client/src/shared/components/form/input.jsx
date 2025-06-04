import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// Mui Input Base
import {
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  INPUT_BLUR,
  INPUT_CHANGE,
  INPUT_FOCUS,
  INPUT_RESET,
  useInput,
} from '@shared/hooks/input-hook';
import { useBatutaTheme } from '@shared/hooks/theme-hooks';
import { figmaFonts } from '@shared/theme/typography';

import { validate } from '@utils/validators';

import styles from './input.module.css';

const onNumberInput = (value, dispatch, validators) => {
  const isValid = validate(value, validators);

  if (value.length === 0) {
    dispatch({ type: INPUT_CHANGE, value: '', isValid: false });
    return;
  }
  if (parseInt(0 + value) || parseInt(0 + value) === 0) {
    dispatch({ type: INPUT_CHANGE, value: parseInt(0 + value), isValid: isValid });
    return;
  }
};

export const BatutaInput = styled(InputBase)(({ theme, style }) => ({
  borderRadius: '.5rem',
  '& .MuiInputBase-input': {
    position: 'relative',
    padding: '.5rem',
    width: '100%',
    ...figmaFonts['body-md'],
    color: theme.palette.neutral[200],
    minHeight: '1.625rem',
    maxHeight: 'auto',
    ...style,
  },
  '& .MuiInputBase-input::placeholder': { ...figmaFonts['italic-md'] },
  '& .Mui-disabled': {
    background: 'transparent !important',
    border: 'none !important',
    borderRadius: 'inherit',
  },
}));

export const InputBox = styled(Paper)(({ theme }) => ({
  // paddingRight: '.5rem',
  borderRadius: '.5rem',
  background: theme.palette.neutral[800],
  border: `1.5px solid ${theme.palette.neutral[500]}`,
  boxShadow: 'none',
  '& .Mui-disabled': { background: theme.palette.neutral[700], borderRadius: 'inherit' },
}));

export const BatutaLabel = styled(InputLabel)(({ theme }) => ({
  marginBottom: '0.375rem',
  color: theme.palette.neutral[200],
  '& .Mui-disabled': { color: theme.palette.neutral[400] },
}));

const Input = forwardRef((props, ref) => {
  const [inputState, dispatch] = useInput(props.initialValue, props.initialValidity);

  const { id, onInput, validators, clear } = props;

  const [passwordMode, setPasswordMode] = useState('password');

  const { palette } = useBatutaTheme();
  useEffect(() => {
    if (inputState.focused || inputState.value || inputState.value === null) {
      onInput(id, inputState.value, inputState.isValid);
    }
  }, [onInput, id, inputState]);

  useEffect(() => {
    if (clear) {
      dispatch({ type: INPUT_RESET });
    }
  }, [clear]);

  const changeHandler = (event) => {
    if (props.type === 'number') {
      return onNumberInput(event.target.value, dispatch, validators);
    }

    const text = event.target.value;
    const isValid = validate(text, validators);
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  useImperativeHandle(ref, () => ({
    setValue(value) {
      dispatch({ type: INPUT_CHANGE, value: value, isValid: true });
    },
    resetInput() {
      dispatch({ type: INPUT_RESET });
    },
  }));

  const onFocusHandler = () => {
    dispatch({ type: INPUT_FOCUS });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setPasswordMode((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let element = (
    <BatutaInput
      autoComplete={props.autoComplete}
      autoCorrect={props.autoCorrect}
      type={'text'}
      id={props.id}
      placeholder={props.placeholder}
      disabled={!!props.disabled}
      onChange={changeHandler}
      onBlur={lostFocusHandler}
      onFocus={onFocusHandler}
      value={inputState.value}
      inputRef={props.reference}
      fullWidth
      endAdornment={
        props.icon &&
        (inputState.touched && !inputState.isValid ? (
          props.errorIcon ? (
            <InputAdornment
              sx={{ color: palette.system.danger, paddingRight: '.5rem' }}
              position="end"
            >
              {props.errorIcon}
            </InputAdornment>
          ) : (
            <InputAdornment
              sx={{ color: palette.system.danger, paddingRight: '.5rem' }}
              position="end"
            >
              {props.icon}
            </InputAdornment>
          )
        ) : (
          <InputAdornment
            sx={{ paddingRight: '.5rem', color: palette.neutral[500] }}
            position="end"
          >
            {props.icon}
          </InputAdornment>
        ))
      }
    />
  );

  if (props.type === 'textarea') {
    element = (
      <BatutaInput
        autoComplete={props.autoComplete}
        autoCorrect={props.autoCorrect}
        id={props.id}
        placeholder={props.placeholder}
        disabled={!!props.disabled}
        onChange={changeHandler}
        onBlur={lostFocusHandler}
        onFocus={onFocusHandler}
        value={inputState.value}
        inputRef={props.reference}
        multiline={true}
        rows={props.rows || 5}
        fullWidth
        className={props.className}
      />
    );
  } else if (props.type === 'password') {
    element = (
      <React.Fragment>
        <BatutaInput
          autoComplete="off"
          autoCorrect="off"
          disabled={!!props.disabled}
          id={id}
          type={passwordMode}
          onChange={changeHandler}
          onBlur={lostFocusHandler}
          onFocus={onFocusHandler}
          value={inputState.value}
          inputRef={props.reference}
          fullWidth
          endAdornment={
            <InputAdornment position="end" sx={{ paddingRight: '.5rem' }}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={showPasswordHandler}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="small"
              >
                {passwordMode === 'password' ? (
                  <VisibilityOutlinedIcon
                    htmlColor={
                      inputState.touched && !inputState.isValid ? palette.system.danger : 'inherit'
                    }
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    htmlColor={
                      inputState.touched && !inputState.isValid ? palette.system.danger : 'inherit'
                    }
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </React.Fragment>
    );
  }

  return (
    <div>
      {props.label && (
        <BatutaLabel
          sx={{ color: inputState.touched && !inputState.isValid && palette.system.danger }}
          htmlFor={props.id}
          disabled={!!props.disabled}
        >
          <Typography variant="label-md">
            {`${props.label}${props.required ? ' *' : ''}`}
          </Typography>
        </BatutaLabel>
      )}
      <InputBox
        style={{
          borderColor: inputState.touched && !inputState.isValid && palette.system.danger,
          paddingRight: !props.icon && props.type !== 'password' && 0,
        }}
      >
        {element}
      </InputBox>
      {(!!props.errorText || !!props.helperText) && (
        <>
          {inputState.touched
            ? !inputState.isValid
              ? !!props.errorText && (
                  <div className={styles.TextContainer}>
                    <Typography
                      variant="body-sm"
                      className="text-error"
                      color={palette.system.danger}
                    >
                      {props.errorText}
                    </Typography>
                  </div>
                )
              : !!props.helperText && (
                  <div className={styles.TextContainer}>
                    <Typography variant="body-sm">{props.helperText}</Typography>
                  </div>
                )
            : !!props.helperText && (
                <div className={styles.TextContainer}>
                  <Typography
                    className={styles.helperText}
                    variant={!!props.disabled ? 'disabled' : 'body-sm'}
                  >
                    {props.helperText}
                  </Typography>
                </div>
              )}
        </>
      )}
    </div>
  );
});

export default Input;
