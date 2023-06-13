const RESOURCE = "/posts";

export default ($axios) => ({
  async getAll(params) {
    return await $axios.get(RESOURCE, { params });
  },
  async getById(id, params) {
    return await $axios.get(RESOURCE + "/" + id, { params });
  },
  async create(model) {
    return await $axios.post(RESOURCE, model);
  }
});
