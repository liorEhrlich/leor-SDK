const TestClient = require("../../src/index");
const { EXPECTED_BOOKS, EXPECTED_CHAPTERS_BY_BOOK } = require("./constants");

const TEST_SUBJECT_ID = "5cf58077b53e011a64671583";
const TEST_SUBJECT_NAME = "The Two Towers";
const FIRST_SUBJECT_ASC = "The Fellowship Of The Ring";

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test get books call", async () => {
  const data = await testClient.books.get();
  const parsedData = JSON.parse(data);
  const bookNames = parsedData.docs.map(({ name }) => name);

  expect(bookNames).toEqual(EXPECTED_BOOKS);
});

test("test get book by id call", async () => {
  const data = await testClient.books.get({ id: TEST_SUBJECT_ID });
  const parsedData = JSON.parse(data);
  const book_name = parsedData.docs.map(({ name }) => name);

  expect(book_name).toEqual([TEST_SUBJECT_NAME]);
});

test("test get book chapter call", async () => {
  const data = await testClient.books.get({
    id: TEST_SUBJECT_ID,
    include_child: true,
  });
  const parsedData = JSON.parse(data);
  const chapters = parsedData.docs.map(({ chapterName }) => chapterName);

  expect(chapters).toEqual(EXPECTED_CHAPTERS_BY_BOOK);
});

test("test get books with limit call", async () => {
  const data = await testClient.books.get({ limit: 1 });
  const parsedData = JSON.parse(data);
  const book = parsedData.docs;

  expect(book.length).toEqual(1);
});

test("test get books sorted ascending by name", async () => {
  const data = await testClient.books.get({
    sort: { field: "name", dir: "asc" },
  });
  const parsedData = JSON.parse(data);
  const bookName = parsedData.docs[0].name;

  expect(bookName).toEqual(FIRST_SUBJECT_ASC);
});

test("test get books sorted descending by name", async () => {
  const data = await testClient.books.get({
    sort: { field: "name", dir: "desc" },
  });
  const parsedData = JSON.parse(data);
  const bookName = parsedData.docs[0].name;

  expect(bookName).toEqual(TEST_SUBJECT_NAME);
});
