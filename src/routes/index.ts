import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import groupRoutes from './group.routes';
import { Router } from 'express';
import rewardRouter from './reward.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/groups', groupRoutes);
router.use('/rewards', rewardRouter)

export default router;