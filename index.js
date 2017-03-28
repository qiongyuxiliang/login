$(document).ready(function(){
	$('.get_btn').on('click',function(){
		var reg = /^1[0-9]{10}$/;
		// var num = $('.tel').change(function(){
		// 	console.log($(this).val()) ;
		// 	即时改变input的value值
		// });		
		// console.log(num());
		var num = $('.tel').val(),
		    self=this;
		
		
		if(!num.match(reg)){
			confirm("电话号码无效，请输入有效的电话号码!");

		}
		else{
			$(this).css({'background':'#e0e0e0'});

			$(this).val(function(){
				var time = 30;
				clearInterval(timer);
				var timer=setInterval(function(){
					$(self).html(time);
					time = time-1;
					
					if(time==0){
						clearInterval(timer);
						$(self).css({'background':'#71c3c8'}).html('获取验证码')
						return;
					}
				},1000)
			});
		}
		
	})
	//验证验证码是否为空
	var reg1=/^\d{4}$/; 
	if(!($('.get_code').val()).match(reg1)){
		var another_src=$('.register_rej_allo').attr('data-src');
		console.log(another_src);
		$('.register_rej_allo').attr('src',another_src);


	}
			
		
		else
			{
			
			$("get_code").blur(function(){
				var src=$('.register_rej_allo').attr('src');
				$('.register_rej_allo').attr('src',src);
			});
			

		}
	

})