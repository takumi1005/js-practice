// jqueryを使ってアラート表示
/*
$(function() {
  alert('jqueryでアラート表示');
});

// 要素の横幅を取得
$(function() {
  alert("横幅は" + $('.box').width() + "です");
});
*/
// カラーピッカーで取得した色を反映させる
$(function() {
  $('#color-change').on("change", function() {
    let select_color = $(this).val();
    $('.title').css('color', select_color);
  });
});
