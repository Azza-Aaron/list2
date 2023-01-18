// create on start
const exportDiv = document.getElementById("export");
const downloadCSV = document.createElement("a");
const exportButton = document.getElementById("log-jobs");
exportDiv.appendChild(downloadCSV);
downloadCSV.appendChild(exportButton);

function logList() {
  const exportList = exportCSV();
  const file = new Blob(exportList, { type: ".csv" });
  downloadCSV.href = URL.createObjectURL(file);
  downloadCSV.download = "job_list.csv";
}
