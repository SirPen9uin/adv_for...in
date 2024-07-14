import sum from '../basic';
import orderByProps from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('sorting', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40
  };
  expect(orderByProps(obj, ['name', 'level', 'beard'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    ]);
});

test('sorting with an empty array', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(obj, [])).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});