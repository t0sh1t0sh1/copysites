$(function(){
  // ハンバーガーメニュークリック時
  $('.toggle-btn').on('click', function() {
    if($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // メニュー表示中の画面クリック時
  $('mask').on('click', function() {
    $('#header').removeClass('open');
  });
});