const todolist = () => {

    //Selectors
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');

    //Event Listeners
    todoButton.addEventListener('click', addTodo);


    //Functions
    function addTodo(event) {
        //prevent form from submitting
        event.preventDefault()
        //to do <div>
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create <li>
        const newTodo = document.createElement('li');
        newTodo.innerHTML = 'hello';
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
    }
}

module.exports = todolist;
