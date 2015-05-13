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
		ImgOverMove=210*Imglength-210*4,
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
})(jQuery);
