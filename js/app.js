

/*
HOVER PREVIOUS TO MOUSEOVER
 $(document).ready(function() {
	$(".logo").fadeIn(4000, "linear");
	$(".logo").fadeOut(4000, "linear");
	$(".leftside").hover(function() {
		$(".ryu-sta").css("display", "none");
		$(".ryu-po").css("display", "block");
		$(".ryu-thr").css("display", "none");
		$(".hadouken").css("display", "none");
	});

*/

/* IT WORKS BUT HAVE WHEN HOVER CLICK DOESNT WORK*//*
$(document).ready(function() {
	$(".logo").fadeIn(4000, "linear");
	$(".logo").fadeOut(4000, "linear");
	

	$(".leftside").mouseover(function() {
		$(".ryu-sta").css("display", "none");
		$(".ryu-po").css("display", "block");
		$(".ryu-thr").css("display", "none");
		$(".hadouken").css("display", "none");
	
	$(".leftside").mouseout(function() {
		$(".ryu-sta").css("display", "block");
		$(".ryu-po").css("display", "none");
		$(".ryu-thr").css("display", "none");
		$(".hadouken").css("display", "none");
	})
	});

	$(".leftside").click(function() {
		$(".ryu-po").css("display", "none");
		$(".ryu-thr").css("display", "block");
		$(".hadouken").css("display", "block").animate(
        	{'left': '850px'}, 500, function() {
				    $(this).stop();
				    $(this).hide();
				    $(this).css('left', '570px');
				    });
	});

});

*/







$(document).ready(function() {
	



	//AUDIO -- COPYPASTE

	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}


	$(".logo").fadeIn(4000, "linear");
	$(".logo").fadeOut(4000, "linear");
	$(".jq-logo").delay(8000).fadeIn(2000, "linear");
	$(".jq-logo").fadeOut(4000, "linear");
	$(".presents").delay(8000).fadeIn(2000, "linear");
	$(".presents").fadeOut(4000, "linear");
	$(".howto").delay(14000).fadeIn(2000);
	
	

	$(".leftside").mouseenter(function() {
		$(".ryu-sta").hide();
		$(".ryu-po").show();
	})


	.mouseleave(function() {
		$(".ryu-sta").show();
		$(".ryu-po").hide();
	})


	.mousedown(function() {
		playHadouken(); //AUDIO COPY PASTE
		$(".ryu-po").hide();
		$(".ryu-thr").show();
		$(".hadouken").finish().show().animate({'left': '1200px'}, 500, 
        	function() {
				//$(this).stop();
				$(this).hide();
				$(this).css('left', '570px');
			});
	})

	.mouseup(function() {
		$(".ryu-po").show();
		$(".ryu-thr").hide();
		$(".hadouken").hide();
	})



});




	