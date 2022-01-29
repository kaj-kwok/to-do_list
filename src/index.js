import './style.css';
import {addNewProject} from './addProject.js';

const newProject = document.querySelector('[data-new-form]');
newProject.addEventListener('submit', (event) => {
    event.preventDefault();
    addNewProject();
});
    
