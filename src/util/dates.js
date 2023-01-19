function validateAllDates() {
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const divToChange = document.getElementById(`todo${i}`);
    //isDateTrueFalse business - isDateTrueFalse has been validated on a boolean

    if (returnUserOrDefault(job) === "user") {
      continue;
    }
    if (!job.isDateTrueFalse) {
      job.status = defaultClassStatus.ISSUE;
      continue;
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
    return "user";
  } else {
    return "default";
  }
}
