import { ValidationErrors } from '../types/validation-errors.types';
import { HttpError } from '../models';

export const generateError = (
  message: string,
  status: number,
  code?: string,
  validationErrors?: ValidationErrors,
  errors?: [Error]
) => new HttpError(message, status, code, validationErrors, errors);

export const generateMissingParamsError = (parameterList: string[]) => {
  const errors: ValidationErrors = parameterList.reduce((acc: ValidationErrors, param) => {
    acc[param] = {
      type: 'REQUIRED',
      value: null,
    };
    return acc;
  }, {});

  return generateError('Validation Error', 422, 'VALIDATION_ERROR', errors);
};

export const errors = {
  // Server errors (500-599)
  internal_error: () => generateError('Internal Server Error', 500, 'INTERNAL_SERVER_ERROR'),

  // Bad request errors (400)
  params: (missing: string[] = []) =>
    generateError(
      `Please provide all the parameters required. ${
        missing.length > 0 ? `Missing ${missing.map((x) => `'${x}'`).join(', ')}` : ''
      }`,
      400,
      'PARAMS_REQUIRED'
    ),
  wrong_type: (values: string[] = []) =>
    generateError(
      `Please provide all the parameters required. ${
        values.length > 0 ? `Wrong type parameters: ${values.map((x) => `'${x}'`).join(', ')}` : ''
      }`,
      400,
      'PARAMS_REQUIRED'
    ),

  // Not found error (404)
  not_found: (name = 'Resource') =>
    generateError(`${name} not found.`, 404, `${name.toUpperCase()}_NOT_FOUND`),

  // Bad Request error (400)
  badRequest: (message: string) => generateError(message, 400, 'BAD_REQUEST'),

  // Invanlid credentials error (401)
  invalid_credentials: () =>
    generateError('Invalid credentials provided.', 401, 'INVALID_CREDENTIALS'),
};
