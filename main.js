var progress = 0;
var loot = 0;
var lootps = 0;
var flashlights = 0;
var lootspeed = 2500;

/*function startProgress() 
{
	$('#loot-button').replaceWith('progress').html('<span id="loot-progress"></span>');
	setInterval(function(){
		$('#loot-progress').width(progress);
		progress++;
	}, 500);
};*/

/*function startProgress() {
$('#loot-button').replaceWith('<div id="loot-progress-bar" class="progress"><div id="loot-progress" role="progressbar" class="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span class="title" style="font-size: 16px;">Looting...</span></div></div>');
$('.progress-bar').animate({
    width: "100%"
	}, 2500, function() {
	$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="startProgress();"><span class="title" style="padding-left: 10px; padding-right: 10px; font-size: 16px;">Loot</span></button>');
	$('#total-loot').html(++lootps);
	});
};*/

function lootClick(number) {
	if(number > 0){
		$('#loot-button').replaceWith('<div id="loot-progress-bar" class="progress"><div id="loot-progress" role="progressbar" class="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span class="title" style="font-size: 16px;">Looting...</span></div></div>');
			$('.progress-bar').animate({
    			width: "100%"
			}, lootspeed, function() {
		loot = loot + number;
		$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="lootClick(1);"><span class="title" style="padding-left: 10px; padding-right: 10px; font-size: 16px;">Loot</span></button>');
		$('#total-loot').html(loot);
		});
	};
};

/*
function replaceLootBar() {
$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="startProgress();"><span class="title" style="padding-left: 10px; padding-right: 10px;">Loot</span></button>');
}*/

/*function buyFlashlight(){
    var flashlightCost = Math.floor(10 * Math.pow(1.1,flashlights));     //works out the cost of this cursor
    if(loot >= flashlightCost){                                   //checks that the player can afford the cursor
        flashlights = flashlights + 1;                                   //increases number of cursors
    	loot = loot - flashlightCost;                          //removes the cookies spent
        //document.getElementById('cursors').innerHTML = flashlights;  //updates the number of cursors for the user
        document.getElementById('total-loot').innerHTML = loot;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,flashlights));       //works out the cost of the next cursor
    //document.getElementById('flashlightCost').innerHTML = nextCost;  //updates the cursor cost for the user
};*/

function buyFlashlight() {
	var flashlightCost = Math.floor(5 * Math.pow(1.5, flashlights));
	if (loot >= flashlightCost){
		flashlights = flashlights + 1;
		loot = loot - flashlightCost;
		lootspeed = Math.floor(.95 * lootspeed);
		document.getElementById('total-loot').innerHTML = loot;
		document.getElementById('lootps').innerHTML= lootspeed / 1000;
		document.getElementById('flashlight-quantity').innerHTML= flashlights;
	};
	var nextCost = Math.floor(5 * Math.pow(1.5, flashlights));
	document.getElementById('flashlight-cost').innerHTML= nextCost;
};

window.setInterval(function(){
}, 1000);
