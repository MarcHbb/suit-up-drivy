$("#compute").click(function(){

  $("#wrap_form").animate({
			height: '325px'
	});

	$("#actors").animate({
			height: '120px',
			width:'390px',
			padding:'8px',
			bottom:'90px',
			left:'481px',
      fontSize:'15px'
	});

	$("#anim").hover(function(){

		$("#actors").animate({
			height:'10px',
      fontSize:'0px',

		});

		$("#wrap_form").animate({
	  	width:'400px',
	  	height:'450px',
		});

    $("#arrow").animate({
        width:'20px',
        left: '670px',
        bottom:'100px'
    });

	});

	$("#actors").hover(function(){

		$("#actors").animate({
			height:'120px',
      fontSize:'15px'
		});

		$("#wrap_form").animate({
		  height:'325px',
		});

    $("#arrow").animate({
        width:'0px',
        left: '670px',
        bottom:'100px'
    });

	});

	$("#compute").css({
		marginTop:'15px',

	});

});
