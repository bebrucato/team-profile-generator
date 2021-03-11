const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, email, id, role, officeNumber){
        super (name, email, id, role);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;