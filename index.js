const work = document.querySelector("#card2-time");
const play = document.querySelector("#card3-time");
const study = document.querySelector("#card4-time");
const exercise = document.querySelector("#card5-time");
const socials = document.querySelector("#card6-time");
const selfCare = document.querySelector("#card7-time");
const workPrevious = document.querySelector("#card2-previous-time");
const playPrevious = document.querySelector("#card3-previous-time");
const studyPrevious = document.querySelector("#card4-previous-time");
const exercisePrevious = document.querySelector("#card5-previous-time");
const socialsPrevious = document.querySelector("#card6-previous-time");
const selfCarePrevious = document.querySelector("#card7-previous-time");

document.querySelector("#btn-1").addEventListener("click", function () {
  document.querySelector("#btn-1").style.color = "white";
  document.querySelector("#btn-2").style.color = "rgba(255, 255, 255, 0.5)";
  document.querySelector("#btn-3").style.color = "rgba(255, 255, 255, 0.5)";
  work.textContent = "5hrs";
  play.textContent = "1hr";
  study.textContent = "0hrs";
  exercise.textContent = "1hr";
  socials.textContent = "1hr";
  selfCare.textContent = "0hr";
  workPrevious.textContent = "Yesterday-7hrs";
  playPrevious.textContent = "Yesterday-2hrs";
  studyPrevious.textContent = "Yesterday-1hr";
  exercisePrevious.textContent = "Yesterday-1hr";
  socialsPrevious.textContent = "Yesterday-3hrs";
  selfCarePrevious.textContent = "Yesterday-1hr";
});

document.querySelector("#btn-2").addEventListener("click", function () {
  document.querySelector("#btn-1").style.color = "rgba(255, 255, 255, 0.5)";
  document.querySelector("#btn-2").style.color = "white";
  document.querySelector("#btn-3").style.color = "rgba(255, 255, 255, 0.5)";
  work.textContent = "32hrs";
  play.textContent = "10hrs";
  study.textContent = "4hrs";
  exercise.textContent = "4hrs";
  socials.textContent = "5hrs";
  selfCare.textContent = "2hrs";
  workPrevious.textContent = "Last Week-7hrs";
  playPrevious.textContent = "Last Week-8hrs";
  studyPrevious.textContent = "Last Week-7hrs";
  exercisePrevious.textContent = "Last Week-5hrs";
  socialsPrevious.textContent = "Last Week-10hrs";
  selfCarePrevious.textContent = "Last Week-2hrs";
});

document.querySelector("#btn-3").addEventListener("click", function () {
  document.querySelector("#btn-1").style.color = "rgba(255, 255, 255, 0.5)";
  document.querySelector("#btn-2").style.color = "rgba(255, 255, 255, 0.5)";
  document.querySelector("#btn-3").style.color = "white";
  work.textContent = "103hrs";
  play.textContent = "23hrs";
  study.textContent = "13hrs";
  exercise.textContent = "11hrs";
  socials.textContent = "21hrs";
  selfCare.textContent = "7hrs";
  workPrevious.textContent = "Last Month-128hrs";
  playPrevious.textContent = "Last Month-29hrs";
  studyPrevious.textContent = "Last Month-19hrs";
  exercisePrevious.textContent = "Last Month-18hrs";
  socialsPrevious.textContent = "Last Month-23hrs";
  selfCarePrevious.textContent = "Last Month-11hrs";
});
