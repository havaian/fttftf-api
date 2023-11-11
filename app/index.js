const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/questions', questionRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`✅ API http://localhost:${port}`);
});
