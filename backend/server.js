import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/config.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors'
import bodyParser from 'body-parser';
import SubmitForm from './routes/submitForm.js' ;
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

dotenv.config();



const app = express();
const PORT = process.env.PORT || 5454;

connectDB();
app.use(cors());
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.use("/api/v1/form",SubmitForm)


app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})