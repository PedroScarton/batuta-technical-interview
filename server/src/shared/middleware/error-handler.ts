import { NextFunction, Request, Response } from 'express';

import { generateError } from '../utils/app-errors';
import { Logger } from '@shared/helpers/classes/logger.class';

const isBodyParserError = (error: any) => {
  const bodyParserCommonErrorsTypes = [
    'encoding.unsupported',
    'entity.parse.failed',
    'entity.verify.failed',
    'request.aborted',
    'request.size.invalid',
    'stream.encoding.set',
    'parameters.too.many',
    'charset.unsupported',
    'entity.too.large',
  ];
  return bodyParserCommonErrorsTypes.includes(error.type);
};

const handleBodyParserError = (err: { type: string; message: string; status: number }) =>
  generateError(
    `Failed to parse request body: ${err.message} (${err.type})`,
    err.status,
    'BODY_PARSE_ERROR'
  );

const handleAggregateError = (err: any) => {
  return generateError(
    'AggregateError',
    err.status || 500,
    'AGGREGATE_ERROR',
    undefined,
    err.errors || undefined
  );
};

export default function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  let error = { ...err };
  error.message = err.message;
  error.stack = err.stack;

  if (err.name === 'AggregateError') error = handleAggregateError(err);
  if (isBodyParserError(err)) error = handleBodyParserError(err);

  error.status = error.status || 500;

  Logger.info(err.stack);

  res.status(error.status).json({
    status: error.status,
    message: error.message,
    code: error.code || 'INTERNAL_SERVER_ERROR',
  });
}
