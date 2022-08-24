'use strict'

$(function() {
  $('.slider-inner').each(function() {
    // スライド（画像）の数を取得
    var $slides = $(this).find('img'),
        slideNum = $slides.length,
        currentIdx = 0; // 何番目か
  
    // 最初の画像をフェードイン
    $(".slider-inner img").eq(currentIdx).fadeIn();
  
    // 3秒後に次のスライドを表示
    setTimeout(dispNextSlide, 3000);
  
    // 次のスライドを表示するメソッド
    function dispNextSlide() {
      var nextIdx = currentIdx + 1;
  
      // 最後のスライドの場合ははじめに戻る
      if (nextIdx > (slideNum - 1)) {
        nextIdx = 0
      }
  
      // 現在のスライドをフェードアウト
      $(".slider-inner img").eq(currentIdx).fadeOut();
  
      // 次のスライドをフェードイン
      $(".slider-inner img").eq(nextIdx).fadeIn();
  
      // インデックスを更新
      currentIdx = nextIdx;
    }
  });
 });