import objectQuery from "./object";

const { getObjects: getUsers, getObject: getUser } = objectQuery("User");
const { getObjects: getPosts, getObject: getPost } = objectQuery("Post");
const { getObjects: getCategories, getObject: getCategory } = objectQuery(
  "Category"
);

export default {
  getUsers: getUsers({ auth: true, roles: ["admin"] }),
  getUser: getUser({ auth: true, roles: ["admin"] }),
  getPosts: getPosts(),
  getPost: getPost(),
  getCategories: getCategories(),
  getCategory: getCategory()
};
