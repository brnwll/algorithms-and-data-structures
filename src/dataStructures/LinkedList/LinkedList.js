export class LinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    if (values.length) {
      this.head = this.Node(values[0]);
      this.tail = this.head;
      for (let i = 1; i < values.length; i++) {
        this.tail.next = this.Node(values[i]);
        this.tail = this.tail.next;
      }
    }
  }

  Node = (value) => ({ value, next: null });

  push = (value) => {
    const node = this.Node(value);
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
  };

  pop = () => {
    let curr = this.head;
    while (curr.next !== this.tail) curr = curr.next;
    curr.next = null;
    this.tail = curr;
  };

  shift = (value) => {
    const node = this.Node(value);
    node.next = this.head;
    this.head = node;
  };

  unshift = () => {
    this.head = this.head.next;
  };

  insertAt = (value, index) => {
    const node = this.Node(value);
    let curr = this.head;
    let i = 0;
    while (i < index - 1) {
      curr = curr.next;
      i++;
    }
    node.next = curr.next;
    curr.next = node;
  };

  deleteAt = (index) => {
    let curr = this.head;
    let i = 0;
    while (i < index - 1) {
      curr = curr.next;
      i++;
    }
    curr.next = curr.next.next;
  };

  delete = (value) => {
    let curr = this.head;
    while (curr.next.value !== value) curr = curr.next;
    curr.next = curr.next.next;
  };

  find = (value) => {
    let curr = this.head;
    while (curr.value !== value) curr = curr.next;
    return curr;
  };

  toString = () => {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.value + " → ";
      curr = curr.next;
    }
    return str + curr;
  };

  log = () => {
    let message = (c) => `${c.value} -> ${c.next ? c.next.value : null}`;
    let curr = this.head;
    while (curr) {
      console.log(message(curr));
      curr = curr.next;
    }
    console.log("-----------------");
  };
}
