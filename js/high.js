// liタグの横幅を足して表示
// $(function() {
//   let li_total = 0;
//   $('li').each(function(index, el) {
//     if (index !== 2) {
//       li_total += $(el).width();
//       $('.anser').text(li_total);
//     }
//   });
// });

// 配列から二桁の要素だけ抜き出す
// let ninja = [2, 34, 561, 5, 14];
// let futaketa = ninja.filter((item) => {
//   return String(item).length == 2;
// });
// alert(futaketa);

// 配列が全て整数かを判断
// const ninja = ["5", 6, "3"];
// const judge = ninja.every((item) => {
//   return typeof item == "number";
// });
// alert(judge);

// 文字数をカウントする関数
// function ninja(str) {
//   return str.length >= 5 ? true : false;
// }
// alert(ninja("こんにちは"));

// 引数の文字列が配列に含まれているかを判断する関数
// const fruits = ["リンゴ", "みかん", "バナナ"];
// function judge(str) {
//   return fruits.indexOf(str) >= 0 ? true : false;
// }
// // alert(judge("リンゴ"));
// alert(judge("メロン"));

// 配列を結合する関数
// const my_array = ["こん", "にち", "は"];
const my_array = [3, 4, 3];
function tasu(my_array) {
  let res = null;

  const array_string = my_array.every((item) => {
    return typeof item == "string";
  });

  if (array_string) {
    res = my_array.join('');
  } else {
    res = my_array.reduce(function(p, c) {
      return p + c;
    });
  }
  return res;
}

alert(tasu(my_array));