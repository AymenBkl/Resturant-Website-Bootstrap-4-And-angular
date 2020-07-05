AOS.init();

$(document).ready(function(){
    AOS.init();

    $('[data-toggle="tooltip"').tooltip();
    $('#mycarousel').carousel({interval:2000});
    $('#carouselleaders').carousel({interval:2000});

    $('#carouselbutton').click(function() {
        if ($('#carouselbutton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselbutton').children('span').removeClass('fa-pause');
            $('#carouselbutton').children('span').addClass('fa-play');
        }
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselbutton').children('span').removeClass('fa-play');
            $('#carouselbutton').children('span').addClass('fa-pause');
        };

});
$('#reservetablebutton').click(function(){
        $('#reservetable0').modal('handleUpdate');
        $('#reservetable0').modal('toggle');
    });

$('#navloginbutton').click(function(){
      $('#loginmodal').modal('handleUpdate');
      $('#loginmodal').modal('show');
    });




});


