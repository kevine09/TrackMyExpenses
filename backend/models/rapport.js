'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rapport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rapport.belongsTo(models.Utilisateur, { foreignKey: 'utilisateurId', as: 'utilisateur' });

    }
  }
  Rapport.init({
    titre: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    contenu: DataTypes.JSON,
    utilisateurId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rapport',
  });
  return Rapport;
};