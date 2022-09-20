const axios = require("axios");
const { default: Controller } = require("../../src/Controller");

jest.mock("axios");

test("test get movies function", async () => {
  const movies = ["The Shawshank Redemption", "Pulp Fiction", "Forrest Gump"];
  const resp = { data: movies };
  axios.get.mockResolvedValue(resp);

  const mock = {
    get: jest.fn(() => Promise.resolve({ data: movies })),
  };

  const testClient = new Controller("movies", mock);
  return testClient.get().then((data) => expect(data).toEqual(movies));
});
