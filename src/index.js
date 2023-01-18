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
  TASK: "task",
  DONE: "done",
  OVERDUE: "overdue",
  URGENT: "urgent",
  ISSUE: "complianceIssue",
});

//GET FROM DOM
const toDoContainer = document.getElementById("toDoContainer");
const jobInputDiv = document.getElementById("job-input-div");
const inputDiv = document.createElement("inputDiv");
