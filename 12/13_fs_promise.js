const { read } = require('fs');

const fs=require('fs').promises;

// fs promises - CRUD operations using promises

// create file  

async function createFile(){
  await fs.writeFile('file.txt','Hello');
  console.log('file created');
}
createFile();

// read file -> fs.readFile()
async function readFileData(){
  const data=await fs.readFile('file.txt','utf-8');
  console.log(data);    
}
readFileData();

// update file -> fs.appendFile()
async function updateFile(){
  await fs.appendFile('file.txt',' World');
}
updateFile();

// delete file -> fs.unlink()
// async function deleteFile(){
//   await fs.unlink('file.txt');
//   console.log('file deleted');
// }
// deleteFile();


// Error handling using try-catch block
async function readData(){
  try{
    const data=await fs.readFile('file.txt','utf-8');
    console.log(data);
  }
  catch(err){
    console.log('Error:',err.message);
  }
}
readData();