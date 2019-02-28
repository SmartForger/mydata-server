import { UnauthorizedError, PermissionError } from "./errors";

export const checkUser = (user, options) => {
  if (!options || !options.auth) {
    return;
  }

  if (!user || !user.id) {
    throw new UnauthorizedError();
  }

  if (options.roles && options.roles.indexOf(user.role) < 0) {
    throw new PermissionError();
  }
}