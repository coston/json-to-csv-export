import { csvToJson } from '../src/index'

const mockData = `
id,First Name,Last Name,Email,Gender,IP Address
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
25,"Paulie","Steffens","psteffenso@washingtonpost.com","Female","115.83.208.158"
`

const validJson = `[{"id,First Name,Last Name,Email,Gender,IP Address":"1,Blanch,Elby,belby0@bing.com,Female,112.81.107.207"},{"id,First Name,Last Name,Email,Gender,IP Address":"2,Gilli,Ebourne,gebourne1@cornell.edu,Female,175.193.73.246"},{"id,First Name,Last Name,Email,Gender,IP Address":"3,Barny,Curzon,bcurzon2@forbes.com,Male,122.156.241.94"},{"id,First Name,Last Name,Email,Gender,IP Address":"4,Ari,Bunting,abunting3@weibo.com,Male,93.148.45.9"},{"id,First Name,Last Name,Email,Gender,IP Address":"5,Ogden,Pendrid,opendrid4@google.co.uk,Male,215.55.19.27"},{"id,First Name,Last Name,Email,Gender,IP Address":"6,Eleni,Waryk,ewaryk5@mit.edu,Female,26.250.200.175"},{"id,First Name,Last Name,Email,Gender,IP Address":"7,Nicko,Apted,napted6@gov.uk,Male,217.196.11.166"},{"id,First Name,Last Name,Email,Gender,IP Address":"8,Kaitlin,Fishbourn,kfishbourn7@w3.org,Female,120.69.29.99"},{"id,First Name,Last Name,Email,Gender,IP Address":"9,Bradan,Kilgrew,bkilgrew8@parallels.com,Male,165.16.150.204"},{"id,First Name,Last Name,Email,Gender,IP Address":"10,Samuele,Vina,svina9@usa.gov,Male,22.13.125.114"},{"id,First Name,Last Name,Email,Gender,IP Address":"11,Blinny,Avery,baverya@nature.com,Female,134.110.245.23"},{"id,First Name,Last Name,Email,Gender,IP Address":"12,Carmen,Grishanov,cgrishanovb@cloudflare.com,Female,222.115.116.167"},{"id,First Name,Last Name,Email,Gender,IP Address":"13,Crissie,Burgise,cburgisec@dmoz.org,Female,243.236.213.196"},{"id,First Name,Last Name,Email,Gender,IP Address":"14,Teddy,Selvey,tselveyd@salon.com,Female,3.181.206.80"},{"id,First Name,Last Name,Email,Gender,IP Address":"15,Mella,Jeroch,mjeroche@opera.com,Female,11.48.186.157"},{"id,First Name,Last Name,Email,Gender,IP Address":"16,Reta,Corlett,rcorlettf@etsy.com,Female,190.126.162.29"},{"id,First Name,Last Name,Email,Gender,IP Address":"17,Abrahan,Gillebride,agillebrideg@jugem.jp,Male,72.73.73.144"},{"id,First Name,Last Name,Email,Gender,IP Address":"18,Windham,Haines,whainesh@parallels.com,Male,176.227.20.189"},{"id,First Name,Last Name,Email,Gender,IP Address":"19,Lorianna,Thumann,lthumanni@pcworld.com,Female,33.124.212.69"},{"id,First Name,Last Name,Email,Gender,IP Address":"20,Rockwell,Ramsted,rramstedj@mysql.com,Male,150.166.66.85"},{"id,First Name,Last Name,Email,Gender,IP Address":"21,Mercy,Hearsey,mhearseyk@google.com,Female,101.230.251.176"},{"id,First Name,Last Name,Email,Gender,IP Address":"22,Wesley,Dursley,wdursleyl@ebay.co.uk,Male,238.109.146.5"},{"id,First Name,Last Name,Email,Gender,IP Address":"23,Margareta,Davioud,mdavioudm@addthis.com,Female,41.94.141.172"},{"id,First Name,Last Name,Email,Gender,IP Address":"24,Trish,Emerson,temersonn@jalbum.net,Female,137.24.161.213"},{"id,First Name,Last Name,Email,Gender,IP Address":"25,Paulie,Steffens,psteffenso@washingtonpost.com,Female,115.83.208.158"}]`.trim()

const { data, error } = csvToJson(mockData, 'jest-export.csv', ',')

test('we have the correct json data', () => expect(data).toBe(validJson))
test('we have no errors', () => expect(error).toBe(null))

export default mockData