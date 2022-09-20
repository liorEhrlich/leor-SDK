const TestClient = require("../../src/index");
const {  EXPECTED_QUOTES } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test quote call", async () => {
  const data = await testClient.quote.get()
  const parsedData = JSON.parse(data);
  const quotes = parsedData.docs.map(({dialog}) => dialog);
  // await fs.writeFile('./q.json', JSON.stringify(quotes,undefined,2),()=> console.log('jalawam'))

  expect(quotes).toEqual(EXPECTED_QUOTES);
});
