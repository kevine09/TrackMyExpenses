import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './models'; // Import de Sequelize pour la synchronisation
import utilisateurRoutes from './routes/utilisateurRoute.js';
import roleRoutes from './routes/roleRoute.js';
import categorieRoutes from './routes/categorieRoute.js';
import depenseRoutes from './routes/depenseRoute.js';
import rapportRoutes from './routes/rapportRoute.js';
import budgetRoutes from './routes/budgetRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globaux
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/depenses', depenseRoutes);
app.use('/api/rapports', rapportRoutes);
app.use('/api/budgets', budgetRoutes);

// Synchronisation avec la base de données et démarrage du serveur
sequelize
  .sync()
  .then(() => {
    console.log('Base de données synchronisée avec succès');
    app.listen(PORT, () => {
      console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation de la base de données :', error);
  });
