import play from '../app';

test('testPlay', () => {
  const received = 'test';
  expect(play()).toBe(received);
});
