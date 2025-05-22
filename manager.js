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
    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary()) * multiplier;
    }
    _totalSubSalary(){
        let total = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                total += employee._totalSubSalary();
            }
            total += employee.salary;

        }
        return total;
    }
}

module.exports = Manager;
