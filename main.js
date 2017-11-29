var progress = 0;
var loot = 15;
var lootps = 0;
var flashlights = 0;
var lootspeed = 2500;
var friendos = 0;

function ShopItem(name, level, price, unlock) {
	this.name = name;
	this.level = level;
	this.price = price;
	this.unlock = unlock;
};

Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

Array.prototype.pushIfNotExist = function(element, comparer) { 
    if (!this.inArray(comparer)) {
        this.push(element);
    }
}; 

var flashlightShop = new ShopItem('flashlight', 0, 5, 5);
var friendoShop = new ShopItem('friendo', 0, 15, 15);
var shopItems = [flashlightShop, friendoShop];
var shopVis = [];

function unlockShops(arr) {
	arr.forEach(function unlockable(element){
	if(loot >= element.unlock){
		shopVis.pushIfNotExist(element, function(e) {
			return e.name === element.name && e.price === element.price; 
		});
	}});
	shopVis.forEach(function makeVisible(element){
		document.getElementById(element.name).style.visibility = 'visible';
	})
};


function lootClick(number) {
		if(number > 0){
			$('#loot-button').replaceWith('<div id="loot-progress-bar" class="progress"><div id="loot-progress" role="progressbar" class="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span class="title" style="font-size: 16px;">Looting...</span></div></div>');
				$('.progress-bar').animate({
    				width: "100%"
				}, lootspeed, function() {			
			loot = loot + friendos + 1;
			$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="lootClick(1);"><span class="title" style="padding-left: 10px; padding-right: 10px; font-size: 16px;">Loot</span></button>');
			$('#total-loot').html(loot);
			friendoClick(friendos);
			});
	}};


function friendoClick(number){
	number >= 1 ? lootClick(number) : null;
}

function buyFriendo(){
    var friendoCost = Math.floor(15 * Math.pow(1.75,friendos));    
    if(loot >= friendoCost){                               
        friendos = friendos + 1;                                  
    	loot = loot - friendoCost;                         
    	lootspeed = Math.floor(1.1 * lootspeed);
        document.getElementById('friendo-quantity').innerHTML = friendos;  
        document.getElementById('lootps').innerHTML= lootspeed / 1000;
        document.getElementById('total-loot').innerHTML = loot;  
        lootClick(friendos);
    };
    var nextCost = Math.floor(15 * Math.pow(1.75,friendos));       
    document.getElementById('friendo-cost').innerHTML = nextCost;  
};

function buyFlashlight() {
	var flashlightCost = Math.floor(5 * Math.pow(1.2, flashlights));
	if (loot >= flashlightCost){
		flashlights = flashlights + 1;
		loot = loot - flashlightCost;
		lootspeed = Math.floor(.95 * lootspeed);
		document.getElementById('total-loot').innerHTML = loot;
		document.getElementById('lootps').innerHTML= lootspeed / 1000;
		document.getElementById('flashlight-quantity').innerHTML= flashlights;
	};
	var nextCost = Math.floor(5 * Math.pow(1.2, flashlights));
	document.getElementById('flashlight-cost').innerHTML= nextCost;
};

/*document.getElementById('cheatform').addEventListener('submit', function(e) {
	var maybenum = document.getElementById('cheatform').innerHTML;
    isNaN(maybenum) = true ? null : loot = loot + maybenum;
    e.preventDefault();
}, false);*/

function cheat(code) {
	var c = Number(code);
	if(isNaN(c)){
	document.getElementById('total-loot').innerHTML = loot;
	}
	else{
	loot = Number(code);
	document.getElementById('total-loot').innerHTML = loot;
	}
};


window.setInterval(function(){
	(unlockShops(shopItems));
}, 100);



/*function unlockable(element){
	if(loot >= element.unlock){
		shopVis.pushIfNotExist(element, function(e) {
			return e.name === element.name && e.price === element.price; 
		});
	}};*/



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


/*function flashPop() {
	var nextCost = Math.floor(5 * Math.pow(1.5, flashlights));
	document.getElementById('flashlight-quantity').innerHTML= flashlights;
	document.getElementById('flashlight-cost').innerHTML= nextCost;
};*/


/*
function replaceLootBar() {
$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="startProgress();"><span class="title" style="padding-left: 10px; padding-right: 10px;">Loot</span></button>');
}*/