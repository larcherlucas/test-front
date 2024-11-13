# Structure du Projet Vue 3

Ce document décrit la structure et l'organisation du projet.

## Structure des Dossiers
A savoir que nous utilisons ici la version airbnb d'Eslint.

### script npm
**dev**
Lance le serveur de développement avec Vite, permettant de voir en direct les changements dans le navigateur. C'est la commande principale pour travailler sur le projet en mode développement.

**build** Exécute les tâches type-checketbuild-onlyen parallèle grâce àrun-p, une commande de npm-run-all`. Elle vérifie les types TypeScript puis génère la version optimisée de production du projet.

**preview**
Lance un serveur pour prévisualiser le build de production. C'est utile pour tester comment ton application fonctionnera en production sans la déployer.

**build-only**
Effectue uniquement la construction du projet en production, sans vérification de type. Ce script utilise Vite pour compiler et optimiser les fichiers pour un déploiement.

**type-check**
Effectue une vérification des types dans tout le projet à l'aide de vue-tsc, l'outil TypeScript pour les projets Vue. Le flag --force` s'assure que tous les fichiers sont vérifiés, même s'ils ont déjà été compilés.

**format**
Utilise Prettier pour formater tout le code source dans le dossier src/`. Cela améliore la lisibilité et la cohérence du code en appliquant les règles de style définies pour le projet.

### `/src`
Le dossier principal contenant tout le code source de l'application.

### `/src/assets`
Contient les ressources statiques (images, fonts, etc.).

### `/src/components`
Composants Vue réutilisables. Ici tu trouvera toutes les blocs de code indépendants et modulaires, créés pour être utilisés plusieurs fois dans différentes parties du code. (DRY respectera tu :p )
- **common** : Composants génériques réutilisables (ex. Button ...)
- **features** : Composants spécifiques aux fonctionnalités (ex. UserProfile)
- **icons**

### `/src/composables`
Fonctions réutilisables. Ces fonctions encapsulent de la logique partagée, qu’on peut réutiliser dans plusieurs composants de l’application. Le but est de séparer la logique métier du code d’interface pour une meilleure organisation et une maintenance simplifiée. Dans l'exemple tu trouvera : 
- **changeLocale** : Modifie la langue de l’application et sauvegarde la sélection dans localStorage pour la persistance entre les sessions.
- **initLocale** : Initialise la langue à partir de la valeur sauvegardée dans localStorage (si elle existe).
- **t** : Fournit la fonction de traduction t de vue-i18n pour traduire les contenus en fonction de la langue sélectionnée.


### `/src/hooks`
Hooks personnalisés Vue pour la réutilisation de la logique.
- `useErrorHandler.ts` : Hook pour la gestion des erreurs.
- `useLogger.ts` : Hook pour la journalisation.

### `/src/plugins`
Ce dossier sert à intégrer et configurer des fonctionnalités globales (comme Axios, gestion des erreurs et internationalisation) sans polluer le code. 
- `errorHandler.ts` : Configuration de la gestion globale des erreurs.
- `axios.ts` : Configuration d'un HttpClient
- `i18n.ts` : Configuration de l'internationalisation

### `/src/router`
Configuration du routeur Vue.
- `index.ts` : Configuration principale des routes.
- `/middleware` : Middlewares de navigation.
  - `security.ts` : Middleware pour la sécurité et l'authentification.
  - 
### `/src/services`
Services réutilisables.
- `/error` : Service de gestion des erreurs.
- `/logger` : Service de journalisation.
- `/security` : Service de sécurité.
  

### `/src/stores`
Stores Pinia pour la gestion de l'état.
- `index.ts` : Configuration Pinia.
- `user.ts` : Store pour la gestion des utilisateurs.

### `/src/styles`
Styles SCSS globaux.
- `_variables.scss` : Variables SCSS.
- `_mixins.scss` : Mixins SCSS.
- `_reset.scss` : Reset CSS.
- `main.scss` : Point d'entrée des styles.

### `/src/types`
Types TypeScript.
- `index.ts` : Types globaux.

### `/src/utils`
Utilitaires et helpers.
- `constants.ts` : Constantes de l'application.
- `helpers.ts` : Fonctions utilitaires.

### `/src/views`
Composants de pages.
- `HomeView.vue` : Page d'accueil.
- `SecondView.vue` : Seconde page.

## Fichiers Racine

### Configuration
- `.eslintrc.cjs` : Configuration ESLint.
- `.prettierrc.json` : Configuration Prettier.
- `tsconfig.json` : Configuration TypeScript.
- `vite.config.ts` : Configuration Vite.
- `package.json` : Dépendances et scripts.

### Application
- `App.vue` : Composant racine.
- `main.ts` : Point d'entrée de l'application.
- `index.html` : Page HTML principale.

## Utilisation

Pour utiliser cette base de projet :

1. Clonez le repository
2. Installez les dépendances : `npm install` / conseil utilisation `pnpm i`
3. Lancez le serveur de développement : `npm run dev`
4. Pour la production : `npm run build`

## Conventions

- Utilisez des composants monofichiers (`.vue`)
- Suivez les conventions de nommage :
  - PascalCase pour les composants
  - camelCase pour les fichiers JS/TS
  - kebab-case pour les noms de dossiers
- Utilisez TypeScript
- Suivez les règles ESLint et Prettier configurées