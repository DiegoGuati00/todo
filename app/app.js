const express = require('express');
const { sequelize } = require('./utils/db');

//mmodels
const { toDo } = require('./models/todo.model');

//routes
const { toDoRoute } = require('./routes/toDo.route')

const app = express();
app.use(express.json());

app.use('/', toDoRoute);

sequelize
    .authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((err) => console.log(err));

sequelize
    .sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

app.listen(4000, () => {
    console.log('Express app running');
});