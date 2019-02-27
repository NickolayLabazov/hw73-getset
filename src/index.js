import { Bowman } from './function';

const bowman = new Bowman();
bowman.health = 150;
console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);

bowman.powerMode = true;

console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);

bowman.doAttack();
console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);

bowman.doAttack();
console.log(bowman.health);

bowman.doAttack();
console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);

bowman.doAttack();
console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);


bowman.powerMode = true;
console.log(bowman.health);
console.log(bowman.attack);
console.log(bowman.defence);
