//AFTER ENTER/SUBMIT BUTTON HIT
function enterEventListener() {
  toDoContainer.replaceChildren();
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const createDivTr = document.createElement("tr");
    createDivTr.id = `todo${i}`;
    createDivTr.className = `task`;
    toDoContainer.appendChild(createDivTr);
    createTdElements(job, i, createDivTr);
    addTdEventListener(i, createDivTr);
    //console.log(`job ${job.job} desdcription ${job.desc} due ${job.desc}`);
  }
  jobInputDiv.replaceChildren();
  validateAllDates(myJobs);
}