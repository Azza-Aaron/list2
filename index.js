// objectives //add stuff //remove stuff// move stuff

// Three lists that always have same index
let jobList = [];
let descriptionList = [];
let dueList = [];

//GET FROM DOM
const toDoContainer = document.getElementById('toDoContainer');
const addButton = document.getElementById('btn-el');
const footerContainer = document.getElementById('footer');
const aDiv = document.getElementById('a');

//ADD ITEM -create title input, on enter -create description input, on enter -create due date input
function addItem(){
    let createLabel = document.createElement("label");
    let createInput = document.createElement("input");
    let createLineBR = document.createElement("br");
    createLabel.id="label-input-job";
    createLabel.innerText="Job";
    createInput.id="job";
    aDiv.appendChild(createLineBR);
    aDiv.appendChild(createLabel);
    aDiv.appendChild(createInput);
    let createLabelb = document.createElement("label");
    let createInputb = document.createElement("input");
    createLabelb.id="label-b";
    createLabelb.innerText="Description";
    createInputb.id="description";
    aDiv.appendChild(createLabelb);
    aDiv.appendChild(createInputb);
    let createLabelc = document.createElement("label");
    let createInputc = document.createElement("input");
    createLabelc.id="label-b";
    createLabelc.innerText="Due DD/MM/YYYY";
    createInputc.id="date";
    aDiv.appendChild(createLabelc);
    aDiv.appendChild(createInputc);
    createInputc.addEventListener('keypress', function (e){
        if(e.key === 'Enter') {
            enterEventListener();
    }})
    createInputb.addEventListener('keypress', function (e){
        if(e.key === 'Enter') {
            enterEventListener();
        }})
    createInput.addEventListener('keypress', function (e){
        if(e.key === 'Enter') {
            enterEventListener();
        }})
}

function enterEventListener(){
        const inputJob = document.getElementById('job');
        const inputDescription = document.getElementById('description');
        const inputDate = document.getElementById('date');
        if(!inputJob.value){window.alert("Enter Job"); return;}
        if(!inputDescription.value){window.alert("Enter Description"); return;}
        if(!inputDate.value){window.alert("Enter Date"); return;}
        jobList.push(inputJob.value);
        descriptionList.push(inputDescription.value);
        dueList.push(inputDate.value);
        addValueToList();
        inputJob.value = "";
        inputDescription.value = "";
        inputDate.value = "";
        while (aDiv.firstChild) {
            aDiv.removeChild(aDiv.lastChild);
        }
}


function addValueToList(){
    for (let i = 0; i < jobList.length; i++) {
        const createDivTr = document.createElement("tr");
        createDivTr.id = `todo${i}`;
        createDivTr.class = `todo`;
        toDoContainer.appendChild(createDivTr);
        const createJobDivTd = document.createElement("td");
        const createDescDivTd = document.createElement("td");
        const createDueDivTd = document.createElement("td");
        createJobDivTd.innerText = jobList[i];
        createJobDivTd.id = `job${i}`;
        createJobDivTd.value = i;
        createDescDivTd.innerText = descriptionList[i];
        createDescDivTd.id = `desc${i}`;
        createDueDivTd.innerText = dueList[i];
        createDueDivTd.id = `desc${i}`;
        createDivTr.appendChild(createJobDivTd);
        createDivTr.appendChild(createDescDivTd);
        createDivTr.appendChild(createDueDivTd);
        createJobDivTd.addEventListener('click', function () {
            const numberOf = event.target.value
            const divName = `todo${numberOf}`
            const divTrToChange = document.getElementById(divName)
            if(divTrToChange.class === 'task'){divTrToChange.class = `done`; console.log(`changed to done`)}
            else {divTrToChange.class = `task`; console.log(`changed to task`)}
        });
        createJobDivTd.addEventListener('dblclick', function () {
            const numberOf = event.target.value
            const divName = `todo${numberOf}`
            const divTrToChange = document.getElementById(divName)
            divTrToChange.class = 'overdue'
        });
    }
}



//DATE LOGIC = class="success" or class="danger" or no class



//BUILD LIST