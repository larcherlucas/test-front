# test-front-formulaire

Ce projet est une application Vue.js qui gère un formulaire d'inscription avec validation en temps réel. Les validations sont effectuées via des expressions régulières, et le projet utilise Vitest pour les tests unitaires.

# Table des Matières

Prérequis
Installation
Lancer le Projet
Tests
Améliorations pour V2

# Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16 ou supérieure recommandée)
npm (inclus avec Node.js)

# Installation

- Clonez le dépôt
- Installez les dépendances, conseil utilisez pnpm

# Lancer le Projet

npm run dev ou utilisation des scripts NPM

- Pour construire le projet pour la production : npm run build

# Test

Lancez tous les tests définis dans le répertoire __tests__ : npm test

- Les tests utilisent Vitest avec une configuration définie dans vitest.config.ts. Assurez-vous que ce fichier est correctement configuré pour votre environnement de développement.

# Améliorations pour V2

Voici quelques idées pour améliorer le projet dans une future version (V2) :

1- Amélioration de l'UX/UI :

- Ajouter des animations ou des transitions pour rendre les interactions plus fluides.
- Réviser les styles pour s'assurer qu'ils sont cohérents avec les meilleures pratiques de design.

2- Validation Avancée :

- Intégrer une bibliothèque de validation pour des règles de validation plus robustes.

3- Internationalisation :

- Ajouter le support de plusieurs langues en utilisant des bibliothèques comme vue-i18n.

4- Amélioration des Performances :

- Analyser et optimiser les performances de l'application pour une meilleure réactivité.
