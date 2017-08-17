const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');


// below is the object with the todo list -original list items
const todos = [ {text: "Catch the dog", complete: false}, {text:"Wrestle the dog", complete: false}, {text: "Bathe the dog", complete:false}, {text: "Appologize to the dog", complete:false}, {text: "Give dog treat", complete: false}, {text: "Watch dog play in mud", complete:false}];
//above is todo list array with strings.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// uses the bodyparser on any of the above mentioned
//uses url to parse a form
//this defines req.body.todoInput from below so can be used

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
//css in public.


app.get("/", function (req, res) {
  console.log(todos.complete);
  res.render('index', { todos: todos });
});
// main landing page

app.post("/", function (req, res) {
  todos.push({"text":req.body.todoInput, "complete":false});
  res.redirect('/');
})
// above is post function to add list items

app.post("/change/:text", function (req, res){
  for(i =0; i <todos.length; i++) {
    if(req.body.completeButton === todos[i].text){
      todos[i].complete = true;
    }
  }

  res.redirect('/');
})



app.listen(3000, function () {
  console.log('Successfully started express application!');
})
// above assings listener to port 3000 i.e. localhost:3000
