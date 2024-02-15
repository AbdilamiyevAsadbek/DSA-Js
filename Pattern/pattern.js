// Pattern
// 26ta pattern bor

// 1. Valid Palindrome

// 1-usul ozim ishlaganman
// function Palindrome(str) {
//     return str = str.split('').reverse().join('');
// }

// console.log(Palindrome("aziza"));

// 2-masala
// Sum of three values
// arr = [3, 7, 1, 2, 8, 4, 5]
// target = 20
// result true, false

// function SumOfThreeValues(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === target) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// const arr = [3, 7, 1, 2, 8, 4, 5];
// const target = 20;

// console.log(SumOfThreeValues(arr, target));

// function SumOfThreeValues(arr, target) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length - 2; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;

//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];
//       if (sum === target) {
//         return true;
//       } else if (sum < target) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return false;
// }

// const arr = [3, 7, 1, 2, 8, 4, 5];
// const target = 19;

// console.log(SumOfThreeValues(arr, target));


function DeleteRight(head, n){
    let P1 = head;
    let P2 = head;
    let count = 0;

    while(count < n){
        P1 = P1.next
        count++
    }
    while(P1.next){
        P2.next = P2.next.next
        return head
    }
}