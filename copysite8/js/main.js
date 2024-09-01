$(function(){
/*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニュークリック時
  $('.toggle-btn').on('click', function() {
    if($('#header').hasClass('active')) {
      $('#header').removeClass('active');
    } else {
      $('#header').addClass('active');
    }
  });

  // メニュー表示中の画面クリック時
  $('#mask').on('click', function() {
    $('#header').removeClass('active');
  });

/*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $('.item img').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slideIn');
    }
  });

  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });
});


