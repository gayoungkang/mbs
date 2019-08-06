/*웹 스크롤 이벤트*/
	var idx = 1;
	
	var moving=false;
	
	$(function(){	

		
		var nowW = $('body').innerWidth();
		
		if(nowW > 1366){
			console.log('big');
			console.log('onload2');
			
			
			
			$(".main_wrap").mousewheel(function(e, delta){
				if(!moving){
					
					console.log('마우스휠');
					
					moving = true;
					if(moving == true){
						if(delta > 0){
							 console.log("up");
							if(idx > 1){
								idx = idx -1;
							}			
						}else{
							 console.log("down");			
							if(idx < 5){
								idx = idx+1;
							}
						}
						$("html, body").stop().animate({scrollTop:($('#contain_'+idx).offset().top)}, 800, function(){
							moving=false;
							scrollActive();
						})
					}
					if(idx == 5){
						$("button").addClass("active");
					}
					else{
						$("button").removeClass("active");
					}
				}
			})
			
		}else {
			
			$(window).scroll(function(){
					scrollActive2();
					if(idx == 5){
						$("button").addClass("active");
					}
					else{
						$("button").removeClass("active");
					}
			})	
		}
		
		
		/*scrollActive();*/
		
		$(window).resize(function(){
			
/*			var h=$(this).height();
			$(".main_wrap section").css({height:h+"px"});	*/		
			
			
		});	
		
		$(window).trigger("resize");	
	});
	
	function downBtn(){
		var nowW = $('body').innerWidth();
		
		if(nowW>1366){
			if(idx >= 5){
				$("html, body").stop().animate({scrollTop:0}, 
						500, 'swing', function(){});
				idx = 1;
				$("button").removeClass("active");
				$('.text-on').html("HOME");
				$('.text-off').html("MBS 소개");
				$('.pagi-box .pagination-on').stop().animate({'height' : '80px'});
			}else{
				idx = idx+1;
				$("html, body").stop().animate({scrollTop:($('#contain_'+idx).offset().top)}, 800, function(){
					moving=false;
					scrollActive();
				})
			}
		}
		else{
			if(idx >= 5){
				$("html, body").stop().animate({scrollTop:0}, 
						500, 'swing', function(){});
				idx = 1;
				$("button").removeClass("active");
				$('.text-on').html("HOME");
				$('.text-off').html("MBS 소개");
				$('.pagi-box .pagination-on').stop().animate({'height' : '50px'});
			}else{
				idx = idx+1;
				$("html, body").stop().animate({scrollTop:($('#contain_'+idx).offset().top)}, 800, function(){
					moving=false;
					scrollActive2();		
				})
			}
		}
	}
	
	window.onload= function() {
		var nowW = $('body').innerWidth();
		
		if(nowW>1366){
			$('.pagi-box .pagination-on').animate({'height' : '80px'});	
			$('.text-on').html("HOME");
			$('.text-off').html("MBS 소개");
			$("html, body").stop().animate({scrollTop:($('#contain_1').offset().top)}, 400);
			console.log('onload1');
		}
		else{
			$('.pagi-box .pagination-on').animate({'height' : '50px'});	
			$('.text-on').html("HOME");
			$('.text-off').html("MBS 소개");
			$("html, body").stop().animate({scrollTop:($('#contain_1').offset().top)}, 400);
			console.log('onload1');
		}
	}
	
	function scrollActive() {
		
		var position = $(this).scrollTop()+400;		
		
		if(0 <= position && position <  $('.main_wrap .section2').offset().top) {         
			console.log('.section1');
			$('.text-on').html("HOME");
			$('.text-off').html("MBS 소개");
			$('.pagi-box .pagination-on').stop().animate({'height' : '80px'});
			
		 }
		 else if(position >=  $('.main_wrap .section2').offset().top && position < $('.main_wrap .section3').offset().top) {         
			 console.log('.section2');		
				$('.text-on').html("MBS 소개");
				$('.text-off').html("MBS 컨텐츠");
				$('.pagi-box .pagination-on').stop().animate({'height' : '160px'});

		 }
		 else if(position >=  $('.main_wrap .section3').offset().top && position < $('.main_wrap .section4').offset().top) {         
			 console.log('.section3');		
				$('.text-on').html("MBS 컨텐츠");
				$('.text-off').html("MBS 팀 멤버");
				$('.pagi-box .pagination-on').stop().animate({'height' : '240px'});
		 }
		 else if(position >=  $('.main_wrap .section4').offset().top && position < $('.main_wrap .section5').offset().top) {         
			 console.log('.section4');			 
				$('.text-on').html("MBS 팀 멤버");
				$('.text-off').html("Token Economy");
				$('.pagi-box .pagination-on').stop().animate({'height' : '320px'});
		 }
		 else if(position >=  $('.main_wrap .section5').offset().top) {         
			 console.log('.section5');			
				$('.text-on').html("Token Economy");
				$('.text-off').html("HOME");
				$('.pagi-box .pagination-on').stop().animate({'height' : '400px'});
		 }
		
		if(idx == 5){
			$("button").addClass("active");
		}
		else{
			$("button").removeClass("active");
		}
	}
	
	/* 패드 */
	function scrollActive2() {
		
		var position = $(this).scrollTop()+400;		
		
		if(0 <= position && position <  $('.main_wrap .section2').offset().top) {    
			idx = 1;
			console.log('.section1');
			$('.text-on').html("HOME");
			$('.text-off').html("MBS 소개");
			$('.pagi-box .pagination-on').stop().animate({'height' : '50px'});
			
		 }
		 else if(position >=  $('.main_wrap .section2').offset().top && position < $('.main_wrap .section3').offset().top) {
			 idx = 2;
			 console.log('.section2');		
				$('.text-on').html("MBS 소개");
				$('.text-off').html("MBS 컨텐츠");
				$('.pagi-box .pagination-on').stop().animate({'height' : '100px'});

		 }
		 else if(position >=  $('.main_wrap .section3').offset().top && position < $('.main_wrap .section4').offset().top) {
			 idx = 3;
			 console.log('.section3');		
				$('.text-on').html("MBS 컨텐츠");
				$('.text-off').html("MBS 팀 멤버");
				$('.pagi-box .pagination-on').stop().animate({'height' : '150px'});
		 }
		 else if(position >=  $('.main_wrap .section4').offset().top && position < $('.main_wrap .section5').offset().top) {
			 idx = 4;
			 console.log('.section4');			 
				$('.text-on').html("MBS 팀 멤버");
				$('.text-off').html("Token Economy");
				$('.pagi-box .pagination-on').stop().animate({'height' : '200px'});
		 }
		 else if(position >=  $('.main_wrap .section5').offset().top) {
			 idx = 5;
			 console.log('.section5');			
				$('.text-on').html("Token Economy");
				$('.text-off').html("HOME");
				$('.pagi-box .pagination-on').stop().animate({'height' : '250px'});
		 }
	}
	