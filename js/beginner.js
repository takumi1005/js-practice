// JavaScriptを使ってウィンドウサイズを変数に入れ、アラートを表示
/*
const win_width = window.innerWidth;
alert(win_width);

// 変数を足してアラートに表示
let num1 = 5;
let num2 = 8;
alert(num1 + num2);

// 文字列を足してアラートに表示(特定の文字列は取り除く)
let text1 = "リンゴ・バナナ";
let text2 = "レモン";
let my_fruits = (text1 + text2).replace("バナナ",'');
alert(my_fruits);

// クラス名を取得しアラート表示
$(function(){
  $('li').on('click',function(){
    alert($(this).attr('class'));
  });
});

// アラートを2秒後に出す
setTimeout(() => {
  alert("2秒たちました");
  },2000);

// 配列から値を取得しアラートに表示
let fruits = ["リンゴ", "メロン", "バナナ"];
alert(fruits[1]);

// liのタグの数をアラートに表示
$(function() {
  alert("liタグの数は" + $('li').length + "です");
});

// クラスを追加
$(function() {
  $('p').addClass('is-active');
});

// クラスを削除
$(function() {
  $('p').removeClass('blue');
});

// クラスの付け剥がし
$('p').click(function() {
  $(this).toggleClass('is-active');
});

// 要素頭に子要素を追加
$(function() {
  $('.target').prepend('<p>ダミーテキストA</p>');
});

// 要素末に子要素を追加
$(function() {
  $('.target').append('<p>ダミーテキストF</p>');
});

// 特定の要素の後ろ隣に要素を追加
$(function() {
  $('.target').after(
    '<div class="target">' +
    '<p>ダミーテキストF</p>' +
    '<p>ダミーテキストG</p>' +
    '<p>ダミーテキストH</p>' +
    '<p>ダミーテキストI</p>' +
    '<p>ダミーテキストJ</p>' +
    '</div>'
  );
});

// jsで文字を表示させる
$(function() {
  $('.trigger').click(function() {
    $('.target').show();
  });
});

// jsで文字を消す
$(function() {
  $('.trigger').click(function() {
    $('.target').hide();
  });
});
*/
// 要素をフェードインさせる
$(function () {
  $('.trigger').on('click', () => {
      $('.target').fadeIn('slow');
  });
});