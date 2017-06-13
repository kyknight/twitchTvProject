//Start jQuery
$(document).ready(function(){
	
	var twitchTvs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "fakeName"];
  var container = document.getElementById("twitch");
	
	$.each(twitchTvs, function(index, channel){
		var urlFCC = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
		var urlChannel = "https://wind-bow.glitch.me/twitch-api/channels/"+channel+"/";
		var urlStream = "https://wind-bow.glitch.me/twitch-api/streams/"+channel+"/";

		$.getJSON(urlFCC, function(dataFCC){
			//FCC online?
			if(dataFCC===null){
				$('#fccStatus').html("Free Code Camp Is Currently Offline.");
			} else {
				$('#fccStatus').html("<p class='fccLink'>Free Code Camp Is Currently <a href='https://www.twitch.tv/freecodecamp' target='_blank'>Online</a></p>.");
			}
		});

		//checks if account exists:
		//	if.user=null --> take off list (account doesn't exist)
		//		else --> if.stream=null --> displays icon, name, offline[.video_banner]
		//				else --> displays icon, name, broadcast name, online[.video_banner]
		$.getJSON(urlChannel, function(dataMain){
			 if(dataMain.user===null){
			 	//displays placeholder image and 'account does not exist'
				container.innerHTML +="<div class='row'><div class='col col-3'><img class='noLogo' src='https://maxcdn.icons8.com/Share/icon/User_Interface//login_as_user1600.png'></div><div class='col col-6'><p>User account does not exist. <img class='sadFace' src='http://pinkie.mylittlefacewhen.com/media/f/img/mlfw2904-125814_-_animated_extended_rainbow_dash_sadface.gif'></p></div></div>"; 
			} else {

				$.getJSON(urlChannel, function(data){
          if(data.stream===null){
            //display icon, name, 'offline'(.video_banner)
            container.innerHTML +="<div class='row'><div class='col col-3'><img class='channelLogo' src="+data.logo+"></div><div class='col col-6'><h2>"+data.display_name+"</h2><p>OFFLINE  "+data.video_banner+"</p></div></div>";
          } else {
            //display icon, name, display_name, 'online'(.video_banner)
            container.innerHTML +="<div id='online' class='row'><div class='col col-3'><img class='channelLogo' src="+data.logo+"></div><div class='col col-6'><h2>"+data.display_name+"</h2><p class='onlineLink'><a href="+data.url+" target='_blank'>ONLINE </a></p><p class='channelStatus'>"+data.status+"</p></div></div>";
            console.log(result);
          }
				});
			}
		});
	});
});


