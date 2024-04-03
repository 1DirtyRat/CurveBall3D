window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tracking || {
	init: function() {},
	trackEvent: function() {},
	EVENTS: {
	    'LEVEL_START'	: 'event/level/start',
	    'LEVEL_END'		: 'event/level/end',
	    'LEVEL_UPDATE'	: 'event/level/update',
	    'PING'          : 'event/ping',
	    'AD'			: 'event/ad'
	}
};

let currentLevel = "";

window.famobi_analytics.trackEvent = function(event, params) {

	params = params || {};

	return new Promise(function(resolve, reject) {

		// console.log("trackEvent", event, params);

		// ANALYTICS
		switch(event) {

			case "EVENT_LEVELFAIL":
				try{
					parent.cmgGameEvent("replay", "1");
				} catch(e) {
					console.warn("parent.cmgGameEvent('%s', '%s')", "replay", "1");
				}
				break;

			case "EVENT_LEVELSTART":

				let action = currentLevel == params.levelName.replace("level_", "") ? "replay" : "start";
				// action = "start";
				currentLevel = params.levelName.replace("level_", "");

				try{
					parent.cmgGameEvent(action, currentLevel);
				} catch(e) {
					console.warn("parent.cmgGameEvent('%s', '%s')", action, currentLevel);
				}
				break;

			default:
				// nothing to do
		}
		return resolve(event, params);
	});
}
