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
const ninja = ["5", 6, "3"];
const judge = ninja.every((item) => {
  return typeof item == "number";
});
alert(judge);
