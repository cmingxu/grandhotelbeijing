// JavaScript Document
/*--------------
	sub navigation
	Developed By: Guozhi
	Version: 0.1.0
	Copyright: Ggv
	
	Create a menu with an unorder list, you can use css to control your style.
	the example of html:
	<ul id="nav">
		<li>
			<a href="">home</a>
		 	<ul>
				<li><a href="">about</a>
					<ul class="subNav">
						<li>about1</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
	By the way:
	Class named activeNav - the style when the mouse over the list
	
----------------*/
(function($){  
$.fn.subNav = function(o) {
	o = $.extend({speed:"normal", slide:false, hover:true, current:"" }, o || {});
	
	return this.each(function(){
		var me = $(this), noop = function(){},
			items = $("." + me[0].className + " li"),
			itemsLi = $("." + me[0].className + " li ul li ul");	
			
		items.each(function(){
			if($(this).hasClass(o.current)) {
				$(this).addClass("current");		
			}
		}); 
		itemsLi.prev().addClass("prevNav");	
		if(o.hover){
			items.hover(function(){
				if(!$(this).find("ul:first").is(":animated")){
					$(this).addClass("activeNav");
					if(o.slide) {
						$(this).find("ul:first").slideDown(o.speed); 
					}
					else {
						$(this).find("ul:first").show(o.speed);
					}
				}
				
			},function(){			
				$(this).removeClass("activeNav");
				if(o.slide) {
					$(this).find("ul:first").slideUp(o.speed); 
				}
				else {
					$(this).find("ul:first").hide(o.speed);
				}		
			});
		}
		else {
			items.each(function(){
				$(this).click(function(){
					if($(this).find("ul:first")){
						$(this).find("ul:first").slideToggle();
						$(this).siblings("li").find("ul:first").slideUp(o.speed);
	
					}				   
				});					
			});
		}
		
	});
	

};
})(jQuery); 