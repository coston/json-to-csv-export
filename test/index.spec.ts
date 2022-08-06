import csvDownload from '../src/index';
import mockData from './__mocks__/mockData';

describe("csvDownload",  () => {
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
    expect(link.href).toContain('data:text/csv;charset=utf-8;;base64,')
    const encodedCsv = link.href.replace('data:text/csv;charset=utf-8;;base64,', '')
    expect(Buffer.from(encodedCsv, 'base64').toString('utf-8')).toContain('id;First Name;Last Name;Email;Gender;IP Address')
    expect(link.download).toEqual('export.csv')
  });
})


