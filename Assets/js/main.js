$(document).ready(function(){
	/** banner section slide */
	var slideIndex = 0;
	var slides = $('#carousel .carousel-item')
	var totalSlideItem = slides.length - 1
	$('#btn-prev').click(function(){		
		slideIndex = slideIndex == 0 ? slideIndex = totalSlideItem : slideIndex - 1
		$('#carousel-item-'+slideIndex).addClass('active')
		$('#carousel-item-'+slideIndex).siblings().removeClass('active')
	})
	$('#btn-next').click(function(){
		slideIndex = slideIndex == totalSlideItem ? slideIndex = 0 : slideIndex + 1
		$('#carousel-item-'+slideIndex).addClass('active')
		$('#carousel-item-'+slideIndex).siblings().removeClass('active')
	})

	/** about-us section slide  */
	var memberIndex = 0
	var prevButton = $('#about-us .btn-prev')
	var nextButton = $('#about-us .btn-next')
	var dots = $('#about-us .dots span')
	var totalMember = $('#slider-area #slider .slide-item').length - 1
	prevButton.click(function(){
		memberIndex = memberIndex == 0 ? memberIndex = totalMember : memberIndex - 1
		showSlideMember()
	})
	nextButton.click(function(){
		memberIndex = memberIndex == totalMember ? memberIndex = 0 : memberIndex + 1
		showSlideMember()
	})
	dots.click(function(){
		var dotId = $(this).attr('id')
		memberIndex = dotId
		showSlideMember()
	})
	/** product section slide */
	var prevBtn = $('#new-arrivals .btn-prev')
	var nextBtn = $('#new-arrivals .btn-next')
	var count = 0
	var scrollLeft = null
	prevBtn.click(function(){
		var timer = setInterval(function(){
			count++
			updatePosition('-')
			if(count == 10){ 
				clearInterval(timer)
				count = 0
			}
		},20)
	})
	nextBtn.click(function(){
		var timer = setInterval(function(){
			count++
			updatePosition('+')
			if(count == 10){ 
				clearInterval(timer)
				count = 0
			}
		},20)
	})
	function showSlideMember(){
		$('#member-'+memberIndex).addClass('active')
		$('#'+memberIndex).addClass('active')
		$('#'+memberIndex).siblings().removeClass('active')
		$('#member-'+memberIndex).siblings().removeClass('active')
	}
	function updatePosition(character){
		scrollLeft = $('.wrapper-slide').scrollLeft()
		let width = $('.product-group .product').outerWidth(true)	
		var newPosition = null
		if(character === '+'){
			newPosition = scrollLeft + (width / 10)
		}
		else{
			newPosition = scrollLeft - (width / 10)
		}
		$('.wrapper-slide').scrollLeft(newPosition)
	}
})