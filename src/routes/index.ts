import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import groupRoutes from './group.routes';
import { Router } from 'express';
import rewardRouter from './reward.routes';

const router = Router();

router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/groups', groupRoutes);
router.use('/api/rewards', rewardRouter)

export default router;