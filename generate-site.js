const fs = require('fs')


function writeSite(html){
    fs.writeFile('./dist/index.html', html, err => {
    if (err){
         return (err)
    }
    console.log("saved")
   })
}

module.exports = writeSite