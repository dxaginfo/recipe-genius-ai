import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: number, message: string, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  error: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof ApiError) {
    logger.error(`API Error: ${error.message}`);
    res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else {
    logger.error(`Unhandled Error: ${error.message}`);
    logger.error(error.stack);
    res.status(500).json({
      status: 'error',
      message: 'An unexpected error occurred',
    });
  }
};