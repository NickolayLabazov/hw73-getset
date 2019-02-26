export class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.mode = false;
    
  }

  powerMode(){
      if (this.mode) {
      this.mode = false;        
    }else{this.mode = true;
      }  
  }

  get health() {
    if (this.mode) {
      const health = this._health * 2;
      return health;
    }
    return this._health;
  }

  set health(health) {
    this._health = health;
  } 

   get attack() {
    if (this.mode) {
      const attack = this._attack * 2;
      return attack;
    }
    return this._attack;
  }

  set attack(attack) {
      this._attack = attack;
    } 

  get defence() {
    if (this.mode) {
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
