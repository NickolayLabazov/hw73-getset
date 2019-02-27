import { Bowman } from '../src/function';

const hero = new Bowman();

test('Режим выключен, атака 1', () => {
  const expected = 25;
  hero.doAttack();
  const received = hero.attack;
  expect(received).toBe(expected);
});

test('Режим выключен, атака 2', () => {
  const expected = 25;
  hero.doAttack();
  const received = hero.defence;
  expect(received).toBe(expected);
});

test('Режим выключен, атака 3', () => {
  const expected = 100;
  hero.doAttack();
  const received = hero.health;
  expect(received).toBe(expected);
});

test('Режим включен, атака 1', () => {
  hero.powerMode = true;
  const expected = 50;
  hero.doAttack();
  const received = hero.attack;
  expect(received).toBe(expected);
});

test('Режим включен, атака 2', () => {
  const expected = 50;
  hero.doAttack();
  const received = hero.defence;
  expect(received).toBe(expected);
});

test('Режим включен, атака 3', () => {
  const expected = 200;
  hero.doAttack();
  const received = hero.health;
  expect(received).toBe(expected);
});

test('Режим включен, атака 4', () => {
  const expected = 100;
  hero.doAttack();
  const received = hero.health;
  expect(received).toBe(expected);
});

test('Попытка повторного включения режима', () => {
  hero.powerMode = true;
  const expected = 25;
  hero.doAttack();
  const received = hero.attack;
  expect(received).toBe(expected);
});
