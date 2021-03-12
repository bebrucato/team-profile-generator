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
        <div class="card col-3 p-1" style="width: 18rem;">
        <div class="card-body card-header">
            <h5 class="card-title"><em><strong>${name}</strong></em></h5>
            <h6 class="card-subtitle mb-2 text-dark"><strong>${role}</strong></h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><u>Email:</u> <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item"><u>Employee ID:</u> ${id}</li>
            <li class="list-group-item"><u>${finalProperty}</u></li>
            
            
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
        <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Quicksand:wght@300&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="jumbotron text-light bg-dark" id="main">
    <h1 class="text-center team"><strong>My Team</strong></h1>
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