import { RequestHandler } from 'express';

import { errors } from '@shared/utils/app-errors';
import catchAsync from '@shared/utils/catch-async';

import { Logger } from '@shared/helpers/classes/logger.class';

export const login: RequestHandler = catchAsync(async (req, res) => {
  // Get user credentials from request body
  const { email, password } = req.body;

  // Validate user credentials
  if (!email || !password) {
    throw errors.invalid_credentials();
  }

  // Simulate user password validation
  if (password !== 'password123' && email !== 'mail@test.com') {
    throw errors.invalid_credentials();
  }

  // Simulate user authentication (replace with actual authentication logic)
  const user = { id: 1, email, name: 'juan' }; // Mock user object

  return res.status(200).json({
    message: 'Login successful',
    user,
  });
});

export const forgotPassword: RequestHandler = catchAsync(async (req, res) => {
  // Get email from request body

  const { email } = req.body;

  // Validate email

  if (!email) {
    throw errors.params(['email']);
  }

  // Simulate sending a password reset email
  Logger.info(`Password reset email sent to ${email}`);

  return res.status(200).json({
    message: 'Password reset email sent successfully',
  });
});

export const resetPassword: RequestHandler = catchAsync(async (req, res) => {
  // Get new password and token from request body
  const { newPassword, token } = req.body;

  // Validate new password and token
  if (!newPassword || !token) {
    throw errors.params(['newPassword', 'token']);
  }

  // Simulate password reset logic (replace with actual logic)
  Logger.info(`Password reset for token ${token} with new password`);

  // Simulate API Error
  throw errors.badRequest('This is a simulated API error for testing purposes.');
});
