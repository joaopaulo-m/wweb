import express from 'express';
import 'dotenv/config'
import userRoutes from './routes/user';
import sessionRoutes from './routes/session'

const app = express();
app.use(express.json())
app.use('/api/users', userRoutes);
app.use('/api/sessions/', sessionRoutes)


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))