import express from 'express';
import { downloadRapport,getRapportText,getAllRapports} from '../controllers/rapportController.js';
const router = express.Router();
router.get('/download', downloadRapport);
router.get('/text', getRapportText);
router.get('/', getAllRapports);
export default router;
