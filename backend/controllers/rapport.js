import{rapport} from '../models/rapport.js';

// fonction pour telecharger le rapport en format pdf
export const downloadRapport = (req, res) => {
  const date = new Date();
  const fileName = `Rapport_${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.pdf`;
  res.download(`./rapports/${fileName}`, fileName, (error) => {
    if (error) {
      res.status(500).json({ message: 'Le fichier n\'a pas pu être téléchargé' });
    }
  });
};
// fonction pour obtenir un rapport en format texte
export const getRapportText = (req, res) => {
  const date = new Date();
  const rapportText = `Rapport du ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  res.status(200).send(rapportText);
};

// fonction pour obtenir tous les rapports par ordre décroissant de date
export const getAllRapports = (req, res) => {
  rapport
    .findAll({ order: [['date', 'DESC']] })
    .then((rapports) => {
      res.status(200).json(rapports);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
