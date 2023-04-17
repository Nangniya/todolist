const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let db;
MongoClient.connect('mongodb+srv://apinksky00:<password>@cluster0.ucdd5er.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
   if (에러) return console.log(에러)
   db = client.db('mytodo');
   app.listen(8080, function() {
    console.log('listening on 8080')
   })
 })
app.get('/', function(요청, 응답){
    응답.render('todo.ejs');
}) 
app.post('/add', function(요청, 응답){
    db.collection('todolist').insertOne({ 할일 : 요청.body.task }, function(에러, 결과){
        console.log(결과);
    })
    응답.redirect('/');
})
