const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, email, id, role, gitHub){
        super (name, email, id, role);
        this.school = this.getSchool;
    }
    getSchool() {
        return this.gitHub;
    }
}

module.exports = Intern;