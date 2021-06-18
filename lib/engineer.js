const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
}

Engineer.prototype.getRole = function() {
    return "Engineer";
}

module.exports = Engineer;