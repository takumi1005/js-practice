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

// inputの値を取得して誕生日を祝う
$(function() {
  const birthday = '1988-10-05';
  $('#birthday').on('change', function() {
    if($(this).val() === birthday) {
      $('h1').fadeIn();
    }
  });
});

// 引数に入れた文字列を返す関数の作成
function moji(text) {
  return text;
}
alert(moji("こんにちは"));

// 色を取得して変更
$(function() {
  $('li').on('click', function() {
    if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
      $(this).css('background-color', 'rgb(0, 0, 255)');
    }
  });
});

// 引数が整数の時のみアラートを出す関数
function seisuu(target) {
  if( Number.isInteger(target)){
    alert('これは整数です');
  }
}
seisuu(7);

// 文字数をカウントしアラートに表示
const mojisuu = "カウント";
alert(mojisuu.length);

// 今日の月をアラート
const now = new Date();
const now_month = now.getMonth() + 1;
function month_judge(month) {
  if (now_month == month) {
    alert("今月の月です");
  } else {
    alert("今月の月ではありません");
  }
}
month_judge(5);
*/
// 配列から１番後ろを削除する処理
let hairetu = [1, 3, 5, 7];
hairetu.pop();
alert(hairetu);