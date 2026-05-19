import express from 'express';
import { getI18nByLocale } from '../controllers/i18nController.js';

const router = express.Router();

router.get('/:locale', getI18nByLocale);

export default router;
