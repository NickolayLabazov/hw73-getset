export class Character {
  constructor() {
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
    if ((this.powerMode === 1) && (this.health > 0) && (this.attackCounter < 3)) {
      this.attackCounter += 1;
      const attack = this.attack * 2;
      const defence = this.defence * 2;
      const health = this.health * 2;
      return [attack, defence, health];
    }
    return [this.attack, this.defence, this.health];
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
