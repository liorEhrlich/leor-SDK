const axios = require("axios");
const { default: Controller } = require("../../src/Controller");

jest.mock("axios");

test("test get characters function", async () => {
  const characters = ["Hannibal Lecter", "Captain Jack Sparrow", "James Bond"];
  const resp = { data: characters };
  axios.get.mockResolvedValue(resp);

  const mock = {
    get: jest.fn(() => Promise.resolve({ data: characters })),
  };

  const testClient = new Controller("characters", mock);
  const data = await  testClient.get()
  return expect(data).toEqual(characters);
});
