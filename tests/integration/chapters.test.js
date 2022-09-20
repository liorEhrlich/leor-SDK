const TestClient = require("../../src/index");
const { EXPECTED_CHAPTERS } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

const TEST_SUBJECT_ID = '6091b6d6d58360f988133bc6'
const TEST_SUBJECT_NAME = 'Homeward Bound'

test("test get chapters call", async () => {
  const data = await testClient.chapter.get();
  const parsedData = JSON.parse(data);
  const chapters = parsedData.docs.map(({ chapterName }) => chapterName);

  expect(chapters).toEqual(EXPECTED_CHAPTERS);
});

test("test get chapter by id call", async () => {
  const data = await testClient.chapter.get({id: TEST_SUBJECT_ID})
  const parsedData = JSON.parse(data);
  const chapter = parsedData.docs.map(({ chapterName }) => chapterName);

  expect(chapter).toEqual([TEST_SUBJECT_NAME]);
});