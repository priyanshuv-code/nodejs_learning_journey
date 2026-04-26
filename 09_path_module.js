const path=require("path");

// 1. path.join()
const p=path.join('user','priyanshu','file.txt');
console.log(p);

// 2. path.resolve()
console.log(path.resolve('file.txt'));

// 3. path.parse()
console.log(path.parse('/home/user/file.txt'));

// 4. path.basename()
console.log(path.basename('/home/user/file.txt'));

//5. path.dirname()
console.log(path.dirname('/home/user/file.txt'));

// 6. path.extname()
console.log(path.extname('file.txt'));


//  7. path.sep
console.log(path.sep);  