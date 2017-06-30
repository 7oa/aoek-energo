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

	//выбрать все файлы
	$(".js-select-allfiles").click(function () {
		if($(".js-check:checked").length==$(".js-check").length) $(".js-check").prop("checked", false);
		else $(".js-check").prop("checked", true);
		return false;
	});

	//плавное появление
	if($('.js-show').length>0){
		$('.js-show').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp',
			classToRemove: 'hidden',
			offset: 200
		});
	}
	//табы
	if($(".js-tab-link").length>0){
		$(".js-tab-link").click(function () {
			var tab_id = $(this).data("tab");
			$(".js-tab-link").removeClass("active");
			$(this).addClass("active");
			$(".js-tab-item").hide();
			$("#"+tab_id).show();
		});
	}
	$(".input-line_error").click(function () {
		$(this).removeClass("input-line_error");
	});

	/*if($(".js-form").length>0){

	}
	$(".js-form").each(function(){
		var req = $(this).find(".input[data-required='Y']");
		var submit = $(this).find(".js-submit");
		var req_l = req.length;
		$(req).each(function () {
			if($(this).val()==""){
				$(this).addClass("empty");
			}
		});
		var empty = $(this).find(".empty").length;
		if(empty!==0) submit.attr("disabled", true);
	});*/
});