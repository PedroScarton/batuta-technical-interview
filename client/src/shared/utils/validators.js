import Validator from 'validator';

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_NUMERIC = 'NUMERIC';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_MOBILE_PHONE = 'MOBILE_PHONE';
const locales = ['es-CL'];
const VALIDATOR_TYPE_CHARACTER = 'CHARACTER';
const VALIDATOR_TYPE_NO_EMPTY_SPACES = 'NO_EMPTY_SPACES';
const VALIDATOR_TYPE_SCRIPT = 'SCRIPT';
const VALIDATOR_TYPE_PASSWORD = 'PASSWORD';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_NUMERIC = () => ({ type: VALIDATOR_TYPE_NUMERIC });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({ type: VALIDATOR_TYPE_MINLENGTH, val: val });
export const VALIDATOR_MAXLENGTH = (val) => ({ type: VALIDATOR_TYPE_MAXLENGTH, val: val });
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_MOBILE_PHONE = () => ({ type: VALIDATOR_TYPE_MOBILE_PHONE });
export const VALIDATOR_CHARACTER = (chars) => ({ type: VALIDATOR_TYPE_CHARACTER, chars: chars });
export const VALIDATOR_NO_EMPTY_SPACES = () => ({ type: VALIDATOR_TYPE_NO_EMPTY_SPACES });

export const VALIDATOR_PARAMETERS_IN_SCRIPT = () => ({ type: VALIDATOR_TYPE_SCRIPT });

export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });

export const runValidateAction = (validator, value) => {
  switch (validator.type) {
    case VALIDATOR_TYPE_REQUIRE:
      return value.length !== 0;
    case VALIDATOR_TYPE_NUMERIC:
      return Validator.isNumeric(value);
    case VALIDATOR_TYPE_MINLENGTH:
      return value.trim().length >= validator.val;
    case VALIDATOR_TYPE_MAXLENGTH:
      return value.trim().length <= validator.val;
    case VALIDATOR_TYPE_MIN:
      return +value >= validator.val;
    case VALIDATOR_TYPE_MAX:
      return +value <= validator.val;
    case VALIDATOR_TYPE_EMAIL:
      return Validator.isEmail(value);
    case VALIDATOR_TYPE_MOBILE_PHONE:
      return Validator.isMobilePhone(value.trim(), locales);
    case VALIDATOR_TYPE_CHARACTER:
      return !validator.chars.some((char) => value.includes(char));
    case VALIDATOR_TYPE_NO_EMPTY_SPACES:
      return value.trim().length > 0;
    case VALIDATOR_TYPE_SCRIPT:
      return scriptValidate(value);
    case VALIDATOR_TYPE_PASSWORD:
      return Validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      });
  }
};

export const validate = (value = '', validators = []) => {
  value = typeof value != 'string' ? value : value.trimStart();

  return validators.every((validator) => runValidateAction(validator, value));
};

export const getValidators = (config) => {
  if (config.required) return [VALIDATOR_REQUIRE()];
  return [];
};
