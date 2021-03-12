let generateMember = memberArray => {

    console.log('member array', memberArray)

    let card = ""

    for(let i = 0; i < memberArray.length; i ++) {

        let finalOp = memberArray[i].school || memberArray.gitHub[i] || memberArray.officeNumber[i];
        let objectKeys = Object.keys(memberArray[i]);
        let last = objectKeys[4];
        let finalProfile = last + ": " + finalOp;

        if(last === undefined) {
            finalProfile = " ";
            console.log(finalProfile);
        } else if(last === 'gitHub') {
            finalProfile = (`GitHub: <a href='https://www.github.com/${memberArray[i].gitHub}'> ${memberArray[i].gitHub}`);
            console.log(finalProfile);
        } else {
            console.log(finalProfile);
        }

        let (name, role, email, id,) = memberArray[i];
        card+= `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        <ul>
		    <li>Email: <a href=mailto:${email}>${email}</a></li>
		    <li>Employee ID: ${id}</li>
		    <li>${finalProfile}</li>
        </ul>
    </div>
        `
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
    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css"> 
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




module.exports = generateMember