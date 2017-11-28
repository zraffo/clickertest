var flashlight_pop = document.createElement('div')
$(document).ready(function () {
	$('#flashlight-btn').popover({ 
		trigger: "hover",
		html: true,
		placement: 'right',
		content: flashlight_pop
	});
});

flashlight_pop.innerHTML= '<p>Decrease time to loot by 5%</p><br> <span>Quantity: <span id="flashlight-quantity">0</span><br> <span>Price: <span id="flashlight-cost">5</span> L</span>';