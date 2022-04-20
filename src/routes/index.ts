import { default as userRoutes } from './user.routes';
import { default as authRoutes } from './auth.routes';
import { Express } from 'express';

export default (app: Express) => {
    app.use('/api/users', userRoutes);
    app.use('/api/auth', authRoutes);
}  