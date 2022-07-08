$(document).ready(function(){

    let $btns = $('.project-area .button-group button');
    $btns.click(function(e){
        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter')
        $('.project-area .grid').isotope({
            filter:selector
        });
        return false;
    })

    $('.project-area .button-group #btn1').trigger('click')

    // Gallery javascript
    $('.project-area .grid .text-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });
    
    // Initialize owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

    // Sticky navigation area
    let nav_offset_top = $('.header_area').height()+50;
    function navbarFxed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
            if(scroll >= nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            }
            else{
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
            })
        }
    }

    navbarFxed();
});