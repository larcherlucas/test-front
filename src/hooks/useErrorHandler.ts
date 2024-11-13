// permet d'accéder à l'ErrorHandler dans les composants de l'application
import { inject } from 'vue';
import { ErrorHandler } from '@/services/error/ErrorHandler';

export function useErrorHandler() {
  const errorHandler = inject<ErrorHandler>('errorHandler');

  if (!errorHandler) {
    throw new Error('ErrorHandler not provided');
  }

  return {
    handleError: errorHandler.handleError.bind(errorHandler),
  };
}
