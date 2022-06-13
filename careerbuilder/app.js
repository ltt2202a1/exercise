const jobList = [
  {
    jobName: "Senior Security Executive",
    career: "An ninh bảo vệ",
    company: "Công ty TNHH Cảng Quốc Tế Sài Gòn Việt Nam",
    local: "Vũng Tàu",
    salary: 8000000,
    level: "Thực tập sinh",
    time: new Date(2022, 6, 12),
    status: "Thực tập",
    benefit: "Chế độ bảo hiểm",
    img: "https://images.careerbuilder.vn/employers/5471/155x155/153006logococa.png",
  },
  {
    jobName: "Nhân viên kho - Warehouse Operator",
    career: "An ninh bảo vệ",
    company: "Công Ty TNHH Khóa Bảo An",
    local: "Hà Nội",
    salary: 1000000,
    level: "Nhân viên",
    time: new Date(2022, 6, 6),
    status: "Nhân viên chính thức",
    benefit: "Chế độ bảo hiểm",
    img: "https://images.careerbuilder.vn/employer_folders/lot9/250449/155x155/152402z2343507640854_9ca46f28ee86aa4fc3d33342b0929ed9.jpg",
  },
  {
    jobName: "Chuyên viên Pháp lý Dự án",
    career: "An ninh bảo vệ",
    company: "Công ty CP DRH Holdings",
    local: "Hồ Chí Minh",
    salary: 4000000,
    level: "Quản lý",
    time: new Date(2022, 5, 10),
    status: "Nhân viên chính thức",
    benefit: "Chế độ bảo hiểm",
    img: "https://images.careerbuilder.vn/employer_folders/lot0/180310/155x155/105720unnamed.png",
  },
  {
    jobName: "Chuyên viên Pháp lý Dự án",
    career: "Bất động sản",
    company: "Công ty CP DRH Holdings",
    local: "Hải Phòng",
    salary: 9000000,
    level: "Nhân viên",
    time: new Date(2022, 6, 1),
    status: "Nhân viên chính thức",
    benefit: "Du lịch",
    img: "https://images.careerbuilder.vn/employer_folders/lot7/261157/155x155/155453mapletreelogo_highres-01-002.png",
  },
];
function $(querySelector) {
  return document.querySelector(querySelector);
}
function render(list) {
  jobFound.innerHTML = `${list.length} công việc`;
  jobContainer.innerHTML = "";
  list.forEach((job) => {
    jobContainer.innerHTML += `
    <div class="job">
    <a href="#">
    <div class="job__thumnal"><img src=${job.img}></div>
    <div class="job__info">
      <h3 class="job__name">${job.jobName}</h3>
      <div class="job__company">${job.company}</div>
      <div class="job__salary">${job.salary}</div>
      <div class="job__local">${job.local}</div>
      <div class="job__time">${job.time.getDate()} / ${job.time.getMonth()} / ${job.time.getFullYear()}</div>
    </div>
    </a>
    </div>
    `;
  });
}
let jobSelect = $("#job");
let careerSelect = $("#career");
let localSelect = $("#local");
let submit = $(".submit");
let filter = $("#btn-filter");
let salarySelect = $("#salary");
let levelSelect = $("#level");
let timeSelect = $("#time");
let statusSelect = $("#status");
let benefitSelect = $("#benefit");
let advancedSubmit = $(".btn-advanced-filter.search");
let deleteChoice = $(".btn-advanced-filter.reset");
let jobFound = $(".job-found");
let jobContainer = $(".job-container");
let exitBtn = $(".exit-btn");

submit.addEventListener("click", () => {
  const jobSelectList = jobList.filter((job) => {
    console.log(jobSelect.value);
    return (
      (!jobSelect.value ||
        job.jobName.includes(jobSelect.value) ||
        job.company.includes(jobSelect.value)) &&
      (!careerSelect.value || job.career.includes(careerSelect.value)) &&
      (!localSelect.value || job.local.includes(localSelect.value))
    );
  });
  render(jobSelectList);
});
filter.addEventListener("click", () => {
  $(".advanced-filter").style.display = "block";
});
exitBtn.addEventListener("click", () => {
  $(".advanced-filter").style.display = "none";
});
advancedSubmit.addEventListener("click", () => {
  $(".advanced-filter").style.display = "none";
  const jobSelectList = jobList.filter((job) => {
    return (
      (!salarySelect.value || job.salary < Number(salarySelect.value)) &&
      (!timeSelect.value ||
        new Date().getDate() +
          new Date().getMonth() +
          1 -
          job.time.getDate() -
          job.time.getMonth() <
          Number(timeSelect.value)) &&
      (!statusSelect.value || job.status === statusSelect.value) &&
      (!levelSelect.value || job.level === levelSelect.value) &&
      (!benefitSelect.value || job.benefit === benefitSelect.value)
    );
  });
  render(jobSelectList);
});
deleteChoice.addEventListener("click", () => {
  benefitSelect.value = "";
  levelSelect.value = "";
  statusSelect.value = "";
  salarySelect.value = "";
  timeSelect.value = "";
});
render(jobList);
