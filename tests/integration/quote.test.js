const TestClient = require("../../src/index");
const { EXPECTED_QUOTES } = require("./constants");

const { API_KEY } = process.env;
const testClient = new TestClient(API_KEY);

const TEST_SUBJECT_ID = "5cd96e05de30eff6ebcce847";
const TEST_SUBJECT_NAME = "The last pages are for you Sam.";
const TEST_FIRST_QUOTE_IN_CHOSEN_PAGE = "5cd96e05de30eff6ebccebd2";
const CHOSEN_PAGE = 2;

test("test get quote call", async () => {
  const data = await testClient.quote.get();
  const parsedData = JSON.parse(data);
  const quotes = parsedData.docs.map(({ dialog }) => dialog);

  expect(quotes).toEqual(EXPECTED_QUOTES);
});

test("test get quote by id call", async () => {
  const data = await testClient.quote.get({ id: TEST_SUBJECT_ID });
  const parsedData = JSON.parse(data);
  const quote = parsedData.docs.map(({ dialog }) => dialog);

  expect(quote).toEqual([TEST_SUBJECT_NAME]);
});

test("test get quote with page call", async () => {
  const data = await testClient.quote.get({ page: CHOSEN_PAGE });
  const parsedData = JSON.parse(data);
  const first_quote = parsedData.docs[0];

  expect(first_quote.id).toEqual(TEST_FIRST_QUOTE_IN_CHOSEN_PAGE);
});
