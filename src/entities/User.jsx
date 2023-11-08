export default class User {
  constructor({ user, password }) {
    this.id = Math.floor(Math.random() * 10000)
    this.user = user
    this.password = password
  }
}


