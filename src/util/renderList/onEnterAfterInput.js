//AFTER ENTER/SUBMIT BUTTON HIT
function renderList() {
  validateAllDates(myJobs);
  toDoContainer.replaceChildren();
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const createDivTr = document.createElement("tr");
    createDivTr.id = `todo${i}`;
    createDivTr.className = job.status;
    toDoContainer.appendChild(createDivTr);
    createTdElements(job, i, createDivTr);
    addTdEventListener(job, createDivTr, i);
    //console.log(`job ${job.job} description ${job.desc} due ${job.desc}`);
  }
  jobInputDiv.replaceChildren();
  //validateAllDates(myJobs);
}
