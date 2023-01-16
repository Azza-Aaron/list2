function validateAllDates() {
  for (let i = 0; i < myJobs.length; i++) {
    const job = myJobs[i];
    const divToChange = document.getElementById(`todo${i}`);
    //date business - date has been validated on a boolean
    console.log(job.job);
    console.log(divToChange);
    if (job.date) {
      divToChange.classList.remove("done", "overdue", "task", "urgent");
      const now = moment().format(formatOfDate).toString();
      if (moment(now, formatOfDate).isSame(moment(job.due, formatOfDate))) {
        divToChange.classList.add("urgent");
        console.log("urgent");
      } else if (moment().isAfter(moment(job.due, formatOfDate))) {
        divToChange.classList.add("overdue");
        console.log("overdue");
      } else {
        divToChange.classList.add("task");
      }
    } else {
      document.getElementById(`due${i}`).classList.add("complianceIssue");
    }

    const jobClass = divToChange.className;
    job.classes = jobClass;
  }
}
