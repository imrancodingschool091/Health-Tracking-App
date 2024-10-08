import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRecordsRoutes from './routes/healthRecords.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/health-records', healthRecordsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.log(error));
