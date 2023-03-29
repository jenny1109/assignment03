"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Check email
const personalInfo = document.getElementById("personal-info");
const form = document.querySelector(".form");
const viewBtn = document.querySelectorAll(".more");
const exp = document.querySelector(".exp");

document.querySelector(".submitBtn").addEventListener("click", function () {
  const email = document.querySelector(".email").value;
  if (email.match(regex)) {
    personalInfo.classList.remove("hide");
    form.classList.add("hide");
  } else {
    alert("Invalid email");
  }
});

// SHOW-HIDE JOB-INFO

for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", function () {
    const jobContent = viewBtn[i].parentNode.childNodes[1];
    if (jobContent.classList.contains("hide")) {
      jobContent.classList.remove("hide");
      viewBtn[i].textContent = "▲ View less";
    } else {
      jobContent.classList.add("hide");
      viewBtn[i].textContent = "▼ View more";
    }
  });
}
console.log(viewBtn[0].parentNode.childNodes);
