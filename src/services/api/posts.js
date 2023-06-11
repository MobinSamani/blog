const RESOURCE = "/posts";

export default ($axios) => ({
  async getAll(params) {
    return await $axios.get(RESOURCE, { params });
  },
  async getById(id) {
    return await $axios.get(RESOURCE + "/" + id);
  },
  async create(model) {
    return await $axios.post(RESOURCE, model);
  }
});
