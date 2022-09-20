const TestClient = require("../../src/index");
const { EXPECTED_CHARACTERS } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

const TEST_SUBJECT_ID = '5cd99d4bde30eff6ebccfc1f'
const TEST_SUBJECT_NAME = 'Bain'

test("test get characters call", async () => {
  const data = await testClient.characters.get();
  const parsedData = JSON.parse(data);
  const characters = parsedData.docs.map(({ name }) => name);

  expect(characters).toEqual(EXPECTED_CHARACTERS);
});

test("test get character by id call", async () => {
  const data = await testClient.characters.get({id: TEST_SUBJECT_ID})
  const parsedData = JSON.parse(data);
  const character = parsedData.docs.map(({ name }) => name);

  expect(character).toEqual([TEST_SUBJECT_NAME]);
});