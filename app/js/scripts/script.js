// js jquery
$(document).ready(function() {
	var swiper = new Swiper('.news-prew-list-wrapper', {
		nextButton: '.prew-swiper-buttons__next',
		prevButton: '.prew-swiper-buttons__prev',
		slidesPerView: 3,
		spaceBetween: 32,
		loop: true
	});

	if($(".about-bl4__content").length!=0){
		$('.about-bl4__content').masonry({
			columnWidth: 455,
			itemSelector: '.shadow-bl',
			gutter: 40,
			isAnimated: true,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	}

});