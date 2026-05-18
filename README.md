# 🧠 BrainApp — Plateforme de Jeux Cognitifs Modulaires

Bienvenue sur le dépôt de **BrainApp**, une application web interactive conçue pour croiser le développement logiciel et les neurosciences. [cite_start]Ce projet a été réalisé dans le cadre de la formation **Peip2 à Polytech Tours**[cite: 264].

## 🚀 Liens utiles
* **Version en ligne (GitHub Pages) :** [Accéder à l'application](https://kumo-h.github.io/Projet_S4_BrainApp/)
* **Dépôt Source :** [https://github.com/kumo-h/Projet_S4_BrainApp](https://github.com/kumo-h/Projet_S4_BrainApp)

---

## 📋 Présentation du projet
[cite_start]BrainApp propose des mini-jeux courts et progressifs permettant à l'utilisateur de stimuler ses fonctions cognitives fondamentales, en particulier la mémoire et l'attention[cite: 265]. 

[cite_start]L'exigence principale de ce projet est la **modularité** : l'architecture sépare le conteneur principal (le Shell) et les modules de jeux indépendants afin de pouvoir enrichir le catalogue facilement[cite: 416, 419].

---

## 🛠️ Stack Technique
* [cite_start]**Framework Front-end :** React.js (Approche par composants réutilisables) [cite: 436]
* [cite_start]**Outil de Build :** Vite (Environnement moderne et léger) [cite: 436]
* [cite_start]**Langages :** HTML5 / CSS3 / JavaScript [cite: 436]
* **Déploiement Continu (CI/CD) :** GitHub Actions (Workflow automatisé)

---

## 🎮 Fonctionnalités du module Memory (V1)
[cite_start]L'application intègre une implémentation complète du jeu Memory, structurée autour des fonctionnalités suivantes[cite: 417, 515]:

* [cite_start]**Système de progression par Niveaux :** 4 modes de difficulté (Facile, Moyen, Difficile, Expert) avec variation du nombre de paires et de colonnes d'affichage[cite: 22].
* [cite_start]**Contrainte de gameplay :** Un nombre maximal de coups est alloué pour chaque niveau (Détection automatique de victoire ou de défaite)[cite: 114, 126].
* [cite_start]**Logique et Algorithmique :** * Mélange aléatoire des cartes à chaque initialisation (`shuffleArray`)[cite: 520].
  * [cite_start]Système anti-triche par verrouillage temporaire du plateau (`isLocked`) lors de la comparaison des paires[cite: 91, 121].
* [cite_start]**Interface et Statistiques :** Suivi en temps réel du niveau actuel, du nombre de paires, des coups joués et des coups restants.

---

## 👥 L'Équipe
* **Tendry Arondriaka MANAMBITSOA**
* **Inès LEBOUC--DHOMMEE**

*Sous la supervision de notre encadrant : **Yannick KERGOSIEN** (Polytech Tours).*