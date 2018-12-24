import { UnauthorizedError, PermissionError } from "./errors";

export const checkAdmin = user => {
  if (!user.role) {
    throw new UnauthorizedError()
  } else if (user.role !== 'admin') {
    throw new PermissionError()
  }
}

export const checkUser = user => {
  if (!user.role) {
    throw new UnauthorizedError()
  }
}

export const success = msg => {
  return {
    success: true,
    msg
  }
}

export const fail = msg => {
  return {
    success: false,
    msg
  }
}