/*
 * 欢迎提出建议
 * 
 * 思路分享：为每一张图片定义一个位移量
 * 
 */
;(function($){
	var Nowindex=0,
		Bimgs=$('.Bimgs'),
		Fimgs=$('.Fimgs'),
		Fimglist=$('.Fimglist'),
		Imglength=Fimgs.length,
		ImgMoveNum=1,
		ImgMlength=Imglength-3,
		Fimgwidth=210,
		ImgOverMove=Fimgwidth*Imglength-Fimgwidth*4,
		ImgMoveValue=0;
	Bimgs.eq(Nowindex).fadeIn();
	Fimgs.eq(Nowindex).addClass("Fimgson");
	for (var i=0;i<Imglength;i++) {
		if(i<3){
			Fimgs.eq(i).attr("MoveValue",0);
		}else if(i<ImgMlength){
			Fimgs.eq(i).attr("MoveValue",ImgMoveNum*Fimgwidth);
			ImgMoveNum++;
		}else{
			Fimgs.eq(i).attr("MoveValue",ImgOverMove);
		};
	};
	Fimgs.click(function(){	
		Fimgmovego($(this).index());
	});
	
	$('#Btl').click(function(){
		Nowindex--;
		if(Nowindex<0)Nowindex=Imglength-1;
		Fimgmovego(Nowindex);
	});
	
	$('#Btn').click(function(){
		Nowindex++;
		if(Nowindex>=Imglength)Nowindex=0;
		Fimgmovego(Nowindex);
	});
	function Fimgmovego(index){
		Nowindex=index;
		var obj=Fimgs.eq(Nowindex);
		ImgMoveValue=obj.attr("MoveValue");
		obj.addClass("Fimgson").siblings().removeClass("Fimgson");
		Bimgs.eq(Nowindex).fadeIn().siblings().hide();
		Fimglist.animate({
			"left":-ImgMoveValue+"px"
		});
	};
	
	
	function randomImg(a){
		var colorletters="01234567890ABCDEF".split(""),
			color="";
		for(var i=0;i<6;i++){
			color+=colorletters[Math.floor(Math.random()*16)];
		};
		return color;
	};
	
	
	for(var imgi=0;imgi<4;imgi++){
		$("#LazyDiv1").append('<img class="lazy" src="img/bg1x.gif" data-original="http://www.gbtags.com/gb/laitu/946x300&text=Hello 01 Img/'+randomImg()+'/ffffff" />');
	};
	
	

	$("#LazyDiv1 img").lazyload({
		effect:"fadeIn"
	});
	
})(jQuery);
