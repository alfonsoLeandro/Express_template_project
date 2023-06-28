import { Router } from 'express';
import { test } from '../controllers/test.controller';
import jwtValidator from '../middlewares/jwt-validator';

const router = Router();

router.get('/', test);
router.get('/jwt', [jwtValidator], test);

export default router;