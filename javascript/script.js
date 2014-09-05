$(document).ready(function() {

	$('.gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled: 	true,
			  preload: 	[0,1]
			}
		});
	});

	setJigsawImageOne();
	setToolsImageOne();



	// if ($(window).width() > 1024) {

	// 	var s = skrollr.init();

	// }


});

function setJigsawImageOne() {
    $('#imageSwap').fadeIn(200).html('<img src="images/tech/Jigsaw_01.jpg" />').delay(3000).fadeOut(200, function () { setJigsawImageTwo(); });
}

function setJigsawImageTwo() {
    $('#imageSwap').fadeIn(200).html('<img src="images/tech/Jigsaw_02.jpg" />').delay(3000).fadeOut(200, function () { setJigsawImageThree(); });
}

function setJigsawImageThree() {
    $('#imageSwap').fadeIn(200).html('<img src="images/tech/Jigsaw_03.jpg" />').delay(3000).fadeOut(200, function () { setJigsawImageOne(); });
}

function setToolsImageOne() {
    $('#imageSwap2').fadeIn(200).html('<img src="images/tech/Tools_01.jpg" />').delay(2500).fadeOut(200, function () { setToolsImageTwo(); });
}

function setToolsImageTwo() {
    $('#imageSwap2').fadeIn(200).html('<img src="images/tech/Tools_02.jpg" />').delay(2500).fadeOut(200, function () { setToolsImageThree(); });
}

function setToolsImageThree() {
    $('#imageSwap2').fadeIn(200).html('<img src="images/tech/Tools_03.jpg" />').delay(2500).fadeOut(200, function () { setToolsImageOne(); });
}