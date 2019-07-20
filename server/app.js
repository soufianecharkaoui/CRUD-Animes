const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://soufianecharkaoui:<NGRiUkfFWwTYSEcC>@cluster0-oxqgb.mongodb.net/test?retryWrites=true&w=majority');