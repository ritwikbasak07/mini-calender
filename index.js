const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dayNumber = document.getElementById("day-num");
const year = document.getElementById("year");

const date = new Date();


monthName.innerHTML = date.toLocaleString("en",{month:"long"});
dayName.innerHTML = date.toLocaleString("en",{weekday:"long"});
dayNumber.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();