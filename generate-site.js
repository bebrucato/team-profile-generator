const fs = require('fs')

function renderSite(html) {
    fs.writeFile('./dist/index.html', html, err => {
        if (err) {
            throw err
        }
        console.log("it's here!")
        copyfile()
    })
}

const copyfile = () => {
    fs.copyfile("./src/style.css", "./dist/style.css", err => {
        if (err) {
            console.log(err);
        }
        console.log("css successful!")
    })
}

module.exports = renderSite, copyfile;