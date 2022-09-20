const TestClient = require("../../src/index");
const { EXPECTED_MOVIES } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

const TEST_SUBJECT_ID = '5cd95395de30eff6ebccde5a'
const TEST_SUBJECT_NAME = 'The Battle of the Five Armies'

test("test get movies call", async () => {
  const data = await testClient.movies.get();
  const parsedData = JSON.parse(data);
  const movieNames = parsedData.docs.map(({ name }) => name);

  expect(movieNames).toEqual(EXPECTED_MOVIES);
});

test("test get movie by id call", async () => {
  const data = await testClient.movies.get({id: TEST_SUBJECT_ID})
  const parsedData = JSON.parse(data);
  const movie = parsedData.docs.map(({ name }) => name);

  expect(movie).toEqual([TEST_SUBJECT_NAME]);
});