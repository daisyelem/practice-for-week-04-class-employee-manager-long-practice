const Employee = require('./employee.js');
const Manager = require('./manager.js');

const hobbes = new Manager("Hobbes", 1000000, 'Founder');
const calvin = new Manager("Calvin", 130000, 'Director', hobbes);
const susie = new Manager("Susie", 100000, 'TA Manager', calvin);
const lily = new Employee("Lily", 90000, 'TA', susie);
const clifford = new Employee("Clifford", 90000, 'TA', susie);

const hobbesBonus = hobbes.calculateBonus(0.05);
const calvinBonus = calvin.calculateBonus(0.05);
const susieBonus = susie.calculateBonus(0.05);
const lilyBonus = lily.calculateBonus(0.05);
const cliffordBonus = clifford.calculateBonus(0.05);

console.log(`Hobbes:   $${hobbesBonus}`)
console.log(`Calvin:   $${calvinBonus}`)
console.log(`Susie:    $${susieBonus}`)
console.log(`Lily:     $${lilyBonus}`)
console.log(`Clifford: $${cliffordBonus}`)
