// implemente une methhode pour nettoyer les entrées utilisateur et prévenir les failles XSS, pour valider la structure des objets, pour valider les données de formulaire, pour valider les paramètres de requête
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { SecurityService } from '@/services/security/SecurityService';
import { ErrorHandler } from '@/services/error/ErrorHandler';

export async function securityMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): Promise<void> {
  const security = SecurityService.getInstance();
  const errorHandler = ErrorHandler.getInstance();

  try {
    // Vérifier l'authentification si nécessaire
    if (to.meta.requiresAuth && !security.checkAuthentication()) {
      next({ name: 'login', query: { redirect: to.fullPath } });
      return;
    }

    // Valider les paramètres de route
    if (to.params) {
      Object.keys(to.params).forEach((key) => {
        const value = to.params[key];
        if (typeof value === 'string') {
          to.params[key] = security.validateInput(value);
        }
      });
    }

    next();
  } catch (error) {
    errorHandler.handleError(error as Error);
    next({ name: 'error' });
  }
}
