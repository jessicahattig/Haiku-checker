import Haiku from '../src/js/haiku.js';

describe('Haiku', () => {
  let haiku;

beforeEach(() => {
  haiku = new Haiku(7, 5 ,7);
});

test('should correctly create 3 lines for a haiku ', () => {
  expect(haiku.lineNum1).toEqual(7);
  expect(haiku.lineNum2).toEqual(5);
  expect(haiku.lineNum3).toEqual(7);
  });
});

// test('should correctly have 7 syllabuls for first line, 5 syllabuls for second line and 7 syllabuls for third line', () => {
//   expect(lineNum1.numberSyllables).toEqual(7);
//   expect(lineNum2.numberSyllables).toEqual(5);
//   expect(lineNum3.numberSyllables).toEqual(7);
//   });
// });

//   var syllableCount = word.match(/[aeiouy]{1,2}/gi).length;




// describe('Rectangle', () => {
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });

//   test('should correctly get the area of a rectangle object', () => {
//expect(rectangle.getArea()).toEqual(15);
//   });
// });
