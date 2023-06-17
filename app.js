document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const todoText = todoInput.value;
      if (todoText.trim() !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    });
  
    function createTodoItem(todoText) {
      const todoItem = document.createElement('li');
      const todoTextSpan = document.createElement('span');
      todoTextSpan.innerText = todoText;
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function() {
        todoItem.remove();
      });
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(deleteButton);
      todoItem.addEventListener('click', function() {
        todoTextSpan.classList.toggle('completed');
      });
      return todoItem;
    }
  });
  