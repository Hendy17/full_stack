import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import tasksRouter from './routes/tasks';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
