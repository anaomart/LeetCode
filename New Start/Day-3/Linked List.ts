class listNode {
  public data: number;
  public next: listNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  public head: listNode | null;
  public size: number;

  constructor(head: listNode | null) {
    this.head = head;
    this.size = 0;
  }

  public print(): void {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  public insertAtEnd(data: number): void {
    if (this.head == null) {
      this.head = new listNode(data);
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    if (temp.next == null) {
      temp.next = new listNode(data);
      this.size++;
    }
  }
  public length(): number {
    let s = 0;
    let temp = this.head;
    while (temp) {
      s++;
      temp = temp.next;
    }
    return s;
  }
  public insertAtHead(data: number): void {
    const node = new listNode(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  public find(val: number): boolean {
    let temp = this.head;
    if (temp?.data == val) {
      return true;
    } else {
      while (temp?.next) {
        if (temp.data == val) return true;
        temp = temp.next;
      }
    }

    return false;
  }
  public reverseLinkedLIst(): listNode | null {
    let prev: listNode | null = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return null;
  }
}

let nodeOne = new listNode(1);

let linkedList = new LinkedList(nodeOne);

linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.insertAtEnd(5);
linkedList.print();
console.log(linkedList.reverseLinkedLIst);
