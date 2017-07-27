requirejs.config({
	baseUrl:'',
	paths:{
		app:'./app'
	}
});
requirejs(['app/jquery.min','app/Carousel', 'app/gotop', 'app/waterfall'],function($, Carousel,) {
	Carousel.init($('.carousel'));
});