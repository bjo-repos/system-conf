import express from 'express';
import { Router, Request, Response, Application } from 'express';

const app: Application = express();
const router = Router();

const port: number = Number(process.env.PORT) || 3000;

router.get('/', function (req: Request, res: Response) {
  res.json({message: 'Welcome to System Conf API'});
})

router.get('/users', function (req: Request, res: Response) {
  res.json({message: 'Users API'});
})

// all routes will be prefixed with /api
app.use('/api', router);

// Start server here, linteining on port 3000
app.listen(port, function () {
  console.log(`Listening @ at http://localhost:${port}/api `);
})
