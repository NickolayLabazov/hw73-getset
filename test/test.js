import Character from '../src/function';

const hero = new Character('Bowman');

test('Режим выключен, атака 1', () => {
  // hero.inAttack = 'powerMode';
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 0, powerMode: 0,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 2', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 0, powerMode: 0,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 3', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 0, powerMode: 0,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 4', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 0, powerMode: 0,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 1', () => {
  hero.inAttack = 'powerMode';
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 200, attack: 50, defence: 50, attackCounter: 1, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 2', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 200, attack: 50, defence: 50, attackCounter: 2, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 3', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 200, attack: 50, defence: 50, attackCounter: 3, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 4', () => {
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 4, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Попытка повторного включения режима', () => {
  hero.inAttack = 'powerMode';
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 5, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});

test('Попытка включения режима некорректной командой', () => {
  hero.inAttack = 'notPowerMode';
  hero.inAttack;
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25, attackCounter: 6, powerMode: 1,
  };
  const received = hero;
  expect(received).toEqual(expected);
});


/* test('Bowman', () => {
  const expected = {
    type: 'Bowman', level: 1, health: 100, attack: 25, defence: 25,
  };

  const received = new Character('Bowman');
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const expected = {
    type: 'Swordsman', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Character('Swordsman');
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const expected = {
    type: 'Zombie', level: 1, health: 100, attack: 40, defence: 10,
  };
  const received = new Character('Zombie');
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const expected = {
    type: 'Daemon', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Character('Daemon');
  expect(received).toEqual(expected);
});

test('Magician', () => {
  const expected = {
    type: 'Magician', level: 1, health: 100, attack: 10, defence: 40,
  };
  const received = new Character('Magician');
  expect(received).toEqual(expected);
});

test('Невалидый ввод', () => {
  expect(() => {
    new Character('Кто-то левый');
  }).toThrow();
});

test('Magician', () => {
  const expected = {
    type: 'Magician', level: 2, health: 100, attack: 12, defence: 48,
  };
  const hero = new Character('Magician');
  hero.levelUp();
  const received = hero;
  expect(received).toEqual(expected);
}); */
