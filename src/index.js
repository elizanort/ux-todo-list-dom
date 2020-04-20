
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
    let h1 = document.createElement("h1");
    let toDoList = document.createElement("form");

    h1.innerText = "Todo List";

    for (let tasks of todos){
        let isChecked = task.completed ? "checked" : null;
        let html = `
        <ul>
            <li>
            <input type="checkbox" ${isChecked}> 
            <label> ${tasks.description} </label>
            </li>
        </ul>
        `;
    
    toDoList.innerHTML += html;
    }

    app.appendChild(h1);
    app.appendChild(toDoList);
}
renderTodoApp();