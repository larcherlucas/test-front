//gère le journalisation des événements dans l'application
export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  stack?: string;
}

export default class Logger {
  private static instance: Logger;

  private readonly logs: LogEntry[] = [];

  private readonly maxLogs = 1000;

  private constructor() { }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(entry: Omit<LogEntry, 'timestamp'>): void {
    const logEntry: LogEntry = {
      ...entry,
      timestamp: new Date().toISOString(),
    };

    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // En développement, on affiche dans la console
    if (import.meta.env.DEV) {
      console[entry.level](entry.message, entry.context || '');
    }

    // En production, on peut envoyer à un service externe
    if (import.meta.env.PROD) {
      this.sendToExternalService(logEntry);
    }
  }

  private async sendToExternalService(entry: LogEntry): Promise<void> {
    // Implémenter l'envoi vers un service externe (Sentry, LogRocket, etc.)
    try {
      // await fetch('votre-endpoint-de-logging', {
      //   method: 'POST',
      //   body: JSON.stringify(entry)
      // });
    } catch (error) {
      console.error('Failed to send log to external service:', error);
    }
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'debug', message, context });
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'info', message, context });
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'warn', message, context });
  }

  error(message: string | Record<string, unknown>): void {
    if (typeof message === 'string') {
      this.log({ level: 'error', message });
    } else {
      this.log({
        level: 'error',
        message: message.message as string,
        context: message,
      });
    }
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }
}
