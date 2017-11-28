var progress = 0;

/*function startProgress() 
{
	$('#loot-button').replaceWith('progress').html('<span id="loot-progress"></span>');
	setInterval(function(){
		$('#loot-progress').width(progress);
		progress++;
	}, 500);
};*/

function startProgress() {
$('#loot-button').replaceWith('<div id="loot-progress-bar" class="progress"><div id="loot-progress" role="progressbar" class="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span class="title" style="font-size: 16px;">Looting...</span></div></div>');
$('.progress-bar').animate({
    width: "100%"
	}, 2500, function() {
	$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="startProgress();"><span class="title" style="padding-left: 10px; padding-right: 10px;">Loot</span></button>');
	});
};

/*
function replaceLootBar() {
$('#loot-progress-bar').replaceWith('<button id="loot-button" role="button" class="btn btn-primary btn-block" onclick="startProgress();"><span class="title" style="padding-left: 10px; padding-right: 10px;">Loot</span></button>');
}*/
