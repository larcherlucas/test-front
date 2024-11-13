// permet de récupérer le logger dans un composant
import { inject } from 'vue';
import { Logger } from '@/services/logger/Logger';

export function useLogger() {
  const logger = inject<Logger>('logger');

  if (!logger) {
    throw new Error('Logger not provided');
  }

  return {
    debug: logger.debug.bind(logger),
    info: logger.info.bind(logger),
    warn: logger.warn.bind(logger),
    error: logger.error.bind(logger),
    getLogs: logger.getLogs.bind(logger),
  };
}
