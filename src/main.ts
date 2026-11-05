import TodoEntry from "./TodoEntry.js";

const addButton: HTMLButtonElement | null =
    document.querySelector("#todoAddButton");

const inputTextField: HTMLInputElement | null =
    document.querySelector("#todoInputField");

const todoContainer: HTMLDivElement =
    document.querySelector("#todoContainer")!;

type Todo= {
    id: number;
    title: string;
    description?: string;
    isDone?: boolean;
};

let arrayOfTodos: TodoEntry[] = [];

if (addButton && inputTextField && todoContainer) {
    addButton.addEventListener("click", (e) => {
        arrayOfTodos.push( new TodoEntry(arrayOfTodos.length, inputTextField.value));
        //arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField.value });
        inputTextField.value = '';
        buildList();
    });
}

function buildList(){
    todoContainer.innerHTML = "";
    arrayOfTodos.forEach((element) => {
        todoContainer.innerHTML += element.render();
       // let container = document.createElement("div");
       //let title = document.createElement("h3");
       // let id = document.createElement("p");

       // title.textContent = "Tytuł: " + element.title;
       // id.textContent = "ID: " + element.id;
       //container.appendChild(title);
       //container.appendChild(id);
       //todoContainer.appendChild(container);
       
    });
    
}
