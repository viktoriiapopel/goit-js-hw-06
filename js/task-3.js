class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(builder) {
    this.#value = this.#value + builder;
  }
  padStart(builder) {
    this.#value = builder + this.#value;
  }
  padBoth(builder) {
    this.#value = builder + this.#value + builder;
  }
}












const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

