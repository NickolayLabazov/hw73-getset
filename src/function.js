export class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.powerMode = false;
    this.attackCounter = 0;
  }

  attackCount() {
    if (this.powerMode === true) {
      this.attackCounter += 1;
    }
    if (this.attackCounter === 4) {
      this.powerMode = false;
    }
  }

  set inAttack(mode) {
    if ((this.powerMode === false) && (this.attackCounter === 0)) {
      if (mode === true) {
        this.powerMode = mode;
      }
    }
  }

  get getHealth() {
    if (this.powerMode) {
      const health = this.health * 2;
      return health;
    }
    return this.health;
  }

  get getAttack() {
    if (this.powerMode) {
      const attack = this.attack * 2;
      return attack;
    }
    return this.attack;
  }

  get getDefence() {
    if (this.powerMode) {
      const defence = this.defence * 2;
      return defence;
    }
    return this.defence;
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
