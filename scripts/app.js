const $ = document;
// Pages
const loginPage = $.getElementById("login");
const questionsPage = $.getElementById("questionsSection");
const endPage = $.getElementById("endSection");

// Buttons
const loginBtn = $.getElementById("goBtn");
const nextBtn = $.getElementById("nextBtn");
const resetBtn = $.getElementById("reset");

// Inputs
const loginInput = $.getElementById("loginInput");
const radio = $.querySelectorAll(".form-check button");

// Outputs
const yourName = $.getElementById("yourName");
const quees = $.querySelector("#question span");
const yourAvg = $.getElementById("yourAvg");
const anstConter = $.getElementById("anstConter");
const progress = $.getElementById("progress");
const answerList = $.querySelectorAll(".list-group-item");

// Global Var
let ansSelect = "";
let avg = 0;
let conterTrue = 0;

// login
loginBtn.addEventListener("click", function () {
  if (loginInput.value) {
    loginPage.classList.replace("d-block", "d-none");
    yourName.innerHTML = loginInput.value;
    questionsPage.classList.replace("d-none", "d-block");
  } else alert("لطفا نام کامل خود را وارد کنید");
});

// Questions
radio.forEach(function (a) {
  a.addEventListener("click", function (e) {
    ansSelect = e.target.value;
  });
  a.value = "";
});

nextBtn.addEventListener("click", function () {
  if (ansSelect == "true") {
    avg += 2;
    conterTrue += 1;
  }
  statusAns[andis] = ansSelect;
  ansSelect = "";
  andis++;
  if (andis == 10) {
    questionsPage.classList.replace("d-block", "d-none");
    endPage.classList.replace("d-none", "d-block");
    compelet();
    andis = 0;
  }
  quees.innerHTML = questions[andis];
  for (var i = 0; i < 4; i++) {
    radio[i].value = answers[andis][i].yes;
    radio[i].innerHTML = answers[andis][i].ans;
  }
  console.log(statusAns);
});

// End Page
function compelet() {
  yourAvg.innerHTML = `نمره شما: ${avg} از 20`;
  anstConter.innerHTML = `تعداد جواب های درست: ${conterTrue} از 10`;
  //   ---------------- progress------------
  let progressBar = (avg * 100) / 20;
  progress.style.width = `${progressBar}%`;
  //   ---------------- Status Answer------------
  for (var i = 0; i < 10; i++) {
    if (statusAns[i] == "true") {
      answerList[i].classList.replace(
        "list-group-item-secondary",
        "list-group-item-success"
      );
    } else if (statusAns[i] == "false") {
      answerList[i].classList.replace(
        "list-group-item-secondary",
        "list-group-item-danger"
      );
    }
  }
}

resetBtn.addEventListener("click", function () {
  endPage.classList.replace("d-block", "d-none");
  questionsPage.classList.replace("d-none", "d-block");
  statusAns = [];
  avg = 0;
  conterTrue = 0;
  answerList.forEach(function (item) {
    item.className = "list-group-item list-group-item-secondary";
  });
});
