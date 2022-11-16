import {
  csvGenerateRow
} from '../src/generate';

test('csv generator correctly handles custom delimiters', () => {
  const mockData = {
    id: 1,
    text: 'Lee Perry'
  };

  expect(csvGenerateRow(mockData, [ 'id', 'text' ], ','))
    .toEqual(
      `1,"Lee Perry"`
    );
});

test('row generator correctly handles data with double-quotes', () => {
  const mockData = {
    id: 1,
    text: 'Lee "Scratch" Perry'
  };

  expect(csvGenerateRow(mockData, [ 'id', 'text' ], ';'))
    .toEqual(
      `1;"Lee ""Scratch"" Perry"`
    );
});
