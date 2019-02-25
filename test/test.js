import { Bowman } from '../src/function';

const hero = new Bowman();

test('Режим выключен, атака 1', () => {
  const expected = 25;
  hero.attackCount();
  const received = hero.getAttack;
  expect(received).toBe(expected);
});

test('Режим выключен, атака 2', () => {
  const expected = 25;
  hero.attackCount();
  const received = hero.getDefence;
  expect(received).toBe(expected);
});

test('Режим выключен, атака 3', () => {
  const expected = 100;
  hero.attackCount();
  const received = hero.getHealth;
  expect(received).toBe(expected);
});

test('Попытка включения режима некорректной командой', () => {
  hero.inAttack = 1;
  const expected = 25;
  hero.attackCount();
  const received = hero.getAttack;
  expect(received).toBe(expected);
});


test('Режим включен, атака 1', () => {
  hero.inAttack = true;
  const expected = 50;
  hero.attackCount();
  const received = hero.getAttack;
  expect(received).toBe(expected);
});

test('Режим включен, атака 2', () => {
  const expected = 50;
  hero.attackCount();
  const received = hero.getDefence;
  expect(received).toBe(expected);
});

test('Режим включен, атака 3', () => {
  const expected = 200;
  hero.attackCount();
  const received = hero.getHealth;
  expect(received).toBe(expected);
});

test('Режим включен, атака 4', () => {
  const expected = 100;
  hero.attackCount();
  const received = hero.getHealth;
  expect(received).toBe(expected);
});

test('Попытка повторного включения режима', () => {
  hero.inAttack = true;
  const expected = 25;
  hero.attackCount();
  const received = hero.getAttack;
  expect(received).toBe(expected);
});
