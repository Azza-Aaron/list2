
let myJobs = []

//GET FROM DOM
const toDoContainer = document.getElementById('toDoContainer');
const jobInputDiv = document.getElementById('job-input-div');

//ADD ITEM BUTTON
function addItem(){
    jobInputDiv.replaceChildren()
    jobInputDiv.appendChild(document.createElement("br"));
    createInputs("label-input-job", "Job", "job")
    createInputs("label-b", "Description", "description")
    createInputs("label-c", "Due DD/MM/YYYY", "date")
}

//PROCESS INPUTS
function createInputs(labelName, labelText, inputName) {
    let createLabel = document.createElement("label");
    let createInput = document.createElement("input");
    createLabel.id = labelName;
    createLabel.innerText = labelText;
    createInput.id = inputName;
    jobInputDiv.appendChild(createLabel);
    jobInputDiv.appendChild(createInput);

    createInput.addEventListener('keypress', function (e){
        if(e.key === 'Enter') {
            //const iAm = e.target.id;
            //const passValue = e.target.value;
            const matches = document.querySelectorAll("input");

            for (let i = 0; i < matches.length; i++) {
                if(!matches[i].value){
                    matches[i].style.color = 'red';
                    matches[i].value = "Please Enter Information";
                    return;
                }
            }
            for (let i = 0; i < matches.length; i++) {
                if(matches[i].value === "Please Enter Information"){
                    matches[i].style.color = 'red';
                    matches[i].value = "Please Enter Information";
                    return;
                }
            }
            myJobs.push (
                {
                    job: matches[0].value,
                    desc: matches[1].value,
                    due: matches[2].value
                }
            )
            testDate(matches[2].value)
            enterEventListener();
        }
    })
}

//AFTER ENTER/SUBMIT BUTTON HIT
function enterEventListener(){
        toDoContainer.replaceChildren()
        for(let i = 0; i < myJobs.length; i++) {
            const job = myJobs[i];
            const createDivTr = document.createElement("tr");
                createDivTr.id = `todo${i}`;
                createDivTr.className = `task`;
            toDoContainer.appendChild(createDivTr);
            createTdElements(job, i, createDivTr)
            addTdEventListener(i)
            //console.log(`job ${job.job} desdcription ${job.desc} due ${job.desc}`);
        }
        jobInputDiv.replaceChildren()
        validateAllDates(myJobs)
}

//PROCESS INPUT TO ELEMENTS
function createTdElements(job, i, createDivTr){
    const createJobDivTd = document.createElement("td");
    const createDescDivTd = document.createElement("td");
    const createDueDivTd = document.createElement("td");
    createJobDivTd.innerText = job.job;
    createJobDivTd.id = `job${i}`;
    createJobDivTd.value = i;
    createDescDivTd.innerText = job.desc;
    createDescDivTd.id = `desc${i}`;
    createDueDivTd.innerText = job.due;
    createDueDivTd.id = `due${i}`;
    createDueDivTd.customReference = `due`;
    createDivTr.appendChild(createJobDivTd);
    createDivTr.appendChild(createDescDivTd);
    createDivTr.appendChild(createDueDivTd);
}

//PROCESS INPUT LISTENERS FOR ELEMENTS
function addTdEventListener(i){
        const createJobDivTd = document.getElementById(`job${i}`);
        createJobDivTd.addEventListener('click', function () {
        const divName = `todo${i}`
        const divTrToChange = document.getElementById(divName)
        if(divTrToChange.className === 'task'){
            divTrToChange.className = `done`; console.log(`changed to done`)
        }
        else {
            divTrToChange.className = `task`; console.log(`changed to task`)
        }
    });
    createJobDivTd.addEventListener('dblclick', function () {
        const divName = `todo${i}`
        const divTrToChange = document.getElementById(divName)
        divTrToChange.className = 'overdue'
    });
}

//DATE LOGIC
function testDate(date){
    if (date.match( /^\d{2}\/\d{2}\/\d{4}$/ )) {console.log("You have set a due date");}
    else {console.log("Cannot process due date, check format!")}
}
