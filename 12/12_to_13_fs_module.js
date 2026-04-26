const fs=require('fs');

fs.writeFile('file.txt','Hello',(err)=>{
  if(err) throw err;
  console.log('File created successfully');
});

// read file ->readFile()
fs.readFile('file.txt','utf-8',(err,data)=>{
  
  console.log(data);
});

// update file -> appendFile()
fs.appendFile('file.txt',' How are you?',(err)=>{
  if(err) throw err;
  console.log('File appended successfully');
});

// delete file -> unlink()
fs.unlink('file.txt',(err)=>{
  if(err) throw err;
  console.log('File deleted successfully');
});