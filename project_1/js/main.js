$(window).on('load', function() {
	
	//vide.js - video background
	$('#header').vide('./video/cover', {
		bgColor: '#header'
	});
});





/*
//для всех обьектов которые будут поддаваться анимации
const animItems = document.querySelectorAll('_anim-items');

// проверяю есть ли ананимные классы 
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	 function animOnScroll() {
		 for (let index = 0; index < animItems.length; index++) {
			 const animItem = animItems[index];
			 const animItemHeight = animItem.offsetHeight;
			 const animItemOffset = offset(animItem).top;
			 const animStart = 4;

			 let animItemPoint = window.innerHeight - animItemHeight / animStart;
			 if (animItemHeight > window.innerHeight) {
				 animItemPoint = window.innerHeight - window.innerHeight / animStart;
			 }

			 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset <  ( animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			 }else {
				 animItem.classList.remove('_active');
			 }
			}
		}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}*/