const addButton: HTMLButtonElement | null =
    document.querySelector("#todoAddButton");

const inputTextField: HTMLInputElement | null =
    document.querySelector("#todoInputField");

const todosContainer: HTMLDivElement | null =
    document.querySelector("#todoContainer");

type Todo = {
    id: number;
    title: string;
    description?: string;
    isDone?: boolean;
};

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer) {
    addButton.addEventListener("click", (e: MouseEvent): void => {
        const title = inputTextField.value.trim();

        if (!title) return;

        arrayOfTodos.push({
            id: arrayOfTodos.length + 1,
            title: title,
        });

        inputTextField.value = '';
        buildList();
    });
}

function buildList(): void {
    if (!todosContainer) return;

    todosContainer.innerHTML = "";

    arrayOfTodos.forEach((element: Todo) => {
        let container: HTMLDivElement =
            document.createElement("div");

        let title: HTMLHeadingElement =
            document.createElement("h3");

        let id: HTMLParagraphElement =
            document.createElement("p");

        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;

        container.appendChild(title);
        container.appendChild(id);

        todosContainer.appendChild(container);
    });
}
