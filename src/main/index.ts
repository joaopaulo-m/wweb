import express from 'express';
import 'dotenv/config'
import { router } from './routes/user';

const app = express();
app.use(express.json())
app.use('/api', router);


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))