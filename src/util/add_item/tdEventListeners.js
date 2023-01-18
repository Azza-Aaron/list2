//PROCESS INPUT LISTENERS FOR ELEMENTS
function addTdEventListener(job, passDiv) {
  passDiv.addEventListener("click", function () {
    if (returnUserOrDefault(job) === "default") {
      console.log(job);
      console.log("default class status should change");
      job.status = userClassStatus.TASK;
      passDiv.className = "task";
    }
    if (
      job.status === userClassStatus.TASK ||
      job.status === userClassStatus.URGENT
    ) {
      job.status = userClassStatus.DONE;
      console.log("done renderering making done");
      console.log(job.status);
      renderList();
    } else {
      job.status = userClassStatus.URGENT;
      console.log("else renderering making urgent");
      renderList();
    }
  });
  passDiv.addEventListener("dblclick", function () {
    console.log("double clicked");
    job.status = defaultClassStatus.TASK;
    renderList();
  });
}
