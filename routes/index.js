import {Router} from 'express';
import {memberShipController} from '../controller/mainController.js'
const router = Router();

router.post('/mail',memberShipController);
export default router;