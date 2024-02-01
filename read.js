var fs = require('fs');
fs.readFile("hello.txt","utf8",(err,data)=>{
    if(err){
        console.error("Erreur de lecture de fichier:" ,err)
        return;
    }
    console.log("données lues depuis hello.txt",data)
})