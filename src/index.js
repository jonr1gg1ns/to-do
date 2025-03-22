import "./styles.css";
import { createSideBar } from "./sidebar.js";
import { ToDo } from "./todo.js";
var content = document.getElementById("content");

export const sideBar = document.createElement("div");
sideBar.classList = "sideBar";
sideBar.id = "id";
content.appendChild(sideBar);

const mainBar = document.createElement("div");
mainBar.classList = "mainBar";
mainBar.id = "mainBar";
content.appendChild(mainBar);

export function createNewButton() {
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "btn-container";
    sideBar.appendChild(buttonContainer);

    const newButton = document.createElement("button");
    newButton.id = "new-btn";
    newButton.textContent = "+";
    buttonContainer.appendChild(newButton);


    const todo = new ToDo(); // Create an instance of ToDo
    newButton.addEventListener("click", () => todo.show()); 
}

createSideBar();
createNewButton();
