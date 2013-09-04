function resizecont() {
    var newrightWidth =$(window).width()-$('.leftCol').width() ;
    $(".rightCol").width(newrightWidth)
}
$(document).ready(function(){
    resizecont() ;
    $(window).resize(function() {
        resizecont() ;
    })
    $( ".leftCol" ).bind( "mouseenter mouseleave", function( event ) {
        $( this ).toggleClass( "over" );
    });


})