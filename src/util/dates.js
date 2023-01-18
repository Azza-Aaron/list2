function validateAllDates() {
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const divToChange = document.getElementById(`todo${i}`);
    //isDateTrueFalse business - isDateTrueFalse has been validated on a boolean
    console.log(job.job);
    console.log(divToChange);
    if (job.isDateTrueFalse) {
      if (returnUserOrDefault(job) === "user") {
        return;
      }
      if (moment().isSame(moment(job.due, formatOfDate), "date")) {
        job.status = defaultClassStatus.URGENT;
        //console.log("urgent");
      } else if (moment().isAfter(moment(job.due, formatOfDate))) {
        job.status = defaultClassStatus.OVERDUE;
        //console.log("overdue");
      } else {
        job.status = defaultClassStatus.TASK;
      }
    } else {
      job.status = defaultClassStatus.ISSUE;
      //document.getElementById(`due${i}`).classList.add("complianceIssue");
    }
  }
}

function returnUserOrDefault(job) {
  const j = job.status;
  const u = userClassStatus;
  if (
    j === u.DONE ||
    j === u.TASK ||
    j === u.URGENT ||
    j === u.ISSUE ||
    j === u.OVERDUE
  ) {
    console.log("its user dont change with date constructor");
    return "user";
  } else {
    return "default";
  }
}
