$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal', /* Скорость анимации при загрузке и смене фото fast/slow/normal */
		opacity: 0.70, /* Прозрачность фона от 0 до 1 */
		show_title: false, /* Вывод содержимого ALT изображений вверху галереи true/false */
		allow_resize: true, /* Обрезка больших изображений по размеру экрана true/false */
		allow_expand: true, /* Разрешить пользователю менять размеры изображений true/false */
		theme: 'pp_default', /* Темы галереи: light_rounded, dark_rounded, light_square, dark_square, facebook, pp_default*/
		horizontal_padding: 20, /* Отступы по краям */
		modal: false, /* Если true, то закрыть окно можно только кнопкой close */
	});
});