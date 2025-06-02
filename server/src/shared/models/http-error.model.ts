import { ValidationErrors } from '../types/validation-errors.types';

export class HttpError extends Error {
  public isOperational: boolean;

  constructor(
    public message: string,
    public status: number,
    public code?: string | number,
    public validationErrors?: ValidationErrors,
    public errors?: [Error]
  ) {
    super(message);

    this.status = status;
    this.code = code;
    this.validationErrors = validationErrors;
    this.errors = errors;
    this.isOperational = true;
  }
}
