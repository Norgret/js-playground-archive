class Node {
  constructor(data = null, key = null) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = new Node();
    this.size = 0;
  }


  insert(...elements) {
    let lastNode = this.last();
    for (let el of elements) {
      lastNode.next = new Node(el.data, el.key);
      lastNode = lastNode.next;
      ++this.size;
    }
  }

  // returns true if element was removed; else returns null
  remove(key) {
    let lastNode = this.head;
    this.forEach((node) => {
      if (node.key === key) {
        if (node.next) {
          lastNode.next = node.next;
        }
        else lastNode.next = null;
        --this.size;
      }
      lastNode = lastNode.next;
    });
  }

  // returns true if key exists in list
  contains(key) {
    let node = this.head;
    while (node.next) {
      node = node.next;
      if (node.key === key) return node;
    }
    return null;
  }


  toString() {
    return JSON.stringify(this);
  }


  forEach(fn) {
    let node = this.head;
    while (node.next) {
      node = node.next;
      fn(node);
    }
  }

  first() {
    return this.head.next;
  }

  last() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  at(index) {
    let node = this.head;
    for (let i = 0; i < index; ++i) {
      node = node.next;
    }
    return node;
  }

}