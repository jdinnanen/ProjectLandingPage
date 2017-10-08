
//global declarations//

const $navitems = $("nav a");
const $navbackground = $("nav li");

const $subitems = $(".sub-menu article");
const $pageitems = $(".sub-menu article a");
const $pagesubitems = $(".active-page article");

const $nameReset = $("header h1");

//main header class reset//
$nameReset.click(function(e){
    e.preventDefault();
    $subitems.removeClass("visable");
    $pagesubitems.removeClass("pagevisable");
    $navbackground.removeClass('focus');
});


//main menu function//
$navitems.click(function(e){
	e.preventDefault();
    $subitems.removeClass("visable");
    $pagesubitems.removeClass("pagevisable");
    const id = $(this).attr("href");
    $(id).addClass("visable");
    $navbackground.removeClass('focus');
    $(this).parent().addClass('focus');
});

//page menu function//
$pageitems.click(function(e){
    e.preventDefault();
    $pagesubitems.removeClass("pagevisable");
    const $pageId = $(this).attr("href");
    console.dir($pageId);
    $($pageId).addClass("pagevisable");
});

//video background
//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}