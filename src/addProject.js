import {retrieveAPI, savetoAPI} from "./api.js";
// import {renderProjectList} from "./view.js";

//function for adding new project via form
function addNewProject() {
    const projectName = document.querySelector('.new_project').value;
    const projectList = retrieveAPI()   //retrieve current stored Project list
    const newProject = createNewProject(projectName); //create new object
    projectList.push(newProject) // push to array
    savetoAPI(projectList);
    document.querySelector('.new_project').value = null;
    // renderProjectList(projectList);
}

//function to create new project object
const createNewProject = (name) => {
    return {id: Math.floor(Math.random() * 10000), 
            name: name, 
            tasks: [] }
}

export {addNewProject};