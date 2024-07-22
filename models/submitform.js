// models/formModel.js
import mongoose from 'mongoose';
import moment from 'moment';

const submitForm = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'Invalid email format',
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: (phone) => {
        return /^\d{10}$/.test(phone); // Adjust the regex based on your phone number format
      },
      message: 'Invalid phone number format',
    },
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  area: {
    type: String,
    required: true,
    trim: true,
  },
  file:{
    type:String,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    default: moment().format('DD/MM/YYYY'),
  },
  time: {
    type: String,
    default: moment().format('h:mm a'),
  },
}, { timestamps: true });

export const SubmitForm = mongoose.model('submitForm', submitForm);
