$(function(){
  // Main Slider Event
  var swiper1 = new Swiper(".slider-area", {
    effect: "fade",
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })

  var swiper2 = new Swiper(".right-box", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  var swiper3 = new Swiper(".notice-area", {
    autoplay: {
      delay: 2500
    },
    loop: true,
    direction: "vertical",
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    }
  })

  if(window.innerWidth <= 1040){
    var mb_swiper1 = new Swiper(".tag-list", {
      slidesPerView: 'auto',
      freeMode: true
    })
  }

  var mb_swiper2 = new Swiper(".theme-swiper", {
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: ".theme-scroll",
      hide: false
    }
  })

  // FOOTER Auto-Play
  $('.btn-auto').click(function(){
    if($(this).hasClass('off') === true) {
      $(this).removeClass('off').addClass('on');
      swiper3.autoplay.start();
    } else {
      $(this).removeClass('on').addClass('off');
      swiper3.autoplay.stop();
    }
  })

  // TAG AREA On & Off
  var state = true;
  $('.btn-more').click(function(){
    if(state === false) {
      $(this).parent().addClass('off').removeClass('on');
      state = true;
    } else {
      $(this).parent().addClass('on').removeClass('off');
      state = false;
    }
  })

  $(window).resize(function(){
    var windowWidth = window.innerWidth;
    if(windowWidth <= 495){
      $('.top-ft').find('.swiper-wrapper').width(windowWidth - 110);
    }
  })

  // Data Lab Button Event
  $(".data-area .btn-wrap").find("span").click(function(){
    $(".data-area span").removeClass("on");
    $(this).addClass("on");
    $(".data-area p").removeClass("on");
    $(this).siblings().addClass("on");
    if($(this).hasClass("btn-hot") === true){
      $(".img-wrap ul").removeClass("on");
      $(".hot-wrap").addClass("on");
    } else if($(this).hasClass("btn-ai") === true){
      $(".img-wrap ul").removeClass("on");
      $(".ai-wrap").addClass("on");
    }
  })

  // Mobile Scroll Event
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $(".mb-top > div").find(".basic").removeClass("on");
      $(".mb-top > div").find(".autumn").addClass("on");
      $(".mb-top > div").css("background", "#fff");
    } else {
      $(".mb-top > div").find(".basic").addClass("on");
      $(".mb-top > div").find(".autumn").removeClass("on");
      $(".mb-top > div").css("background", "");
    }
  })

  // Mobile Menu Click Event
  $(".mb-top").find(".gnb").click(function(){
    $(".login-wrapper").addClass("on");
  })
  $(".login-wrapper").find(".close").click(function(){
    $(".login-wrapper").removeClass("on");
  })

})

