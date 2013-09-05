function resizecont() {
    var newrightWidth =$(window).width()-$('.leftCol').width() ;
    $(".rightCol").width(newrightWidth)
}
$(document).ready(function(){
    resizecont() ;
    $(window).resize(function() {
        resizecont() ;
    })
    $( ".left_over" ).bind( "mouseenter mouseleave", function( event ) {
        $('.leftCol' ).toggleClass( "over" );
    });


})