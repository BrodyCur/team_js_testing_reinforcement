const teamObj = require('./team.js');

test('Should return an object with name and level passed into it', () => {
  const teamName = 'Unicron';
  const level = 100;
  const result = teamObj(teamName, level);
  const expectation = {'teamName':teamName, 'level':level, 'points':0};
  expect(result).toEqual(expectation);
});

test('Should return an object with undefined values when nothing is passed in', () => {
  const result = teamObj();
  const expectation = {'teamName':undefined, 'level':undefined, 'points':0};
  expect(result).toEqual(expectation);
});

test('Points should remain at 0 even when passing in as a third argument', () => {
  const teamName = 'Unicron';
  const level = 100;
  const result = teamObj(teamName, level, 50);
  const expectation = {'teamName':teamName, 'level':level, 'points':0};
  expect(result).toEqual(expectation);
});
