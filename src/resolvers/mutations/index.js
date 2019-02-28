import auth from "./auth";
import objectMutation from "./object";
import postSchema from "../validations/post";
import categorySchema from "../validations/category";

const {
  createObject: createPost,
  deleteObject: deletePost,
  updateObject: updatePost
} = objectMutation("Post");

const {
  createObject: createCategory,
  deleteObject: deleteCategory,
  updateObject: updateCategory
} = objectMutation("Category");

// const {
//   createObject: createContract,
//   deleteObject: deleteContract,
//   updateObject: updateContract,
//   linkObject: linkContactsEmails
// } = objectMutation('Contracts')

export default {
  ...auth,
  createPost: createPost({ auth: true, schema: postSchema }),
  deletePost: deletePost({ auth: true }),
  updatePost: updatePost({ auth: true, schema: postSchema }),
  createCategory: createCategory({ auth: true, schema: categorySchema }),
  deleteCategory: deleteCategory({ auth: true }),
  updateCategory: updateCategory({ auth: true, schema: categorySchema })
  // linkContractsEmails: linkContactsEmails('Emails'),
  // linkEmailsContracts: linkEmailsContacts('Contacts')
};
