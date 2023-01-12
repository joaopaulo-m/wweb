import express from 'express';
import 'dotenv/config'

const app = express();
app.use(express.json())


const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))