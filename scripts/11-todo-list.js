const todoList =['make dinner','wash clothes '];

renderTodoList();

function renderTodoList(){
  let todoListHTML ='';

  for(let i = 0; i< todoList.length; i++){
    const todo = todoList[i];
    //generating html
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function Addtodo(){
  const todo = document.querySelector('.todotext');
  const inputElement =todo.value;
  todoList.push(inputElement);
  console.log(todoList);
  inputElement.value ='';
  renderTodoList();
}