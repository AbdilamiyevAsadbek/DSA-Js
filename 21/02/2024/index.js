// class Node {
//   constructor(value, prev, tail) {
//     this.value = value
//     this.tail = tail
//     this.prev = prev
//   }
// }

// Push(val) {
//     let node = new Node(val)
//     if(!this.head){
//         this.head = node
//         this.tail = node
//         ++
//     }
//     else{
//         this.tail.next = node
//         node.prev = this.tail
//         this.tail = node
//         ++
//     }
// }

// Find loop / Circle

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
