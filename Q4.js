var dayNumber = 6;

var dayOfWeek;

switch (dayNumber) {
  case 1:
    dayOfWeek = "Sunday";
    break;
  case 2:
    dayOfWeek = "Monday";
    break;
  case 3:
    dayOfWeek = "Tuesday";
    break;
  case 4:
    dayOfWeek = "Wednesday";
    break;
  case 5:
    dayOfWeek = "Thursday";
    break;
  case 6:
    dayOfWeek = "Friday";
    break;
  case 7:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Invalid day number";
}

console.log("Day of the week: " + dayOfWeek);