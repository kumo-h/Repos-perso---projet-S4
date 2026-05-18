# 🧠 BrainApp — Plateforme de Jeux Cognitifs Modulaires

Bienvenue sur le dépôt de **BrainApp**, une application web interactive conçue pour croiser le développement logiciel et les neurosciences. Ce projet a été réalisé dans le cadre de la formation **Peip2 à Polytech Tours**.

## 🚀 Liens utiles
* **Version en ligne (GitHub Pages) :** [Accéder à l'application](https://kumo-h.github.io/Projet_S4_BrainApp/)
* **Dépôt Source :** [https://github.com/kumo-h/Projet_S4_BrainApp](https://github.com/kumo-h/Projet_S4_BrainApp)

---

## 📋 Présentation du projet
BrainApp propose des mini-jeux courts et progressifs permettant à l'utilisateur de stimuler ses fonctions cognitives fondamentales, en particulier la mémoire et l'attention. 

L'exigence principale de ce projet est la **modularité** : l'architecture sépare le conteneur principal (le Shell) et les modules de jeux indépendants afin de pouvoir enrichir le catalogue facilement.

---

## 🛠️ Stack Technique
* **Framework Front-end :** React.js (Approche par composants réutilisables)
* **Outil de Build :** Vite (Environnement moderne et léger)
* **Langages :** HTML5 / CSS3 / JavaScript
* **Déploiement Continu (CI/CD) :** GitHub Actions (Workflow automatisé)

---

## 🎮 Fonctionnalités du module Memory (V1)
L'application intègre une implémentation complète du jeu Memory, structurée autour des fonctionnalités suivantes :

* **Système de progression par Niveaux :** 4 modes de difficulté (Facile, Moyen, Difficile, Expert) avec variation du nombre de paires et de colonnes d'affichage.
* **Contrainte de gameplay :** Un nombre maximal de coups est alloué pour chaque niveau (Détection automatique de victoire ou de défaite).
* **Logique et Algorithmique :** * Mélange aléatoire des cartes à chaque initialisation (`shuffleArray`).
  * Système anti-triche par verrouillage temporaire du plateau (`isLocked`) lors de la comparaison des paires.
* **Interface et Statistiques :** Suivi en temps réel du niveau actuel, du nombre de paires, des coups joués et des coups restants.

---

## 👥 L'Équipe
* **Tendry Arondriaka MANAMBITSOA**
* **Inès LEBOUC--DHOMMEE**

*Sous la supervision de notre encadrant : **Yannick KERGOSIEN** (Polytech Tours).*