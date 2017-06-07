//Start jQuery
$(document).ready(function(){
	
	var twitchTvs = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "Storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var container = document.getElementById('twitchtv');

     $.each(twitchTvs,function(data1,channel){
         $.ajax({
            type: "GET",
            url: "https://wind-bow.glitch.me/twitch-api/streams/"+channel,
            success: function(data){
                if(data.stream == null){ //Offline
                    $.ajax({
                        type: "GET",
                        url: "https://wind-bow.glitch.me/twitch-api/channels/"+channel,
                        success: function(data){
                            if(data.display_name == undefined){//not exist
                                container.innerHTML +='<div class="row" id="undefined"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"></div><div class="col-sm-4"><h2>'+channel+'<h2><p>This channel does not exist.</p></div></div></div></div>';      
                            }
                            else{
                                container.innerHTML +='<div class="row" id="offline"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"><img src="'+data.logo+'></div><div class="col col-sm-4"><h2>'+data.display_name+'<h2></div></div></div></div>'; 
                            }
                        }                    
                    });                     
                } else{//Online
                    container.innerHTML +='<div class="row" id="online"><div class="col col-sm-4"><div class="row" ><div class="col col-sm-4"><img src="'+data.stream.channel.logo+'></div><div class="col col-sm-4"><h2>'+data.stream.channel.display_name+'<h2><p>'+data.stream.channel.status+'.</p><a href="'+data.stream.channel.url+'" target="_blank">Watch now!</a></div></div></div></div>';
                    console.log(data);
                } 
            },
            error: function (jqXHR, exception) {
                alert('API unavailable. Try later.');
            }
        });         
     });
});