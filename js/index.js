var positions = [135,270,405,540,675,810];//六个留言位置
var positionOpen = [true,true,true,true,true,true];
$(function(){
	
	var total = 0;
	var messages = [];
//	setInterval(function(){
//		messages[total] = new message(total,"img/head.png","邱梓佳",'诗尼曼帮帮哒');
//		messages[total].move(10,2);
//		total++;
//	},1000);
	 
	
	showPop();
	
});
function showPop(){
	$('#popWindow').show();
	$('.ytitle').show().addClass('animated bounceInDown');
	$('.headImg').show().addClass('animated rubberBand');
	$('.headName').show().addClass('animated fadeInDown');
	$('.headMoney').show().addClass('animated fadeInUp');
}
function message(total,src,name,content){
	var html = "";
	html += '<div class="message message'+total+'"><div class="head">';
	html +=	'<img src='+src+' /></div><div class="information">';
	html += '<nobr><p>'+name+'：'+content+'</p></nobr></div></div>'		
	$('body').append(html);
	var self = this;
	self.total = total;
	self.length = $('.message'+self.total).width();	
	self.right = -self.length;
	self.open = false;
	self.index = -1;
	$('.message'+self.total).css('right',self.right+'px');
}
message.prototype.move=function(time,step){
	var self = this;
	var py = 0;
	for(i=0;i<6;i++)
	{
		if(positionOpen[i]==true)
		{
			positionOpen[i] = false;
			py = positions[i];
			self.index = i;
			break;
		}
	}
	$('.message'+self.total).css('top',py+'px');
	
	self.tween = setInterval(function(){
		self.right += step;
		$('.message'+self.total).css('right',self.right+'px');
		if(self.right >=20)
		{
			if(self.open == false)
			{
				self.open = true;
				positionOpen[self.index] = true;
			}
		}
		if(self.right>=1920)
		{
			clearInterval(self.tween);
			$('.message'+self.total).remove();
		}
	},time);
}
