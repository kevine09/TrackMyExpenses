import { Role } from '../models';

export const createRole = async (req, res) => {
  try {
    const { nom } = req.body;
    const role = await Role.create({ nom });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ajoutez d'autres méthodes si nécessaire
