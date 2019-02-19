import {Bowman} from '../src/function';

const hero = new Bowman;

test('Режим выключен, атака 1', () => {
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