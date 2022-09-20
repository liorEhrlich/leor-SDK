const TestClient = require("../../src/index");
const { EXPECTED_MOVIES } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test movies call", async () => {
  const data = await testClient.getAllMovies();
  const parsedData = JSON.parse(data);
  const movieNames = parsedData.docs.map(({ name }) => name);

  expect(movieNames).toEqual(EXPECTED_MOVIES);
});
