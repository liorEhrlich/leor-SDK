const TestClient = require("../../src/index");
const { EXPECTED_CHAPTERS } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test chapters call", async () => {
  const data = await testClient.chapter.get();
  const parsedData = JSON.parse(data);
  const chapters = parsedData.docs.map(({ chapterName }) => chapterName);

  expect(chapters).toEqual(EXPECTED_CHAPTERS);
});
