// const http=require('http');

// const server=http.createServer((req,res)=>{
//   res.write("Hello World");
//   res.end();
// });

// server.listen(3000,()=>{
//   console.log("Server running on port 3000");
// })

const http=require('http');

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
    res.write("Home Page");
    res.end();
}
else if(req.url==='/about'){
  res.write("About Page is here");
  res.end();
}

else if(req.url==='/contact'){
  res.write("Contact Page");
  res.end();
}
else{
  res.write("404 Not found");
  res.end();
}

});

server.listen(3000,()=>{
  console.log("Server running on port 3000");
});




