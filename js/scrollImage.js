$(function(){
    var preButton = $("#prebtn"),
        nextButton = $("#nextbtn"),
        wall = $(".scrollWall"),
        imgs = $(".imgs"),
        img = $(".imgs li"),
        LENGTH = img.length,
        HEADER_HEIGHT=50,
        index = 0,
        time = 5000;
    ;
    
    function init(){  
        WIDTH = $(window).width(),
        HEIGHT = $(window).height()-HEADER_HEIGHT;
        wall.width(WIDTH);
        wall.height(HEIGHT);
        imgs.width(WIDTH*LENGTH);
        img.width(WIDTH);
        img.height(HEIGHT);
    }
    init();
    $(window).resize(function(){
        init()
    })
    function scroll(derection) {        
        if(derection){
            index++;
        }else{
            index--;
        }
        if(index == LENGTH){
            index=0;
        }else if(index == -1){
            index=LENGTH-1;
        }
        imgs.animate({left:-WIDTH * index});
        
    }
    setInterval(function(){
        scroll(true);
    },time);
    preButton.on("click",function(){
        scroll(false);
    });
    nextButton.on("click",function(){
        scroll(true);
    });
    wall.on("mouseleave",function(){
        preButton.fadeOut();
        nextButton.fadeOut();
    });
    wall.on("mouseover",function(){
        preButton.fadeIn();
        nextButton.fadeIn();
    });
}());