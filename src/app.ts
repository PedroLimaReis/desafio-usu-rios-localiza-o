import express from 'express';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import regionRoutes from './routes/regionRoutes';

const app  = express();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', regionRoutes);

export default app;