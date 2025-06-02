import { Router, json, urlencoded } from 'express';

// Importing middlewares
import compression from 'compression';
import helmet from 'helmet';

const router = Router();

// Set security HTTP Headers
router.use(helmet({ contentSecurityPolicy: false, xssFilter: true }));

// Set json bundle reader
router.use(json({ limit: '3mb' }));
router.use(urlencoded({ extended: true, limit: '3mb' }));

export default router;
