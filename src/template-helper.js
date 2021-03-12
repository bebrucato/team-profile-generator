let generateProfile = memberArray => {
    
    console.log('member array', memberArray)
  
    let card = ""  
    
    for(let i = 0; i < memberArray.length; i++) {
        
        let altOption = memberArray[i].school || memberArray[i].gitHub || memberArray[i].officeNumber
        let objectKeys = Object.keys(memberArray[i])
        let lastOne = objectKeys[4]
        let finalProperty = lastOne + ": " + altOption

        if(lastOne === undefined){
            finalProperty = " ";
            console.log(finalProperty)
           }else if(lastOne === 'gitHub'){
             finalProperty = (`GitHub : <a href = 'https://www.github.com/${memberArray[i].gitHub}'> ${memberArray[i].gitHub}</a>`)
             console.log(finalProperty)
           }
           else{
             console.log(finalProperty)
           }
        
        let {name, role, email, id,} = memberArray[i]
       card+= `
        <div class="card col" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item"> ${finalProperty}</li>
            
            
        </ul>
        </div>`
        }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
    <div class="jumbotron">
    <h1 class="text-center">My Team</h1>
    </div> 
     
    <div class="container">
            <div class="row">
     
                ${card}
     
            </div>
        </div>
    </body>
    </html>` 
}
 


module.exports = generateProfile;