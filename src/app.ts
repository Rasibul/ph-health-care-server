import express from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.routes';
import { adminRoutes } from './app/modules/user/admin/admin.routes';

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Ph Health Care  Sever Is Running!');
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

export default app;
