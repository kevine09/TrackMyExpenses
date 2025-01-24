'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Utilisateur.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
      Utilisateur.hasMany(models.Depense, { foreignKey: 'utilisateurId', as: 'depenses' });
      Utilisateur.hasMany(models.Budget, { foreignKey: 'utilisateurId', as: 'budgets' });
      Utilisateur.hasMany(models.Rapport, { foreignKey: 'utilisateurId', as: 'rapports' });
    }
  }
  Utilisateur.init({
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    mot_de_passe: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Utilisateur',
  });
  return Utilisateur;
};