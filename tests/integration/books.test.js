const TestClient = require("../../src/index");
const { EXPECTED_BOOKS } = require("./constants");

const TEST_SUBJECT_ID = '5cf58077b53e011a64671583'
const TEST_SUBJECT_NAME = 'The Two Towers'

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test get books call", async () => {
  const data = await testClient.books.get()
  const parsedData = JSON.parse(data);
  const bookNames = parsedData.docs.map(({ name }) => name);

  expect(bookNames).toEqual(EXPECTED_BOOKS);
});

test("test get book by id call", async () => {
  const data = await testClient.books.get({id: TEST_SUBJECT_ID})
  const parsedData = JSON.parse(data);
  const book_name = parsedData.docs.map(({ name }) => name);

  expect(book_name).toEqual([TEST_SUBJECT_NAME]);
});