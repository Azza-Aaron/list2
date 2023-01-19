//PROCESS INPUT LISTENERS FOR ELEMENTS
function addTdEventListener(job, passDiv, i) {
  passDiv.addEventListener("click", function () {
    if (returnUserOrDefault(job) === "default") {
      job.status = userClassStatus.TASK;
      passDiv.className = "task";
    }
    if (
      job.status === userClassStatus.TASK ||
      job.status === userClassStatus.URGENT ||
      job.status === userClassStatus.ISSUE
    ) {
      job.status = userClassStatus.DONE;
      passDiv.className = userClassStatus.DONE;
    } else {
      job.status = userClassStatus.URGENT;
      passDiv.className = userClassStatus.URGENT;
    }
  });
  passDiv.addEventListener("dblclick", function () {
    console.log("double clicked");
    // job.status = defaultClassStatus.TASK;
    editRemove(passDiv, i, job);
  });
}
