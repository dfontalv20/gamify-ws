import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import groupRoutes from './group.routes';
import { Router } from 'express';
import rewardRouter from './reward.routes';
import prizeRouter from './prize.routes';
import companyRouter from './company.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/groups', groupRoutes);
router.use('/rewards', rewardRouter);
router.use('/prizes', prizeRouter);
router.use('/companies', companyRouter);

export default router;