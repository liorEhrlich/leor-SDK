const TestClient = require("../../src/index");
const { EXPECTED_BOOKS } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test books call", async () => {
  const data = await testClient.books.get()
  const parsedData = JSON.parse(data);
  const bookNames = parsedData.docs.map(({ name }) => name);

  expect(bookNames).toEqual(EXPECTED_BOOKS);
});
