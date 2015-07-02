

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
	
	$(".btn").click (function toggleMuteAudio(){
        $(".btn2").show();
        $(".btn").hide();
        $('#themesong')[0].muted = true;
        $('#hadouken-sound')[0].muted = true;
        $('#coolsound')[0].muted = true;
    });

    $(".btn2").click (function toggleMuteAudio(){
        $(".btn").show();
        $(".btn2").hide();
        /*$('#themesong')[0].volume = 0.5;
        $('#hadouken-sound')[0].volume = 0.5;
        $('#coolsound')[0].volume = 0.5;*/
        $('#themesong')[0].muted = false;
        $('#hadouken-sound')[0].muted = false;
        $('#coolsound')[0].muted = false;
    });
	

	//AUDIO INTRO
	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	  /*if ((".btn").click() == true) {
	  	$('#hadouken-sound')[0].volume = 0;
	  }*/
	}

	//AUDIO THEME
	
	$('#themesong')[0].volume = 0.5;
	$('#themesong')[0].load();
	$('#themesong')[0].play();
	

	//AUDIO COOL
	function playCool () {
		$('#coolsound')[0].volume = 0.5;
		$('#coolsound')[0].pause();
		$('#coolsound')[0].play();
	}
	
	//PRESENTATION FADEiN
	$(".logo").fadeIn(4000, "linear");
	$(".logo").fadeOut(4000, "linear");
	$(".jq-logo").delay(8000).fadeIn(2000, "linear");
	$(".jq-logo").fadeOut(4000, "linear");
	$(".presents").delay(8000).fadeIn(2000, "linear");
	$(".presents").fadeOut(4000, "linear");
	$(".howto").delay(14000).fadeIn(2000);
	

	//THE 'X' KEYDOWN = RYU COOL
	var event = 0;
	$("html").keydown(function(event){ 
		
        if ( event.which == 88 ) {
            //alert("it works");
            var x = 88;
            console.log(x);
            $(".ryu-sta").hide();
            $(".ryu-po").hide();
            $(".ryu-cool").show();
        	playCool();
        } 
    });

	//RELEASE 'X' KEY = RYU STANDING 'DEFAULT'
    $("html").keyup(function(event){
    	$(".ryu-sta").show();
		$(".ryu-po").hide();
		$(".ryu-cool").hide();
		//playCool.stop();
		$('#coolsound')[0].pause();
    });


    //MOUSE-ENTER DIV = RYU READY
	$(".leftside").mouseenter(function() {
		$(".ryu-sta").hide();
		$(".ryu-po").show();
	})


	//MOUSE-EXIT DIV = RYU STANDING 'DEFAULT'
	.mouseleave(function() {
		$(".ryu-sta").show();
		$(".ryu-po").hide();
	})


	//MOUSE CLICK = HADOUKEN + MUSIC
	.mousedown(function() {
		playHadouken(); //AUDIO COPY PASTE
		$(".ryu-po").hide();
		$(".ryu-thr").show();
		$(".hadouken").finish().show().animate({'left': '1200px'}, 500, 
        	function() {
				$(this).stop();
				$(this).hide();
				$(this).css('left', '570px');
			});
	})


	//RELEASE MOUSE CLICK = BACK TO DEFAULT ('MOUSE-ENTER')
	.mouseup(function() {
		$(".ryu-po").show();
		$(".ryu-thr").hide();
		$(".hadouken").hide();
	})






});




	