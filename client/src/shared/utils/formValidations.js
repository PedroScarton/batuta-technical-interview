export const validateMinArrayLength = (value = [], length, message) => {
  if (value.length < length) return message;
  return undefined;
};

export const validateMaxLength = (value = '', maxLength, message) => {
  if (value.length > maxLength) return message;
  return undefined;
};

export const required = (value = '', message) => {
  if (!value?.trim()) return message;
  return undefined;
};

export const validateMinNumber = (value = '', min, message) => {
  if (value < min) return message;
  return undefined;
};

export const validateMaxNumber = (value = '', max, message) => {
  if (value > max) return message;
  return undefined;
};