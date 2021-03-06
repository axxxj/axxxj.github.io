// window.onload = function any_function_name()
// {
    
// }



$(document).ready(function(){

    if(document.getElementById('header-anim'))
    {
        var dataPath = document.getElementById('header-anim').getAttribute("value");

        console.log(dataPath);

        var isNotMobile = window.matchMedia("only screen and (min-width : 1024px)");

        if (isNotMobile.matches) {
            //Conditional script here
            
            $("#header-image").hide();

            var animation = lottie.loadAnimation({
                container: document.getElementById('header-anim'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: dataPath
            });
        }else{
            $("#header-anim").hide();
        }
    }

    new WOW().init();

    var galleryOptions = {captionPosition: "outside"};

    var lightbox = $('.gallery-t1 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-t2 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-t3 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-t4 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-t5 a').simpleLightbox(galleryOptions);

    var lightbox = $('.gallery-1 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-2 a').simpleLightbox(galleryOptions);
    var lightbox = $('.gallery-3 a').simpleLightbox(galleryOptions);

    var techSectionOut = "animated fadeOutLeft";
    var techSectionIn = "animated fadeInRight";
    var onAnimEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $(".tech-nav a").click(function(){
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        console.log($(this).index());
        changeTechSection($(this).index());
    });

    function changeTechSection(index)
    {
        $(".activated-section").addClass(techSectionOut).one(onAnimEnd, function() {
            $(this).removeClass(techSectionOut + " activated-section").hide();
            $(".tech-section").eq(index).show().addClass("activated-section " + techSectionIn).one(onAnimEnd, function() {
                $(this).removeClass(techSectionIn);
            });
        });

        console.log($(".tech-section").length);
    }

    var revealToggle = false;

    $(".more a").click(function(){
        // $(".reveal-panel").show();
        if(!revealToggle)
        {
            $(".reveal-panel").addClass("reveal-anim");
            $(this).html("close...");
            revealToggle = true;
        }else
        {
            $(".reveal-panel").removeClass("reveal-anim");
            $(this).html("see more...");
            revealToggle = false;
        }
    })

    $( ".video-gallery a" ).click(function(e) {
		var vcode = $(this).find(".video").attr("data");
		$(this).find(".video").html('<iframe src="https://www.youtube.com/embed/' + vcode + '" frameborder="0" allowfullscreen></iframe>');
	});

	$( ".video-overlay" ).click(function(e) {
		$(this).hide();
    });
    
    $( "a.video-inline" ).click(function(e) {
		var vcode = $(this).find(".video").attr("data");
		$(this).find(".video").html('<iframe src="https://www.youtube.com/embed/' + vcode + '" frameborder="0" allowfullscreen></iframe>');
	});

	$( ".video-overlay" ).click(function(e) {
		$(this).hide();
	});

});