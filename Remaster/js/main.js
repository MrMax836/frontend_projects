;
window.onload = function() {
    initButtons();
};

function initButtons() {
    var pageUp = document.querySelector(".button_page-up.js-use");

    pageUp.onclick = function(e) {
        smoothJumpUp();
    };
};

var smoothJumpUp = function() { 
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) { 
       window.scrollBy(0,-50); 
       setTimeout(smoothJumpUp, 10); 
    } 
 };

 $('.hamburger-box').click(function(){
    $('.menu-box').toggleClass("hide");
    $('.hamburger-box').toggleClass("is-active");
 });

$('.menu-item a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);

    return false;
});
