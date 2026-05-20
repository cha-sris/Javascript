//  date objects = objects that contain values that represents date and time.
//                             These date objects can be changed and formatted

//  Date(year, month, day, hour, minute, second, ms)   ->default format

// const date = new Date();
const date = new Date(2076, 1, 22, 4);
const month  = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
const dayofWeek = date.getDay(); 
const hour = date.getHours();
const hour = date.getMinutes();
const hour = date.getMilliseconds();

// console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
