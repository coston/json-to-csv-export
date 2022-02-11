import { jsonToCsv } from '../src/index'

const mockData = [
  {
    id: 1,
    'First Name': 'Blanch',
    'Last Name': 'Elby',
    Email: 'belby0@bing.com',
    Gender: 'Female',
    'IP Address': '112.81.107.207',
  },
  {
    id: 2,
    'First Name': 'Gilli',
    'Last Name': 'Ebourne',
    Email: 'gebourne1@cornell.edu',
    Gender: 'Female',
    'IP Address': '175.193.73.246',
  },
  {
    id: 3,
    'First Name': 'Barny',
    'Last Name': 'Curzon',
    Email: 'bcurzon2@forbes.com',
    Gender: 'Male',
    'IP Address': '122.156.241.94',
  },
  {
    id: 4,
    'First Name': 'Ari',
    'Last Name': 'Bunting',
    Email: 'abunting3@weibo.com',
    Gender: 'Male',
    'IP Address': '93.148.45.9',
  },
  {
    id: 5,
    'First Name': 'Ogden',
    'Last Name': 'Pendrid',
    Email: 'opendrid4@google.co.uk',
    Gender: 'Male',
    'IP Address': '215.55.19.27',
  },
  {
    id: 6,
    'First Name': 'Eleni',
    'Last Name': 'Waryk',
    Email: 'ewaryk5@mit.edu',
    Gender: 'Female',
    'IP Address': '26.250.200.175',
  },
  {
    id: 7,
    'First Name': 'Nicko',
    'Last Name': 'Apted',
    Email: 'napted6@gov.uk',
    Gender: 'Male',
    'IP Address': '217.196.11.166',
  },
  {
    id: 8,
    'First Name': 'Kaitlin',
    'Last Name': 'Fishbourn',
    Email: 'kfishbourn7@w3.org',
    Gender: 'Female',
    'IP Address': '120.69.29.99',
  },
  {
    id: 9,
    'First Name': 'Bradan',
    'Last Name': 'Kilgrew',
    Email: 'bkilgrew8@parallels.com',
    Gender: 'Male',
    'IP Address': '165.16.150.204',
  },
  {
    id: 10,
    'First Name': 'Samuele',
    'Last Name': 'Vina',
    Email: 'svina9@usa.gov',
    Gender: 'Male',
    'IP Address': '22.13.125.114',
  },
  {
    id: 11,
    'First Name': 'Blinny',
    'Last Name': 'Avery',
    Email: 'baverya@nature.com',
    Gender: 'Female',
    'IP Address': '134.110.245.23',
  },
  {
    id: 12,
    'First Name': 'Carmen',
    'Last Name': 'Grishanov',
    Email: 'cgrishanovb@cloudflare.com',
    Gender: 'Female',
    'IP Address': '222.115.116.167',
  },
  {
    id: 13,
    'First Name': 'Crissie',
    'Last Name': 'Burgise',
    Email: 'cburgisec@dmoz.org',
    Gender: 'Female',
    'IP Address': '243.236.213.196',
  },
  {
    id: 14,
    'First Name': 'Teddy',
    'Last Name': 'Selvey',
    Email: 'tselveyd@salon.com',
    Gender: 'Female',
    'IP Address': '3.181.206.80',
  },
  {
    id: 15,
    'First Name': 'Mella',
    'Last Name': 'Jeroch',
    Email: 'mjeroche@opera.com',
    Gender: 'Female',
    'IP Address': '11.48.186.157',
  },
  {
    id: 16,
    'First Name': 'Reta',
    'Last Name': 'Corlett',
    Email: 'rcorlettf@etsy.com',
    Gender: 'Female',
    'IP Address': '190.126.162.29',
  },
  {
    id: 17,
    'First Name': 'Abrahan',
    'Last Name': 'Gillebride',
    Email: 'agillebrideg@jugem.jp',
    Gender: 'Male',
    'IP Address': '72.73.73.144',
  },
  {
    id: 18,
    'First Name': 'Windham',
    'Last Name': 'Haines',
    Email: 'whainesh@parallels.com',
    Gender: 'Male',
    'IP Address': '176.227.20.189',
  },
  {
    id: 19,
    'First Name': 'Lorianna',
    'Last Name': 'Thumann',
    Email: 'lthumanni@pcworld.com',
    Gender: 'Female',
    'IP Address': '33.124.212.69',
  },
  {
    id: 20,
    'First Name': 'Rockwell',
    'Last Name': 'Ramsted',
    Email: 'rramstedj@mysql.com',
    Gender: 'Male',
    'IP Address': '150.166.66.85',
  },
  {
    id: 21,
    'First Name': 'Mercy',
    'Last Name': 'Hearsey',
    Email: 'mhearseyk@google.com',
    Gender: 'Female',
    'IP Address': '101.230.251.176',
  },
  {
    id: 22,
    'First Name': 'Wesley',
    'Last Name': 'Dursley',
    Email: 'wdursleyl@ebay.co.uk',
    Gender: 'Male',
    'IP Address': '238.109.146.5',
  },
  {
    id: 23,
    'First Name': 'Margareta',
    'Last Name': 'Davioud',
    Email: 'mdavioudm@addthis.com',
    Gender: 'Female',
    'IP Address': '41.94.141.172',
  },
  {
    id: 24,
    'First Name': 'Trish',
    'Last Name': 'Emerson',
    Email: 'temersonn@jalbum.net',
    Gender: 'Female',
    'IP Address': '137.24.161.213',
  },
  {
    id: 25,
    'First Name': 'Paulie',
    'Last Name': 'Steffens',
    Email: 'psteffenso@washingtonpost.com',
    Gender: 'Female',
    'IP Address': '115.83.208.158',
  }
]

const validCsv = `id,First Name,Last Name,Email,Gender,IP Address
1,"Blanch","Elby","belby0@bing.com","Female","112.81.107.207"
2,"Gilli","Ebourne","gebourne1@cornell.edu","Female","175.193.73.246"
3,"Barny","Curzon","bcurzon2@forbes.com","Male","122.156.241.94"
4,"Ari","Bunting","abunting3@weibo.com","Male","93.148.45.9"
5,"Ogden","Pendrid","opendrid4@google.co.uk","Male","215.55.19.27"
6,"Eleni","Waryk","ewaryk5@mit.edu","Female","26.250.200.175"
7,"Nicko","Apted","napted6@gov.uk","Male","217.196.11.166"
8,"Kaitlin","Fishbourn","kfishbourn7@w3.org","Female","120.69.29.99"
9,"Bradan","Kilgrew","bkilgrew8@parallels.com","Male","165.16.150.204"
10,"Samuele","Vina","svina9@usa.gov","Male","22.13.125.114"
11,"Blinny","Avery","baverya@nature.com","Female","134.110.245.23"
12,"Carmen","Grishanov","cgrishanovb@cloudflare.com","Female","222.115.116.167"
13,"Crissie","Burgise","cburgisec@dmoz.org","Female","243.236.213.196"
14,"Teddy","Selvey","tselveyd@salon.com","Female","3.181.206.80"
15,"Mella","Jeroch","mjeroche@opera.com","Female","11.48.186.157"
16,"Reta","Corlett","rcorlettf@etsy.com","Female","190.126.162.29"
17,"Abrahan","Gillebride","agillebrideg@jugem.jp","Male","72.73.73.144"
18,"Windham","Haines","whainesh@parallels.com","Male","176.227.20.189"
19,"Lorianna","Thumann","lthumanni@pcworld.com","Female","33.124.212.69"
20,"Rockwell","Ramsted","rramstedj@mysql.com","Male","150.166.66.85"
21,"Mercy","Hearsey","mhearseyk@google.com","Female","101.230.251.176"
22,"Wesley","Dursley","wdursleyl@ebay.co.uk","Male","238.109.146.5"
23,"Margareta","Davioud","mdavioudm@addthis.com","Female","41.94.141.172"
24,"Trish","Emerson","temersonn@jalbum.net","Female","137.24.161.213"
25,"Paulie","Steffens","psteffenso@washingtonpost.com","Female","115.83.208.158"`.replaceAll('\n', '\r\n')

const { error, data } = jsonToCsv(mockData, ',')

test('we have the correct filename', () => expect(error).toBe(null))
test('we have the correct csv data', () => expect(data).toBe(validCsv)) // TODO [BD|02/07/2022] Figure out why the CSV output is always failing.

export default mockData