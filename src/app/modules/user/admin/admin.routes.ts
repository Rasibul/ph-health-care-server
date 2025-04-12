import express from 'express';
import { adminController } from './admin.controller';


const router = express.Router();


router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getAdminById);

export const adminRoutes = router;