const generateMember = memberArray => {

    console.log('member array', memberArray)

    let card = "";

    for(let i = 0; i < memberArray.length; i ++) {

        let finalOp = memberArray[1].school || memberArray.gitHub[1] || memberArray.officeNumber[1];
        let objectKeys = Object.keys(memberArray[1]);
        let last = objectKeys[4];
        let finalProfile = last + ": " + finalOp;

        if(last === undefined) {
            finalProfile = "";
            console.log(finalProfile);
        } else if(last === 'gitHub') {
            finalProfile = (`GitHub: <a href='https://www.github.com/${memberArray[1].gitHub}'> ${memberArray[1].gitHub}`);
            console.log(finalProfile);
        } else {
            console.log(finalProfile);
        }

        let (name, role, email, id,) = memberArray[1];
        card+- `
        
        `
    }
}