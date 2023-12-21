let todoList = [
  {
    item: 'Find a Girlfiend if not then a whore', 
    dueDate: '31/12/2024'
  },
  {
    item: 'Loose your virginity ',
     dueDate: '31/12/2024'
  }
  ];
displayItems();


function addToDo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();

}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  
  for(let i=0; i < todoList.length; i++){
    let {item, dueDate} = todoList[i];
    newHtml +=`
    <div>
    <span id="op">${item}</span>
    <span id="op1">${dueDate}</span>
    <button id="op3" onclick="todoList.splice(${i}, 1);
    displayItems();
    ">Delete</button>  
    </div>
    `;
    
  }
  containerElement.innerHTML= newHtml;
  
  
}