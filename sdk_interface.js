let gdsdk_SDK_READY;
let gdsdk_SDK_GAME_START;
let gdsdk_SDK_GAME_PAUSE;
let gdsdk_SDK_GDPR_TRACKING;
let gdsdk_SDK_GDPR_TARGETING;
let gdsdk_AD_ERROR;
let gdsdk_AD_IS_ALREADY_RUNNING;
let gdsdk_SDK_REWARDED_WATCH_COMPLETE;

/*
	SETTINGS
 */
const SDK_INTERFACE_SETTINGS = {

	version: "1.0.0",

	isProd: true,
	debugLevel: 1,
	forceMockObject: true,

	// ads
	interstitial: {
		enabled: true, // enable/disable interstitial ads
		initial: true, // show initial ad
		preload: 250, // preload interval in ms
		retry: 2000, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		cooldown: 0, // time between ads
	},
	rewarded: {
		enabled: true, // enable/disable rewarded ads
		preload: 250, // preload interval in ms
		retry: 2000, // timeout before retry after preload fail
		timout: 250, // timout before calling showRewarded()
		reward: true // reward when in doubt
	},

	// files to load
	externalFiles: [],

	// features
	features: {
		auto_quality: false,
		copyright: false,
		credits: false,
		external_achievements: false,
		external_leaderboard: false,
		external_mute: false,
		external_pause: false,
		external_start: false,
		forced_mode: false,
		leaderboard: false,
		multiplayer: false,
		multiplayer_local: true,
		skip_title: false,
		skip_tutorial: false,
		rewarded: true
	},

	// forced mode
	forced_mode: {

	},

	// misc
	aid: "A1234-5", // affiliate id
	name: "Azerion / GameDistribution", // name of partner/customer
	branding_url: "",
	branding_image: "logo", // "logo" = transparent
	show_splash: false,
	menuless: true
};

const SDK_INTERFACE_OVERRIDES = {
	famobi: {

		/*
		getCurrentLanguage: function() {
			return "en";
		},
		*/

		/*
		setPreloadProgress: function(progress) {

		},
		*/

		/*
		gameReady: function() {

		},

		playerReady: function(progress) {

		},
		*/
	},
	famobi_analytics: {
		trackEvent: function(event, params) {

			return new Promise(function(resolve, reject) {
				switch(event) {

					case "EVENT_LEVELFAIL":
						if(params.reason !== "quit") {
							break;
						}
					case "EVENT_LEVELSTART":
					case "EVENT_LEVELRESTART":

						return window.famobi.showAd(function() {
							resolve(event, params);
						});

					default:
						// nothing to do
				}
				return resolve(event, params);
			});
		}
	}
}

const SDK_INTERFACE_PRELOAD_AD = function(type) {

	return new Promise(function(resolve, reject) {

		if(type === "rewarded") {

			window.gdsdk.preloadAd('rewarded').then(response => {
				resolve();
			}).catch(error => {
				reject();
			});
		} else {
			resolve(); // or reject()
		}
	});
};

const SDK_INTERFACE_SHOW_AD = function() {

	return new Promise(function(resolve, reject) {

		gdsdk_AD_ERROR = () => {
			gdsdk_AD_ERROR = null;
			reject();
		};

		gdsdk_SDK_GAME_START = () => {
			gdsdk_SDK_GAME_START = null;
			resolve();
		};

		window.gdsdk.showAd().then(() => {
			SDK_INTERFACE.settings.debugLevel && console.info('showAd(window.gdsdk.AdType.Display) resolved.');
			if(typeof gdsdk_SDK_GAME_START === "function") {
				gdsdk_SDK_GAME_START();
			}
		}).catch(error => {
			SDK_INTERFACE.settings.debugLevel && console.info(error);
		});
	});
};

const SDK_INTERFACE_REWARDED_AD = function() {

	return new Promise(function(resolve, reject) {

		gdsdk_SDK_REWARDED_WATCH_COMPLETE = () => {
			gdsdk_SDK_REWARDED_WATCH_COMPLETE = null;
			resolve(true);
		};

		window.gdsdk.showAd("rewarded").then(response => {
			SDK_INTERFACE.settings.debugLevel && console.info('showAd(window.gdsdk.AdType.Display) resolved.');
			// ad process is done
			setTimeout(() => {
				gdsdk_SDK_REWARDED_WATCH_COMPLETE = null;
				resolve(false);
			}, 500);
			
		}).catch(error => {
			SDK_INTERFACE.settings.debugLevel && console.info(error);
			return resolve(false);
		});
	});
};

const SDK_INTERFACE_MOCK_OBJECT = function() {
	return new Promise(function(resolve, reject) {

		// DO YOUR MAGIC HERE!
		resolve();
	});
};

const SDK_INTERFACE_INIT = function() {
	return new Promise(function(resolve, reject) {

		gdsdk_SDK_READY = () => {

			if(SDK_INTERFACE.settings.forceMockObject) {
				window.gdsdk.showAd = type => {

					switch(type) {
						case "rewarded":
							return new Promise(function(resolve, reject) {
					    		if(confirm("Rewarded ad ended. Should a reward be granted?")) {
					    			typeof gdsdk_SDK_REWARDED_WATCH_COMPLETE === "function" && gdsdk_SDK_REWARDED_WATCH_COMPLETE();
					    		} else {

					    		}
					    		return resolve();
							});
						default:
							return new Promise(function(resolve, reject) {
					    		alert("This is an ad");
					    		return resolve();
							});
					}
				};

				window.gdsdk.preloadAd = type => {
					return new Promise(function(resolve, reject) {
					    return resolve();
					});
				};
			}
			resolve();
		};

		window["GD_OPTIONS"] = {
		    "gameId": "2b1d4c648be84b0dbae454899db706da",
		    "advertisementSettings": {
		    	"debug": !!SDK_INTERFACE.settings.debugLevel
		    },
		    "onEvent": function(event) {
		        switch (event.name) {
		            case "SDK_READY":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_READY");
		                typeof gdsdk_SDK_READY === "function" && gdsdk_SDK_READY();
		                break;
		            case "SDK_GAME_START":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_GAME_START");
		                // advertisement done, resume game logic and unmute audio
		                typeof gdsdk_SDK_GAME_START === "function" && gdsdk_SDK_GAME_START();
		                break;
		            case "SDK_GAME_PAUSE":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_GAME_PAUSE");
		                // pause game logic / mute audio
		                typeof gdsdk_SDK_GAME_PAUSE === "function" && gdsdk_SDK_GAME_PAUSE();
		                break;
		            case "SDK_GDPR_TRACKING":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_GDPR_TRACKING");
		                // this event is triggered when your user doesn't want to be tracked
		                typeof gdsdk_SDK_GDPR_TRACKING === "function" && gdsdk_SDK_GDPR_TRACKING();
		                break;
		            case "SDK_GDPR_TARGETING":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_GDPR_TARGETING");
		                // this event is triggered when your user doesn't want personalised targeting of ads and such
		                typeof gdsdk_SDK_GDPR_TARGETING === "function" && gdsdk_SDK_GDPR_TARGETING();
		                break;
		            case "AD_ERROR":
		                SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] AD_ERROR");
		                typeof gdsdk_AD_ERROR === "function" && gdsdk_AD_ERROR();
		                break;
		            case "AD_IS_ALREADY_RUNNING":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] AD_IS_ALREADY_RUNNING");
		                typeof gdsdk_AD_IS_ALREADY_RUNNING === "function" && gdsdk_AD_IS_ALREADY_RUNNING();
		                break;
		            case "SDK_REWARDED_WATCH_COMPLETE":
		            	SDK_INTERFACE.settings.debugLevel && console.log("[GD_OPTIONS.onEvent] SDK_REWARDED_WATCH_COMPLETE");
		                typeof gdsdk_SDK_REWARDED_WATCH_COMPLETE === "function" && gdsdk_SDK_REWARDED_WATCH_COMPLETE();
		                break;
		            default:
		        }
		    }
		};

		(function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s);
		    js.id = id;
		    js.src = './main.min.js';
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'gamedistribution-jssdk'));
	});
};

SDK_INTERFACE.init(SDK_INTERFACE_SETTINGS);
