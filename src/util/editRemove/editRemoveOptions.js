function editRemove(createDivTr, i, job) {
  //PROCESS INPUT TO ELEMENTS
  tdElementEditField(createDivTr);
}

//PROCESS INPUT TO ELEMENTS
function tdElementEditField(createDivTr, inputText, inputId, inputValue) {
  //CREATE SELECT
  const select = document.createElement("Select");
  select.setAttribute("id", "Select");
  createDivTr.appendChild(select);
  //APPEND OPTIONS
  createOption("Job", select);
  createOption("Description", select);
  createOption("Date", select);
  createOption("Remove", select);

  const btnChoice = document.createElement("button");
  btnChoice.setAttribute("id", "btnChoice");
  btnChoice.addEventListener("click", () => {
    choseEvent(select);
  });
  btnChoice.innerText = "GO";
  createDivTr.appendChild(btnChoice);

  console.log("select constructed");

  // const input = document.createElement("input")
  // input.id = "editInput"
  // input.value =
}

function createOption(name, select) {
  const options = document.createElement("option");
  options.setAttribute("value", `${name}`);
  const nodeThis = document.createTextNode(`${name}`);
  options.appendChild(nodeThis);
  select.appendChild(options);
}

function choseEvent(select) {
  const chosenOption = select.value;
  console.log(chosenOption);
}
