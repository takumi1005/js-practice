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

// forEach()を使ってみる
{
  const scores = [80, 90, 40, 70];
  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });
}

// mapを使う
{
  const prices = [180, 190, 200];

  // const updatePrices = prices.map((price) => {
  //   return price + 20;
  // });
  // 省略すると↓
  const updatePrices = prices.map((price) => price + 20);
  console.log(updatePrices);
}

// filterを使う
{
  const numbers = [1, 4, 7, 8, 10];
  // const evenNumbers = number.filter(number => {
  //   if (number % 2 === 0){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // });
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  console.log(evenNumbers);
}

// オブジェクトを作る
{
  // const point = [100, 180];
  const point = {
    x: 100,
    y: 180,
  };
}

// プロパティを操作する
{
  const point = {
    x: 100,
    y: 180,
  };
  // 数値を変更したい
  point.x = 120;
  // point["x"] = 120;

  console.log(point.x);
  console.log(point["y"]);
  // 座標を追加
  point.z = 90;
  // 座標を削除
  delete point.y;
  console.log(point);
}

// オブジェクトを操作
{
  const otherProps = {
    r: 4,
    color: "red",
  };
  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  // console.log(point);
  const { x, r, ...others } = point;
  console.log(x);
  console.log(r);
  console.log(others);
}

// Object.keys()を使う
{
  const point = {
    x: 100,
    y: 180,
  };
  // const keys = Object.keys(point);
  // keys.forEach((key) => {
  //   console.log(`key: ${key} value: ${point[key]}`);
  // });
  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 50 },
    { x: 40, y: 40 },
  ];
  console.log(points[1].y);
}

// 変数を代入・挙動を確認
{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x); // 5
  // console.log(y); // 1

  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x); // [5, 2]
  console.log(y); // [1, 2]にならない
  // yはxを参照している

  //スプレッド演算子を使えば丸ごとコピーできる
  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x); // [5, 2]
  console.log(y); // [1, 2]になる
}

// 文字列を操作
{
  const str = "hello";
  // 文字列の数を取得
  console.log(str.length); //

  //部分文字列を取得
  // str.substring(開始位置, 終了位置);
  console.log(str.substring(2, 4));

  // 文字列に対して配列のような記法を使うとここの文字にアクセスできる
  console.log(str[1]);
}

// join()､split()を使う
{
  const d = [2019, 11, 14];
  // 配列の間に入れたい文字を指定
  console.log(d.join("/"));

  //文字列を区切り文字の場所で分割し、配列にする
  const t = "17:08:24";
  // console.log(t.split(":"));
  const [hour, minute, second] = t.split(":");
  console.log(hour);
  console.log(minute);
  console.log(second);
}

// 数値を操作
{
  const scores = [10, 3, 9];
  let sum = 0;
  scores.forEach((score) => {
    sum += score; //合計
  });
  const avg = sum / scores.length; //平均
  // console.log(sum);
  // console.log(avg);

  // 小数点切り捨て
  console.log(Math.floor(avg));
  // 小数点切り上げ
  console.log(Math.ceil(avg));
  // 四捨五入
  console.log(Math.round(avg));
  // 小数点の指定した数まで表示
  console.log(avg.toFixed(3));
  // 数値をランダムに生成
  console.log(Math.random());
}

// ランダムな整数値を生成
{
  // console.log(Math.random());

  // 0, 1, 2からランダムな数値を生成したい
  // Math.floor(Math.random() * 3);
  // 0, ..., n 0からnまでのランダムな数値を生成したい
  // Math.floor(Math.random() * (n + 1));
  //min, ..., max minからmaxまでのランダムな数値を生成したい
  // Math.floor(Math.random() * (max + 1 - min)) + min;
  //1~6までのランダムな数値を生成
  console.log(Math.floor(Math.random() * 6) + 1);
}

// 現在日時を扱う
{
  const d = new Date();
  // console.log(d);
  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
}

// 特定の日時を扱う
{
  const d = new Date(2019, 10); //2019/11/01 00:00:00
  d.setHours(10, 20, 30); //2019/11/01 10:20:30
  d.setDate(31); //2019/12/01 10:20:30
  d.setDate(d.getDate() + 3); //2019/12/04 10:20:30
  console.log(d);
}

// alert()､confirm()を使う
{
  // alert("hello");

  const answer = confirm("削除しますか?");
  if (answer) {
    console.log("削除しました");
  } else {
    console.log("キャンセルしました");
  }
}

// setInterval()を使う
{
  let i = 0;
  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(showTime, 1000);
}

//setTimeout()を使う
{
  let i = 0;

  function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if (i > 2) {
      clearTimeout(timeoutId);
    }
  }
  showTime();
}

// 例外処理
{
  // const name = "taguchi";
  const name = 5;
  try {
    console.log(name.toUpperCase()); // 大文字に変換(Stringのみ)
  } catch (e) {
    console.log(e); //String以外が入力されてもそのあとの処理まで実行する
  }
  console.log("Finish!");
}

// メソッドを使う
{
  const posts = [
    {
      text: "JavaScriptの勉強中…",
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // },
      //省略↓
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: "プログラミング楽しい！",
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];

  // show(posts[0]);
  posts[0].show();
  posts[1].show();
}

// クラスの作成
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
  }
  const posts = [
    new Post("JavaScriptの勉強中…"),
    new Post("プログラミング楽しい"),
  ];
  posts[0].show();
  posts[1].show();
}

// カプセル化
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }
    //ここで定義することによって修正がしやすい
    like() {
      this.likeCount++;
      this.show();
    }
  }

  const posts = [
    new Post("JavaScriptの勉強中…"),
    new Post("プログラミング楽しい！"),
  ];

  posts[0].like();
  // 冗長になってしまう
  // posts[0].likeCount++;
  // posts[0].likeCount++;
  // posts[0].likeCount++;
  // posts[0].likeCount++;

  // posts[0].show();
  // posts[1].show();
}

// 静的メソッド
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    // 静的メソッド
    // thisは使えない
    static showInfo() {
      console.log("Post class version 1.0");
    }
  }

  const posts = [
    new Post("JavaScriptの勉強中…"),
    new Post("プログラミング楽しい！"),
  ];

  // posts[0].like();

  Post.showInfo();
}
*/
// クラスの継承
{
  class Post {
    // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post {
    // 子クラス
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post("JavaScriptの勉強中…"),
    new Post("プログラミング楽しい！"),
    new SponsoredPost("3分動画でマスターしよう", "dotinstall"),
  ];

  posts[2].show();
  posts[2].like();
}
