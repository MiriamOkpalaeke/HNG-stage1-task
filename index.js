let todayDay = document.getElementById("current-day");
let utcTime = document.getElementById("current-time");

const currentDay = () => {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let day = date.getDay();

  return daysOfWeek[day];
};

todayDay.innerHTML = `Today: ${currentDay()}`;

//for time

const currentUTCTime = Date.now();
utcTime.innerHTML = `Current Time: ${currentUTCTime} `;

// setInterval(() => {
//   theUTCTime();
// }, 1000);

// theUTCTime();
