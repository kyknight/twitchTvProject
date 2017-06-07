//Start jQuery
$(document).ready(function(){
	
	var twitchTvs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var container = document.getElementById('twitchtv');

     $.each(twitchTvs,function(index,channel){
         $.ajax({
            type: "GET",
            url: "https://wind-bow.glitch.me/twitch-api/streams/"+channel,
            success: function(result){
                if(result.stream == null){ //Offline
                    $.ajax({
                        type: "GET",
                        url: "https://wind-bow.glitch.me/twitch-api/channels/"+channel,
                        success: function(result){
                            if(result.display_name == undefined){//not exist
                                container.innerHTML +='<div class="row" id="undefined"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"></div><div class="col-sm-4"><h2>'+channel+'<h2><p>This channel does not exist.</p></div></div></div></div>';      
                            }
                            else{
                                container.innerHTML +='<div class="row" id="offline"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"><img src="'+result.logo+'></div><div class="col col-sm-4"><h2>'+result.display_name+'<h2></div></div></div></div>'; 
                            }
                        }                    
                    });                     
                } else{//Online
                    container.innerHTML +='<div class="row" id="online"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"><img src="'+result.stream.channel.logo+'></div><div class="col col-sm-4"><h2>'+result.stream.channel.display_name+'<h2><p>'+result.stream.channel.status+'.</p><a href="'+result.stream.channel.url+'" target="_blank">Watch now!</a></div></div></div></div>';
                    console.log(result);
                } 
            },
            error: function (jqXHR, exception) {
                alert('API unavailable. Try later.');
            }
        });         
     });
});




	// var urlA = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
	// $.getJSON(urlA, function(dataA){
	// 	if(dataA.stream===null){
	// 		$("#fccStatus").html("Free Code Camp is currently OFFLINE.");
	// 	} else{
	// 		$("#fccStatus").html("Free Code Camp is currently ONLINE.");
	// 	}
	// });

	// var followerURL = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels/";
	// $.getJSON(followerURL, function(dataB){
	// 	for(var i=0; i<data.follows.length; i++){
	// 		var displayName = dataB.follows[i].channel.display_name;//take out later
	// 		following.push(displayName);
	// 	}
	// 	following.push("ESL_SC2");
	// 	following.push("OgamingSC2");
	// 	following.push("cretetion");
	// 	following.push("freecodecamp");
	// 	following.push("storbeck");
	// 	following.push("habathcx");
	// 	following.push("RobotCaleb");
	// 	following.push("noobs2ninjas");

	// 	for(var i=0; i<following.length; i++){
	// 		var urlB = "https://wind-bow.gomix.me/twitch-api/streams/"+follows[i]+"/?callback=?";

	// 		$.getJSON(urlB).done(function(dataC){
	// 			var logo;
	// 			var status;
	// 			var name;

	// 			if(dataC.error){
	// 				logo = "https://sedimec-med.dictamenmedico.com/sedimec-med/assets/alert-icon-message-9428a3a970e969cef4348424ad8bb866.png";
	// 				name = dataC.message;
	// 				status = dataC.error;

	// 				$("#followerURL").prepend("<div class='row'>" + "<div class='col col-md-4'>" + "<img src='"+logo+"'>" + "</div>" + "<div class='col col-md-4'>" + name + "</div>" + "<div class='col col-md-4'>" + status + "</div> </div>");
	// 			}
	// 			if(dataC.stream===null){
	// 				$.getJSON(dataC._links.channel, function(dataE){
	// 					status = "OFFLINE";
	// 					logo = dataE.logo;
	// 					name = dataC.display_name;

	// 					if(logo===null){
	// 						logo = "https://sedimec-med.dictamenmedico.com/sedimec-med/assets/alert-icon-message-9428a3a970e969cef4348424ad8bb866.png";
	// 					}
	// 					$("#followerURL").prepend("<div class='row'>" + "<div class='col col-md-4'>" + "<img src='"+logo+"'>" + "</div>" + "<div class='col col-md-4'>" + name + "</div>" + "<div class='col col-md-4'>" + status + "</div> </div>");
	// 				});
	// 			}
	// 		});
	// 	}

	// 	for(var i=0; i<following.length; i++){
	// 		var onlineURL = "https://wind-bow.gomix.me/twitch-api/streams/"+follows[i];
	// 		$.getJSON(url, function(dataD){
	// 			var logo = dataD.stream.channel.logo;
	// 			if(logo===null){
	// 				logo = "https://sedimec-med.dictamenmedico.com/sedimec-med/assets/alert-icon-message-9428a3a970e969cef4348424ad8bb866.png";
	// 			}

	// 			var status = dataD.stream.channel.status;
	// 			var name = dataD.stream.channel.display_name;

	// 			$("#followerURL").prepend("<div class='row'>" + "<div class='col col-md-4'>" + "<img src='"+logo+"'>" + "</div>" + "<div class='col col-md-4'>" + name + "</div>" + "<div class='col col-md-4'>" + status + "</div> </div>");
	// 		});
	// 	}
	// });
});


