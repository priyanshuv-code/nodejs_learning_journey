// import os module....
const os=require('os');

// 1. os.platform()
console.log(os.platform());

// 2. os.arch()
console.log(os.arch());

// 3. os.freemem()  -> give in Free memory (in bytes)
console.log(os.freemem());

// 4. os.totalmem() -> give in Total memory (in bytes)
console.log(os.totalmem()); 

// 5. os.uptime() -> give in seconds
console.log(os.uptime());

// 6. os.cpus() -> give in array of objects
console.log(os.cpus());

// 7. os.homedir() -> give's home directory path
console.log(os.homedir());

// 9.os.hostname() -> give's host name
console.log(os.hostname()); 

// 10. os.networkInterfaces() -> give's network interfaces
console.log(os.networkInterfaces());

