
//function to retrieve project list
function retrieveAPI() {
    const projectList = localStorage.getItem("list-data");  // pull data from localstorage
    if(!projectList || null) {    // if empty or null return a blank array
        return projectList = [];
        
    }
    return JSON.parse(projectList)  // else return the parsed JSON array
}

//function to save to project list
function savetoAPI(data) {
    localStorage.setItem("list-data", JSON.stringify(data))

}

//function to retrieve task list

//function to save to task list

export {retrieveAPI, savetoAPI}