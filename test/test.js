import { Bowman } from '../src/function';

const hero = new Bowman();

test('Режим выключен, атака 1', () => {
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 2', () => {
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 3', () => {
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим выключен, атака 4', () => {
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 1', () => {
  hero.inAttack = 'powerMode';
  const expected = [50, 50, 200];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 2', () => {
  const expected = [50, 50, 200];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 3', () => {
  const expected = [50, 50, 200];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Режим включен, атака 4', () => {
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Попытка повторного включения режима', () => {
  hero.inAttack = 'powerMode';
  hero.inAttack;
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});

test('Попытка включения режима некорректной командой', () => {
  hero.inAttack = 'notPowerMode';
  hero.inAttack;
  const expected = [25, 25, 100];
  const received = hero.inAttack;
  expect(received).toEqual(expected);
});
