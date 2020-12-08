const fs =  require('fs')

var d=new Date()

var filename =  d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()+"-"+d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds()
var content = d.getTime()

fs.writeFile(`${filename}.txt`,`${content}`,(err)=>{
        if(err) throw err;
        console.log("File created");
})