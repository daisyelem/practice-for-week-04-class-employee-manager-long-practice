const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, salary, title, manager=null){
        super(name, salary, title, manager);
        this.employees = [];
    }
    addEmployee(employee){
        if (employee instanceof Employee) {
            this.employees.push(employee);
            employee.manager = this;
        } else {
            throw new Error("Only instances of Employee can be added");
        }
    }
}

module.exports = Manager;
