# TrackMyExpenses

# Description
TrackerMyExpenses est une application de suivi financier personnel qui permet aux utilisateurs de gérer leurs dépenses de manière efficace. Elle offre des fonctionnalités pour catégoriser les dépenses, afficher des rapports financiers et gérer les budgets personnels.

# Fonctionnalités

- Authentification utilisateur (basée sur JWT)
- Opérations CRUD pour gérer les dépenses
- Filtrez les dépenses par catégorie et date
- Générez des rapports mensuels/hebdomadaires
- Exportez les données au format CSV ou PDF

# Stack technique

- Backend : Node.js, Express.js
- Base de données : MySQL avec Sequelize ORM
- Frontend : Vue.js (à venir)
- Authentification : JWT (JSON Web Token)

# Installation

1. Clonez le dépôt : 

``` bash
git clone: https://github.com/kevine09/TrackMyExpenses
cd TrackMyExpenses
```
2. Installez les dépendances :

``` bash
npm install

3. Configurez les variables d'environnement en créant un fichier .env dans le répertoire racine. Voici un exemple :

bash
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=votre_mot_de_passe
DATABASE_NAME=expensetracker
JWT_SECRET=votre_jeton_jwt_secret

4. Exécutez les migrations de base de données :

bash
npx sequelize db:migrate

5. Démarrez l'application :

bash
npm start

6. Accédez à l'application à l'adresse http://localhost:5000.

# Utilisation

- Créez un compte et connectez-vous.
- Ajoutez vos dépenses par catégorie (par exemple, Nourriture, Transport, Loisirs).
- Filtrrez vos dépenses par date ou catégorie pour analyser vos habitudes de dépense.
- Exportez vos données au format CSV ou PDF pour vos archives.

# Feuille de route

- [ ] Ajouter un frontend utilisant Vue.js
- [ ] Inclure des graphiques et des rapports visuels
- [ ] Ajouter des notifications pour les paiements en retard
- [ ] Implémenter la prise en charge de plusieurs devises

# Licence

Ce projet n'a pas de licence  
