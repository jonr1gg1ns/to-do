import { sideBar } from './index.js';
export function createSideBar() {

    const sideBarHome = document.createElement("nav");
    sideBarHome.classList = "home";
    sideBarHome.id = "home";
    sideBarHome.textContent = "Home";
    sideBar.appendChild(sideBarHome);


    const sideBarToday = document.createElement("nav");
    sideBarToday.classList = "home";
    sideBarToday.id = "today";
    sideBarToday.textContent = "Today";
    sideBar.appendChild(sideBarToday);


    const sideBarProjects = document.createElement("nav");
    sideBarProjects.classList = "home";
    sideBarProjects.id = "projects";
    sideBarProjects.textContent = "Projects";
    sideBar.appendChild(sideBarProjects);
}