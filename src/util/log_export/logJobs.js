function logList() {
  const para = document.getElementById("job-log");
  createExportOption(para);
  for (let i = 0; i < myJobs.length; i++) {
    const jobbies = myJobs[i];
    para.innerText = `
    Job Title: ${jobbies.job} - Description: ${jobbies.desc} - Due Date: ${jobbies.due}
    - Date Validity: ${jobbies.date} - Class List: ${jobbies.classes}
    `;
  }
}

function createExportOption(para) {
  const exportButton = document.createElement("button");
  const exportDiv = document.getElementById("export");
  exportDiv.replaceChildren();
  exportButton.id = "export-button";
  exportButton.onclick = function () {
    exportCSV(exportButton);
  };
  exportButton.innerText = "Export CSV";
  exportButton.classList.add("btn-primary");
  exportDiv.appendChild(exportButton);
}
