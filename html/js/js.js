$(document).ready(function(){
	
	$('.slider').slick({
		dots: true
	});
	
	$("#nav_but").click(function(){
		$("#menulist").addClass("act");
	});
	$("#menulist .close_").click(function(){
		$("#menulist").removeClass("act");
	});
	
	
    var w = $(window).width();
    if (w <= 767) { 
		$(".navleft .box").removeClass('open'); 	
    }
    var w2 = $(window).width();
    if (w2 <= 1023) { 
		$('.product__list').slick({
			dots: true,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			}
			]
		});	
    }

	$('.product__slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		  }
		}
		]
	});
	
	$(function() {
		var $items = $('.tabs_nav li');
		$items.click(function() {
			$items.removeClass('act');
			$(this).addClass('act');
			var index = $items.index($(this));
			$('.tabs_content > div').hide().eq(index).show();
			return false;
		}).eq(0).click();
	});
	
});