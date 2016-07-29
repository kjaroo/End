$(document).ready(function(){
    var $linki = $('#home').find('a');
    
    $linki.on('click', function(){
       
        var $this = $(this);
        var cssOfElementToScroll = $this.attr('href'); 
        var $elementToScroll = $(cssOfElementToScroll); 

        $('html, body').animate({
            scrollTop: $elementToScroll.offset().top
        }, 2000);
        
    });
    var $toTop = $('#toTop')
    
    $toTop.on('click', function(){
        var cssOfElementToScroll = $toTop.attr('href');
        var $elementToScroll = $(cssOfElementToScroll);
         $('html, body').animate({
            scrollTop: $elementToScroll.offset().top
        }, 2000)
    });
    
    $(window).on('resize',function(){
        if(window.matchMedia("(min-width: 640px)").matches){
            $('.top ul li').show();
        }       
     });
    var $menu = $('section.top').find('#mini_menu');
    var $hidden = $('.top ul li');
    
    $menu.on('click', function(){
        $('.top ul li').slideToggle();
    });
    
    var $progress = $('.button_progress').find('input');
    var $span = $('.progress-bar').find('span');
    console.log($span)
    console.log($progress)
    
    $progress.on('click', function(event){
        $span.eq(0).text('HTML | CSS')
        $span.eq(1).text('JAVASCRIPT | JQUERY')
        $span.eq(2).text('SASS | RWD')
        $span.animate({width: '100%'});
    });

 $(function(){
     var time = 8000;
     var speed = 100;
     var slideshow = $('#slider');
     var listItems = slideshow.children('li');
     var listLength = listItems.length;
     var index = 0;
     
     changeList = function(){
         listItems.eq(index).fadeOut(speed, function(){
             index += 1;
             if(index === listLength) {
                 index = 0;
             }
             listItems.eq(index).fadeIn(speed);
         });
     };
       listItems.not(':first').hide();
     setInterval(changeList, time);
 });

    
    var $menu = $('.sticky_menu');
    var top = $menu.offset().top;
    
    $(window).on('scroll', function(event){
        var windowPosition = $(document).scrollTop();
        if(windowPosition > top) {
            $menu.addClass('sticky');
        } 
        else {
            $menu.removeClass('sticky');
        }
    });

});