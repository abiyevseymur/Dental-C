 $(document).ready(function () {
 	$(".owl-birinci-carusel").owlCarousel({
 		responsive: {
 			0: {
 				items: 1
 			}
 			, 1000: {
 				items: 1
 			}
 		}
 	});
 	$(".owl-carousel").owlCarousel({
 		responsive: {
 			0: {
 				items: 1
 			}
 			, 1000: {
 				items: 3
 			}
 		}
 	})
 });
 $('.map-container').click(function () {
 	$(this).find('iframe').addClass('clicked')
 }).mouseleave(function () {
 	$(this).find('iframe').removeClass('clicked')
 });
 $(function () {
 	$.scrollUp({
 		scrollName: 'scrollUp'
 		, topDistance: '300'
 		, topSpeed: 300
 		, animation: 'fade'
 		, animationInSpeed: 200
 		, animationOutSpeed: 200
 		, scrollText: '^'
 		, activeOverlay: false
 	, });
 });
 var esasBasliqH1 = ['HIGH QUALITY MEDICAL CARE THAT\'S FAST AND CONVENIENT', 'AFFORDABLE PEDIATRIC DENTISTRY SERVICES', 'WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES']
 var altyaziP = ['Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.', 'We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.', 'Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care.']
 var backgroundI = ['images/backgrounds/background-01-1920x900.jpg', 'images/backgrounds/background-02-1920x900.jpg', 'images/backgrounds/background-03-1920x900.jpg']
 $(document).ready(function () {
 		$('header .dot').click(function (event) {
 			var index = $(this).attr('index');
 			$('.esasBasliq').text(esasBasliqH1[index]);
 			$('.altYazi').text(altyaziP[index]);
 			$('header .dot').removeClass('active');
 			$('header .dot').eq(index).addClass('active');
 			$('header').css('background-image', 'url(' + backgroundI[index] + ')');
 		})
 	})
 var menubool = true;
 $('.openmenu').click(function () {
 	if (menubool) {
 		$('.leftmenu').css('margin-left', '0px');
 		$('.openmenu').css('margin-left', '17.5%');
 		$('#x').removeClass('fa fa-bars');
 		$('#x').addClass('fa fa-times');
 		menubool = false;
 	}
 	else {
 		$('.leftmenu').css('margin-left', '-360px');
 		$('.openmenu').css('margin-left', '2%');
 		$('#x').addClass('fa fa-bars');
 		menubool = true;
 	}
 })
 var pagesbool = true;
 $('.leftmenu i').click(function () {
 	console.log($(this).parent().attr('id'));
 	var idler = $(this).parent().attr('id');
 	if (pagesbool) {
 		$('#open' + idler).css('display', 'block');
 		pagesbool = false;
 	}
 	else {
 		$('#open' + idler).css('display', 'none');
 		pagesbool = true;
 	}
 })

 function biggermenu() {
 	$('.menu .container').css('padding', '0px').css('width', '100%');
 	$('.menu').css('position', 'fixed').css('text-align', 'center').css('top', '0px');
 	$('.mymenu').css('border-radius', '0px');
 	$('.mymenu input').css('margin', '0 auto').css('width', '71%').css('margin-left', '10%');
 	$('.menulist').css('margin-left', '-30px');
 	$('.pages').css('margin-left', '12%').css('text-align', 'left');
 	$('.gallery').css('left', '55.8%').css('text-align', 'left');
 	$('.blog').css('left', '69.6%').css('text-align', 'left');
 }

 function smallermenu() {
 	$('.menu .container').css('padding', '0px 15px 0px 5px').css('width', '1170px');
 	$('.menu').css('position', 'absolute').css('text-align', 'left').css('top', '140px');
 	$('.mymenu').css('border-radius', '5px');
 	$('.mymenu input').css('margin', '0 auto').css('width', '92%').css('margin-left', '0%');
 	$('.menulist').css('margin-left', '00px');
 	$('.pages').css('margin-left', '0%').css('text-align', 'left');
 	$('.gallery').css('left', '58.2%').css('text-align', 'left');
 	$('.blog').css('left', '76.5%').css('text-align', 'left');
 }
 $(window).scroll(function () {
 	if ($(window).scrollTop() >= 138) {
 		biggermenu();
 	}
 	else {
 		smallermenu();
 	}
 })