$(document).ready(function () {

    $('.firstcarusel').owlCarousel({
        stagePadding: 90,
        loop: true,
        dots: true,
        center: true,
        // items: 5,
        margin: 10,
        nav: true,
        // autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })


    $('.myOwlCarusel').owlCarousel({
        loop: true,
        nav: true,
        // margin:"10px",
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })



    $(window).scroll(function () {
        if ($(document).scrollTop() > 240) {
            $(".header").css( "background","#5e72e4");
        }else{
            $(".header").css( "background","rgba(48, 32, 87, 0.7)");
        }
    })

    $(".mainitem").mouseover(function(){
        $(this).css("transform","translateX(10px)");
        $(this).css("transition","all 0.4s linear");
    })

    $(".mainitem").mouseleave(function(){
        $(this).css("transform","translateX(0px)");
        $(this).css("transition","all 0.4s linear");
    })


    $(".cards").mouseover(function(){
        $(this).css("transform","translateY(-15px)");
        $(this).css("transition","all 0.1s linear");
    })

    $(".cards").mouseleave(function(){
        $(this).css("transform","translateY(0px)");
        $(this).css("transition","all 0.1s linear");
    })



    $(".nav-item").mouseenter(function () {
        $(this).addClass("show");
        $(this).children().eq(0).attr("aria-expanded", true);
        $(this).children().eq(1).addClass("show");
    });

    $(".nav-item").mouseleave(function () {
        $(this).removeClass("show");
        $(this).children().eq(0).attr("aria-expanded", false);
        $(this).children().eq(1).removeClass("show");
    });


    $(".dropdown-item").mouseenter(function () {
        $(this).addClass("show");
        $(this).find(".innermenu").fadeIn();
    });

    $(".dropdown-item").mouseleave(function () {
        $(this).removeClass("show");
        $(this).find(".innermenu").fadeOut();
    });



    $(".hotelBudgets").mouseover(function(){
        $(this).css("transform","translateY(-15px)");
        $(this).css("transition","all 0.1s linear");
    })

    $(".hotelBudgets").mouseleave(function(){
        $(this).css("transform","translateY(0px)");
        $(this).css("transition","all 0.1s linear");
    })



    $(".category").click(function () {
       $(".dropmenu").toggle();
    });

  


});


