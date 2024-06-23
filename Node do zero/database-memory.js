import { randomUUID } from "node:crypto";

export default class DataBaseMemory {
  #items = new Map();

  list() {
    return Array.from(this.#items.values());
  }

  create(videos) {
    const idItem = randomUUID();
    this.#items.set(idItem, videos);
  }

  update(id, videos) {
    this.#items.set(id, videos);
  }

  delete(id) {
    this.#items.delete(id);
  }
}
