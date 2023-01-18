function validateAllDates() {
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const divToChange = document.getElementById(`todo${i}`);
    console.log(job.job);
    console.log(divToChange);
    if (job.isDateTrueFalse) {
      divToChange.classList.remove("done", "overdue", "task", "urgent"); //todo set job status
      if (moment().isSame(moment(job.due, formatOfDate), "date")) {
        divToChange.classList.add("urgent"); //todo set job status
        console.log("urgent");
      } else if (moment().isAfter(moment(job.due, formatOfDate))) {
        divToChange.classList.add("overdue"); //todo set job status
        console.log("overdue");
      } else {
        divToChange.classList.add("task"); //todo set job status
      }
    } else {
      //todo set job status
      document.getElementById(`due${i}`).classList.add("complianceIssue");
    }

    //todo remove this and re-render instead
    const jobClass = divToChange.className;
    job.classes = jobClass;
  }
}
