const TestClient = require("../../src/index");
const { EXPECTED_CHARACTERS } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

test("test characters call", async () => {
  const data = await testClient.characters.get();
  const parsedData = JSON.parse(data);
  const characters = parsedData.docs.map(({ name }) => name);

  expect(characters).toEqual(EXPECTED_CHARACTERS);
});
