import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routers';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('BOOM BOOM DASH DASH!');
});

export default app;
