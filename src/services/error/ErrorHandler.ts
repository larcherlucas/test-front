//étend la classe Error avec des informations supplémentaires sur l'erreur. 

import Logger from '../logger/Logger';

export class CustomError extends Error {
  constructor(
    message: string,
    public code: string,
    public severity: 'low' | 'medium' | 'high' | 'critical',
    public context?: Record<string, unknown>,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class ErrorHandler {
  private static instance: ErrorHandler;

  private readonly logger: Logger;

  private constructor() {
    this.logger = Logger.getInstance();
  }

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public handleError(error: Error | CustomError): void {
    if (error instanceof CustomError) {
      this.logger.error({
        message: error.message,
        code: error.code,
        severity: error.severity,
        context: error.context,
        stack: error.stack,
      });

      // Gérer différemment selon la sévérité
      if (error.severity === 'critical') {
        // Notifier les admins, rediriger vers page d'erreur, etc.
      }
    } else {
      this.logger.error({
        message: error.message,
        stack: error.stack,
        severity: 'medium',
      });
    }
  }
}
