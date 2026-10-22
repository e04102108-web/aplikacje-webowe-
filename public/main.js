"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todoContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todoContainer) {
    addButton.addEventListener("click", (e) => {
        arrayOfTodos.push({
            id: arrayOfTodos.length, title: inputTextField.value
        });
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todoContainer.innerHTML = "";
    arrayOfTodos.forEach((element) => {
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
