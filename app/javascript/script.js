// Cloud9側の仕様によりエラーが出ているため
// 以下の1文を記入
/* global $*/

$(document).on('turbolinks:load', function(){
  $('.jquery').on('click',function(){
    $(this).css('color','red');
  });
});

// Swiperのオプションを定数化
const opt = {
  loop: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,
  infinite: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

/* global Swiper*/
// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper',opt);
});

$(document).on('turbolinks:load',function(){
  $(window).scroll(function(){
    let scrollTopValue = $(document).scrollTop();
    if ( scrollTopValue > 50 ) {
      $('.box1').slideDown();
    } else {
      $('.box1').fadeOut();
    }
  })
  $('.menu-trigger').on('click',function(event) {
      $(this).toggleClass('active');
      $('#sp-menu').fadeToggle();
      event.preventDefault();
  });
});