$(document).ready(function() {
    //Slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });
    $('.arrow--left').click(function(){
        $('.slider').slick('slickPrev');
    })
      
    $('.arrow--right').click(function(){
        $('.slider').slick('slickNext');
    })
    $('.slider--clients').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '17.5vw',
            }
          }
        ]
    });
    $('.arrow-clients--left').click(function(){
        $('.slider--clients').slick('slickPrev');
    })
      
    $('.arrow-clients--right').click(function(){
        $('.slider--clients').slick('slickNext');
    })
    $('.case--popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    //Кнопка адаптивного меню
      var toggles = document.querySelectorAll(".cmn-toggle-switch");

      for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
      };

      function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
      }
      $('.cmn-toggle-switch').on('click', function() {
        $('.nav__menu').fadeToggle();
      });
      $('.btn-sevice--ad').on('click', function() {
        $('.sidebar').fadeToggle();
      });
      $('.project__btn--more').on('click', function() {
        $(this).parent().next().fadeToggle();
      });
      $('.close').on('click', function() {
        $(this).parent().fadeToggle();
      });
      //$.scrollify({
      //  section : ".section",
      //});

    //К якорю
        $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});

})