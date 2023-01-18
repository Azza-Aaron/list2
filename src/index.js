let myJobs = [];
const formatOfDate = "DD MM YYYY";

const defaultClassStatus = Object.freeze({
  TASK: "task",
  DONE: "done",
  OVERDUE: "overdue",
  URGENT: "urgent",
  ISSUE: "complianceIssue",
});

const userClassStatus = Object.freeze({
  TASK: "uTask",
  DONE: "uDone",
  OVERDUE: "uOverdue",
  URGENT: "uUrgent",
  ISSUE: "uComplianceIssue",
});

//GET FROM DOM
const toDoContainer = document.getElementById("toDoContainer");
const jobInputDiv = document.getElementById("job-input-div");
const footer = document.getElementById("footer");

//console.log(document.getElementById("inputDiv"))
//getEventListeners(document.getElementById("inputDiv"))
