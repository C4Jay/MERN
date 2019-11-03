const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { usedNewUrlParser: true, useCreateIndex: true } 
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB connection done");
})




const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRoutes);


app.listen(port, () => {
    console.log('server is running');
});

