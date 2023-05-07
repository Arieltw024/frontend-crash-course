// 1. Declare a variable called day type is number and show the  result of day of string
//(0 → ‘Sunday’, 1 → ‘Monday’, … 6 → ‘Saturday’)
let day = 2;
let dayString = "";
switch (day) {
  case 0:
    dayString = "Sunday";
    break;
  case 1:
    dayString = "Monday";
    break;
  case 2:
    dayString = "Tuesday";
    break;
  case 3:
    dayString = "Wednesday";
    break;
  case 4:
    dayString = "Thursday";
    break;
  case 5:
    dayString = "Friday";
    break;
  case 6:
    dayString = "Saturday";
    break;
  default:
    dayString = "Invalid day";
    break;
}
console.log(dayString);

// 2. Declare a variable called seaon type is number and show the  result of season of string
//(1 → ‘Spring’, 2 → ‘Summer’, 3 → ‘Fall’, 4 → ‘Winter’)
let season = 3;
let seasonString = "";
switch (season) {
  case 1:
    seasonString = "Spring";
    break;
  case 2:
    seasonString = "Summer";
    break;
  case 3:
    seasonString = "Fall";
    break;
  case 4:
    seasonString = "Winter";
    break;
  default:
    seasonString = "Invalid season";
    break;
}
console.log(seasonString);
