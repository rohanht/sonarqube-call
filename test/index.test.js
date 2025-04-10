const { greet, add } = require('../src/index');

describe('Greet function', () => {
  test('returns default greeting', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('returns personalized greeting', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});

describe('Add function', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
