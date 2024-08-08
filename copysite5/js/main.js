$(function(){
  $('a[href^="#"]').click(function(){
    // クリックしたリンクを取得して代入
    let href= $(this).attr("href");

    // ジャンプ先のid名をセット
    //?はif文の略でhrefが#か空の時は'html'を代入、それ以外はhrefを代入
    let target = $(href == "#" || href == "" ? 'html' : href);

    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;

    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");

    // 最後に処理を中断
    return false;
  });
})