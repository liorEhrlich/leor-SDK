class Controller {
  constructor(controller_name, http_client) {
    this.name = controller_name;
    this.http_client = http_client;
  }
  /**
   * Get request function
   * @returns {Object} - API response data object
   */
  async get() {
    const { data } = await this.http_client.get(this.name);
    return data;
  }
}

exports.default = Controller;
