// liタグの横幅を足して表示
$(function() {
  let li_total = 0;
  $('li').each(function(index, el) {
    if (index !== 2) {
      li_total += $(el).width();
      $('.anser').text(li_total);
    }
  });
});