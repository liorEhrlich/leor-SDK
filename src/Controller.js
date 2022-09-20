class Controller {
  constructor(controller_name, http_client, child_entity) {
    this.name = controller_name;
    this.http_client = http_client;
    this.child_entity = child_entity;
  }

  /**
   * Create url query params from options
   * @param {
   * limit?: number
   * page?: number
   * offset?: number
   *  } options - Endpoint options object
   * @returns {string} - query params
   */
  #create_query_params(options) {
    if (!options || (!options.limit && !options.page && !options.offset)) {
      return "";
    }
    const { limit, page, offest } = options;

    const searchParams = new URLSearchParams({
      ...(limit && { limit }),
      ...(page && { page }),
      ...(offest && { offest }),
    });

    return "?" + searchParams.toString();
  }

  /**
   * Create url from options
   * @param {
   * id?: string
   * includeChild?: boolean
   *  } options - Endpoint options object
   * @returns {string} - endpoint url
   */
  #create_url_path(options) {
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
   * limit?: number
   * page?: number
   * offset?: number
   *  } options - Endpoint options object
   * @returns {Object} - API response data object
   */
  async get(options) {
    const url =
      this.#create_url_path(options) + this.#create_query_params(options);
    const { data } = await this.http_client.get(url);
    return data;
  }
}

exports.default = Controller;
