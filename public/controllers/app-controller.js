var bodyParser = require('body-parser')
var mongoose = require('mongoose');
/**
 * Coonect to  mongodb server 
 * currently using MLAB services for database.
 */
mongoose.connect('mongodb://test:test1234@ds163825.mlab.com:63825/todo-list', { useNewUrlParser: true })
var todoSchema = new mongoose.Schema({
    item :String
})
var Todo = mongoose.model('Todo',todoSchema);

module.exports = function(app){

    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.use(bodyParser.json())

    app.get('/todo',(req,res) => {
        Todo.find({}, (err,data) => {
            if(err) throw err;
            res.render('todo.ejs',{data:data});
        })
    })
    app.post('/todo',urlencodedParser,(req,res) => {
        var newTodo = Todo(req.body).save(function(err,data) {
            if(err) throw err;
            res.json(data);
        })
    })
    app.delete('/todo/:item',(req,res) => {
        let val = req.params.item;
        Todo.find({item:val}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        })
    })
}