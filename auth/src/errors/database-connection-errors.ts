import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = 'error connection to database';
  statusCode = 500;
  constructor() {
    super('error connection to database');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
