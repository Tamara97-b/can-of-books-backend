'use strict'

const express=require('express');
const app=express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors=require('cors');
app.use(cors());
'use strict'

const express=require('express');
const app=express()
const mongoose = require('mongoose');
require('dotenv').config();
const cors=require('cors');

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL;
const DB_NAME=process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const bookSeed = require('./helpers/bookSeed.helpers');
// bookSeed();

const {getbook, createBook, deleteBook}=require('./controllers/books.controller');
app.get('/books',getbook)

app.post('/books', createBook);
app.delete('/books/:Book_id', deleteBook);

app.listen(PORT,()=>{
 console.log(`server here${PORT}`)
}
)

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL;
const DB_NAME=process.env.DB_NAME;

mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

const bookSeed=require('./helpers/bookSeed.helpers');
// bookSeed();

const {getbook}=require('./controllers/books.controller');
app.get('/books',getbook)

app.listen(PORT,()=>{
 console.log(`server here${PORT}`)
}
)