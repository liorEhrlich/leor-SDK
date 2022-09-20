class Controller {
  constructor(controller_name, http_client) {
    this.name = controller_name;
    this.http_client = http_client;
  }
  /**
   * Get request function
   * @param {
   * id?: string
   *  } - API response data object
   * @returns {Object} - API response data object
   */
  async get(options) {
    const { name, http_client } = this;
    const url = options?.id ? name + "/" + options.id : name;
    const { data } = await http_client.get(url);
    return data;
  }
}

exports.default = Controller;
