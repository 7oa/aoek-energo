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

	$(".js-select").click(function(){
		var opt = $(this).next(".select__ul");
		var select = $(this).parent();
		select.toggleClass("open");
		opt.slideToggle();

	});
	$(".js-select-item").click(function () {
		var val = $(this).text();
		var select = $(this).parents(".select");
		select.children(".js-select").text(val);
		select.children(".js-select-save").val(val);
		select.removeClass("open").find(".select__ul").slideUp();
	});

	//.file-upload
	$(".file-upload input").change(function () {
		$(this).parent().addClass("checkfile");
	});
});