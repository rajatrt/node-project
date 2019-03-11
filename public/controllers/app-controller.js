var data = [{item:'Milk'},{item:'Butter'},{item:'Apple'}]

var bodyParser = require('body-parser')

module.exports = function(app){

    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.use(bodyParser.json())

    app.get('/todo',(req,res) => {
        res.render('todo.ejs',{data:data});
    })
    app.post('/todo',urlencodedParser,(req,res) => {
        data.push(req.body);
        res.json(data);
    })
    app.delete('/todo',(req,res) => {

    })

}