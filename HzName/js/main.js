
$(document).ready(function() {
    $("#lightSlider").lightSlider({
        item: 2,
        loop: true,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        // addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        autoWidth: false,
        // pager: true,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
        keyPress: false,
        controls: true,
        prevHtml : ' <img src = "../img/arrow_left.svg"> ' ,
        nextHtml : ' <img src = "../img/arrow_right.svg"> ' 
    }); 
});