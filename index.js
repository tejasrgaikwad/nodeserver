import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/UserRoutes.js'
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/admin', {user:'admin', pass:'password'});
const db = mongoose.connection;
db.on('error', (e)=> console.log(e));
db.once('open', ()=> console.log('db connected....'))

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(3001, ()=> console.log('Server is up and running...'));

