import { a1ToIndex, indexToA1 } from './convertCoords';

it('turns an index into a1 notation', () => {
  console.log(a1ToIndex('A1'))
  expect(a1ToIndex('A1')).toEqual(0);
});

it('turns a1 notation into an index', () => {
  expect(indexToA1(0)).toEqual('A1');
})
