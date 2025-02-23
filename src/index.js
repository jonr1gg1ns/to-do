import './styles.css';
import { createSideBar } from "./sidebar.js"
var content = document.getElementById("content")

export const sideBar = document.createElement("div")
sideBar.classList = "sideBar"
sideBar.id = "id";
content.appendChild(sideBar)

const mainBar = document.createElement("div")
mainBar.classList = "mainBar"
mainBar.id = "mainBar"
content.appendChild(mainBar)

createSideBar();