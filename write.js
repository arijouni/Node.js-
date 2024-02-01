const fs =  require('fs')
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.err("error");
  }
  console.log("Data written successfully!");
  fs.readFile("welcom.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("Asynchrounous read: " + data.toString());
  })
});