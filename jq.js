var flashlight_pop = document.createElement('div')
var friendo_pop = document.createElement('div')
$(document).ready(function () {
	$('#flashlight-btn').popover({ 
		trigger: "hover",
		html: true,
		placement: 'right',
		content: flashlight_pop
	});
	$('#friendo-btn').popover({ 
		trigger: "hover",
		html: true,
		placement: 'right',
		content: friendo_pop
	});
});

flashlight_pop.innerHTML= '<p>Decrease time to loot by 5%</p><br> <span>Quantity: <span id="flashlight-quantity">0</span><br> <span>Price: <span id="flashlight-cost">5</span> L</span>';
friendo_pop.innerHTML= '<p>Automatically loots for you and increases loot collected by +1. Increases loot time by 10%.</p><br> <span>Quantity: <span id="friendo-quantity">0</span><br> <span>Price: <span id="friendo-cost">15</span> L</span>';

$('#cheatform').bind('keyup', function (e) {                                       
       if (e.which == 13) {
            e.preventDefault();
            cheat($('#cheatform').val());
            console.log(1);
       }
});