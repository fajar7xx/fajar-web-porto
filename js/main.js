$(function(){
  let btns = $(".project-area .button-group button")
  btns.click(function(e){
    $(".project-area .button-group button").removeClass('active')
    e.target.classList.add('active')

    let selector = $(e.target).attr('data-filter')
    $('.project-area .grid').isotope({
      filter: selector
    })

    return false
  })

  $('.project-area .button-group #btn1').trigger('click');

  // magnific popup
  $('.project-area .grid .popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  // owl carousel
  $('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      544:{
        items: 2
      }
    }
  })

  // sticky navigatin menu
  let navOffsetTop = $('.header-area').height() + 50

  function navbarFixed(){
    if($('.header-area').length){
      $(window).scroll(function(){
        let scroll = $(window).scrollTop()
        if(scroll >= navOffsetTop){
          $('.header-area .main-menu').addClass('navbar-fixed')
        }else{
          $('.header-area .main-menu').removeClass('navbar-fixed')
        }
      })
    }
  }

  navbarFixed()

})