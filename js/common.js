$(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true, 
    autoplay:true,
    nav:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false, 
    dots: false,   
    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            loop:true,
            nav:false		
        }
    }
    })

 $('#next').click(function()
    {      	
        $(".form_sec").hide();
        $(".sec_1").hide();
        $(".sec_2").show();        
      
    });
  $('.place_b').click(function()
    {      	
        $(".sec_2").hide();
        $(".sec_3").show();        
      
    });
   $('.objects_detail').click(function()
    {      	
        $(".sec_3").hide();
        $(".detailed").show();        
      
    });

});
