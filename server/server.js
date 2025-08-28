const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

console.log('Environment variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-app';
const PORT = process.env.PORT || 5500;

//mongodb
mongoose.connect(MONGODB_URI)

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:' , err));

//Routes
app.use('/api/todos', require('./routes/todos'));

//basic route
app.get('/', (req, res) => {
    res.json({message: 'Todo API is running'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});