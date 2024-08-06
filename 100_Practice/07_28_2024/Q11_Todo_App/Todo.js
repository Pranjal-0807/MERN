let todoList = [
    {
        item : 'Buy Milk',
        date : '7/10/2024'
    },
    {
        item : 'Go to College',
        date : '7/10/2024'
    }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");

  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;

  let todoDate = dateElement.value;

  todoList.push({item : todoItem, date : todoDate});

  inputElement.value = '';
  todoDate.value = '';

  displayItems();
}


function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {

    let {item , date} = todoList[i];
    
    newHtml += `
        <span>${item}</span>
        <span>${date}</span>
        <button class="todo-delete-btn" onclick = "todoList.splice(${i},1);
        displayItems();">Delete</button>
        
    `;
  }
  containerElement.innerHTML = newHtml;
}