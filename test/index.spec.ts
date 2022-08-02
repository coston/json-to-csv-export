import csvDownload from '../src/index';
import mockData from './mockData';

test('mock data is loaded', () => {
  expect(mockData).toHaveLength(25)
});

// test('init csvDownload', () => {
//   csvDownload({ data: [] })
//   expect('loader').not.toBeNull();
// });
