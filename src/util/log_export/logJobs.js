function logList() {
  const para = document.getElementById("job-log");
  createExportOption(para);
  for (let i = 0; i < myJobs.length; i++) {
    const jobbies = myJobs[i];
    para.innerText = `
    Job Title: ${jobbies.job} - Description: ${jobbies.desc} - Due Date: ${jobbies.due}
    - Date Validity: ${jobbies.isDateTrueFalse} - Class List: ${jobbies.classes}
    `;
  }
}

function createExportOption(para) {
  const downloadCSV = document.createElement("a");
  const exportButton = document.createElement("button");
  const exportDiv = document.getElementById("export");
  exportDiv.replaceChildren();

  const exportList = exportCSV();
  const file = new Blob(exportList, { type: ".csv" });
  downloadCSV.href = URL.createObjectURL(file);
  downloadCSV.download = "job_list.csv";
  exportDiv.appendChild(downloadCSV);
  //console.log("end of download function");

  exportButton.id = "export-button";
  exportButton.onclick = function () {};
  exportButton.innerText = "Export CSV";
  exportButton.classList.add("btn-primary");
  downloadCSV.appendChild(exportButton);
  exportDiv.appendChild(downloadCSV);
}
