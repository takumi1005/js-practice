// jqueryを使ってアラート表示
/*
$(function() {
  alert('jqueryでアラート表示');
});

// 要素の横幅を取得
$(function() {
  alert("横幅は" + $('.box').width() + "です");
});

// カラーピッカーで取得した色を反映させる
$(function() {
  $('#color-change').on("change", function() {
    let select_color = $(this).val();
    $('.title').css('color', select_color);
  });
});

// flexを使わずにボックスの高さを揃える
$(function() {
  let max_li = 0;
  $('li').each(function(index, el) {
    if (max_li < $(el).height()) {
      max_li = $(el).height();
    }
  });
  $('li').height(max_li);
});

// クリックした番目をアラートに出す
$(function() {
  $('li').on('click',function() {
    let i = $('li').index(this);
    alert("あなたは" + (i + 1) + "番目を押しました");
  });
});
*/
// inputの値を取得して誕生日を祝う
$(function() {
  const birthday = '1988-10-05';
  $('#birthday').on('change', function() {
    if($(this).val() === birthday) {
      $('h1').fadeIn();
    }
  });
});