//  ES6 Modules = An external files that contain reusable code that can be imported into 
//                              other Javascript files.
//                              Write reusable code for many different apps
//                              Can contain variables, classes, function ... and more
//                              Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from '../../sandbox/mathUtil.js'

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(5);
const volume = getVolume(7);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm²`);
console.log(`${volume.toFixed(2)}cm³`);