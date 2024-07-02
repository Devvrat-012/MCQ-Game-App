const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin:"https://mcq-game-app-frontend.vercel.app",
  }));

app.use(express.json());

app.get('/', (req, res)=>{
    res.json('Hello')
  })

app.use('/api/questions', questionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
