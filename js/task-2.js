class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
 
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemtoRemove) {
    this.#items = this.#items.filter(item => item !== itemtoRemove);
  }
}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

