import objectQuery from "./object";

const { getObjects: getUsers, getObject: getUser } = objectQuery("User");
const { getObjects: getPosts, getObject: getPost } = objectQuery("Post");

export default {
  getUsers: getUsers({ auth: true, roles: ["admin"] }),
  getUser: getUser({ auth: true, roles: ["admin"] }),
  getPosts: getPosts(),
  getPost: getPost()
};
