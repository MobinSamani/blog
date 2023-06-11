import posts from "./posts.js";

export default ($axios) => ({
  posts: posts($axios)
});
