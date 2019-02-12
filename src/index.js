// import { isNum } from './function';
// import { isNum } from './function';

class Character {
  constructor(type) {
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.type = 'type';
    this.attack = 25;
    this.defence = 25;
    this.powerMode = 0;
    this.attackCounter = 0;
  }

  set inAttack(mode) {
    if (mode === 'powerMode') {
      if (this.powerMode === 0) {
        this.powerMode += 1;
      }
    }
  }

  get inAttack() {
    if ((this.powerMode === 1) && (this.health > 0)) {
      if (this.attackCounter === 0) {
        this.attackCounter += 1;
        this.attack = this.attack * 2;
        this.defence = this.defence * 2;
        this.health = this.health * 2;
      } else if (this.attackCounter === 3) {
        this.attackCounter += 1;
        this.attack = this.attack / 2;
        this.defence = this.defence / 2;
        this.health = this.health / 2;
      } else {
        this.attackCounter += 1;
      }
    }
  }
}

const hero = new Character('Bowman');
// console.log(hero);


// hero.inAttack = 'powerMode';
hero.inAttack;


console.log(hero);
