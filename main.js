"use strict"

// miso5
// let n = 6;
// let arr = [];
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     let pr = +prompt(`son kiriting ${i}`)
//     arr[i] = pr;
// }
// for (let j = 0; j < arr.length; j++){
//     sum += arr[j];
// }
// console.log(arr);
// console.log(sum);

// misol6
// let n = 5;
// let arr = [];
// for (let i = 0; i <= n; i++) {
//     arr[i] = i;
// }
// arr.reverse()
// console.log(arr);

// let arr = [2, 3, 4, 5, 6, 77, 4];
// let n1 = +prompt("a son");
// let n2 = +prompt('b son kiriting');
// let sum = 0;
// for (let j = n1; j <= n2; j++) {
//     sum += arr[j]
// }
// console.log(sum);

// /////////////////////////////////////

// let n = [1, 2, 3, 4, 5, 6, 67, 8];
// for (let i = 0; i <= n.length; i++){
//     if (n[i] % 2 == 1) {
//         console.log(n[i]);
//     }
// }
// console.log(n);


// misol1
// let n = +prompt("a son kiriting");
// let arr = [];
// for (let i = 0; i <= n; i++){
//     arr[i]=i
// }
// console.log(arr);

// mislo2
// let n = 5;
// let arr = [];
// for (let i = 0; i <= n; i++){
//     if (i % 2 == 0) {
//         arr[i] = i

//     }
// } console.log(arr);
// misol3
// let a = 10;
// let sum = 0;
// let arr = [];
// for (let i = 0; i <= a; i++) {
//     sum += i
// }
// console.log(sum);
// misol4
// let a = 10;
// let arr = [];
// let num1 = 0;
// let num2 = 0;

// for (let i = 0; i <= a; i++) {
//     arr[i] = i;
//     if (i % 2 == 0) {
//         num1 += arr[i]
//     } else {
//         num2 += arr[i]
//     }
// }
// console.log(arr);
// console.log(num1);
// console.log(num2);
// console.log(num2-num1);

// misol5
// let n = +prompt("a son kiriting");
// let arr = [];
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     arr[i] = i
//     sum += arr[i]
// }
// console.log(arr);
// console.log(sum);

// misol6
// let a = 12;
// let arr = [];
// for (let i = 0; i < a; i++){
//     arr[i] = i;
// }
// arr.reverse()
// console.log(arr);



// misol7
// let massag = "sonlarni o'sish tartibida yozing yoki kamayish tartibida yozing";
// alert(massag)
// let ag1 = +prompt(`kamolni  yoshini kiriting`);
// let ag2 = +prompt("G'oppaorni yoshini kiriting")
// let ag3 = +prompt("Lola yoshini kiriting")
// let arr1 = [ag1, "kamol"];
// let arr2 = [ag2, "g'oppor"];
// let arr3 = [ag3, "lola"];

// if (arr1[0] > arr2[0]) {
//     let ages = arr1[0] - arr2[0]
//     let ages1 = arr1[0] - arr3[0]
//     console.log(`${arr2[1] } va ${arr1[1]} orasida ${ages} yosh farqi bor ekan va  ${arr3[1]} va ${arr1[1]} orasida ${ages1} yosh farqi bor  ekan `);
// } else if (arr1[0] < arr2[0]) {
//     let ages2 = arr2[0] - arr1[0]
//     let ages3 = arr3[0] - arr1[0]

//     console.log(`${arr1[1]}  va ${arr2[1]} orasida ${ages2} yosh farqi bor ekan va  ${arr1[1]} va ${arr3[1]} orasida ${ages3} yosh farqi bor ekan`);
// }

// misol8
// let arr = [1, 2, 5, 865, 32, 876, 32476, 54, 7563];
// let pm1 = 2
// let pm2 = 4
// let sum = 0;
// for (let i = pm1; i <= pm2; i++){
//     sum +=arr[i]
// }
// console.log(sum);
// misol9
// let n = 8;
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     if (i % 2 == 0) {
//         sum = i
//     }
// }
// console.log(sum);

// misol10

// let n = 8;
// let sum = 0;
// for (let i = n; i >= 0; i--){
//     if (i % 2 == 0) {
//         sum = i
//     }
// }
// console.log(sum);


// misol11
// let n = 8;
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     if (i % 2 == 1) {
//         sum = i
//     }
// }
// console.log(sum);


// misol12

// let arr = [2,4,56,89,10,23,45,69];
// let sum = 0;
// let arrLength = arr.length;
// for (let i = 0; i < arr.length; i++){
//     (sum += arr[i]) / arrLength
// }
// console.log(sum / arrLength);
// misol13

// misol 15
// let arr = [2, 12, 34, 23, 4, 5, 78];
// let arrToq = [];
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 == 0) {
//         continue
//     }
//     arrToq.push(arr[i])
// }
// console.log(arrToq);
// misol17 bir birig aoxshashlarini olib beruvchi dastur
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3];

// function findSameNumber(arr1, arr2) {
//     for (let i of arr1) {
//         for (let j of arr2) {
//             i == j ?console.log(i) : console.log();;
//         }
//     }
// }
// findSameNumber(arr1,arr2)

// 18misol
// let n = 9;
// let arr = [];
// for (let i = 0; i <= n; i++){
//     let prompt = +prompt(`son kiriting ${i}`);
//     arr[i] = prompt;
// }
// console.log(arr);

// 19 misol
// let n = 6;
// let arr = [];
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     let pr = +prompt(`son kiriting ${i}`)
//     arr[i] = pr;
// }
// for (let j = 0; j < arr.length; j++){
//     sum += arr[j];
// }
// console.log(arr);
// console.log(sum);

// misol20

// let n = 6;
// let arr = [];
// for (let i = 0; i <= n; i++){
//     let pr = +prompt(`son kiriting ${i} `)
//     arr[i] = pr;
// }
// let isOdd0reEvenNumber = prompt(`Enter Toq or Juft !!!`)
// function isOdd() {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] % 2 == 1 ? console.log(arr[i] ) : [];
//     }
// } function isEven() {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] %2 ==0 ? console.log(arr[i]) : [];
//     }
// }
// if (isOdd0reEvenNumber == 'toq') {
//     isOdd()
// } else if (isOdd0reEvenNumber == 'juft') {
//     isEven()
// } else {
//     console.log('Error');
// }


// misol21

// let arr = [2, 3, 4, 5, 78, 45, 23, 2];
// function findLestElement() {
//     console.log(arr[arr.length - 1]);
// }
// findLestElement()


// misol22

// const arr = [1, 2, 2, 3, 4, 2, 43];
// const toFindDublicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const dublicateElements = toFindDublicates(arr);
// console.log(dublicateElements);