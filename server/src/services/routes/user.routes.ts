// Dependencies
import { Router } from 'express';

// Controllers
import { forgotPassword, login, resetPassword } from '../controllers';

const router = Router();

router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
