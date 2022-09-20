class Controller {
  constructor(controller_name, http_client, child_entity) {
    this.name = controller_name;
    this.http_client = http_client;
    this.child_entity = child_entity;
  }

  #create_url_path_from_options(options) {
    if (!options || !options.id) {
      return this.name;
    }
    const { id, include_child } = options;

    const url_components = [this.name];

    if (id) {
      url_components.push(id);
    }
    if (include_child && this.child_entity) {
      url_components.push(this.child_entity);
    }
    return url_components.join("/");
  }

  /**
   * Get request function
   * @param {
   * id?: string
   * includeChild?: boolean
   *  } - API response data object
   * @returns {Object} - API response data object
   */
  async get(options) {
    const url = this.#create_url_path_from_options(options);
    const { data } = await this.http_client.get(url);
    return data;
  }
}

exports.default = Controller;
