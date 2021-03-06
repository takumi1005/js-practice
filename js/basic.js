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

// 条件分岐 if
const score = 40;

if (score >= 80) {
  console.log("Great!");
} else if (score >= 60) {
  console.log("Good.");
} else {
  console.log("OK...");
}

// 条件演算子
const score = 85;
// 条件式        trueの処理               falseの処理
score >= 80 ? console.log("Great!") : console.log("Good.");

// 論理演算子
const score = 60;
const name = "taguti";

// if (score >= 50) {
//   if (name === "taguti") {
//     console.log("Good job!");
//   }
// }

// && なおかつ（AND）
// || もしくは（OR）
// ! 〜ではない（NOT）
if (score >= 50 && name === "taguti") {
  console.log("Good job!");
}

// switch文
const signal = "pink";
switch (signal) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution!");
    break;
  case "blue":
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Wrong signal!");
    break;
}

// for文
for (let i = 1; i <= 10; i++) {
  // console.log("hello");
  // console.log("hello" + i);
  console.log(`hello ${i}`);
}

// while文
// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }
let hp = -50;

do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);

// continueとbreak
for (let i = 1; i <= 10; i++) {
  // if (i === 4) {
  // if (i % 3 === 0) {
  // continue;  条件の処理をスキップ
  // }
  if (i === 4) {
    break; //以降の処理を止める
  }
  console.log(i);
}

// 関数で処置をまとめる
function showAd() {
  console.log("----------");
  console.log("--- Ad ---");
  console.log("----------");
}

showAd();
console.log("Tom is great!");
console.log("Bob is great!");
showAd();
console.log("Steve is great!");
console.log("Richard is great!");
showAd();

// 引数を使う
function showAd(message = "Ad") {
  // 仮引数
  console.log("----------");
  console.log(`--- ${message} ---`);
  console.log("----------");
}

showAd("Header Ad"); // 実引数
console.log("Tom is great!");
console.log("Bob is great!");
// showAd('Ad');
showAd();
console.log("Steve is great!");
console.log("Richard is great!");
showAd("Footer Ad");

// return
function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}
// sum(1, 2, 3);
// sum(3, 4, 5);
const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

// 関数式
const sum = function (a, b, c) {
  return a + b + c;
};
const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);

// アロー関数
// const sum = (a, b, c) => a + b + c;
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a){
//   return a * 2;
// };
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const double = (a) => a * 2;
console.log(double(12));

// スコープについて
const x = 2;
function f() {
  const x = 1; //こちらが優先
  console.log(x);
}
f();
console.log(x);
*/
// コードをブロックで囲む
{
  const x = 100;
  console.log(x);
}
