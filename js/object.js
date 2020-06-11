"use strict";
// 配列を作成
/*
{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;
  // ↓↓↓↓↓↓↓↓↓
  const scores = [80, 90, 40];
  console.log(scores);
}

// 配列にアクセス
{
  const scores = [80, 90, 40];
  // console.log(scores[1]);

  // scores[2] = 44;
  // console.log(scores);

  // scores = 10;

  console.log(scores.length);
}

// 配列とループ処理
{
  const scores = [80, 90, 40, 70];

  // for (let i = 0; i < 3; i++) {
  // 下記のようにすれば配列の中身が増えても対応できる
  for (let i = 0; i < scores.length; i++)
    console.log(`Score ${i}: ${scores[i]}`);
}

// 配列の要素を変更
{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50); //配列の最後に要素を追加
  scores.shift(); //最初の要素を削除
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

// splice()で配列を変更
{
  const scores = [80, 90, 40, 70];
  scores.splice(1, 1, 40, 50);
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

// スプレッド構文
{
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores]; //...を使うことで別の配列を展開できる
  // console.log(scores);

  function sum(a, b) {
    console.log(a + b);
  }
  sum(...otherScores);
}
*/
// 分割代入
{
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  const [a, b, ...others] = scores;
  console.log(a);
  console.log(b);
  console.log(others);

  let x = 30;
  let y = 70;
  [x, y] = [y, x]; //xとyの値を入れ替え出来る
  console.log(x);
  console.log(y);
}
