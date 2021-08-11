import dotenv from 'dotenv';

// eslint-disable-next-line no-unused-expressions
dotenv.config().parsed;

// eslint-disable-next-line import/prefer-default-export
export const SENTRY_SERVER_URL = String(
  process.env.REACT_APP_SENTRY_SERVER_URL,
);
