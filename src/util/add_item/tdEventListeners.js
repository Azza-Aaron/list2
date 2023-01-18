//PROCESS INPUT LISTENERS FOR ELEMENTS
function addTdEventListener(i, passDiv) {
  passDiv.addEventListener("click", function () {
    //todo update the job when changing the status / class
    //
    if (passDiv.className === "task") {
      //todo set the status on job
      //trigger renderList() to redraw all items
      /*
        job.status = "done";
        renderList();
      */
      passDiv.classList.remove("done", "overdue", "task", "urgent");
      passDiv.classList.add("done");
    } else {
      passDiv.classList.remove("done", "overdue", "task", "urgent");
      passDiv.classList.add(`task`);
    }
  });
  passDiv.addEventListener("dblclick", function () {
    passDiv.classList.remove("done", "overdue", "task", "urgent");
    passDiv.classList.add("overdue");
  });
}
