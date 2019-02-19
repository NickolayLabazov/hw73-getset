export class Character {
  constructor(type) {
    this.level = 1;
    this.health = 100;
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

export class Bowman extends Character {
  constructor() {
    super();
    this.type = 'Bowman';
  this.attack = 25;
  this.defence = 25;
  }
}