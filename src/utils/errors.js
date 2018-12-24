export class InvalidParamsError extends Error {
  constructor(message = '') {
    super(message || 'Invalid params')
    this.name = 'invalid_params'
    this.code = 400
  }
}

export class NotFoundError extends Error {
  constructor(message = '') {
    super(message || 'Not found')
    this.name = 'not_found'
    this.code = 404
  }
}

export class UnauthorizedError extends Error {
  constructor(message = '') {
    super(message || 'Unauthorized error')
    this.name = 'unauthorized'
    this.code = 401
  }
}

export class ServerSideError extends Error {
  constructor(message = '') {
    super(message || 'Server side error')
    this.name = 'internal_server_error'
    this.code = 500
  }
}

export class PermissionError extends Error {
  constructor(message = '') {
    super(message || 'You don\'t have permission')
    this.name = 'permission_denied'
    this.code = 403
  }
}