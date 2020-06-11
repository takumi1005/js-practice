"use strict";

/*
console.log("Hello World");

// \nで改行\tでタブを作成できる
console.log("hel\nlo wor\tld");
// 文字列の連結
console.log("hello" + "world");


// 数値の計算
// 足し算
console.log(10 + 3);
// 引き算
console.log(10 - 3);
// 掛け算
console.log(10 * 3);
// 割り算
console.log(10 / 3);
// 余り
console.log(10 % 3);
// べき乗
console.log(10 ** 3); // 1000
// 計算の優先度
console.log(2 + 10 * 3); // 32
console.log((2 + 10) * 3); // 36

// 定数を使用
const price = 150;

console.log(price * 140);
console.log(price * 160);

// 変数の使用
let price = 150;
price = 170;
console.log(price * 140);
console.log(price * 160);

// 変数の計算
let praice = 500;
// price = price + 100;
price += 100; // 600

// price = price * 2;
price *= 2; // 1200

// price = price + 1;
// price += 1;
price++; // 1201

// price -= 1;
price--; // 1200

console.log(price);


// データ型について  typeofを使って型を確認出来る
console.log(typeof "hello");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);


// 数字からなる文字列
// console.log('5' * 3);  掛け算される
// console.log('5' - '3');  引き算される
// console.log('5' + 3);  連結され53と出力される
// console.log(parseInt('5', 10) + 3);  数値型に変換され8と出力される
// console.log(parseInt('hello', 10));  NaNと出力される

// 比較演算子
const price = 1200;
// console.log(price > 1000); // true
// console.log(price < 1000); // false
// console.log(price >= 1000); // true
// console.log(price <= 1000); // false
// console.log(price === 1000); // false
// console.log(price !== 1000); // true

// false <- 0, null, undefined, '', false
// true <- それ以外
console.log(Boolean(0));
console.log(Boolean("hello"));
*/

// 条件分岐 if
const score = 40;

if (score >= 80) {
  console.log("Great!");
} else if (score >= 60) {
  console.log("Good.");
} else {
  console.log("OK...");
}
