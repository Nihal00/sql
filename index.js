const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
})

db.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log("DB Connected!");
    }
});

//POST => create a todos
app.post('/todo', (req, res) => {

    const {title, isCompleted, username} = req.body;
    const date = new Date();
    const finalDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    let query = `INSERT INTO todos(title, is_comleted, username, data) values('${title}', ${isCompleted}, '${username}', '${finalDate}' )`;

    db.query(query, (err, result) => {
        if(err) throw err;
        res.status(201).send({
            status: 201,
            message: "Todos created successfully!",
            data: result
        });
    });

});

// GET => get all todos for a username
app.get('/todos/:username', (req, res) => {
    const username = req.params.username;

    let query = `SELECT * FROM todos WHERE username='${username}'`;

    db.query(query, (err, result) => {
        if(err) throw err;
        res.status(200).send({
            status: 200,
            message: 'All Todos fetched successfully! for username',
            data: result
        });
    })
});


//DELETE a todo
app.delete("/todo/:id", (req, res)=>{
    const todoId = req.params.id;

    let query = `DELETE FROM todos WHERE id=${todoId}`;

    db.query(query, (err, result) => {
        if(err) throw err;
        res.status(200).send({
            status: 200,
            message: "Deleted Successfully!",
            data: result
        })
    })
})

//PUT => Update a todo
app.put('/todo', (req, res) => {
    const {id, title, isCompleted} = req.body;

    let query = `UPDATE todos SET title='${title}', is_comleted=${isCompleted} where id=${id}`;

    db.query(query, (err, result) => {
        if(err) throw err;
        res.status(200).send({
            status: 200,
            message: "Updated Successfully!",
            data: result
        })
    })
});


app.listen(PORT, () => {
    console.log('Sever is running at port: ', PORT);
})