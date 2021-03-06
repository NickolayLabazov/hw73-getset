export class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.powerMode = false;
    this.attackCounter = 0;
  }

  doAttack() {
    if (this.attackCounter === 3) {
      this.powerMode = false;
    }
    if (this.powerMode) {
      this.attackCounter += 1;
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(mode) {
    if (!mode) {
      this._powerMode = mode;
    } else if (this.attackCounter === 0) {
      this._powerMode = mode;
    }
  }

  get health() {
    if (this.powerMode) {
      const health = this._health * 2;
      return health;
    }
    return this._health;
  }

  set health(health) {
    this._health = health;
  }

  get attack() {
    if (this.powerMode) {
      const attack = this._attack * 2;
      return attack;
    }
    return this._attack;
  }

  set attack(attack) {
    this._attack = attack;
  }

  get defence() {
    if (this.powerMode) {
      const defence = this._defence * 2;
      return defence;
    }
    return this._defence;
  }

  set defence(defence) {
    this._defence = defence;
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
