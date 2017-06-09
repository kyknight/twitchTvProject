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
			//take off list
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



