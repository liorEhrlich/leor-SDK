const { Axios } = require("axios");
const {
  LOTR_BASE_API,
  BOOKS_ENDPOINT,
  MOVIES_ENDPOINT,
  CHARACTERS_ENDPOINT,
} = require("./constants");

class Client {
  constructor(clientAuthKey) {
    this.authKey = clientAuthKey;
    this.init_axios();
  }

  init_axios() {
    this.axiosClient = new Axios({
      baseURL: LOTR_BASE_API,
      headers: {
        Authorization: `Bearer ${this.authKey}`,
      },
    });
  }

  async getAllBooks() {
    return this.axiosClient.get(BOOKS_ENDPOINT);
  }

  async getAllMovies() {
    return this.axiosClient.get(MOVIES_ENDPOINT);
  }

  async getAllCharacters() {
    return this.axiosClient.get(CHARACTERS_ENDPOINT);
  }
}

module.exports = Client;
