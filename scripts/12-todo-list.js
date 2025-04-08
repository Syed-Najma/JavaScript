const todoList =[{
  name:'make dinner',
  duedate:'26-3-2025'
},
{
  name:'wash dishes',
  duedate:'26-3-2025'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML ='';
//use of forEach
  todoList.forEach(function(todoObject, index){
    const {name,duedate} = todoObject;
    //generating html
    const html = `
  
    <div>
      ${name}
    </div>
    <div>
     ${duedate}
    </div>
    <button class="delete-button" onclick="
      todoList.splice(${index},1);
      renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html;
  });

  //using forEach instead of for loop

  // for(let i = 0; i< todoList.length; i++){
  //   const todoObject = todoList[i];
  //  // const name = todoObject.name;
  //  // const duedate = todoObject.duedate;
  //  const {name,duedate} = todoObject;
  //   //generating html
  //   const html = `
  
  //   <div>
  //     ${name}
  //   </div>
  //   <div>
  //    ${duedate}
  //   </div>
  //   <button class="delete-button" onclick="
  //     todoList.splice(${i},1);
  //     renderTodoList();
  //   ">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function Addtodo(){
  const inputElement = document.querySelector('.todotext');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const duedate = dateInputElement.value;

  todoList.push({
    //name:name,
    //duedate:duedate
    name,
    duedate
  });
  
  inputElement.value ='';
  renderTodoList();
}