const fs = require('fs')


function writeSite(html){
    fs.writeFile('./dist/index.html', html, err => {
    if (err){
         return (err)
    }
    console.log("HTML successful")
    copyCss()
   })
}

const copyCss = () => {
     fs.copyFile('./src/style.css', './dist/style.css', err => {
             if (err) {
                 console.log(err);
     }          
          console.log('CSS successful.')   
 });
 }

 module.exports = writeSite, copyCss