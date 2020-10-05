$(document).ready(function(){

	/** Toggle search */
	$('#icon-search').click(function(){
		$('#box-search').addClass('open')
	})
	$('#close-box-search').click(function(){
		$('#box-search').removeClass('open')
	})

	/** hide and show scroll-top */
	var scrollHeight = null;

	$(window).scroll(function(){
		scrollHeight = $(this).scrollTop() 
		if(scrollHeight >= 30)	$('#btn-scroll-top').css('display','block')		
		else $('#btn-scroll-top').css('display','none')
	})

	/** Processed when clicking the scroll top bar */
	$('#btn-scroll-top').click(function(){
		var timerScroll = setInterval(function(){
			var newHeightLocation = scrollHeight - 15;
			$(window).scrollTop(newHeightLocation)
			if(newHeightLocation <= 0) clearInterval(timerScroll)
		},10)
	})

	/** Dropdown menu */
	/** Applies only to mobile menus */
	$('.menu-item-dropdown').click(function(){
		var menuItemIndex = $(this).data('menu-item-index')
		$('#sub-menu-item-'+ menuItemIndex).toggleClass('active')
	})

	$('#open-menu-mobile').click(function(){
		var mobileMenuWidth = $('.primary-menu').outerWidth()
		$('.primary-menu').addClass('open')
		if($(window).outerWidth() >= 766){
			$('#right-head').css('display','none')
		}
		$('body').css('overflow','hidden')
		$('body').css('margin-left', mobileMenuWidth + 'px')
	})
	$('#close-menu-mobile').click(function(){
		$('.primary-menu').removeClass('open')
		$('#right-head').css('display','flex')
		$('body').css('overflow-y','')
		$('body').css('margin-left', '0')
	})

	deleteAndCreateNewClass()
	hanldeMenuMobileAndDeskTop()
	var status = false;
	$(window).resize(function(){
		deleteAndCreateNewClass()
		hanldeMenuMobileAndDeskTop()
	})

})
// This function is specific to the primary menu part
function deleteAndCreateNewClass(){
	/** Replace the item-menu-desktop class to the item-menu-mobile class when the screen is less than 966px (in class primar-menu) */
	if($(window).outerWidth() < 966){
		replaceClass('.primary-menu > li','menu-item-desktop','menu-item-mobile')
	}
	else{
		replaceClass('.primary-menu > li','menu-item-mobile','menu-item-desktop')
		$('body').css('overflow','')
		$('body').css('margin-left', '')
	}
}
function hanldeMenuMobileAndDeskTop(){
	if($(this).outerWidth() > 966){
		$('#sub-menu-item-0').children().addClass('column-20')
		$('#sub-menu-item-1').children().addClass('column-25')
		/** Add the class in the second submenu item  */
		$('#sub-menu-item-2').children().addClass('flex flex-wrap column-50')
		$('#sub-menu-item-2 div .col-33').addClass('column-33')
		$('#sub-menu-item-2 div .col-50').addClass('column-50')

		$('#sub-menu-item-3 .col-40').siblings().addClass('column-20')
		$('#sub-menu-item-3 .col-40').addClass('column-40')

		$('#sub-menu-item-4 > .col-50').addClass('column-50')
		$('#sub-menu-item-4 > .col-25').addClass('column-25')
		$('.primary-menu .menu-item').last().attr('id','page')
	}
	else{
		$('.sub-menu').children().removeClass('column-20 column-25 column-40 column-50')
		/** delete the class in the second submenu item  */
		$('#sub-menu-item-2').children().removeClass('flex flex-wrap')
		$('#sub-menu-item-2').children().children().removeClass('column-33 column-50')
		$('.menu-item').removeAttr('id')
	}
}
/**
 * 
 * element: Is the component that wants to assign the new class
 * oldName: old class
 * newName: new class 
 */
function replaceClass(element,oldName,newName){
	$(element).removeClass(oldName)
	$(element).addClass(newName)
}