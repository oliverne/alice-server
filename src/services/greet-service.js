export class Greet {
  constructor(name = "World") {
    this.name = name;
  }

  sayHello() {
    return `Hello ${this.name}!`;
  }
}
