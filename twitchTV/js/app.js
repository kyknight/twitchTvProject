//Start jQuery
$(document).ready(function(){
	
	var urlFCC = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
	var twitchTvs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var url = "https://wind-bow.glitch.me/twitch-api/";

	$.getJSON(urlFCC, function(dataFCC){
		//FCC online?
		if(dataA.stream===null){
			$('#fccStatus').html("Free Code Camp Is Currently Offline.");
		} else {
			$('#fccStatus').html("Free Code Camp Is Currently Online.");
		}
	});

	//checks if account exists:
	//	if.user=null --> take off list (account doesn't exist)
	//		else --> if.stream=null --> displays icon, name, offline[.video_banner]
	//				else --> displays icon, name, broadcast name, online[.video_banner]
	$.getJSON(url, function(dataMain){
		if(dataMain.user===null){
			//displays placeholder image and 'account does not exist'
			$('').html("<div class='row'><div class='col col-4'><img class='channelLogo' src='https://maxcdn.icons8.com/Share/icon/User_Interface//login_as_user1600.png'></div><div class='col col-6'><p>User account does not exist. <img class='sadFace' src='http://pinkie.mylittlefacewhen.com/media/f/img/mlfw2904-125814_-_animated_extended_rainbow_dash_sadface.gif'></p></div></div>"); 
		} else {
			if(dataMain.stream===null){
				//display icon, name, 'offline'(.video_banner)
				$('#someID').html('setup look');
			} else {
				//display icon, name, display_name, 'online'(.video_banner)
			}
		}
	});
});



