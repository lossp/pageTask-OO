define(['jquery'], function($){
	function GoTop($ct){
	   this.ct=$ct || $('body');
	   this.target=$('<button class="gotopBtn">回到顶部</button>');
	   this.target.css({
	   	position:'fixed',
	   	right: '10px',
		bottom:'10px'
	   });
	}
	GoTop.prototype.bindEvent=function(){
		this.target.on('click',function(){
			$(window).scrollTop(0);
		});
		var $top=this.target;
		$(window).on('scroll',function(){
			if($(this).scrollTop()>100){
				$top.show();
			}else{
				$top.hide();
			}
		});
	};
	GoTop.prototype.createNode=function(){
		this.ct.append(this.target);
		this.target.hide();
	};


	var $top=new GoTop();
	$top.createNode();
	$top.bindEvent();
})
