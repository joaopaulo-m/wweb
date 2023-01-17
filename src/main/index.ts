import express from 'express';
import 'dotenv/config'
import userRoutes from './routes/user';

const app = express();
app.use(express.json())
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))