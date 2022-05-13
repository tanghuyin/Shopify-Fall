export default class InternalServerError {
  constructor(message) {
    this.message = message;
    this.statusCode = 500;
  }
}
