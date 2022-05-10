const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const corsOptions = {
    origin: [
        "http://localhost:1232",
        "http://localhost:1231",
        "http://localhost:9000",
        "http://localhost:3000",
        "http://localhost:9999",
        "http://localhost:10000"
    ],
    optionsSuccessStatus: 200,
};

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "evazirve"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Zirve için veritabanı bağlantısı kuruldu");
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/route', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/login', (req, res) => {
    const data = req.body;

    if (data.email === "" || data.email === undefined || data.password === "" || data.password === undefined) {
        res.send({ message: "bruh" });
    } else {
        con.query("SELECT uuid FROM members WHERE email = ? && password = ?", [data.email, data.password], (err, result, fields) => {
            res.send({ message: "ok", id: result[0] });
        });
    }
});

app.post('/delete_account', (req, res) => {
    const data = req.body;

    if (data.id === "" || data.id === undefined) {
        res.send({ message: "bruh" });
    } else {
        con.query("DELETE FROM members WHERE uuid = ?", [data.id], (err, result, fields) => {
            res.send({ message: "ok" });
        });
    }
});

app.post('/account', (req, res) => {
    const data = req.body;

    if (data.id === "" || data.id === undefined) {
        res.send({ message: "bruh" });
    } else {
        con.query("SELECT uuid, name, surname, date FROM members WHERE uuid = ?", [data.id], (err, result, fields) => {
            res.send({ message: "ok", client: result[0] });
        });
    }
});

app.post('/register', (req, res) => {
    const data = req.body;

    if (data.name === "" || data.surname === "" || data.email === "" && data.date === "" || data.name === undefined || data.surname === undefined || data.email === undefined && data.date === undefined) {
        res.send({ message: "eksik" })
    } else {
        const uuid = uuidv4();

        let dates = "";
        data.date.forEach((item) => {
            dates += item.value + ",";
        });

        con.query(`INSERT INTO members (id, uuid, name, surname, email, password, phone, school, job, date) VALUES (NULL, "${uuid}", "${data.name}", "${data.surname}", "${data.email}", "${data.password}", "${data.number}", "${data.school}", "${data.job}", "${dates}");`);
        res.send({ message: "ok", id: uuid })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Sunucu :${process.env.PORT} için başlatıldı`)
})
