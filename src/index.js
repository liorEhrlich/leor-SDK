const { Axios } = require("axios");
require("dotenv").config();

const {
  LOTR_BASE_API,
  BOOKS_ENDPOINT,
  MOVIES_ENDPOINT,
  CHARACTERS_ENDPOINT,
} = require("./constants");
const { default: Controller } = require("./Controller");

class Client {
  constructor(clientAuthKey) {
    this.axiosClient = new Axios({
      baseURL: LOTR_BASE_API,
      headers: {
        Authorization: `Bearer ${clientAuthKey}`,
      },
    });

    this.books_controller = new Controller(
      BOOKS_ENDPOINT,
      this.axiosClient
    );

    this.movies_controller = new Controller(
      MOVIES_ENDPOINT,
      this.axiosClient
    );

    this.characters_controller = new Controller(
      CHARACTERS_ENDPOINT,
      this.axiosClient
    );
  }
}

module.exports = Client;
