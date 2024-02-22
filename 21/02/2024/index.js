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
// }t

// Find loop / Circle

// homeworks

const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
