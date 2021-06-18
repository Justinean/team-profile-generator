const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.offNum = officeNum;
    }
    getOfficeNum() {
        return this.offNum;
    }
}

Manager.prototype.getRole = function() {
    return "Manager";
}

module.exports = Manager;