

$('#image-1').on('click', ()=>{

    if ($('body').hasClass('img-2') || $('body').hasClass('img-3')){
        $('body').removeClass('img-2');
        $('body').removeClass('img-3');
    }
    $('.image-change').attr('src', "assets/images/pexels-houzlook-com-3356416.jpg");
});

$('#image-2').on('click', ()=>{
    if ($('body').hasClass('img-3')){
        $('body').removeClass('img-3');
    }

    $('body').addClass('img-2').fadeIn("fast");
    $('.image-change').attr('src', "assets/images/pexels-mark-mccammon-1080696.jpg");
});

$('#image-3').on('click', ()=>{
    if ($('body').hasClass('img-1')){
        $('body').removeClass('img-1');
    }
    $('body').addClass('img-3').fadeIn("fast");
    $('.image-change').attr('src', "assets/images/pexels-thorn-yang-154161.jpg");
});


// $(selector).fadeIn();
// $(selector).fadeTo(duration, opacity);