const { Axios } = require("axios");
require("dotenv").config();

const {
  LOTR_BASE_API,
  BOOKS_ENDPOINT,
  MOVIES_ENDPOINT,
  CHARACTERS_ENDPOINT,
  QUOTE_ENDPOINT,
  CHAPTER_ENDPOINT,
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

    this.books = new Controller(
      BOOKS_ENDPOINT,
      this.axiosClient
    );

    this.movies = new Controller(
      MOVIES_ENDPOINT,
      this.axiosClient
    );

    this.characters = new Controller(
      CHARACTERS_ENDPOINT,
      this.axiosClient
    );

    this.quote = new Controller(
      QUOTE_ENDPOINT,
      this.axiosClient
    );

    this.chapter = new Controller(
      CHAPTER_ENDPOINT,
      this.axiosClient
    );
  }
}

module.exports = Client;
