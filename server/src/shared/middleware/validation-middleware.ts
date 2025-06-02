// Dependencies
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

// Helpers
import catchAsync from '@shared/utils/catch-async';
import { errors } from '@shared/utils/app-errors';

/**
 * Middleware to get errors from express-validator validation and sends them back to the user
 */
export const validateBody: RequestHandler = catchAsync(async (req, res, next) => {
  const errorsInBody = validationResult(req);

  if (errorsInBody.isEmpty()) return next();

  const missingParamsErrors: string[] = [],
    wrongTypeErrors: string[] = [];

  errorsInBody.formatWith((error) => {
    switch (error.type) {
      case 'field':
        error.value ? wrongTypeErrors.push(error.path) : missingParamsErrors.push(error.path);
        break;

      default:
        break;
    }
  });

  if (missingParamsErrors.length !== 0) {
    throw errors.params(missingParamsErrors);
  }

  if (wrongTypeErrors.length !== 0) {
    throw errors.wrong_type(wrongTypeErrors);
  }

  return res.status(400).json({ errors: errorsInBody.array() });
});
