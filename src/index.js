
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];
 

function renderTodoApp() {
    let app = document.querySelector("#app");

    let toDoItems = "";

    for (let tasks of todos){
        let isChecked = todos.completed ? "checked" : "";
        toDoItems += `
            <li>
            <input type="checkbox" class="list-item" ${isChecked}> 
            <label> ${tasks.description} </label>
            </li>
        `;
    }
    
    app.innerHTML = 
    `<ul class = "list-items"> ${toDoItems} </ul>`

    
}
renderTodoApp();

function addToDo(){
    let input = document.getElementById("form-input").value;
    let newObj = {completed:false, description: input};
    todo = todos.unshift(newObj);

    renderTodoApp();
}