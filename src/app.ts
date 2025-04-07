import express from 'express';
import cors from 'cors';

const app: express.Application = express();
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Ph Health Care  Sever Is Running!');
});


export default app;
