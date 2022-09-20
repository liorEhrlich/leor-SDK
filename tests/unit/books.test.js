const axios = require("axios");
const { default: Controller } = require("../../src/Controller");

jest.mock("axios");

test("test get function", async () => {
  const books = ["The Great Gatsby", "Moby Dick", "War and Peace"];
  const resp = { data: books };
  axios.get.mockResolvedValue(resp);

  const mock = {
    get: jest.fn(() => Promise.resolve({ data: books })),
  };

  const testClient = new Controller("books", mock);
  return testClient.get().then((data) => expect(data).toEqual(books));
});
