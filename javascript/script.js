$(document).ready(function($) {
	$(this).scroll(function(event) {
		if($(this).scrollTop() > 20){
			if(!$('header .nav_wrap').hasClass('fixed'))
				$('header .nav_wrap').toggleClass('fixed');
		}	
		else
			if($('header .nav_wrap').hasClass('fixed'))
				$('header .nav_wrap').toggleClass('fixed');
		});
		//navbar переход к секции
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1200); // анимируем скроолинг к элементу scroll_el
	}
	    return false; // выключаем стандартное действие
	});

});