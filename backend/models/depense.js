'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Depense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Depense.belongsTo(models.Utilisateur, { foreignKey: 'utilisateurId', as: 'utilisateur' });
  Depense.belongsTo(models.Categorie, { foreignKey: 'categorieId', as: 'categorie' });
    }
  }
  Depense.init({
    montant: DataTypes.FLOAT,
    categorieId: DataTypes.INTEGER,
    utilisateurId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Depense',
  });
  return Depense;
};