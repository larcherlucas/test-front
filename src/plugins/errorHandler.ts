//gère les erreurs dans l'application.
//Elle utilise le service ErrorHandler pour gérer les erreurs.
import type { App } from 'vue';
import { ErrorHandler } from '@/services/error/ErrorHandler';
import Logger from '@/services/logger/Logger';

export default {
  install: (app: App): void => {
    const errorHandler = ErrorHandler.getInstance();
    const logger = Logger.getInstance();

    // Gestionnaire d'erreurs global Vue
    app.config.errorHandler = (error, instance, info) => {
      errorHandler.handleError(error as Error);
      logger.error({
        message: (error as Error).message,
        context: {
          componentName: instance?.$options.name,
          errorInfo: info,
        },
      });
    };

    // Gestionnaire d'erreurs non capturées
    window.addEventListener('unhandledrejection', (event) => {
      errorHandler.handleError(event.reason);
    });

    window.addEventListener('error', (event) => {
      errorHandler.handleError(event.error);
    });

    // Ajouter à l'instance Vue
    app.provide('errorHandler', errorHandler);
    app.provide('logger', logger);
  },
};
