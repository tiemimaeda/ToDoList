// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();


// router.get('/', function(req, res) {
//     res.sendFile(path.join(`${__dirname}/index.html`))
// });

// app.use('/', router);
// app.listen(3000);


 //Selectors
 const todoInput = document.querySelector('.todo-input');
 const todoButton = document.querySelector('.todo-button');
 const todoList = document.querySelector('.todo-list');

 //Event Listeners
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);


 //Functions
 function addTodo(event) {
     //prevent form from submitting
     event.preventDefault()
     //to do <div>
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo');
     //create <li>
     const newTodo = document.createElement('li');
     newTodo.innerHTML = todoInput.value;
     newTodo.classList.add('todo-item')
     todoDiv.appendChild(newTodo)
     //check button
     const completedButton = document.createElement('button');
     completedButton.innerHTML = '<i class="fas fa-check"></i>';
     completedButton.classList.add('complete-btn');
     todoDiv.appendChild(completedButton);
     //delete button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add('delete-btn');
     todoDiv.appendChild(deleteButton);
     //append to list
     todoList.appendChild(todoDiv);
     //clear to do input value
     todoInput.value = '';
 }

 function deleteCheck(e) {
    const item = e.target;
    //delete to do
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
 }