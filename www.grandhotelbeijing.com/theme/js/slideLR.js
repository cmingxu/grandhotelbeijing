// JavaScript Document
/*--------------
	slide of image
	Developed By: Guozhi
	Version: 0.1.0
	Copyright: GuoZhi
	
----------------*/

(function($){  
$.fn.slideLR = function(o) {
	o = $.extend({speed:"8", roll:false, duration:0}, o || {});
	
	return this.each(function(){
		var me = $(this), noop = function(){},
			ul = $("#" + me[0].id + " ul:first"),
			items = $("#" + me[0].id + " ul li"),
			leftBtn = $("#" + me[0].id + " .gz_slideLeft_btn"),
			rightBtn = $("#" + me[0].id + " .gz_slideRight_btn"),
			num = items.size(),
			imgWidth = $("#" + me[0].id + " ul li").eq(0).width(),
			width = num*imgWidth,
			time = null;
			ul.width(width*3);
			
			ul.append(ul.html());
			ul.append(ul.html());
			ul.css("left",width*-1+"px");
			leftBtn.click(function(){
				leftClick();
			})	
			rightBtn.click(function(){
				rightClick();
			})
			/*if(o.roll) {
				time = setInterval(antoHandler, o.duration);
			}
			ImgGo();
			*/
			function ImgGo() {
				var x = ul.position();
				if(x.left <= width*-2 + 1) {
					ul.css("left",width*-1+"px");
				}
				ul.animate({left: "-="+imgWidth+"px"}, o.speed);
			}
			function ImgGo2() {
				var x = ul.position();
				if(x.left == 0) {
					ul.css("left",width*-1+"px");
				}
				ul.animate({left: "+="+imgWidth+"px"}, o.speed);
			}
			function leftClick(){
				//clearInterval(time);
				//time = setInterval(antoHandler, o.duration);
				if(!ul.is(":animated")) {
					ImgGo2();
				}
			}
			function rightClick(){
				//clearInterval(time);
				//time = setInterval(antoHandler, o.duration);
				if(!ul.is(":animated")) {
					ImgGo();
				}	
			}
			
			function antoHandler() {
				//if(!ul.is(":animated")) {
				//	ImgGo();
				//}
			}
 
	});
	
};
})(jQuery); 