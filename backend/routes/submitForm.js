// routes.js
import express from 'express';
import { deleteForm, getForms, getFormsById, submitForm } from '../controller/submitform.js';

const router = express.Router();

router
.post('/user-form-submit', submitForm)
.get('/user-forms',  getForms)
.delete('/delete-user/:id',  deleteForm)
.get('/get-form/:id',  getFormsById)


export default router;