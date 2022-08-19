import csvDownload from '../src/index';
import mockData from './__mocks__/mockData';

describe("csvDownload",  () => {

  const _URL = global.URL

  global.URL.createObjectURL = () => 'test/url';

  afterEach(() => {
    global.URL = _URL;
  });


  test('mock data is loaded', () => {
    expect(mockData).toHaveLength(25)
  });

  test('init min config', async() => {
    csvDownload({ data: [] })
  });

  test('with data', async() => {
    let link = undefined
    document.onclick = (e) => {
      link = e.target as HTMLAnchorElement
    }
    csvDownload({ data: mockData })
    expect(link.href).toContain('test/url')
    expect(link.download).toEqual('export.csv')
  });
})


