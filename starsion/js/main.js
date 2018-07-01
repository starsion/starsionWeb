$(document).ready(function(){
    console.log("hello,welcome to my website");
})

$(window).load(function(){
    aotuSize();
})
$(window).resize(function(){
    aotuSize();
})

function aotuSize(){
    var windowsHeight = $(window).height();
    var windowsWidth = $(window).width();
    $("#home").css('height',windowsHeight);
}