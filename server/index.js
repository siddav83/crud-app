const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDatabase'
});

app.use(cors)
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res) => {

    // const movieName = req.body.movieName
    // const movieReview = req.body.movieReview
 
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Jaws','great movie');"
    db.query(sqlInsert,(err,result)=> {
        res.send("hello and sent")})
    
})

app.listen(3001, () => (console.log(`listening on port 3001`)))