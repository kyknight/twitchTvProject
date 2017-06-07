//Start jQuery
$(document).ready(function(){
	var following = [];
	//FCC stream info and call api status
	var urlA = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
	$.getJSON(urlA, function(dataA){
		if(dataA.stream===null){
			$("#fccStatus").html("Free Code Camp is currently OFFLINE.");
		} else{
			$("#fccStatus").html("Free Code Camp is currently ONLINE.");
		}
	});

	var followerURL = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels/";
	$.getJSON(followerURL, function(dataB){
		for(var i=0; i<data.follows.length; i++){
			var displayName = dataB.follows[i].channel.display_name;//take out later
			following.push(displayName);
		}
		following.push("ESL_SC2");
		following.push("OgamingSC2");
		following.push("cretetion");
		following.push("freecodecamp");
		following.push("storbeck");
		following.push("habathcx");
		following.push("RobotCaleb");
		following.push("noobs2ninjas");

		for(var i=0; i<following.length; i++){
			var urlB = "https://wind-bow.gomix.me/twitch-api/streams/"+follows[i]+"/?callback=?";

			$.getJSON(urlB).done(function(dataC){
				var logo;
				var status;
				var name;

				if(dataC.error){
					logo = "https://sedimec-med.dictamenmedico.com/sedimec-med/assets/alert-icon-message-9428a3a970e969cef4348424ad8bb866.png";
					name = dataC.message;
					status = dataC.error;

					$("#followerURL").prepend("<div class='row'>" + "<div class='col col-md-4'>" + "<img src='"+logo+"'>" + "</div>" + "<div class='col col-md-4'>" + name + "</div>" + "<div class='col col-md-4'>" + status + "</div> </div>");

				}
			});
		}
	});
});


