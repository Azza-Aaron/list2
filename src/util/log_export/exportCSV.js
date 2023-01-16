function exportCSV(exportButton) {
  let exportList = [
    "Title",
    "Description",
    "Due Date",
    "Date Validity",
    "Class List",
  ];
  for (let i = 0; i < myJobs.length; i++) {
    const jobbies = myJobs[i];
    const exportJobs = `\n${jobbies.job}, ${jobbies.desc}, ${jobbies.due}, ${jobbies.date}, ${jobbies.classes}`;
    exportList.push(exportJobs);
  }

  actualDownload(exportList, exportButton);
}

function actualDownload(exportList, exportButton) {
  const downloadCSV = document.createElement("a");
  const file = new Blob(exportList, { type: "csv" });
  downloadCSV.href = URL.createObjectURL(file);
  downloadCSV.download = "Download Jobs";
  downloadCSV.download = true;
  exportButton.appendChild(downloadCSV);
}
