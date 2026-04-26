import add, { sub } from './math.js';

console.log(add(2, 3));   // default
console.log(sub(5, 2));   // named

import square, { PI } from './utils.js';

console.log(square(4)); // 16
console.log(PI);        // 3.14