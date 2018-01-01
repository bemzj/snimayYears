$(function(){
	//星星闪烁
	var starTween = false;
	var sTime = 500;
	$('.star').animate({'opacity':0.5},sTime);
	setInterval(function(){
		if(starTween==true)
		{
			starTween = false;
			$('.star').animate({'opacity':0.5},sTime);
		}else{
			starTween = true;
			$('.star').animate({'opacity':1},sTime);
		}		
	},sTime);
	var sorts = [];
	for(var i = 0;i<10;i++)
	{
		var n;
		if(i<9)
		{
			n = '0'+(i+1);
		}else{
			n = i+1;
		}
		
		sorts[i] = new sortMessage(n,"邱梓佳",'img/head.png',786.01,800);
		sorts[i].play(1200);
	}
});
function sortMessage (n,name,src,money,total){
	/*
	 * n 为名次
	 * name 为名字
	 * src 为头像
	 * money 获得钱数
	 * total 个人获得最大值钱数
	 */
	var html = "";
	html += '<div class="sort"><div class="floatl name">';
	html +=	'<p><span>'+n+'</span><span>'+name+'</span></p>';
	html += '</div><div class="floatl head"><img src='+src+'/>';	
	html +=	'</div><div class="floatl mIn"><div class="mOn mOn'+n+'"></div>';
	html += '</div><div class="floatl money"><p>'+money+'</p>';
	html += '</div><div class="clearl"></div></div>';
	$('#sort').append(html);
	this.total = total;
	this.n = n;
	this.money = money;
}
sortMessage.prototype.play= function(time){
	$('.mOn'+this.n).stop().animate({'width':this.money/this.total*640+'px'},time);
}
