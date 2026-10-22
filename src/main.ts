const addButton: HTMLButtonElement | null =
    document.querySelector("#todoAddButton");

const inputTextField: HTMLInputElement | null =
    document.querySelector("#todoInputField");

const todoContainer: HTMLDivElement =
    document.querySelector("#todoContainer")!;

type Todo = {
    id: number;
    title: string;
    description?: string;
    isDone?: boolean;
};

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todoContainer) {
    addButton.addEventListener("click", (e) => {
        arrayOfTodos.push({
            id: arrayOfTodos.length, title: inputTextField.value
        });
        inputTextField.value = '';
        buildList();
    });
}

function buildList(){
    todoContainer.innerHTML = "";
    arrayOfTodos.forEach((element: Todo) => {
        let container = document.createElement("div");
        let title = document.createElement("h3");
        let id = document.createElement("p");

        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;
        container.appendChild(title);
        container.appendChild(id);
        todoContainer.appendChild(container);
    });
}
