// FamobiAPI.js
var FamobiApi = pc.createScript('famobiApi');

pc.extend(FamobiApi.prototype, {

    initialize: function() {
        window.famobi = window.famobi || {};
        window.famobi.localStorage = window.famobi.localStorage || window.localStorage;
        window.famobi.sessionStorage = window.famobi.sessionStorage || window.sessionStorage;
        
        pc.famobiAPI = this;
    },

    /**
     * After the game is fully loaded and has landed on the title screen or any other potential target screen, the game must indicate that it is ready:
     */
    gameReady: function() {
        try {
            window.famobi.gameReady();
        } catch(e) {
            console.warn(e);
        } 
    },
    /**
     * Returns a relative path to the final branding button. For an absolute path use the parameter "true".
     * The size of the image ALWAYS has to be 600 x 253px. Therefore, you have to scale it using your engine/ framework only.
     * Please note: In some cases, the button is transparent or invisible; don't combine it with any GUI elements!
     *
     * @returns {string} Path of the image.
     */
    getBrandingButtonImage: function() {
        return window.famobi.getBrandingButtonImage();
    },

    setPreloadProgress: function(percent) {
        window.famobi.setPreloadProgress(percent);
    },

    /**
     * Opens the branding placeholder URL.
     *
     * Important: It does NOT return a URL, so don't use it with window.open or location.href!
     */
    moreGamesLink: function() {
        window.famobi.moreGamesLink();
    },

    /**
     * Important: The game MUST NOT contain rewarded ad features!
     *
     * Regardless of the use of Famobi Analytics trackEvent calls, make sure to use this call
     * at typical breaks (e.g.: Pause, Retry, Continue, Menu...)
     * Important: Ads will only be shown in a given interval controlled by our API (usually every 60 to 90 seconds).
     *
     * @param {Function} callback - Callback called after watching an ad.
     * @param {*} context - Context of the callback.
     */
    showInterstitialAd: function() {
        return window.famobi.showInterstitialAd();
    },

    showAd: function() {
        try {
            return window.famobi.showAd();
        } catch(e) {

        }
    },

    /**
     * 
     */
    hasRewardedAd: function() {
        return window.famobi.hasRewardedAd();  
    },

    rewardedAd: function(callback, context) {
        window.famobi.rewardedAd(callback.bind(context));
    },

    /**
     * Function that pauses/mutes the game
     *
     * @param {Function} onPauseFunction - Function that is executed before an ad.
     */
    setOnPauseRequested: function(onPauseFunction, context) {
        window.famobi_onPauseRequested = onPauseFunction.bind(context || this);
    },

    /**
     * Function that unpauses/unmutes the game
     *
     * @param {Function} onResumeFunction - Function that is executed after an ad.
     */
    setOnResumeRequested: function(onResumeFunction, context) {
        window.famobi_onResumeRequested = onResumeFunction.bind(context || this);
    },
    // endregion

    // region ------------------ LOCALISATION ------------------
    /**
     * Returns a corresponding value string associated with the famobi.json.
     * If there's no key either in the current language or in the "default" section, null is returned.
     *
     * @param {string} key - Unique key of the text.
     * @returns {string|null} Value of the key.
     */
    get: function(key) {
        return window.famobi.__(key) || key;
    },

    /**
     * Returns the current language code (two letters, lower-case).
     * Important: This function should be used as an exception only.
     * In 99% of the cases window.famobi.__(key) is sufficient.
     * The trick is just to limit your game to one language and use its texts as translation keys.
     *
     * @returns {string} Current language code (two letters, lower-case).
     */
    getCurrentLanguage: function() {
        return window.famobi.getCurrentLanguage();
    },        

    /**
     * Set local storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */
    setLocalStorageItem: function(key, value) {
        window.famobi.localStorage.setItem(key, value);
    },

    /**
     * Get local storage item.
     *
     * @param {string} key - Key of the value.
     */
    getLocalStorageItem: function(key) {
        return window.famobi.localStorage.getItem(key);
    },

    /**
     * Remove the locale storage item.
     *
     * @param {string} key - Key of the value.
     */
    removeLocalStorageItem: function(key) {
        window.famobi.localStorage.removeItem(key);
    },

    /**
     * Remove the whole locale storage.
     */
    clearLocalStorage: function() {
        window.famobi.localStorage.clear();
    },

    /**
     * Set session storage item.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Value that needs to be saved.
     */
    setSessionStorageItem: function(key, value) {
        window.famobi.sessionStorage.setItem(key, value);
    },

    /**
     * Get session storage item.
     *
     * @param {string} key - Key of the value.
     */
    getSessionStorageItem: function(key) {
        window.famobi.sessionStorage.getItem(key);
    },

    /**
     * Remove the session storage item.
     *
     * @param {string} key - Key of the value.
     */
    removeSessionStorageItem: function(key) {
        window.famobi.sessionStorage.removeItem(key);
    },

    /**
     * Remove the whole session storage.
     */
    clearSessionStorage: function() {
        window.famobi.sessionStorage.clear();
    },

    /**
     * Get the current orientation.
     *
     * @returns {"landscape"|"portrait"|""} Orientation of the device.
     */
    getOrientation: function() {
        return window.famobi.getOrientation();
    },

    /**
     * Set the callback when orientation is changed.
     *
     * @param {Function} callback - Callback called when the orientation is changed.
     * @param {*} context - Context of the callback.
     */
    setOnOrientationChange: function(callback, context) {
        window.famobi.onOrientationChange(callback.bind(context));
    },

    hasFeature: function(feature) {
        return window.famobi.hasFeature(feature);
    },

    onRequest: function(event, callback) {
        window.famobi.onRequest(event, callback);  
    },

    getFeatureProperties: function(feature) {
        return window.famobi.getFeatureProperties(feature);
    },

    getVolume: function() {
        return window.famobi.getVolume();
    },

    playerReady: function() {
        window.famobi.playerReady();
    },
});


/**
 * DEPRECATED FUNCTIONS
 */
pc.extend(FamobiApi.prototype, {

    getMoreGamesButtonImage: function() {
        console.warn("GetMoreGamesButtonImage is deprecated, use getBrandingButtonImage instead");

        this.getBrandingButtonImage();
    },

    moreGamesLink: function() {
        console.warn("moreGamesLink is deprecated, use openBrandingLink instead");

        this.openBrandingLink();
    },

    submitHighscore: function() {
        console.warn("submitHighscore is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    levelUp: function() {
        console.warn("levelUp is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    gameOver: function() {
        console.warn("gameOver is deprecated, use window.famobi_analytics.trackEvent instead");
    },

    // showAd: function() {
    //     console.warn("showAd is deprecated, use showInterstitalAd instead");
    // },
});


// AudioManager.js
var AudioManager = pc.createScript('audioManager');

/**
  * AudioManager
  * Plays audio/music samples. Treats every sample as a separate audio slot
  * Usage:
  * Make use of the following two event to play sounds: Audio:sfx & Audio:bgm
  */

AudioManager.attributes.add('bgm', { type: 'asset', array: true });
AudioManager.attributes.add('sfx', { type: 'asset', array: true });
AudioManager.attributes.add('bgmVolume', { type: 'number', default: 0.25, min: 0, max: 1 });
AudioManager.attributes.add('bgmVolumeMultiplier', { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('sfxVolume', { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('sfxVolumeMultiplier', { type: 'number', default: 1, min: 0, max: 1 });
AudioManager.attributes.add('autoPlayBGMIndex', { type: 'number', default: 0 });
AudioManager.attributes.add('bgmSettingKey', { type: 'string', default: 'music' });
AudioManager.attributes.add('sfxSettingKey', { type: 'string', default: '', description: 'Leave this empty if there is only one setting for all sounds' });
AudioManager.attributes.add('userVolume', { type: 'number', default: 1, });
AudioManager.attributes.add('userSFX', { type: 'number', default: 1, });

pc.extend(AudioManager.prototype, {

    initialize: function () {
        pc.audioManager = this;

        this.soundPlayer = this.entity.addComponent("sound");
        this.soundPlayer.positional = false;

        this.activeMusicSlot = null;
        this.activeMusicName = null;

        this.allowOverlap = true;

        this.useBGM = true;
        this.useSFX = true;

        this._bgmSlots = {};
        this._sfxSlots = {};

        this.app.on('Audio:sfx', this._playSFX, this);
        this.app.on('Audio:bgm', this._playBGM, this);
        this.on('attr:userVolume', this._setSFXVolume, this);
        this.on('attr:userVolume', this._setBGMVolume, this);

        this.on('attr:userSFX', this._setSFXVolume, this);
        this.on('attr:userSFX', this._setBGMVolume, this);
        // this.on('attr:bgmVolume', this._setBGMVolume, this);
        // this.on('attr:sfxVolume', this._setSFXVolume, this);
        this.on('attr:bgmVolumeMultiplier', function () {
            this._setBGMVolume(1);
        }, this);
        this.on('attr:sfxVolumeMultiplier', function () {
            this._setSFXVolume(1);
        }, this);
        /*** 
                AudioContext OnResume handler (Needed because of browser audio protection)
        ***/


        if (this.app.context._soundManager.context && this.app.context._soundManager.context.state === 'suspended') {
            this.app.once('inputManager:Input', this._onResumeContext, this);
        }
    },

    postInitialize: function () {
        pc.famobiAPI.setOnPauseRequested(this.mute, this);
        pc.famobiAPI.setOnResumeRequested(this.unmute, this);

        pc.famobiAPI.onRequest("enableAudio", () => {
            this.userSFX = 1;
        });

        pc.famobiAPI.onRequest("disableAudio", () => {
            this.userSFX = 0;
        });

        pc.famobiAPI.onRequest("changeVolume", (vol) => {
            
            this.userVolume = vol;
        });

        this.userVolume = pc.famobiAPI.getVolume();

        this.setBGMSetting(pc.storageManager.get(this.bgmSettingKey), true);
        if (this.sfxSettingKey) {
            this.setSFXSetting(pc.storageManager.get(this.sfxSettingKey), true);
        }

        this._loadSounds();

        this._setBGMVolume(1);
        this._setSFXVolume(1);
    },

    // ------------------------------------------------
    // PRIVATE METHODS
    // ------------------------------------------------

    _loadSounds: function () {
        for (var i = 0; i < this.bgm.length; i += 1) {
            if (!(this.bgm[i] instanceof pc.Asset)) {
                console.warn("BGM with index " + i + " is not an asset!");
                continue;
            }
            // Define the slots to zero, which is the loading variable.
            this._bgmSlots[this.bgm[i].name] = 0;

            // Download if the resource is undefined
            if (!this.bgm[i].resource) {
                // Autoplay it
                if (i === this.autoPlayBGMIndex) {
                    this.activeMusicName = this.bgm[i].name;

                    pc.lazyLoader.lazyLoad(this.bgm[i], function (sound) {
                        this._onBGMLoadComplete(sound, true);
                    }, this);
                } else {
                    pc.lazyLoader.lazyLoad(this.bgm[i], function (sound) {
                        this._onBGMLoadComplete(sound, false);
                    }, this);
                }
            } else {
                var slot = this._createBGMSlot(this.bgm[i]);

                this.activeMusicName = this.bgm[i].name;

                if (i === this.autoPlayBGMIndex) {
                    this._playBGMSlot(slot);
                }
            }
        }

        for (var j = 0; j < this.sfx.length; j += 1) {
            if (!(this.sfx[i] instanceof pc.Asset)) {
                console.warn("BGM with index " + i + " is not an asset!");
                continue;
            }

            // Define the slots to zero, which is the loading variable.
            this._sfxSlots[this.sfx[i].name] = 0;

            // Download if the resource is undefined
            if (!this.sfx[j].resource) {
                pc.lazyLoader.lazyLoad(this.sfx[j], this._onSFXLoadComplete, this);
            } else {
                this._createSFXSlot(this.sfx[j]);
            }
        }
    },

    _onBGMLoadComplete: function (asset, autoPlay) {
        var slot = this._createBGMSlot(asset);

        if (autoPlay) {
            this._playBGMSlot(slot);
        }
    },

    _onSFXLoadComplete: function (asset) {
        this._createSFXSlot(asset);
    },

    _createBGMSlot: function (asset) {
        var slot = this.soundPlayer.addSlot(asset.name, {
            asset: asset.id,
            volume: (typeof this._bgmVolume === 'number' ? this._bgmVolume : 1) * this.bgmVolumeMultiplier,
            pitch: 1.00,
            loop: true,
            overlap: false,
        });

        this._bgmSlots[asset.name] = slot;

        return slot;
    },

    _createSFXSlot: function (asset) {

        var slot = this.soundPlayer.addSlot(asset.name, {
            asset: asset.id,
            volume: (typeof this._sfxVolume === 'number' ? this._sfxVolume : 1) * this.sfxVolumeMultiplier,
            pitch: 1.00,
            loop: false,
            overlap: true,
        });
        this._sfxSlots[asset.name] = slot;

        return slot;
    },

    _onResumeContext: function () {
        this.app.context._soundManager.context.resume();
    },

    _playSFX: function (name) {

        var slot = this._sfxSlots[name];
        if (!slot) {

            switch (slot) {
                case undefined:
                    console.warn('Sound slot with the name [' + name + '] is not found');
                    break;
                case 0:
                    console.warn('Sound slot with the name ' + name + ' is still loading');
                    break;
                default:
                    console.warn('Something went wrong with the sound. Value is ' + slot);
            }

            return;
        }

        this._playSFXSlot(slot);
    },

    _playBGM: function (name) {
        var slot = this._bgmSlots[name];

        this.activeMusicName = name;

        if (!slot) {

            switch (slot) {
                case undefined:
                    console.warn('Sound slot with the name [' + name + '] is not found');
                    break;
                case 0:
                    console.warn('Sound slot with the name ' + name + ' is still loading');
                    break;
                default:
                    console.warn('Something went wrong with the sound. Value is ' + slot);
            }

            return;
        }

        this._playBGMSlot(slot);
    },

    _playBGMSlot: function (slot) {
        if ((this.activeMusicSlot === slot) && this.activeMusicSlot.isPlaying) {
            console.warn("Can't play the same bgm twice");
            return;
        }

        if (this.activeMusicName !== slot.name) {
            window.famobi.log("Trying to play " + slot.name + ", but currently playing " + this.activeMusicName);
            return;
        }

        if (this.app.context._soundManager.context.state === 'suspended') {
            this._onResumeContext();
        }

        this._stopMusic();

        if (!this.useBGM) return;

        this.activeMusicSlot = slot;

        this.activeMusicSlot.play();

    },

    _playSFXSlot: function (slot) {
        if (!this.useSFX) return;
        slot.play();
    },

    _stopMusic: function () {
        if (!this.activeMusicSlot) return;

        this.activeMusicSlot.stop();

        this.activeMusicSlot = null;
    },

    _setBGMVolume: function (volume) {
        var keys = Object.keys(this._bgmSlots);

        this._bgmVolume = volume * this.bgmVolume;

        for (var i = 0; i < keys.length; i += 1) {

            if (typeof this._bgmSlots[keys[i]] === 'object') {
                this._bgmSlots[keys[i]].volume = volume * this.bgmVolumeMultiplier * this.userVolume * this.userSFX;;
            }
        }
    },

    _setSFXVolume: function (volume) {
        var keys = Object.keys(this._sfxSlots);

        this._sfxVolume = volume * this.sfxVolume;

        for (var i = 0; i < keys.length; i += 1) {
            if (typeof this._sfxSlots[keys[i]] === 'object') {
                this._sfxSlots[keys[i]].volume = volume * this.sfxVolumeMultiplier * this.userVolume * this.userSFX;;
            }
        }
    },


    // ------------------------------------------------
    // PUBLIC METHODS
    // ------------------------------------------------


    /**
     * Set and save the volume of BGM. Will also change volume of SFX if no sfxKey is availabe.
     *
     * @param {number|boolean} volume - Volume of the sound.
     */
    setBGMSetting: function (volume, start) {
        // Check if volume is valid 
        volume = Number(volume);

        if (isNaN(volume)) {
            console.warn('Volume is NaN!', volume);
            return;
        }

        volume = pc.math.clamp(volume, 0, 1);

        // this.useBGM = !!volume;

        // Save
        if (!start) {
            pc.storageManager.set(this.bgmSettingKey, volume);
        }

        // Set volume
        this._setBGMVolume(volume);

        // Stop if required
        // if (!this.useBGM) {
        //     this._stopMusic();
        // }

        // Set sfx setting, if required.
        if (this.bgmSettingKey && !this.sfxSettingKey) {
            this.setSFXSetting(volume);
        }

        return this.useBGM;
    },

    /**
     * Set and save the volume of SFX.
     *
     * @param {number|boolean} volume - Volume of the sound effects.
     */
    setSFXSetting: function (volume, start) {
        // Check if volume is valid 
        volume = Number(volume);

        if (isNaN(volume)) {
            console.warn('Volume is NaN!', volume);
            return;
        }

        volume = pc.math.clamp(volume, 0, 1);

        this.useSFX = !!volume;

        // Save
        if (this.sfxSettingKey && !start) {
            pc.storageManager.set(this.sfxSettingKey, volume);
        }

        // Set volume
        this._setSFXVolume(volume);

        return this.useSFX;
    },


    /**
     * 
     */
    mute: function (mute) {
        this.app.systems.sound.volume = 0;
    },

    unmute: function (mute) {
        this.app.systems.sound.volume = 1;
    },
});


// GameManager.js
var GameManager = pc.createScript('gameManager');

GameManager.attributes.add('ball', { type: 'entity' });
GameManager.attributes.add('playerBat', { type: 'entity' });
GameManager.attributes.add('enemyBat', { type: 'entity' });
GameManager.attributes.add('canSkipLevels', { type: 'boolean', default: false });
GameManager.attributes.add('startButton', { type: 'entity' });

pc.extend(GameManager.prototype, {

    initialize: function () {
        pc.gameManager = this;

        this.level = 0;
        this.score = 0;

        this.states = Object.freeze({
            MENU: 0,
            START: 1,
            GAME: 2,
            PAUSE: 3,
            END: 4,
        });

        this.app.on('UIManager:uiOpened', this.onUIOpen, this);

        this.currentState = this.states.MENU;
        this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

        this.forcedMode = pc.famobiAPI.hasFeature("forced_mode");
        if (this.forcedMode) {
            this.forcedModeProperties = pc.famobiAPI.getFeatureProperties("forced_mode");
        }
    },

    postInitialize: function () {
        if (this.forcedMode) {

        } else {
            this.checkReady();
        }
    },

    pause: function () {
        this.app.timeScale = 0;
    },

    unpause: function () {
        this.app.timeScale = 1;
    },

    checkReady: function () {
        if (!this.externalStartChecked) {
            if (pc.famobiAPI.hasFeature("external_start")) {
                this.pause();
                pc.famobiAPI.onRequest("startGame", () => {
                    this.unpause();
                });
            }
            this.externalStartChecked = true;
        }

        pc.famobiAPI.gameReady();

        this.app.fire('GameManager:ready');
    },

    reset: function () {
        this.app.fire('GameManager:reset');
    },

    fullReset: function () {
        this.app.fire('GameManager:fullReset');
        this.reset();
    },

    start: function () {
        this.app.fire('GameManager:start');
    },

    getBall: function () {
        return this.ball;
    },

    getPlayerBat: function () {
        return this.playerBat;
    },

    getEnemyBat: function () {
        return this.enemyBat;
    },

    setAllSettings: function () {
        this.level = 0;

        if (this.forcedMode) {
            if (typeof this.forcedModeProperties.state.level === 'number') {
                this.level = this.forcedModeProperties.state.level - 1;
            }
        }

        this.increaseLevel();

        if (this.forcedMode) {
            this.startButton.script.eventTrackButton._onClick();

            this.checkReady();
        }

        pc.setManager.resetPlayerLives();

        pc.setManager.setLevel(this.level);

        pc.scoreManager.resetBonus();

    },

    addPointToEnemy: function () {
        var lives = pc.setManager.removePlayerLives();
        this.app.fire('GameManager:roundCompleteEnemy');

        var lose = lives <= 0;

        if (lose) {
            setTimeout(function () {
                if (this.forcedMode) {
                    var promise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELFAIL, { levelName: 'level_' + this.level, reason: 'dead' });
                    var promise2 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TOTALSCORE, { totalScore: pc.scoreManager.score });
                    var promiseLevelEnd = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_CUSTOM, { eventName: "LEVELEND", result: "fail", score: pc.scoreManager.score });

                    Promise.all([promise1, promise2, promiseLevelEnd]).
                        then(function () {
                            this.app.fire('Audio:sfx', 'sfx_defeat.mp3');
                            this.app.fire('UIManager:showUI', 'Lose Screen');
                            this.app.fire('UIManager:hideUI', 'Game Screen');
                            StatisticsManager.instance.incrementStatistic("statistics_game_lost", 1);
                        }.bind(this));
                } else {
                    this.app.fire('Audio:sfx', 'sfx_defeat.mp3');
                    this.app.fire('UIManager:showUI', 'Lose Screen');
                    this.app.fire('UIManager:hideUI', 'Game Screen');
                    StatisticsManager.instance.incrementStatistic("statistics_game_lost", 1);
                }
            }.bind(this), 1000);

        } else {
            setTimeout(function () {
                this.reset();
            }.bind(this), 1000);
        }
    },

    addPointToPlayer: function () {
        var lives = pc.setManager.removeEnemyLives();
        this.app.fire('GameManager:roundCompletePlayer');

        var win = lives <= 0;

        setTimeout(function () {
            if (win) {
                this.sendLevelFinishedStatistic(this.level);
                this.app.fire('Audio:sfx', 'sfx_level_victory.mp3');
                pc.scoreManager.applyBonus();

            } else {
                this.reset();

            }

        }.bind(this), 1000);
    },

    sendLevelFinishedStatistic: function (level) {
        switch (level) {
            case 1: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_one_wins", 1);
                break;
            }
            case 2: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_two_wins", 1);
                break;
            }
            case 3: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_three_wins", 1);
                break;
            }
            case 4: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_four_wins", 1);
                break;
            }
            case 5: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_five_wins", 1);
                break;
            }
            case 6: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_six_wins", 1);
                break;
            }
            case 7: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_seven_wins", 1);
                break;
            }
            case 8: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_eight_wins", 1);
                break;
            }
            case 9: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_nine_wins", 1);
                break;
            }
            case 10: {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_ten_wins", 1);
                break;
            }
        }
    },

    finishedBonus: function () {
        setTimeout(function () {
            var promise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSUCCESS, { levelName: 'level_' + this.level });
            var promise2 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TOTALSCORE, { totalScore: pc.scoreManager.score });
            var promiseLevelEnd = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_CUSTOM, { eventName: "LEVELEND", result: "success", score: pc.scoreManager.score });

            Promise.all([promise1, promise2, promiseLevelEnd]).
                then(function () {

                    this.reset();
                    var level = this.increaseLevel();

                    if (level > pc.setManager.getMaxLevel()) {
                        this.app.fire('UIManager:showUI', 'Win Screen');
                        this.app.fire('UIManager:hideUI', 'Game Screen');
                        StatisticsManager.instance.incrementStatistic("statistics_game_completed", 1);
                        this.switchState(this.states.MENU);
                    } else {
                        var promise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: "level_" + pc.gameManager.level });

                        Promise.all([promise1]).then(() => {
                            pc.famobiAPI.playerReady();
                            var success = pc.setManager.setLevel(level);
                        });
                    }

                }.bind(this));

        }.bind(this), 1000);

    },

    switchState: function (state) {
        var oldState = this.currentState;
        this.currentState = state;

        switch (state) {
            case this.states.MENU:
                this.fullReset();
                this.setAllSettings();
                break;
            case this.states.START:
                this.setAllSettings();
                break;
            case this.states.GAME:
                if (this.isState(this.states.PAUSE, oldState)) {
                    // TODO Countdown?
                } else if (this.isState(this.states.START, oldState)) {
                    this.start();
                }
                break;
        }
    },

    isStarted: function () {
        return this.isState(this.states.START);
    },

    isState: function (state, currentState) {
        return (currentState || this.currentState) === state;
    },

    onUIOpen: function (name) {

        /*
        if(typeof this.currentScreen !== "undefined" && name === "Main Menu" && this.currentScreen == "Menu Screen") {

            try{
                parent.cmgGameEvent("replay", "1");
            } catch(e) {
                console.warn("parent.cmgGameEvent('%s', '%s')", "replay", "1");
            }
        }
        this.currentScreen = name;
        */

        switch (name) {
            case 'Game Screen':
                if (this.isState(this.states.MENU)) {
                    this.switchState(this.states.START);
                }

                if (this.isState(this.states.PAUSE)) {
                    this.switchState(this.states.GAME);
                }
                break;
            case 'Pause Screen':
                if (this.isState(this.states.START)) {
                    this.switchState(this.states.PAUSE);
                }
                break;
            case 'Lose Screen':
                if (this.isState(this.states.GAME)) {
                    this.switchState(this.states.END);
                }
                break;
            case 'Win Screen':
                if (this.isState(this.states.GAME)) {
                    this.switchState(this.states.END);
                }
                break;
            case 'Main Menu':
                this.switchState(this.states.MENU);
                break;
        }
    },

    increaseLevel: function () {
        this.level += 1;

        this.app.fire('GameManager:level', this.level);

        return this.level;
    },

    onKeyDown: function (event) {
        if (event.key === pc.KEY_R && this.canSkipLevels) {
            this.level += 1;

            pc.setManager.setLevel(this.level);
            this.app.fire('GameManager:level', this.level);
        }
    }
});


// LocalisationManager.js
var LocalisationManager = pc.createScript('localisationManager');

LocalisationManager.attributes.add('localisationJSON', { type: 'asset', assetType: 'json' });
LocalisationManager.attributes.add('defaultLanguage', { type: 'string', default: 'en', 'title': 'Default Language', enum: [
    { 'German':     'de' },
    { 'English':    'en' },
    { 'Turkish':    'tr' },
    { 'Polish':     'pl' },
    { 'Russian':    'ru' },
    { 'Dutch':      'nl' },
    { 'Spanish':    'es' },
    { 'Portuguese': 'pt' },
    { 'French':     'fr' },
]});

pc.extend(LocalisationManager.prototype, {
    
    postInitialize: function() {
        pc.localisationManager = this;
        
        this._localisations = this.localisationJSON.resource;
        // create a default language
        // Get current language
        this._currentLanguage = pc.famobiAPI.getCurrentLanguage();
        // Check if the current language is available with our localisations
        this._currentLanguage = (typeof this._localisations[this.currentLanguage] !== 'undefined') ? this.currentLanguage : this.defaultLanguage;
                
        this._localisation = this._localisations[this.currentLanguage];
    },
    
    _replaceVariables: function(text, variables) {
        if (!Array.isArray(variables) || variables.length === 0) {
            return text;
        }
        
        var newText = text;
        
        for (var i = 0; i < variables.length; i += 1) {
            newText = newText.replace('{' + i + '}', variables[i]);
        }
        
        return newText;
    },
    
    get: function(key, variables) {
        return this._replaceVariables(this._localisation[key], variables);
    },
});



// TweenAlpha.js
var TweenAlpha = pc.createScript('tweenAlpha');

TweenAlpha.attributes.add('initFrom',           { type: 'number', default: 1, title: 'From' });
TweenAlpha.attributes.add('initTo',             { type: 'number', default: 0, title: 'To' });
TweenAlpha.attributes.add('playStyle', { 
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenAlpha.attributes.add('duration',           { type: 'number', default: 1, title: 'duration' });
TweenAlpha.attributes.add('curve',              { type: 'curve', title: 'Animation Curve' });
TweenAlpha.attributes.add('ignoreTimeScale',    { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenAlpha.attributes.add('startDelay',         { type: 'number', default: 0, title: 'Start Delay' });
TweenAlpha.attributes.add('debug',              { type: 'boolean', default: false, title: 'Show Debug' });
TweenAlpha.attributes.add('startOnEnable',      { type: 'boolean', default: true, title: 'Start on Enable'});
TweenAlpha.attributes.add('startOnInitialize',  { type: 'boolean', default: true, title: 'Start on Initialize'});

pc.extend(TweenAlpha.prototype, {

    initialize: function() {
        this._time = this.startOnInitialize ? 0 : this.duration + this.startDelay;
        this._oldTime = this.app._time || 0;
        this._from = this.initFrom;
        this._to = this.initTo;

        // List of all elements
        this._elements = this._elements || [];
    }, 

    postInitialize: function() {
        this._getAllElementComponents(this.entity);

        if (this.startOnInitialize) {
            this.startTween();
        }

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                this.startTween();
            }
        });
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this.isActive()) {
            // Update time
            this._updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Update opacity
                var opacity = this._from - this.curve.value((this._time - this.startDelay) / this.duration) * (this._from - this._to);
                this.setAllElementOpacity(opacity);

                if (this.debug) {
                    window.famobi.log(this.entity.name, this._time, opacity);
                }
            }

            // Set new old time
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than this.duration + this.startDelay
        if (this._time >= this.duration + this.startDelay) {
            switch(this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0;
                    var temp = this._from;
                    this._from = this._to;
                    this._to = temp;
                    break;
            }
        }
    },

    _updateTime: function(dt) {
        this._time += this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt;
    },

    /*
     * Recursive method to get all elements
     */
    _getAllElementComponents: function(entity) {
        var element = entity.element;

        if (element !== undefined && element.opacity !== null && element.opacity !== undefined) {
            this._elements.push(entity.element);
        }

        var self = this;
        entity.children.forEach(function(child) {
            self._getAllElementComponents(child); 
        });
    },
    
    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween: function() {
        this._time = 0;
        this._from = this.initFrom;
        this._to = this.initTo;
        this.setAllElementOpacity(this._from);   
        this._oldTime = this.app._time;
    },

    setAllElementOpacity: function(opacity) {
        if (!this._elements) {
            this._elements = [];
            this._getAllElementComponents(this.entity);
        }

        this._elements.forEach(function(element) {
            element.opacity = opacity; 
        });
    },
    
    isActive: function() {
        return this._time >= 0 && this._time <= this.duration + this.startDelay;
    },
});


// TweenPosition.js
var TweenPosition = pc.createScript('tweenPosition');

TweenPosition.attributes.add('initFrom',        { type: 'vec3', default: [0, 0, 0], title: 'From' });
TweenPosition.attributes.add('initTo',          { type: 'vec3', default: [0, 0, 0], title: 'To' });
TweenPosition.attributes.add('playStyle', {
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenPosition.attributes.add('duration',        { type: 'number', default: 1, title: 'duration' });
TweenPosition.attributes.add('curve',           { type: 'curve', title: 'Animation Curve' });
TweenPosition.attributes.add('ignoreTimeScale', { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenPosition.attributes.add('startDelay',      { type: 'number', default: 0, title: 'Start Delay' });
TweenPosition.attributes.add('debug',           { type: 'boolean', default: false, title: 'Show Debug' });
TweenPosition.attributes.add('startAtEnable',   { type: 'boolean', default: true, title: 'Start on Initialize' });
TweenPosition.attributes.add('startOnEnable',   { type: 'boolean', default: true, title: 'Start on Enable'});


pc.extend(TweenPosition.prototype, {
    initialize: function() {
        this._time = this.startAtEnable ? 0 : -1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom.clone();
        this._to = this.initTo.clone();
    },

    reset: function() {
        this._time = this.startAtEnable ? 0 : -1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom.clone();
        this._to = this.initTo.clone();

        this._initPosition = this.entity.getLocalPosition().clone();

        this._newPosition = new pc.Vec3(0, 0, 0);
    },

    postInitialize: function() {
        this._initPosition = this.entity.getLocalPosition().clone();

        this._newPosition = new pc.Vec3(0, 0, 0);

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                //this.startTween();
            }
        });

        if (this.startAtEnable) {
            //this.startTween();
        }
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this._time >= 0 && this._time <= this.duration + this.startDelay) {
            // Update time
            this.updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Formula: position = initPosition + (from - (from - to) * curve)
                this._newPosition
                    .set(this._from.x, this._from.y, this._from.z)
                    .sub(this._to)
                    .scale(this.curve.value((this._time - this.startDelay) / this.duration))
                    .sub2(this._from, this._newPosition)
                    .add(this._initPosition);

                if (this.debug) {
                    window.famobi.log(this._time, this.entity.getLocalPosition().toString(), this.entity);
                }

                this.entity.setLocalPosition(this._newPosition);
            }
            // Set new old time 
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than this.duration + this.startDelay
        if (this._time >= this.duration + this.startDelay) {
            switch (this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0; 
                    var temp = this._from;
                    this._from = this._to;
                    this._to = temp;
                    break;
            }
        }
    },

    setPosition: function(start, end) {
        this.initFrom = start.clone();
        this.initTo = end.clone();
    },

    /*
     * Update the time with the game time or the unscaled time
     */
    updateTime: function(dt) {
        this._time += this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt;
    },

    /*
     * Use this method to start a tween where the init position is resetted to the current position of the entity.
     */
    moveTo: function(from, to) {
        this._time = 0;

        this._from.set(0, 0, 0);
        this._to.set(0, 0, 0);
        this._to.sub(from);
        this._initPosition.set(from.x, from.y, from.z);
        this._oldTime = this.app._time;
    },

    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween: function() {
        
        this._time = 0;
        this._from.set(this.initFrom.x, this.initFrom.y, this.initFrom.z);
        this._to.set(this.initTo.x, this.initTo.y, this.initTo.z);
        this.entity.setLocalPosition(this._from.x + this._initPosition.x, this._from.y + this._initPosition.y, this._from.z + this._initPosition.z);
        this._oldTime = this.app._time;
    }, 

    stopTween: function() {
        this._time = -1;  
    },
});





// TweenRotation.js
var TweenRotation = pc.createScript('tweenRotation');

TweenRotation.attributes.add('initFrom',        { type: 'vec3', default: [0, 0, 0], title: 'From' });
TweenRotation.attributes.add('initTo',          { type: 'vec3', default: [0, 0, 0], title: 'To' });
TweenRotation.attributes.add('playStyle', {
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenRotation.attributes.add('duration',        { type: 'number', default: 1, title: 'duration' });
TweenRotation.attributes.add('curve',           { type: 'curve', title: 'Animation Curve' });
TweenRotation.attributes.add('ignoreTimeScale', { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenRotation.attributes.add('startDelay',      { type: 'number', default: 0, title: 'Start Delay' });
TweenRotation.attributes.add('debug',           { type: 'boolean', default: false, title: 'Show Debug' });
TweenRotation.attributes.add('startOnEnable',   { type: 'boolean', default: true, title: 'Start on Enable'});
TweenRotation.attributes.add('startOnInit',     { type: 'boolean', default: true, title: 'Start on Initialize'});

pc.extend(TweenRotation.prototype, {
    
    initialize: function() {
        this._time = this.startOnInit ? 0 : this.duration + this.startDelay + 1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom.clone();
        this._to = this.initTo.clone();
    },

    postInitialize: function() {
        this._initRotation = this.entity.getLocalEulerAngles();

        this._newRotation = new pc.Vec3(0, 0, 0);

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                this.startTween();
            }
        });

        if (this.startOnInit) {
            if(pc.util.EXPLICIT) window.famobi.log("start tweening");
            this.startTween();      
        }
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this._time >= 0 && this._time <= this.duration + this.startDelay) {
            // Update time
            this._updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Formula: rotation = initRotation + (from - (from - to) * curve)
                this._newRotation
                    .set(this._from.x, this._from.y, this._from.z)
                    .sub(this._to)
                    .scale(this.curve.value((this._time - this.startDelay) / this.duration))
                    .sub2(this._from, this._newRotation)
                    .add(this._initRotation);
                if (this.debug) {
                    window.famobi.log(this.time, newRotation.toString());
                }

                this.entity.setLocalEulerAngles(this._newRotation.x, this._newRotation.y, this._newRotation.z);
            }
            // Set new old time
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than this.duration + this.startDelay
        if (this._time >= this.duration + this.startDelay || this._time <= 0) {
            switch(this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0;
                    var temp = this._from;
                    this._from = this._to;
                    this._to = temp;
                    break;
            }
        }
    },
    /*
     * Update the time with the game time or the unscaled time
     */
    _updateTime: function(dt) {
        this._time += (this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt);
    },

    setInitRotation: function(x, y, z) {
        this.entity.setLocalEulerAngles(x, y, z);
        this._initRotation.set(this.entity.getLocalEulerAngles().x, this.entity.getLocalEulerAngles().y, this.entity.getLocalEulerAngles().z);
    },

    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween:  function() {
        this._time = 0;
        this._from.set(this.initFrom.x, this.initFrom.y, this.initFrom.z);
        this._to.set(this.initTo.x, this.initTo.y, this.initTo.z);
        this.entity.setLocalEulerAngles(this._from.x, this._from.y, this._from.z);
        this._oldTime = this.app._time;
    },
});


// TweenScale.js
var TweenScale = pc.createScript('tweenScale');

TweenScale.attributes.add('initFrom', { type: 'vec3', default: [0, 0, 0], title: 'From' });
TweenScale.attributes.add('initTo', { type: 'vec3', default: [0, 0, 0], title: 'To' });
TweenScale.attributes.add('playStyle', {
    type: 'number',
    enum: [
        { 'Once': 0 },
        { 'Loop': 1 },
        { 'PingPong': 2 }
    ],
    title: 'Play Style'
});

TweenScale.attributes.add('duration', { type: 'number', default: 1, title: 'duration' });
TweenScale.attributes.add('curve', { type: 'curve', title: 'Animation Curve' });
TweenScale.attributes.add('ignoreTimeScale', { type: 'boolean', default: true, title: 'Ignore Time Scale' });
TweenScale.attributes.add('startDelay', { type: 'number', default: 0, title: 'Start Delay' });
TweenScale.attributes.add('debug', { type: 'boolean', default: false, title: 'Show Debug' });
TweenScale.attributes.add('startOnEnable', { type: 'boolean', default: true, title: 'Start on Enable'});
TweenScale.attributes.add('startOnInit', { type: 'boolean', default: true, title: 'Start on Initialize'});

pc.extend(TweenScale.prototype, {
    initialize: function() {
        this._time = this.startAtEnable ? 0 : this.duration + this.startDelay + 1;
        this._oldTime = this.app._time || 0;

        this._from = this.initFrom;
        this._to = this.initTo;
        this._temp = new pc.Vec3(0,0,0);
        this._newScale = new pc.Vec3(0, 0, 0);
    },

    postInitialize: function() {
        this._initScale = this.entity.getLocalScale().clone();

        this.on('state', function(enabled) {
            if (enabled && this.startOnEnable) {
                this.startTween();
            }
        });

        if (this.startOnInit) {
            this.startTween();
        }
    },

    update: function(dt) {
        // Only execute code if this.time is between 0 and this.duration + this.startDelay
        if (this._time >= 0 && this._time <= this.duration + this.startDelay) {
            // Update time
            this._updateTime(dt);

            // Only update opacity after the start delay.
            if (this._time > this.startDelay) {
                // Formula: newScale = (from - (from - to) * curve) * initscale
                this._newScale
                    .set(this._from.x, this._from.y, this._from.z)
                    .sub(this._to)
                    .scale(this.curve.value((this._time - this.startDelay) / this.duration))
                    .sub2(this._from, this._newScale)
                    .mul(this._initScale);

                if (this.debug) {
                    window.famobi.log(this._time, newScale.toString());
                }

                this.entity.setLocalScale(this._newScale.x, this._newScale.y, this._newScale.z);
            }  

            // Set new old time
            this._oldTime = this.app._time;
        }

        // Execute if this.time is higher than duration
        if (this._time >= this.duration + this.startDelay || this._time <= 0) {
            switch (this.playStyle) {
                case 0: break;
                case 1: this._time = 0;
                    break;
                case 2: this._time = 0;
                    this._temp.set(this._from.x, this._from.y, this._from.z);
                    this._from.set(this._to.x, this._to.y, this._to.z);
                    this._to.set(this._temp.x, this._temp.y, this._temp.z);
                    break;
            }
        }
    },

    /*
     * Update the time with the game time or the unscaled time
     */
    _updateTime: function(dt) {
        this._time += this.ignoreTimeScale ? (this.app._time - this._oldTime) / 1000 : dt;
    },


    /*
     * Set the correct value for starting a tween
     * This method can also be called to start a new tween
     */
    startTween: function() {
        this._time = 0;
        this._from.set(this.initFrom.x, this.initFrom.y, this.initFrom.z);
        this._to.set(this.initTo.x, this.initTo.y, this.initTo.z);
        this.entity.setLocalScale(this._from.x * this._initScale.x, this._from.y * this._initScale.y, this._from.z * this._initScale.z);
        this._oldTime = this.app._time;
    },
});


// LevelLoader.js
var LevelLoader = pc.createScript('levelLoader');

LevelLoader.attributes.add('levelKey',          { type: 'string', default: 'level' });

pc.extend(LevelLoader.prototype, {
    
    initialize: function() {
        pc.levelLoader = this;  
    },
    
    loadLevel: function(level, callback, context) {
        var asset = this.app.assets.find('level-' + level + '.json');

        pc.lazyLoader.lazyLoad(asset, callback, context);
    },

    lazyLoadLevels: function() {
        var assets = this.app.assets.findByTag('level'); 
        var assetsLoaded = 0;
        var assetsTotal = assets.length;

        var onAssetLoad = function() {
            assetsLoaded += 1;

            if (assetsLoaded === assetsTotal) {
                window.famobi.log("All levels loaded.");
            }
        };

        for (var i = 0; i < assets.length; i += 1) {
            if (assets[i].resource) {
                onAssetLoad();
            } else {
                pc.lazyLoader.lazyLoad(asset);
            }
        }
    },
});


// storageManager.js
var StorageManager = pc.createScript('storageManager');

StorageManager.attributes.add('defaultSaveData', { type: 'asset', assetType: 'json' });

pc.extend(StorageManager.prototype, {
    
    initialize: function() {
        pc.storageManager = this;
        
        this._basicInfo = this.defaultSaveData.resource;

        this._storages = Object.freeze({ LOCALSTORAGE: 'LOCALSTORAGE', SESSIONSTORAGE: 'SESSIONSTORAGE' });
        
        this._localStorage = {};   
        this._sessionStorage = {};   
        
        this.loadSaveData();
    },

    /**
     * Get the value with the corresponding key.
     *
     * @param {string} key - Key of the value.
     * @returns {*} Value.
     */
    get: function(key, storage) {
        storage = storage || 'LOCALSTORAGE';
        
        switch (storage.toUpperCase()) {
            case this._storages.LOCALSTORAGE:
                return this._localStorage[key];
            case this._storages.SESSIONSTORAGE:
                return this._sessionStorage[key];
            default: 
                console.warn("Storage is " + storage + ", which is incorrect.");
                return null;
        }
    },

    /**
     * Save the value in the storage.
     *
     * @param {string} key - Key of the value.
     * @param {*} value - Can be any JSON valid value.
     * @param {boolean} [compare=false] - If true, it will compare with the old value.
     * If the new value is higher, it will save. Otherwise it will ignore.
     * @param {'localstorage'|'sessionstorage} [storage='localStorage] - Use the correct storage.
     */
    set: function(key, value, compare, storage) {
        compare = compare || false;
        storage = storage || 'localStorage';

        if (compare) {
            var currentValue = this.get(key);

            switch (typeof value) {
                case 'number':
                    if (value <= currentValue) {
                        return;
                    }
                    break;
                default:
                    break;
            }
        }

        this._writeToStorage(key, value, storage);
    },

    /**
     * Set the value to the basic value.
     *
     * @param {string} key - Key of the value.
     * @param {'localstorage'|'sessionstorage} [storage='localStorage] - Use the correct storage.
     */
    remove: function(key, storage) {
        this._getStorage(storage)[key] = this._basicInfo[key];

        switch (storage.toUpperCase()) {
            case this._storages.LOCALSTORAGE:
                pc.famobiAPI.removeLocalStorageItem(key);
                break;
            case this._storages.SESSIONSTORAGE:
                pc.famobiAPI.removeSessionStorageItem(key);
                break;
            default:
                console.warn('Storage is not recognized.', 'Key is ' + key);
                break;
        }
    },

    /**
     * Delete the whole save data. Use the default data file.
     *
     * @param {'localstorage'|'sessionstorage} [storage='localStorage] - Use the correct storage.
     */
    delete: function(storage) {
        var specificStorage = this._getStorage(storage);
        specificStorage = this._basicInfo;
        
        switch (storage.toUpperCase()) {
            case this._storages.LOCALSTORAGE:
                pc.famobiAPI.clearLocalStorage();
                break;
            case this._storages.SESSIONSTORAGE:
                pc.famobiAPI.clearSessionStorage();
                break;
            default:
                console.warn('Storage is not recognized.');
                break;
        }
    },

    /**
     * Write the data to the save file.
     *
     * @private
     * @param {string} key - Key of the value.
     * @param {*} value - Can be any JSON valid value.
     * @param {'localstorage'|'sessionstorage'} [storage='localStorage] - Use the correct storage.
     */
    _writeToStorage: function(key, value, storage) {
        this._getStorage(storage)[key] = value;

        switch (storage.toUpperCase()) {
            case this._storages.LOCALSTORAGE:
                pc.famobiAPI.setLocalStorageItem(key, JSON.stringify(value));
                break;
            case this._storages.SESSIONSTORAGE:
                pc.famobiAPI.setSessionStorageItem(key, JSON.stringify(value));
                break;
            default:
                console.warn('Storage is not recognized.', 'Key is ' + key);
                break;
        }
    },
    
    /**
     * Return the correct storage data.
     *
     * @private
     * @param {'localstorage'|'sessionstorage'} storage
     */
    _getStorage: function(storage) {
        switch (storage.toUpperCase()) {
            case this._storages.LOCALSTORAGE:
                return this._localStorage;
            case this._storages.SESSIONSTORAGE:
                return this._localStorage;
            default:
                console.warn('Storage ' + storage + ' not found');
                return null;
        }
    },

    /**
     * Load the save file.
     */
    loadSaveData: function() {
        var keys = Object.keys(this._basicInfo);

        for (var i = 0; i < keys.length; i += 1) {
            var key = keys[i];

            var value = pc.famobiAPI.getLocalStorageItem(key);

            try {
                this._localStorage[key] = JSON.parse(value);
            } catch(error) {
                this._localStorage[key] = value;
            }


            if (this._localStorage[key] === undefined || this._localStorage[key] === null) {
                this._localStorage[key] = this._basicInfo[key];        
                this.set(key, this._localStorage[key]);
            }

            if (Array.isArray(this._basicInfo[key]) && !Array.isArray(this._localStorage[key])) {
                this._localStorage[key] = this._basicInfo[key];
                this.set(key, this._localStorage[key]);
            }

            // Check if type is equal, or else replace with default value
            if (typeof this._localStorage[key] !== typeof this._basicInfo[key]) {
                this._localStorage[key] = this._basicInfo[key];
                this.set(key, this._localStorage[key]);
            }
        }
    }
});


// VibrationManager.js
var VibrationManager = pc.createScript('vibrationManager');

pc.extend(VibrationManager.prototype, {
    initialize: function() {
        pc.vibrationManager = this;
        
        // enable vibration support
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        this._isSupported = !!navigator.vibrate;
        
        this._defaultVibration = [100, 10, 100];
    },

    postInitialize: function() {
        this._vibration = pc.storageManager.get('vibrate');
        
        if (!navigator.vibrate) {
            this.enabled = false;
            return;
        }

        this.app.on('vibrate', this._vibrate, this);   
    },
    
    // ------------------------------------------------
    // PRIVATE METHODS
    // ------------------------------------------------
    
    /**
     * Don't call this method directly, make is of PC events to keep it modular.
     */
    _vibrate: function(parameters) {
        if (!navigator.vibrate) {
            console.warn("Vibration not supported");
        }
        if (!this._vibration) {
            return;
        }
        navigator.vibrate(parameters || this._defaultVibration);
    },
    
    /**
     * Save to the storage.
     */ 
    _save: function() {
        pc.storageManager.set('vibrate', this._vibration);
    },
    
    // ------------------------------------------------
    // PUBLIC METHODS
    // ------------------------------------------------
    /**
     * Return if the user wants to use vibration or not.
     */
    get: function() {
        return this._vibration;
    },
    
    /**
     * Set the new preference.
     */ 
    set: function(value) {
        this._vibration = value;  
        this._save();
    },
    
    /**
     * Toggle the vibration preference.
     */
    toggle: function() {
        this._vibration = !this._vibration;
        
        this.save();
        
        return this._vibration;
    },

    /**
     * Return if the vibration is supported or not. Use this method to check if the vibration button needs to be visible. 
     */
    isVibrationSupported: function() {
        return this._isSupported && pc.platform.mobile;  
    },
});



// LazyLoader.js
var LazyLoader = pc.createScript('lazyLoader');

pc.extend(LazyLoader.prototype, {
    
    initialize: function() {
        pc.lazyLoader = this;
        
        this.app.loader.getHandler("texture").crossOrigin = "anonymous";
    },
    
    lazyLoad: function(asset, callback, context) {
        if (!asset) {       
            // TODO Better to show an error
            console.warn("Asset is undefined");
            
            return;
        }

        if (asset.resource) {
            // The material asset has already been loaded 

            if (callback) {
                callback.call(context, asset);
            }
        } else {
            var self = this;
            // Start async loading the material asset
            asset.once('load', function() {
                setTimeout(function() {

                    if (callback) {
                        callback.call(context, asset);
                    }
                });
            });

            this.app.assets.load(asset);
        }
    },
});


// UIManager.js
var UIManager = pc.createScript('uiManager');

UIManager.attributes.add('loadingOverlay',  { type: 'entity' });

/**
 * How to use the UI Manager. 
 * Make sure that each screen has the UIEntity script. 
 * In the inspector of the UIEntity script you can define properties of each screen and it will add itself to the UIManager
 */
pc.extend(UIManager.prototype, {

    initialize: function() {
        pc.uiManager = this;
        
        this._stackScreen = [];
        this._stackOverlay = [];
        this._stackPopup = [];
        
        this._uiTypes = ['Screen', 'Overlay', 'Popup'];

        this._uis = {};
        
        this.app.once('GameManager:ready', this._removeLoadingOverlay, this);
        this.app.on('UIManager:showUI', this._showUI, this);
        this.app.on('UIManager:hideUI', this._hideUI, this);
    },

    enableChildrens: function() {
        for (var i = 0; i < this.entity.children.length; i += 1) {
            var screen = this.entity.children[i];
            
            if (screen instanceof pc.Entity) {
                if (!screen.script.uiEntity) {
                    window.famobi.log(screen.name, "has no uiEntity script", screen);
                } else if (!screen.enabled) {
                    screen.enabled = true;
                    window.famobi.log(screen.name, "was disabled. Turned it back on.");
                }
            }
        }
    },
    
    addUIEntity: function(name, type, entity, enabled) {
        var index = this._uiTypes.indexOf(type); 
        
        if (index === -1) {
            console.warn("Type is not recognize", type);
            return;
        }

        if (typeof name !== 'string' || !name) {
            console.warn("Name is invalid", name);
        }

        if (this._uis[name]) {
            console.warn("This ui name is already occupied.", name);
            return;
        }

        this._uis[name] = { entity: entity, type: type };

        if (enabled) {
            this._showUI(name, true);
        } else {
            this._hideUI(name, true);
        }
    },

    _removeLoadingOverlay: function() {
        // Might need some refactoring
        if (this.loadingOverlay instanceof pc.Entity) {
            this.loadingOverlay.destroy();
        }  
    },

    _showUI: function(name, startUp) {
        var uiInfo = this._uis[name];

        if (!uiInfo) {
            console.warn('No ui is found with the name', name);
            return;
        }

        if (uiInfo.entity.enabled && !startUp) {
            console.warn('UI is already enabled', name);
            return;
        }
        
        uiInfo.entity.script.uiEntity.onOpen();
        
        this._addToStack(uiInfo.entity, uiInfo.type, startUp);
        
        this.app.fire('UIManager:uiOpened', name);
    },

    _hideUI: function(name, startUp) {
        var uiInfo = this._uis[name];
        
        if (!uiInfo) {
            console.warn('No ui is found with the name', name);
            return;
        }

        if (!uiInfo.entity.enabled && !startUp) {
            console.warn('UI is already disabled', name);
            return;
        }

        uiInfo.entity.script.uiEntity.onClose();
        
        this._removeFromStack(uiInfo.entity, uiInfo.type, startUp);
    },
    
    _addToStack: function(entity, type, startUp) {
        var stack = this._getStack(type);
        
        var index = stack.indexOf(entity);
        
        if (index !== -1) {
            window.famobi.log("Entity is already in the stack, pushed to the top", entity);
            stack.splice(index, 1);
        }
        
        stack.push(entity);
    },
    
    _removeFromStack: function(entity, type, startUp) {
        if (startUp) {
            return;
        }
        
        var stack = this._getStack(type);
        
        var index = stack.indexOf(entity);
        
        if (index === -1) {
            console.warn("Entity doesn't exist in the stack", stack, entity);
            return;
        }
        
        stack.splice(index, 1);
    },
    
    _getStack: function(type) {
        return this['_stack' + type];
    },
    
    getReferenceResolution: function() {
        return this.entity.screen.referenceResolution;
    },
    
    getScale: function() {
        this.entity.screen._updateScale();
        return this.entity.screen.scale;
    }
});



// UIEntity.js
var UIEntity = pc.createScript('uiEntity');

UIEntity.attributes.add('name', { type: 'string', default: '' });
UIEntity.attributes.add('type', {
    type: 'string', enum: [
        { 'Screen': 'Screen' },
        { 'Overlay': 'Overlay' },
        { 'Popup': 'Popup' },
    ]
});
UIEntity.attributes.add('scriptName', { type: 'string', default: '' });
UIEntity.attributes.add('showOnStartUp', { type: 'boolean', default: false });

pc.extend(UIEntity.prototype, {

    postInitialize: function () {
        pc.uiManager.addUIEntity(this.name, this.type, this.entity, this.showOnStartUp);
    },

    /**
     * Set the entity enabled to false and execute close function of a external script, if defined. 
     */
    onClose: function () {
        this.entity.enabled = false;

        if (!this.scriptName) {
            return false;
        }

        if (!(this.entity.script[this.scriptName] instanceof pc.script.__proto__.constructor)) {
            console.warn(this.scriptName, 'is not a valid script.');
            return false;
        }

        if (typeof this.entity.script[this.scriptName].onUIEntityClose !== 'function') {
            window.famobi.log('No close function is not found', this.scriptName);
            return false;
        }

        this.entity.script[this.scriptName].onUIEntityClose();

        return true;
    },

    /**
     * Set the entity enabled to true and execute open function of a external script, if defined. 
     */
    onOpen: function () {
        this.entity.enabled = true;

        if (!this.scriptName) {
            return;
        }

        if (!(this.entity.script[this.scriptName] instanceof pc.script.__proto__.constructor)) {
            console.warn(this.scriptName, 'is not a valid script.');
            return;
        }

        if (typeof this.entity.script[this.scriptName].onUIEntityOpen !== 'function') {
            window.famobi.log('No open function is not found', this.scriptName);
            return;
        }

        this.entity.script[this.scriptName].onUIEntityOpen();

        return;
    },
});


// ObjectPool.js
/*! deePool
    v2.2.0 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
    Source: https://github.com/getify/deePool
*/


var ObjectPool = pc.createScript('objectPool');

ObjectPool.attributes.add('templateEntity' , { type: 'entity', title: 'Template Entity', });
ObjectPool.attributes.add('initialLength', { type: 'number', default: 16, });
ObjectPool.attributes.add('growCount', { type: 'number', default: 5 });
ObjectPool.attributes.add('disableOnInit', { type: 'boolean', default: true, title: 'Disable on Init'});

var EMPTY_SLOT = Object.freeze(Object.create(null));

/**
 * ObjectPool
 * Creates re-usable objects of type Entity.
 * Pre-/allocation behaviours can be set using the prototype's attributes.
 */

pc.extend(ObjectPool.prototype, {

    initialize: function() {
        this._pool = [];
        this._nextFreeSlot = null;

        if (!this.templateEntity) {
            console.warn('ObjectPool: template is null (aborting initialization...)');
            return; 
        }

        this._grow(this.initialLength);
    },

    _grow: function(count) {
        if (count > 0 && this._nextFreeSlot === null) {
            this._nextFreeSlot = 0;
        }

        if (count > 0) {
            var currentLength = this._pool.length;
            this._pool.length += Number(count);

            for (var i = currentLength; i < this._pool.length; i += 1) {
                // add new obj to pool
                var clonedEntity = this.templateEntity.clone();
                clonedEntity.reparent(this.entity);
                this._pool[i] = clonedEntity;
                
                if (this.disableOnInit) {
                    clonedEntity.enabled = false;
                }
            }
        }

        return this._pool.length;
    },

    /**
     * Retrieves an available object instance from the pool
     */
    use: function() {
        if (this._nextFreeSlot === null || this._nextFreeSlot === this._pool.length) {
            this._grow(this.growCount);
        }

        var objToUse = this._pool[this._nextFreeSlot];
        this._pool[this._nextFreeSlot] = EMPTY_SLOT;
        this._nextFreeSlot += 1;
        return objToUse;
    },

    /**
     * Inserts an object instance back into the pool for later reuse.
     */
    recycle: function(obj) {
        if (this._nextFreeSlot === null || this._nextFreeSlot === -1) {
            this._pool[this._pool.length] = obj;
        } else {
            this._pool[this._nextFreeSlot -= 1] = obj;
        }
    },
    
    /**
     * Return the size of the pool. For debugging purposes.
     */
    size: function() {
      return this._pool.length;
    }
});

// SwitchUIButton.js
var SwitchUibutton = pc.createScript('switchUibutton');

SwitchUibutton.attributes.add('openUIEntity',   { type: 'entity', array: true, title: "Open UI Entities" });
SwitchUibutton.attributes.add('closeItself',    { type: 'boolean', default: false , title: "Close current UI Entity" });
SwitchUibutton.attributes.add('closeUIEntity',  { type: 'entity', array: true, title: "Close other UI Entities" });
SwitchUibutton.attributes.add('touchType', { 
    type: 'number', 
    enum: [
        { "TOUCH-END": 0},
        { "TOUCH-START": 1}
    ],
    default: 0
});

pc.extend(SwitchUibutton.prototype, {

    initialize: function() {
        var self = this;
        
    	this.activated = true;
        
        if (this.entity.button) {
            this.on('enable', function() {
                self.entity.button._isHovering = false;
            });
        }


        // If touch available attach to touch events
        if (this.app.touch) {
            
            if (this.touchType === 0) {
                this.entity.element.on('touchend', this._onInputUp, this);
            } else {
                this.entity.element.on('touchstart', this._onInputUp, this);
            }
        }
        // If mouse available attach to mouse events
        if (this.app.mouse) {
            this.entity.element.on('mouseup', this._onInputUp, this);
        }

        // Check if the all open UI entities are enabled in the beginning. If not, it will disable itself. 
        // Useful if you want to remove all connection with a certain ui entity.
        //         for (var i = 0; i < this.openUIEntity.length; i += 1) {
        //             if (this.openUIEntity[i].enabled === false) {
        //                 window.famobi.log(this.entity.name, " is disabled, because one of the openUIentities is disabled from the beginning");

        //                 this.entity.enabled = false;
        //                 break;
        //             }
        //         }

        // Add to the list of closing entities.
        if (this.closeItself) {
            var entity = this._getUIEntity(this.entity, 4);

            if (entity instanceof pc.Entity) {
                this.closeUIEntity.push(entity);
            } else {
                console.warn("Couldn't find a UI Entity");
            }
        }
    },

    _getUIEntity: function(entity, depth) {
        if (depth <= 0 && !(entity instanceof pc.Entity)) {
            return null;
        }

        if (entity.script && entity.script.uiEntity instanceof pc.script.__proto__.constructor) {
            return entity;
        } else {
            return this._getUIEntity(entity.parent, depth -= 1);
        }
    },

    _onInputUp: function(event) {
        //event.event.preventDefault();
        this.fire('click');
        this.app.fire('Audio:sfx', "sfx_button.mp3");        

        if (!this.activated) {
            return;
        }
        this.changeUIEntities();
    },
    
    changeUIEntities: function() {
        this._openEntities();
        this._closeEntities();
    },

    /** 
     * Open 
     */ 
    _openEntities: function() {
        for (var i = 0; i < this.openUIEntity.length; i += 1) {
            if (this.openUIEntity[i] instanceof pc.Entity) {
                this.app.fire('UIManager:showUI', this.openUIEntity[i].script.uiEntity.name);
            } else {
                console.warn(this.entity.parent.name, 'has in invalid parameter in the array openUIEntity with index', i);
            }
        }
    },

    _closeEntities: function() {
        for (var i = 0; i < this.closeUIEntity.length; i += 1) {
            if (this.closeUIEntity[i] instanceof pc.Entity) {
                this.app.fire('UIManager:hideUI', this.closeUIEntity[i].script.uiEntity.name);
            } else {
                console.warn(this.entity.parent.name, 'has in invalid parameter in the array closeUIEntity with index', i);
            }
        }
    },
    
    deactivate: function() {
        this.activated = false;  
    },
});


// BallMovement.js
var BallMovement = pc.createScript('ballMovement');

BallMovement.attributes.add('moveSpeed',            { type: 'number',   default: 11,            title: 'Movement Speed'});
BallMovement.attributes.add('maxSpeed',             { type: 'number',   default: 36,            title: 'Max Speed'});
BallMovement.attributes.add('curveFactor',          { type: 'number',   default: 0.6,           title: 'Curve Factor' });
BallMovement.attributes.add('speedIncreaseOnHit',   { type: 'number',   default: 1,             title: 'Speed Incremental On Hit' });
BallMovement.attributes.add('minCurve',             { type: 'number',   default: 0.35,          title: 'Min Curve' });
BallMovement.attributes.add('maxCurve',             { type: 'number',   default: 1.1,           title: 'Max Curve' });
BallMovement.attributes.add('startPosition',        { type: 'vec3',     default: [0, 0, 9.9],   title: 'Start Position' });
BallMovement.attributes.add('accuracyRadius',       { type: 'number',   default: 0.1,           title: 'Accuracy Radius' });
BallMovement.attributes.add('velocityOnHit',        { type: 'vec2' ,    default: [0.5, 0.5],    title: 'Velocity On Hit' });
BallMovement.attributes.add('goalLayers',           { type: 'number',   array: true,            title: 'Goal Layers' });
BallMovement.attributes.add('normalLayer',          { type: 'number',   default: 1002,          title: 'Normal Layer' });
BallMovement.attributes.add('quadrantFactor',       { type: 'number',   default: 1,             title: 'Quadrant Factor' });
BallMovement.attributes.add('minimalQuadrantHit',   { type: 'vec2',     default: [ 0.1, 0.1],   title: 'Min Quadrant Hit' });
BallMovement.attributes.add('ballSpinFactor',       { type: 'number',   default: 1,             title: 'Ball Spin Factor'});
BallMovement.attributes.add('ballSpinDampFactor',   { type: 'number',   default: 0.5,           title: 'Ball Spin Damp Factor'});
BallMovement.attributes.add('enemyHasCurve',        { type: 'boolean',  default: false,         title: 'Enemy Has Curve'});

pc.extend(BallMovement.prototype, {

    initialize: function() {
        this._rigidbody = this.entity.rigidbody;

        this._moving = false;
        this._playerBounce = false;
        this._linearVelocity = new pc.Vec3();
        this._quadrant = new pc.Vec2();

        this.curving = false;

        this.moved = false;
        this.movementX = 0;
        this.movementY = 0;

        this.app.on('GameManager:reset', this.reset, this);
        this.ballSpinForce = new pc.Vec3();
        this.app.on('GameManager:fullReset', this.onFullReset, this);
        this.entity.collision.on('collisionstart', this.onWallCollision, this);
        this.audioLength = 8;
        this.ballTimer = 0;
        this.ballTimerReset = 0.1;
    },

    update: function(dt) {
        if (!pc.gameManager.isStarted) {
            return;
        } 

        if (!this.moved) {
            return;
        }

        if (this.ballTimer > 0) {
            this.ballTimer -= dt;
        }

        var zSpeed = Math.abs(this._rigidbody.linearVelocity.z);
        var clampedZSpeed = pc.math.clamp(zSpeed, this.moveSpeed, Number.POSITIVE_INFINITY);

        if (zSpeed !== clampedZSpeed) {
            this.setLinearVelocity(this._rigidbody.linearVelocity.x, this._rigidbody.linearVelocity.y, clampedZSpeed * Math.sign(this._rigidbody.linearVelocity.z));
        } else {
            clampedZSpeed = pc.math.clamp(zSpeed, Number.NEGATIVE_INFINITY, this.maxSpeed);

            if (zSpeed !== clampedZSpeed) {
                this.setLinearVelocity(this._rigidbody.linearVelocity.x, this._rigidbody.linearVelocity.y, clampedZSpeed * Math.sign(this._rigidbody.linearVelocity.z));
            }
        }

        if (this.curving) {
            this._rigidbody.applyImpulse(this.movementX * zSpeed * dt, this.movementY * zSpeed *dt, 0);
        }
    },

    onWallCollision: function(result) {
        if (result.other.tags.has('wall')) {
            this.playRandomBounce(3);
        }
    },

    playRandomBounce: function(number) {
        if (this.ballTimer <= 0) {
            this.app.fire('Audio:sfx', "sfx_ball_bounce" + number + ".mp3");
            this.ballTimer = this.ballTimerReset;
        }
    },

    onCollisionStart: function(bat) {
        if (!this.moved) {
            return;
        }

        // Reverse the speed in the z direction
        this.setLinearVelocity(this._rigidbody.linearVelocity.x, this._rigidbody.linearVelocity.y, -this._rigidbody.linearVelocity.z);

        if (!bat.tags.has('bat')) {
            return;
        }
        
        this.app.fire('vibrate', 5);

        var speedIncreaseOnHit = this.speedIncreaseOnHit;
        var quadrant = this.getQuadrant(bat);
        var accuracyHit = this.isAccuracyHit(bat);

        if (bat.tags.has('player')) {
            this.playRandomBounce(1);
            pc.scoreManager.addHitBonus();

            speedIncreaseOnHit = -this.speedIncreaseOnHit;

            var playerVelocity = bat.script.playerBat.getVelocity();
            var playerVelocityLength = playerVelocity.length();

            this.movementX = -this.clampCurve(playerVelocity.x) * this.curveFactor;
            this.movementY = -this.clampCurve(playerVelocity.y) * this.curveFactor;

            bat.script.playerBat.setQuadrant(quadrant, accuracyHit);

            if (accuracyHit) {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_center_hits", 1); 
                pc.scoreManager.addAccuracyBonus();
            }

            this.curving = true;

            var curveAmplitude = Math.abs(playerVelocity.length());

            var curve = curveAmplitude >= this.minCurve;
            var superCurve = curveAmplitude >= this.maxCurve;

            var ballSpin = this.ballSpinForce;
            ballSpin.set(this.movementY, this.movementX, 0).scale(-1 * this.ballSpinFactor);
            this.dampAngularVelocity();
            this._rigidbody.applyTorqueImpulse(ballSpin);

            if (superCurve) {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_super_curve_balls", 1);
                pc.scoreManager.addSuperCurveBonus();
                this.entity.script.ballColor.changeParticleSystem(true);
            } else if (curve) {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_curve_balls", 1);
                pc.scoreManager.addCurveBonus();
                this.entity.script.ballColor.changeParticleSystem(true);
            } else {
                this.dampAngularVelocity();
            }
        }

        if (bat.tags.has('enemy')) {
            this.playRandomBounce(2);
            this.entity.script.ballColor.changeParticleSystem(false);
            if (!this.enemyHasCurve) {
                this.curving = false;

                bat.script.enemyBat.setQuadrant(quadrant, accuracyHit);

                var enemyVelocity = bat.script.enemyBat.getVelocity();
                var enemyVelocityLength = enemyVelocity.length();

                this.movementX = -this.clampCurve(enemyVelocity.x) * this.curveFactor;
                this.movementY = -this.clampCurve(enemyVelocity.y) * this.curveFactor;
            }
        }

        this.applyImpulse(quadrant.x * this.quadrantFactor * this.velocityOnHit.x, quadrant.y * this.quadrantFactor * this.velocityOnHit.y, speedIncreaseOnHit);
    },

    clampCurve: function(value) {
        var sign = Math.sign(value);

        return pc.math.clamp(Math.abs(value), 0, this.maxCurve) * sign;
    },

    dampAngularVelocity: function() {
        this._rigidbody.angularVelocity = this._rigidbody.angularVelocity.scale(this.ballSpinDampFactor);
    },

    applyImpulse: function(x, y, z) {
        this._rigidbody.applyImpulse(x, y, z);
    },

    maxSpeedReached: function() {
        return this._rigidbody.linearVelocity.z > this.maxSpeed || this._rigidbody.linearVelocity.z < -this.maxSpeed;
    },

    reset: function() {
        this._rigidbody.teleport(this.startPosition.x, this.startPosition.y, this.startPosition.z);
        this._rigidbody.enabled = false;

        this.ballTimer = 0;
        this.moved = false;
        this.hit = false;
        this.setLinearVelocity(0, 0, 0);
        this.entity.setLocalEulerAngles(new pc.Vec3(0, 0, 0));
        this._rigidbody.angularVelocity = new pc.Vec3(0,0,0);

        this._setLayer(this.normalLayer);

        this.stopCurving();
    },

    start: function(entity) {
        if (this.moved || !this.batOverlaps(entity) || this.hit) {
            return false;
        }

        StatisticsManager.instance.incrementStatistic("statistics_amount_of_player_hits", 1);
        
        pc.gameManager.start();

        this.moved = true;

        this._rigidbody.enabled = true;
        this.setLinearVelocity(0, 0, this.moveSpeed);
        this.onCollisionStart(entity);

        return true;
    },

    batOverlaps: function(bat) {
        return bat.script.collider.intersect(this.entity);
    },

    getQuadrant: function(bat) {
        var xAxis = this.entity.getPosition().x - bat.getPosition().x;    
        var yAxis = this.entity.getPosition().y - bat.getPosition().y; 

        xAxis = pc.math.clamp(Math.abs(xAxis), this.minimalQuadrantHit.x, Number.POSITIVE_INFINITY) * Math.sign(xAxis);
        yAxis = pc.math.clamp(Math.abs(yAxis), this.minimalQuadrantHit.y, Number.POSITIVE_INFINITY) * Math.sign(yAxis);

        this._quadrant.set(xAxis, yAxis);

        return this._quadrant;
    },

    isAccuracyHit: function(bat) {
        var deltaX = bat.getPosition().x - this.entity.getPosition().x;
        var deltaY = bat.getPosition().y - this.entity.getPosition().y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= this.accuracyRadius;
    },

    setLinearVelocity: function(x, y, z) {
        this._linearVelocity.set(x, y, z);
        this._rigidbody.linearVelocity = this._linearVelocity;
    },

    stopCurving: function() {
        this.curving = false;  
    },

    setDifficultySettings: function(moveSpeed, maxSpeed, minCurve, maxCurve, speedIncreaseOnHit) {
        this.moveSpeed = moveSpeed;
        this.maxSpeed = maxSpeed;
        this.minCurve = minCurve;
        this.maxCurve = maxCurve;
        this.speedIncreaseOnHit = speedIncreaseOnHit;
        
        this.entity.script.ballColor.setSpeed(this.moveSpeed);
    },

    hitGoal: function(id) {
        this._rigidbody.enabled = false;
        this.moved = false;
        this.hit = true;

        this._setLayer(this.goalLayers[id]);
    },

    shouldEnemyChase: function() {
        return this.moved && this._rigidbody.linearVelocity.z < 0;
    },

    _setLayer: function(id) {
        this.entity.model.layers = [ id ];
    },

    onFullReset: function() {
        //this.entity.enabled = false;  
    },

    changeLightColor: function() {
        this.entity.light.color = this.entity.model.model.meshInstances[0].material.diffuse;
    },

    playerWin: function() {
        this.changeColor(this.ballColorDefeated);
    },

    enemyWin: function() {
        this.changeColor(this.ballColorWin);
        this.entity.enabled = false;  
    }
});


// ContinuousCollisionDetection.js
var ContinuousCollisionDetection = pc.createScript('continuousCollisionDetection');

ContinuousCollisionDetection.attributes.add('motionThreshold', {
    type: 'number', 
    default: 1, 
    title: 'Motion Threshold', 
    description: 'Number of meters moved in one frame before CCD is enabled'
});

ContinuousCollisionDetection.attributes.add('sweptSphereRadius', {
    type: 'number', 
    default: 0.2, 
    title: 'Swept Sphere Radius', 
    description: 'This should be below the half extent of the collision volume. E.g For an object of dimensions 1 meter, try 0.2'
});

pc.extend(ContinuousCollisionDetection.prototype, {

    initialize: function() {
        var body; // Type btRigidBody

        body = this.entity.rigidbody.body;
        body.setCcdMotionThreshold(this.motionThreshold);
        body.setCcdSweptSphereRadius(this.sweptSphereRadius);

        this.on('attr:motionThreshold', function(value, prev) {
            body = this.entity.rigidbody.body;
            body.setCcdMotionThreshold(value);
        });
        this.on('attr:sweptSphereRadius', function(value, prev) {
            body = this.entity.rigidbody.body;
            body.setCcdSweptSphereRadius(value);
        });
    }
});


// LineIndicator.js
var LineIndicator = pc.createScript('lineIndicator');

LineIndicator.attributes.add('entityToTrack', { type: 'entity' });
LineIndicator.attributes.add('clamp', { type: 'vec2', default: [ -10, 10]});
LineIndicator.attributes.add('baseLineColor', { type: 'rgb', default: [1, 0, 1]});
LineIndicator.attributes.add('lineColorPlayerScore', { type: 'rgb', default: [1, 0, 1]});
LineIndicator.attributes.add('lineColorEnemyScore', { type: 'rgb', default: [1, 0, 1]});

pc.extend(LineIndicator.prototype, {

    initialize: function() {
        this.app.on('GameManager:fullReset', this.onFullReset, this);
        this.app.on('GameManager:start', this.onStart, this);
        this.app.on('GameManager:level', this.onLevelChange, this);
        this.app.on('GameManager:roundCompleteEnemy', this.playerWin, this);
        this.app.on('GameManager:roundCompletePlayer', this.enemyWin, this);
        this.app.on('GameManager:reset', this.reset, this);
        this.meshInstances = [];
        this.pushToInstances();
    },

    update: function() {
        var z = pc.math.clamp(this.entityToTrack.getPosition().z, this.clamp.x, this.clamp.y);

        this.entity.setPosition(this.entity.getPosition().x, this.entity.getPosition().y, z);
    },

    onFullReset: function() {
        this.entity.enabled = false;  
    },

    onStart: function() {
        if (this.entity.enabled) return;

        this.entity.enabled = true;
    },

    onLevelChange: function() {
        this.entity.enabled = false;  
    },

    playerWin: function() {        
        pc.lightManager.startPulse(this.lineColorEnemyScore, this.baseLineColor, this.meshInstances);
    },

    enemyWin: function() {        
        pc.lightManager.startPulse(this.lineColorPlayerScore, this.baseLineColor, this.meshInstances);
    },

    reset: function() {
        this.changeColor(this.baseLineColor);
    },

    pushToInstances: function() {
        var children = this.entity.children.length;
        for (var i = 0; i < children; i += 1) {
            this.meshInstances.push(this.entity.children[i].model.model.meshInstances[0]);
        }
    },
    changeColor: function(color) {
        var children = this.entity.children.length;
        for (var i = 0; i < children; i += 1) {
            this.entity.children[i].model.model.meshInstances[0].material.emissive = color;
            this.entity.children[i].model.model.meshInstances[0].material.diffuse = color;
            this.entity.children[i].model.model.meshInstances[0].material.update();
        }
    }
});

// InputBehaviour.js
var InputBehaviour = pc.createScript('inputBehaviour');

InputBehaviour.attributes.add('mobileInputOffset', { type: 'number', default: 75});

pc.extend(InputBehaviour.prototype, {

    initialize: function() {
        this._player = pc.gameManager.getPlayerBat();
        this._ball = pc.gameManager.getBall();

        var mouse = this.app.mouse;
        var touch = this.app.touch;

        this._startPosition = new pc.Vec2();

        this._started = false;
        this.touchAvailable = false;
        this.app.on('GameManager:reset', this.reset, this);

        if (touch) {
            this.entity.element.on('touchstart', this.onTouchStart, this);
            this.entity.element.on('touchmove', this.onTouchMove, this);
            this.touchAvailable = true;
        }

        if (mouse) {
            this.entity.element.on('mousedown', this.onMouseDown, this);
            this.entity.element.on('mousemove', this.onMouseMove, this);
            mouse.disableContextMenu();
        }
    },

    postInitialize: function() {
        if (this.touchAvailable)
            this._player.script.playerBat.onMove(new pc.Vec2(150, 75));
    },

    onMouseMove: function(event) {
        var offset = this.app.touch ? this.mobileInputOffset : 0;

        this._startPosition.set(event.x, event.y - offset);
        this._player.script.playerBat.onMove(this._startPosition);
    },

    onTouchMove: function(event) {
        this.onTouchStart(event);
        
        var x = typeof event.touches[0].clientX === undefined ? event.touches[0].screenX - 273 : event.touches[0].clientX;
        var y = typeof event.touches[0].clientY === undefined ? event.touches[0].screenY - 273 : event.touches[0].clientY;

        this._startPosition.set(x, y - this.mobileInputOffset);


        this._player.script.playerBat.onMove(this._startPosition);
    },

    onMouseDown: function(event) {
        if (this._started) {
            return false;
        }  

        this._started = this._ball.script.ballMovement.start(this._player);

        this.setToStart();
    },

    onTouchStart: function(event) {
        if (this._started) {
            return false;
        } 

        var x = typeof event.touches[0].clientX === undefined ? event.touches[0].screenX - 273 : event.touches[0].clientX;
        var y = typeof event.touches[0].clientY === undefined ? event.touches[0].screenY - 273 : event.touches[0].clientY;

        this._startPosition.set(x, y - this.mobileInputOffset);

        this._player.script.playerBat.onMove(this._startPosition);

        this._started = this._ball.script.ballMovement.start(this._player);

        this.setToStart();
    
    },

    reset: function() {
        this._started = false;  
    },

    setToStart: function() {
        if (!this._started) {
            return;
        }  

        pc.gameManager.switchState(pc.gameManager.states.GAME);
        
    },
});


// Goal.js
var Goal = pc.createScript('goal');

Goal.attributes.add('type', { type: 'number', enum: [
    { 'Player': 0 },
    { 'Enemy': 1 }, 
]});
Goal.attributes.add('bat', { type: 'entity' });

pc.extend(Goal.prototype, {

    initialize: function() {
        this.entity.collision.on('triggerenter', this.onTriggerEnter, this);  
    },

    onTriggerEnter: function(entity) {
        if (!entity.tags.has('ball')) {
            return;
        }

        var ballMovement = entity.script.ballMovement;

        switch (this.type) {
            case 0: 
                if (ballMovement.batOverlaps(this.bat)) {
                    ballMovement.onCollisionStart(this.bat);
                    StatisticsManager.instance.incrementStatistic("statistics_amount_of_player_hits", 1);
                } else {
                    ballMovement.hitGoal(0);
                    this.app.fire('Audio:sfx', "sfx_goal.mp3");
                    pc.gameManager.addPointToEnemy();
                }

                break;
            case 1: 
                if (ballMovement.batOverlaps(this.bat)) {
                    ballMovement.onCollisionStart(this.bat);
                } else {
                    ballMovement.hitGoal(1);
                    this.app.fire('Audio:sfx', "sfx_goal.mp3");
                    pc.gameManager.addPointToPlayer();
                    StatisticsManager.instance.incrementStatistic("statistics_amount_of_goals_hits", 1);
                }
                break;
            default:
                window.famobi.log(this.type, "doesn't exists");
                break;
        }
    },
});


// SetManager.js
var SetManager = pc.createScript('setManager');

SetManager.attributes.add('playerLives', { type: 'number', default: 5 });
SetManager.attributes.add('setData', { type: 'asset', assetType: 'json' });

pc.extend(SetManager.prototype, {

    initialize: function() {
        pc.setManager = this;

        this.sets = this.setData.resource;

        this.currentSet = null;
        this.level = 0;

        this._maxLevel = 10;
        
        if (pc.gameManager.forcedMode) {
            if (typeof pc.gameManager.forcedModeProperties.override.player_lives === 'number') {
                this.playerLives = pc.gameManager.forcedModeProperties.override.player_lives;
            }
        }
        
        this._playerLives = this.playerLives;
        
        this._ball = pc.gameManager.getBall();
        this._enemy = pc.gameManager.getEnemyBat();

        this._enemyLives = 0;
    },

    getMaxLevel: function() {
        return this._maxLevel;  
    },
    
    setLevel: function(level) {
        this.level = level;

        var success = this.getCurrentSetData();

        this.sendLevelStartStatistic(this.level);
        
        if (!success) {
            return false;
        }

        this.app.fire('SetManager:enemyLives', this._enemyLives);
        this.app.fire('SetManager:playerLives', this._playerLives);

        return true;
    },

    getCurrentSetData: function() {
        this.currentSet = this.sets['level_' + this.level];

        if (!this.currentSet) {
            console.warn('No set data is found for level', this.level);

            return false;
        }

        this._enemyLives = pc.gameManager.forcedMode ? pc.gameManager.forcedModeProperties.override.enemy_lives || this.currentSet.lives : this.currentSet.lives;
        this._ball.script.ballMovement.setDifficultySettings(this.currentSet.ballSpeed, this.currentSet.maxSpeedBall, this.currentSet.minCurveBall, this.currentSet.maxCurveBall, this.currentSet.speedIncreaseOnHitBall);
        this._enemy.script.enemyBat.setDifficultySettings(this.currentSet.enemyReactionSpeed, this.currentSet.enemyMovementSpeed);

        return true;
    },
    
    sendLevelStartStatistic: function(level) {
        switch (level) {
            case 2 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_two_starts", 1);
                break;
            }
            case 3 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_three_starts", 1);
                break;
            }
            case 4 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_four_starts", 1);
                break;
            }
            case 5 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_five_starts", 1);
                break;
            }
            case 6 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_six_starts", 1);
                break;
            }
            case 7 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_seven_starts", 1);
                break;
            }
            case 8 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_eight_starts", 1);
                break;
            }
            case 9 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_nine_starts", 1);
                break;
            }
            case 10 : {
                StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_ten_starts", 1);
                break;
            }
        }
    },

    removeEnemyLives: function(value) {
        this._enemyLives -= value || 1;

        this.app.fire('SetManager:enemyLives', this._enemyLives);

        if (this._enemyLives <= 0) {
            // TODO WIN
        }

        return this._enemyLives;
    },

    removePlayerLives: function(value) {
        this._playerLives -= value || 1;

        this.app.fire('SetManager:playerLives', this._playerLives);

        if (this.playerLives <= 0) {
            // TODO GameOver

        }

        return this._playerLives;
    },

    resetPlayerLives: function() {
        this._enemyLives = 0;
        this._playerLives = this.playerLives;

        this.app.fire('SetManager:enemyLives', this._enemyLives);
        this.app.fire('SetManager:playerLives', this._playerLives);
    },
});


// ScoreManager.js
var ScoreManager = pc.createScript('scoreManager');

ScoreManager.attributes.add('startBonus', { type: 'number', default: 3000 });
ScoreManager.attributes.add('bonusDecreaseTime', { type: 'number', default: 2 });
ScoreManager.attributes.add('bonusDecreaseAmount', { type: 'number', default: 25 });
ScoreManager.attributes.add('hitBonus', { type: 'number', default: 50 });
ScoreManager.attributes.add('curveBonus', { type: 'number', default: 25 });
ScoreManager.attributes.add('superCurveBonus', { type: 'number', default: 50 });
ScoreManager.attributes.add('accuracyBonus', { type: 'number', default: 50 });
ScoreManager.attributes.add('bonusCountValue', { type: 'number', default: 25 });

pc.extend(ScoreManager.prototype, {

    initialize: function() {
        pc.scoreManager = this;

        this.types = Object.freeze({
            CURVE: 0,
            SUPERCURVE: 1,
            ACCURACY: 2, 
        });

        this._highscore = pc.storageManager.get('highscore') || 0;

        this.score = 0;

        this.started = false;

        this.bonusCountDown = false;

        this.bonus = this.startBonus;
        this.bonusTimer = 0;
        this.nextBonusTime = this.bonusDecreaseTime;

        this.app.on('GameManager:fullReset', this.fullReset, this);
        this.app.on('GameManager:start', this.start, this);
        this.app.on('GameManager:level', this.nextLevel, this);
        this.app.on('GameManager:roundCompleteEnemy', this.stop, this);
        this.app.on('GameManager:roundCompletePlayer', this.stop, this);
    },

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    nextLevel: function() {
        this.started = false;
        this.resetBonus();
    },

    resetBonus: function() {
        this.bonus = this.startBonus;
        this.bonusTimer = 0;
        this.nextBonusTime = this.bonusDecreaseTime;
        this.app.fire('ScoreManager:bonus', this.bonus);
    },

    resetScore: function() {
        this.score = 0;
        this.updateScore();
    },

    reset: function() {
        this.resetScore();
        this.resetBonus();
    },

    fullReset: function() {
        this.resetScore();

        this.started = false;
        this.bonusCountDown = false;

        this.resetBonus();
    },

    update: function(dt) {
        if (this.started) {
            this.bonusTimer += dt;
            if (this.bonusTimer >= this.nextBonusTime) {
                this.bonus = pc.math.clamp(this.startBonus - Math.floor(this.bonusTimer / this.bonusDecreaseTime) * this.bonusDecreaseAmount, 0, Number.POSITIVE_INFINITY);
                this.nextBonusTime += this.bonusDecreaseTime;
                this.app.fire('ScoreManager:bonus', this.bonus);
            }
        }

        if (this.bonusCountDown && this.app.timeScale) {
            var deltaScore = Math.min(this.bonus, this.bonusCountValue);
            this.score += deltaScore;
            this.bonus -= deltaScore;
            this.updateScore(null, this.bonus <= 0);
            this.app.fire('ScoreManager:bonus', this.bonus);
            if (this.bonus <= 0) {
                this.bonusCountDown = false;
                pc.gameManager.finishedBonus();
            }
        }
        
        if (this.updateLiveScore && this.score > 0) {
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {liveScore: this.score});

            this.updateLiveScore = false;
        }
    },

    addHitBonus: function() {
        this.score += this.hitBonus;

        this.updateScore();
    },

    addCurveBonus: function() {
        this.score += this.curveBonus;
        this.updateScore(this.types.CURVE);
    },

    addSuperCurveBonus: function() {
        this.score += this.superCurveBonus;
        this.updateScore(this.types.SUPERCURVE);
    },

    addAccuracyBonus: function() {
        this.score += this.accuracyBonus;
        this.updateScore(this.types.ACCURACY);
    },

    applyBonus: function() {
        //this.score += this.bonus;
        this.bonusCountDown = true;
        //this.updateScore();

        this.bonusTimer = 0;

        //this.app.fire('ScoreManager:bonus', this.startBonus);
    },

    updateScore: function(type, updateLiveScore = true) {
        this.app.fire('ScoreManager:score', this.score, type);  
        
        this.updateLiveScore = updateLiveScore;
    },

    getScore: function() {
        return this.score;  
    },

    setHighscore: function() {
        if (this._highscore < this.score) {
            this._highscore = this.score;
            pc.storageManager.set('highscore', this._highscore);
        }

        this.app.fire('ScoreManager:highscore', this._highscore);
    },

    getHighscore: function() {
        return this._highscore;
    },
});

// GameScreen.js
var GameScreen = pc.createScript('gameScreen');

GameScreen.attributes.add('levelIndicator', { type: 'entity' });
GameScreen.attributes.add('inGameUI', { type: 'entity' });

GameScreen.attributes.add('levelIndicatorDelay', { type: 'number', default: 2 });

GameScreen.attributes.add('scoreEntity', { type: 'entity' });
GameScreen.attributes.add('bonusEntity', { type: 'entity' });

GameScreen.attributes.add('scoreTextTemplate', { type: 'string' });
GameScreen.attributes.add('levelTextTemplate', { type: 'string' });
GameScreen.attributes.add('bonusTextTemplate', { type: 'string' });

GameScreen.attributes.add('notificationEntity', { type: 'entity' });
GameScreen.attributes.add('curveTextTemplate', { type: 'string', default: 'Curve Bonus!' });
GameScreen.attributes.add('superCurveTextTemplate', { type: 'string', default: 'Super Curve Bonus!' });
GameScreen.attributes.add('accuracyTextTemplate', { type: 'string', default: 'Accuracy Bonus!' });

GameScreen.attributes.add('pauseButton', { type: 'entity' });
GameScreen.attributes.add('level', { type: 'entity' });
GameScreen.attributes.add('levelText', { type: 'entity' });
GameScreen.attributes.add('score', { type: 'entity' });
GameScreen.attributes.add('lives', { type: 'entity' });

// initialize code called once per entity
pc.extend(GameScreen.prototype, {

    initialize: function () {

        this._player = pc.gameManager.getPlayerBat();
        this._enemy = pc.gameManager.getEnemyBat();
        this._ball = pc.gameManager.getBall();

        this.states = Object.freeze({
            LEVEL: 0,
            INGAME: 1,
        });

        this.currentState = null;

        this.timer = 0;

        this.app.on('SetManager:setLevel', this.onSetLevel);

        this.app.on('ScoreManager:score', this.onScoreChange, this);
        this.app.on('GameManager:level', this.onLevelChange, this);
        this.app.on('ScoreManager:bonus', this.onBonusChange, this);

        this.app.on('SetManager:playerLives', this.onPlayerLivesChange, this);
        this.app.on('SetManager:enemyLives', this.onEnemyLivesChange, this);

        window.famobi.onRequest("pauseGameplay", this.pause.bind(this));

        window.famobi.onRequest("resumeGameplay", this.unpause.bind(this));
    },

    onUIEntityOpen: function () {
        this.setForcedModeProperties();

        if (pc.famobiAPI.hasFeature("external_pause")) {
            this.pauseButton.enabled = false;
        }
    },

    pause: function () {
        if (this.entity.enabled) {
            pc.gameManager.pause();
        }
    },

    unpause: function () {
        if (this.entity.enabled) {
            pc.gameManager.unpause();
        }
    },


    setForcedModeProperties: function () {
        var properties = pc.gameManager.forcedModeProperties;

        if (!properties) {
            return;
        }

        if (properties.override.hide_ui) {
            this.pauseButton.enabled = !properties.override.hide_ui.includes('pause_button');

            this.level.enabled = !properties.override.hide_ui.includes('level');
            this.levelText.enabled = !properties.override.hide_ui.includes('level');

            this.lives.enabled = !properties.override.hide_ui.includes('lives');


            this.score.enabled = !properties.override.hide_ui.includes('score');

            this.notificationEntity.enabled = !properties.override.hide_ui.includes('bonus_notification');
        }
    },

    update: function (dt) {
        if (this.currentState === this.states.LEVEL) {
            this.timer += dt;

            if (this.timer >= this.levelIndicatorDelay) {
                this.switchState(this.states.INGAME);

                this.timer = 0;
            }
        }
    },

    switchState: function (state) {
        this.currentState = state;

        switch (this.currentState) {
            case 0:
                this.levelIndicator.enabled = true;
                this.inGameUI.enabled = false;
                this.enableGameEntities(false);
                break;
            case 1:
                this.levelIndicator.enabled = false;
                this.inGameUI.enabled = true;
                this.enableGameEntities(true);
                break;
        }
    },

    onScoreChange: function (score, type) {
        this.changeText(this.scoreEntity, pc.utils.toNumberWithCommas(this.replaceTextVariable(this.scoreTextTemplate, score)));

        switch (type) {
            case pc.scoreManager.types.CURVE:
                this.setNotificationText(this.curveTextTemplate);
                break;
            case pc.scoreManager.types.SUPERCURVE:
                this.setNotificationText(this.superCurveTextTemplate);
                break;
            case pc.scoreManager.types.ACCURACY:
                this.setNotificationText(this.accuracyTextTemplate);
                break;

        }
    },

    onLevelChange: function (level) {
        this.app.fire('levelInterface:changeLevel', level);
        // this.showLevelIndicator(level);
        this.switchState(this.states.INGAME);
    },

    onBonusChange: function (bonus) {
        this.changeText(this.bonusEntity, pc.utils.toNumberWithCommas(this.replaceTextVariable(this.bonusTextTemplate, bonus)));
    },

    replaceTextVariable: function (text, variable) {
        return text.replace('{0}', String(variable));
    },

    changeText: function (entity, text) {
        entity.element.text = text;
    },

    setNotificationText: function (text) {
        if (!this.notificationEntity.enabled) {
            return;
        }

        this.changeText(this.notificationEntity.children[0], text);
        this.notificationEntity.element.width = this.notificationEntity.children[0].element.width * 1.2;

        this.notificationEntity.script.tweenPosition.startTween();
    },

    onPlayerLivesChange: function (lives) {
        if (pc.lifeInterface) {
            pc.lifeInterface.setPlayerLives(lives);
        }
    },

    onEnemyLivesChange: function (lives) {
        if (pc.lifeInterface) {
            pc.lifeInterface.setEnemyLives(lives);
        }
    },

    showLevelIndicator: function (level) {
        this.changeText(this.levelIndicator, this.replaceTextVariable(this.levelTextTemplate, level));

        this.switchState(this.states.LEVEL);
    },

    enableGameEntities: function (enabled) {
        this._player.enabled = enabled;
        this._enemy.enabled = enabled;
        this._ball.enabled = enabled;
    },
});


// DynamicScreen.js
var DynamicScreen = pc.createScript('dynamicScreen');

DynamicScreen.attributes.add('clampWidth', { type: 'boolean', default: true });


pc.extend(DynamicScreen.prototype, {
    initialize: function() {
        pc.famobiAPI.setOnOrientationChange(this.calculateDimensions, this);

        this.calculateDimensions();
    },

    calculateDimensions: function() {
        var ratio = window.innerWidth / innerHeight / 2;
                
        var scale = pc.uiManager.getReferenceResolution().y / window.innerHeight

        if (this.clampWidth) {
            this.entity.element.width = pc.math.clamp(window.innerWidth * scale, 0, pc.uiManager.getReferenceResolution().x);
        } else {
            this.entity.element.width = window.innerWidth * scale
        }
        this.entity.element.height = window.innerHeight * scale;
    }
});


// PlayerBat.js
var PlayerBat = pc.createScript('playerBat');


PlayerBat.attributes.add('halfExtent', { type: 'vec4', default: [-3.5, 3.5, -2, 2]});
PlayerBat.attributes.add('quadrantMaterial', { type: 'asset'});
PlayerBat.attributes.add('middleHitMaterial', { type: 'asset'});
PlayerBat.attributes.add('emitCurveType', { 
    type: 'number', 
    enum: [
        { "LINEAR": 0},
        { "SMOOTH-STEP": 1}, 
        { "SPLINE": 2},
        { "STEP": 3}
    ]
});
PlayerBat.attributes.add('emitDuration', { type: 'number', default: 2});
PlayerBat.attributes.add('minOpacity', { type: 'number', default: 0.4});

var QuadrantHit = {"TOPLEFT":0, "TOPRIGHT":1, "BOTTOMLEFT":2, "BOTTOMRIGHT": 3, "MIDDLE": 4};
Object.freeze(QuadrantHit);

// initialize code called once per entity
pc.extend(PlayerBat.prototype, {

    initialize: function() {
        this._pointer =  new pc.Vec3();
        this.model = this.entity.model;
        this._oldPosition = [
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y), 
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y)
        ];

        this._velocity = new pc.Vec2();

        this._camera = this.app.root.findOne(function(node) {
            return node.tags.has('camera');
        });

        this._z = 5;

        this.app.on('CameraManager:onResize', this._setZDistance, this);
        this.app.on('GameManager:fullReset', this.onFullReset, this);
        var walls = this.app.root.findByTag('wall');
        var halfExtents = this.entity.script.collider.halfExtents;

        this.clampHalfExtents = new pc.Vec4(walls[0].getPosition().x + walls[0].model.model.meshInstances[0].aabb.halfExtents.x + halfExtents.x, walls[1].getPosition().x - walls[1].model.model.meshInstances[0].aabb.halfExtents.x - halfExtents.x, 
                                            walls[3].getPosition().y + walls[3].model.model.meshInstances[0].aabb.halfExtents.y + halfExtents.y, walls[2].getPosition().y - walls[2].model.model.meshInstances[0].aabb.halfExtents.y - halfExtents.y);





        this.defaultMaterial = this.quadrantMaterial.resource.clone();
        this.emitCurve = new pc.Curve();
        this.createEmitCurve();

        this.emitStarted = false;
        this.timer = 0;

        for (var i = 0; i < this.model.meshInstances.length - 1; i += 1) {
            var material = this.quadrantMaterial.resource.clone();
            this.model.meshInstances[i].material = material;
        }

        this.hit = null;
        
    },

    update: function(dt) {
        if (!this.emitStarted) return;
        this.timer += dt;

        var value = this.emitCurve.value(this.timer);

        for (var i = 0; i < this.model.meshInstances.length - 1; i += 1) {
            if (value <= this.minOpacity) {

                if (i === this.hit && this.hit === QuadrantHit.MIDDLE) {
                    this.model.meshInstances[i].material = this.middleHitMaterial.resource;
                } else {
                    this.model.meshInstances[i].material.opacity = value;
                }
            }
            if (value >= this.minOpacity && this.hit === i) {
                if (this.hit != QuadrantHit.MIDDLE) {
                    this.model.meshInstances[i].material.opacity = value;
                }
            }
            this.model.meshInstances[i].material.update();
        }

        if (this.timer >= this.emitDuration) {
            this.model.meshInstances[QuadrantHit.MIDDLE].material = this.defaultMaterial;
            this.emitStarted = false;
            this.timer = 0;
        }
    },

    createEmitCurve: function() {
        var duration = this.emitDuration;
        var curve = this.emitCurve;
        var middle = duration / 2; // divide by 2

        curve.type = this.emitCurveType;
        curve.add(0, this.defaultMaterial.opacity);
        curve.add(middle, 1); // '1' is the MAX opacity value
        curve.add(duration, this.defaultMaterial.opacity);
        this.emitCurve = curve;
    },

    _setZDistance: function(z) {
        this._z = z - 10;  
    },
    
    onGoal: function() {
        this.onMove(new pc.Vec2(300, 75));
    },

    onMove: function(position) {
        this._camera.camera.screenToWorld(position.x, position.y, this._z, this._pointer);

        this.entity.setPosition(this._pointer);

        var playerPosX = this.entity.getPosition().x;
        var playerPosY = this.entity.getPosition().y;
        var playerPosZ = this.entity.getPosition().z;

        playerPosX = pc.math.clamp(playerPosX, this.clampHalfExtents.x, this.clampHalfExtents.y);
        playerPosY = pc.math.clamp(playerPosY, this.clampHalfExtents.z, this.clampHalfExtents.w);
        this._pointer.set(playerPosX, playerPosY, playerPosZ);
        this.entity.setPosition(this._pointer);
    },

    postUpdate: function() {
        this.setOldPosition();
    },

    setOldPosition: function() {
        var currentPosition = this.entity.getPosition();

        for (var i = 0; i < this._oldPosition.length; i += 1) {
            var nextIndex = i + 1;

            var position = this._oldPosition[nextIndex];

            if (position instanceof pc.Vec2) {
                this._oldPosition[i].set(position.x, position.y);
            } else {
                this._oldPosition[i].set(currentPosition.x, currentPosition.y);
            }
        }
    },

    getVelocity: function() {
        var differenceX = this._oldPosition[this._oldPosition.length - 1].x - this._oldPosition[0].x;
        var differenceY = this._oldPosition[this._oldPosition.length - 1].y - this._oldPosition[0].y;


        this._velocity.set(differenceX, differenceY);

        return this._velocity;
    },

    setQuadrant: function(quadrant, accuracy) {
        this.showQuadrantHit(quadrant, accuracy);
    },

    showQuadrantHit: function(quadrant, accuracy) {
        if (this.emitStarted) return; // prevent multiple emit occassions

        var hit = null;

        if (accuracy) {
            hit = QuadrantHit.MIDDLE;
        } else {
            var left = quadrant.x <= -0.1;
            var top = quadrant.y >= 0.1;

            if (left && top) {
                hit = QuadrantHit.TOPLEFT;
            } else if (left && !top) {
                hit = QuadrantHit.BOTTOMLEFT;
            } else if (!left && top) {
                hit = QuadrantHit.TOPRIGHT;
            } else if (!left && !top) {
                hit = QuadrantHit.BOTTOMRIGHT;
            } 
        }

        if (hit !== null) {
            this.hit = hit;
            this.emitStarted = true;
        }

    },

    onFullReset: function() {
        //this.entity.enabled = false;
        this.emitStarted = false;
        this.timer = 0;
    },
});



// EnemyBat.js
var EnemyBat = pc.createScript('enemyBat');

EnemyBat.attributes.add('reactionSpeed', { type: 'number', default: 1 });
EnemyBat.attributes.add('halfExtents', { type: 'vec4', default: [-3.5, 3.5, -2, 2]});
EnemyBat.attributes.add('_maxSpeed', { type: 'number', default: 1});
EnemyBat.attributes.add('emitCurveType', { 
    type: 'number', 
    enum: [
        { "LINEAR": 0},
        { "SMOOTH-STEP": 1}, 
        { "SPLINE": 2},
        { "STEP": 3}
    ]
});
EnemyBat.attributes.add('emitDuration', { type: 'number', default: 2});
EnemyBat.attributes.add('minOpacity', { type: 'number', default: 0.4});

EnemyBat.attributes.add('quadrantMaterial', { type: 'asset'});
EnemyBat.attributes.add('middleHitMaterial', { type: 'asset'});

var QuadrantHit = {"TOPLEFT":0, "TOPRIGHT":1, "BOTTOMLEFT":2, "BOTTOMRIGHT": 3, "MIDDLE": 4};
Object.freeze(QuadrantHit);

pc.extend(EnemyBat.prototype, {

    initialize: function() {

        this._ball = pc.gameManager.getBall();
        this.model = this.entity.model;
        this._oldPosition = [
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y), 
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y),
            new pc.Vec2(this.entity.getPosition().x, this.entity.getPosition().y)
        ];        

        this._maxSpeed = 1;

        this._velocity = new pc.Vec2();

        this.app.on('GameManager:fullReset', this.onFullReset, this);
        
        this.defaultMaterial = this.quadrantMaterial.resource.clone();
        this.emitCurve = new pc.Curve();
        this.createEmitCurve();

        this.emitStarted = false;
        this.timer = 0;
             
        for (var i = 0; i < this.model.meshInstances.length - 1; i += 1) {
            var material = this.quadrantMaterial.resource.clone();
            this.model.meshInstances[i].material = material;
        }
        
        this.hit = null;
    },

    update: function(dt) {
        if (!pc.gameManager.isState(pc.gameManager.states.GAME) || dt === 0) {
            return;
        }  

        var ballPosition = this._ball.script.ballMovement.shouldEnemyChase() ? this._ball.getPosition() : pc.Vec3.ZERO;
        var enemyPosition = this.entity.getPosition();

        var movementX = pc.math.lerp(enemyPosition.x, ballPosition.x, this.reactionSpeed * dt);
        var movementY = pc.math.lerp(enemyPosition.y, ballPosition.y, this.reactionSpeed * dt);

        movementX = pc.math.clamp(movementX, this.halfExtents.x, this.halfExtents.y);
        movementY = pc.math.clamp(movementY, this.halfExtents.z, this.halfExtents.w);

        var oldPosition = this.getOldPosition();

        this._velocity.set(movementX - oldPosition.x, movementY - oldPosition.y);
        var speed = this._velocity.length() / dt;

        if (speed > this._maxSpeed) {
            this._velocity.scale(this._maxSpeed / speed);
            movementX = oldPosition.x + this._velocity.x;
            movementY = oldPosition.y + this._velocity.y;
        }

        this.entity.rigidbody.teleport(movementX, movementY, this.entity.position.z);


        if (!this.emitStarted) return;
        this.timer += dt;

        var value = this.emitCurve.value(this.timer);

        for (var i = 0; i < this.model.meshInstances.length - 1; i += 1) {
            if (value <= this.minOpacity) {
                
                if (i === this.hit && this.hit === QuadrantHit.MIDDLE) {
                    this.model.meshInstances[i].material = this.middleHitMaterial.resource;
                } else {
                    this.model.meshInstances[i].material.opacity = value;
                }
            }
            if (value >= this.minOpacity && this.hit === i) {
                if (this.hit != QuadrantHit.MIDDLE) {
                    this.model.meshInstances[i].material.opacity = value;
                }
            }
            this.model.meshInstances[i].material.update();
        }

        if (this.timer >= this.emitDuration) {
            this.model.meshInstances[QuadrantHit.MIDDLE].material = this.defaultMaterial;
            this.emitStarted = false;
            this.timer = 0;
        }
    },

    postUpdate: function() {
        this.setOldPosition();
    },

    setDifficultySettings: function(reactionSpeed, maxSpeed) {
        this.reactionSpeed = reactionSpeed;
        this._maxSpeed = maxSpeed;
    },    

    setQuadrant: function(quadrant, accuracy) {
        this.showQuadrantHit(quadrant, accuracy);
    },

    createEmitCurve: function() {
        var duration = this.emitDuration;
        var curve = this.emitCurve;
        var middle = duration / 2; // divide by 2

        curve.type = this.emitCurveType;
        curve.add(0, this.defaultMaterial.opacity);
        curve.add(middle, 1); // '1' is the MAX opacity value
        curve.add(duration, this.defaultMaterial.opacity);
        this.emitCurve = curve;
    },


    showQuadrantHit: function(quadrant, accuracy) {
        if (this.emitStarted) return;
        
        var hit = null;

        if (accuracy) {
            hit = QuadrantHit.MIDDLE;
        } else {
            var left = quadrant.x <= -0.1;
            var top = quadrant.y >= 0.1;

            if (left && top) {
                hit = QuadrantHit.TOPLEFT;
            } else if (left && !top) {
                hit = QuadrantHit.BOTTOMLEFT;
            } else if (!left && top) {
                hit = QuadrantHit.TOPRIGHT;
            } else if (!left && !top) {
                hit = QuadrantHit.BOTTOMRIGHT;
            }
        }

        if (hit !== null) {
            this.hit = hit;
            this.emitStarted = true;
        }

    },

    setOldPosition: function() {
        var currentPosition = this.entity.getPosition();
        for (var i = 0; i < this._oldPosition.length; i += 1) {
            var nextIndex = i + 1;

            var position = this.getOldPosition(nextIndex);
            if (position instanceof pc.Vec2) {
                this.getOldPosition(i).set(position.x, position.y);
            } else {
                this.getOldPosition(i).set(currentPosition.x, currentPosition.y);
            }
        }

    },

    getVelocity: function() {
        var oldPosition0 = this.getOldPosition(0);
        var oldPositionEnd = this.getOldPosition();

        var differenceX = oldPositionEnd.x - oldPosition0.x;
        var differenceY = oldPositionEnd.y - oldPosition0.y;

        this._velocity.set(differenceX, differenceY);

        return this._velocity;
    },

    getOldPosition: function(index) {
        return this._oldPosition[typeof index === 'number' ? index : (this._oldPosition.length - 1)];
    },

    onFullReset: function() {
        //this.entity.enabled = false;
        this.emitStarted = false;
        this.timer = 0;
    },
});


// PauseScreen.js
var PauseScreen = pc.createScript('pauseScreen');


// initialize code called once per entity
pc.extend(PauseScreen.prototype, {

    initialize: function() {

    },
    
    onUIEntityOpen: function() {
        this.app.timeScale = 0;
    },

    onUIEntityClose: function() {
        this.app.timeScale = 1;
    },
});


// WinScreen.js
var WinScreen = pc.createScript('winScreen');

WinScreen.attributes.add('scoreEntity', { type: 'entity' });

pc.extend(WinScreen.prototype, {
    
    initialize: function() {
        
    },
    
    onUIEntityOpen: function() {
        pc.scoreManager.setHighscore();
        this.scoreEntity.element.text = pc.utils.toNumberWithCommas(pc.scoreManager.getScore());
    },
    
    onUIEntityClose: function() {
        
    }
});

// LoseScreen.js
var LoseScreen = pc.createScript('loseScreen');

LoseScreen.attributes.add('scoreEntity', { type: 'entity' });
LoseScreen.attributes.add('retryButton', {type: 'entity'});
LoseScreen.attributes.add('continueButton', {type: 'entity'});
LoseScreen.attributes.add('amountOfLivesRegained', { type: 'number', default: 2 });
LoseScreen.attributes.add('amountOfTimesForRetry', { type: 'number', default: 2 });

pc.extend(LoseScreen.prototype, {

    initialize: function() {
        this.amountOfRetrys = 0;
        this.clicked = false;

        pc.util.BindCallbackToEvent(this.retryButton, this.watchAd, this);
        this.retryButton.enabled = pc.famobiAPI.hasRewardedAd();

        this.app.on('GameManager:fullReset', this.reset, this);
        this.app.on('GameManager:level', this.level, this);
    },

    onUIEntityOpen: function() {
        pc.scoreManager.setHighscore();
        this.scoreEntity.element.text = pc.utils.toNumberWithCommas(pc.scoreManager.getScore());
        this.clicked = false;

        if (this.amountOfRetrys < this.amountOfTimesForRetry) {
            this.retryButton.enabled = pc.famobiAPI.hasRewardedAd();
        } else {
            this.retryButton.enabled = false;
        }

        this.continueButton.enabled = true;
    },

    onUIEntityClose: function() {

    },

    watchAd: function() {
        if (!this.clicked) {
            this.app.fire('Audio:sfx', "sfx_button.mp3");  
            this.clicked = true;
            this.amountOfRetrys += 1;
            this.continueButton.enabled = false;
            pc.famobiAPI.rewardedAd(this.retry, this);
        }
    },

    retry: function(result) {
        if (result.rewardGranted) {
            pc.setManager._playerLives = this.amountOfLivesRegained;
            this.app.fire('SetManager:playerLives', pc.setManager._playerLives);
            pc.gameManager.reset();
            this.app.fire('UIManager:showUI', 'Game Screen');
            this.app.fire('UIManager:hideUI', 'Lose Screen');
            this.retryButton.button._isPressed = false;
            this.retryButton.button._isHovering = false;
            this.retryButton.button._visualState = "DEFAULT";
            pc.gameManager.switchState(pc.gameManager.states.GAME);
        }

        this.clicked = false;
    },


    reset: function() {
        this.amountOfRetrys = 0;
    },

    level: function() {
        this.amountOfRetrys = 0;
    }
});

// CameraManager.js
var CameraManager = pc.createScript('cameraManager');

CameraManager.attributes.add('zCurve', { type: 'curve', title: 'Z distance Curve', description: 'The x-axis represents the ratio of the resolution divided by 2.' });


pc.extend(CameraManager.prototype, {

    initialize: function() {
        pc.famobiAPI.setOnOrientationChange(this.onResize, this);
    },
    
    postInitialize: function() {
        this.onResize();
    },

    onResize: function() {
        var scale = window.innerWidth / window.innerHeight;

        var z = this.zCurve.value(scale / 2);
        
        this.entity.setPosition(0, 0, z);
        
        this.app.fire('CameraManager:onResize', z);
    },
});


// Collider.js
var Collider = pc.createScript('collider');
Collider.attributes.add('type' , { type: 'string', enum: [
    { 'Box': 'box'}
], default: 'box' });

Collider.attributes.add('halfExtents', { type: 'vec3', default: [ 0.5, 0.5, 0.5 ] });
Collider.attributes.add('radius', { type: 'number', default: 0.5 });

// initialize code called once per entity
pc.extend(Collider.prototype, {

    initialize: function() {

    },

    intersect: function(entity) {
        var hitbox = entity.collision || entity.script.collider;
        
        if (this.type === 'box' && hitbox.type === 'sphere') {
            return this._aabbBoxSphere(this.entity.getPosition(), this.halfExtents, entity.getPosition(), hitbox.radius);
        } else {
            window.famobi.log("Types not recognized", this.type, hitbox.type);
        }
    },

    _aabbBoxSphere: function(boxPosition, halfExtents, spherePosition, radius) {
        var cx = spherePosition.x;
        var cy = spherePosition.y;

        var rx = boxPosition.x;
        var ry = boxPosition.y;
        var rw = halfExtents.x;
        var rh = halfExtents.y;
        
        var testX = cx;
        var testY = cy;

        if (cx < rx - rw)       testX = rx - rw;   // test left edge
        else if (cx > rx + rw)    testX = rx + rw;   // right edge
        if (cy < ry - rh)       testY = ry - rh;   // top edge
        else if (cy > ry + rh)    testY = ry + rh;   // bottom edge

        // get distance from closest edges
        var distX = cx - testX;
        var distY = cy - testY;
        var distance = Math.sqrt((distX * distX) + (distY * distY));

        // if the distance is less than the radius, collision!
        return distance <= radius;
    }, 
});


// changeWallColor.js
var ChangeWallColor = pc.createScript('changeWallColor');

ChangeWallColor.attributes.add('baseWallColor', { type: 'rgb', default: [1, 0, 1]});
ChangeWallColor.attributes.add('wallColorPlayerScore', { type: 'rgb', default: [1, 0, 1]});
ChangeWallColor.attributes.add('wallColorEnemyScore', { type: 'rgb', default: [1, 0, 1]});

pc.extend(ChangeWallColor.prototype, {

    initialize: function() {
        this.app.on('GameManager:roundCompleteEnemy', this.playerWin, this);
        this.app.on('GameManager:roundCompletePlayer', this.enemyWin, this);
        this.app.on('GameManager:reset', this.reset, this);
    },

    playerWin: function() {
        this.app.fire('vibrate', 500);
        
        pc.lightManager.startPulse(this.wallColorEnemyScore, this.baseWallColor, this.entity.model.model.meshInstances);
    },

    enemyWin: function() {
        this.app.fire('vibrate', 500);
        pc.lightManager.startPulse(this.wallColorPlayerScore, this.baseWallColor, this.entity.model.model.meshInstances);
    },

    reset: function() {
        this.changeColor(this.baseWallColor);
    },

    changeColor: function(color) {
        var meshInstances = this.entity.model.model.meshInstances.length;
        for (var i = 0; i < meshInstances; i += 1) {
            this.entity.model.model.meshInstances[i].material.emissive = color;
            this.entity.model.model.meshInstances[i].material.diffuse = color;
            this.entity.model.model.meshInstances[i].material.update();
        }
    }
});

// Utils.js
(function() {
    
    pc.util = {};

    pc.util.rgb2hex = function(rgb) {
        if (rgb.length !== 3) { return; }

        var output = "#";
        output += ("0" + parseInt(rgb[0] * 255, 10).toString(16)).slice(-2);
        output += ("0" + parseInt(rgb[1] * 255, 10).toString(16)).slice(-2);
        output += ("0" + parseInt(rgb[2] * 255, 10).toString(16)).slice(-2);

        return output;
    };

    pc.util.RandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    pc.util.BindCallbackToEvent = function(entity, callback, context) {
        if (typeof entity === 'undefined' || entity === null) return;

        entity.element.on('mouseup', callback, context);
        entity.element.on('touchend', callback, context);
        //entity.element.on('mouseup', function() { pc.app.fire('Audio:PlayButtonClick'); }, pc);
        //entity.element.on('touchend', function() { pc.app.fire('Audio:PlayButtonClick'); }, pc);
    };

    pc.util.MultiDimensionalArray = function(dimensions) {
        var array = [];

        for (var x = 0; x < dimensions[0]; x++) {
            array.push(dimensions.length === 1 ? 0 : pc.util.MultiDimensionalArray(dimensions.slice(1)));
        }

        return array;
    };

    pc.util.DifferenceBetween2Arrays = function(arr1, arr2) {
        return arr1.filter(function(i) {return arr2.indexOf(i) < 0;});
    };


    pc.util.ShuffleArray = function(array) {
        var currentIndex = array.length;
        var tempValue, randomIndex;

        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }

        return array;
    };

    pc.util.gcd = function(a, b) {
        if (b > a) {
            temp = a;
            a = b;
            b = temp;
        }
        while (b !== 0) {
            m = a % b;
            a = b;
            b = m;
        }
        return a;
    };

    pc.util.ratio = function(x, y) {
        c = pc.util.gcd(x, y);
        return new pc.Vec2((x / c),(y / c));
    };
    
    pc.util.psuedoRandom = function (previousValue, min, max) {
        if (max < min) return console.warn('min is greater than max!');
        if (max === min) return min;
        
        var rng = Math.round(pc.math.random(min, max));
        
        if (rng !== previousValue) return rng;
            
        var numbers = [];
        var delta = max - min;
        
        for (var x = 0; x <= delta; x += 1) {
            var value = min + x;
            
            if (value !== previousValue)
                numbers.push(value);
        }
        
        rng = Math.round(pc.math.random(0, numbers.length - 1));
        return numbers[rng];      
    };
}());


// ballColor.js
var BallColor = pc.createScript('ballColor');

BallColor.attributes.add('ballColor',            { type: 'rgb',      default: [1, 0, 1],     title: 'Color when moving'});
BallColor.attributes.add('ballColorDefeated',    { type: 'rgb',      default: [1, 0, 1],     title: 'Color when hit player'});
BallColor.attributes.add('ballColorWin',         { type: 'rgb',      default: [1, 0, 1],     title: 'Color when hit enemy'});

pc.extend(BallColor.prototype, {

    initialize: function() {
        this.changeColor(this.ballColor);

        this.app.on('GameManager:roundCompleteEnemy', this.playerWin, this);
        this.app.on('GameManager:roundCompletePlayer', this.enemyWin, this);
        this.app.on('GameManager:reset', this.reset, this);

        this._baseEmissionRate = this.entity.particlesystem.rate;
        this._baseLifeTime = this.entity.particlesystem.lifetime;

    },

    reset: function() {
        this.changeColor(this.ballColor);  
    },

    playerWin: function() {
        // this.changeColor(this.ballColorDefeated);
        this.changeParticleSystem(false);
        // color, baseColor, mechInstances, context, intervalCB, doneCB
        pc.lightManager.startPulse(this.ballColorDefeated, this.ballColor, this.entity.model.model.meshInstances,
                                   this, this.changeLightColor);
    },

    enemyWin: function() {
        // this.changeColor(this.ballColorWin);
        this.changeParticleSystem(false);
        pc.lightManager.startPulse(this.ballColorWin, this.ballColor, this.entity.model.model.meshInstances,
                                   this, this.changeLightColor);
    },

    changeLightColor: function() {
        this.entity.light.color = this.entity.model.model.meshInstances[0].material.diffuse;
    },

    changeColor: function(color) {
        // Assign the color the ball
        var meshInstances = this.entity.model.model.meshInstances.length;
        for (var i = 0; i < meshInstances; i += 1) {
            this.entity.model.model.meshInstances[i].material.emissive = color;
            this.entity.model.model.meshInstances[i].material.diffuse = color;
            this.entity.model.model.meshInstances[i].material.update();
        }
        this.changeLightColor();
    },

    changeParticleSystem: function(start) {
        if (start) {
        //this.entity.particlesystem.colorMap = this.entity.model.model.meshInstances[0].material.diffuse;
//this.entity.particlesystem.rebuild()
            // this.entity.particlesystem.colorMap = this.entity.model.model.meshInstances[0].material.diffuse;
            // this.entity.particlesystem.rate = this._baseEmissionRate / this.entity.script.ballMovement.moveSpeed;
            // this.entity.particlesystem.rate2 = this._baseEmissionRate / this.entity.script.ballMovement.moveSpeed;
            // this.entity.particlesystem.lifetime = this._baseLifeTime / (this.entity.script.ballMovement.moveSpeed / 3);
            this.entity.particlesystem.play();

        } else {
            this.entity.particlesystem.stop();
        }
    },

    setSpeed: function(speed) {
        //this.entity.particlesystem.colorMap = this.entity.model.model.meshInstances[0].material.diffuse;
        this.entity.particlesystem.rate = this._baseEmissionRate / speed;
        this.entity.particlesystem.rate2 = this._baseEmissionRate / speed;
        this.entity.particlesystem.lifetime = this._baseLifeTime / (speed / 3);
        this.entity.particlesystem.rebuild()
    },
});

// LevelInterface.js
var LevelInterface = pc.createScript('levelInterface');

LevelInterface.attributes.add('disabledSprite', { type: 'asset', assetType: 'sprite' });
LevelInterface.attributes.add('enabledSprite', { type: 'asset', assetType: 'sprite' });
LevelInterface.attributes.add('finalDisabledSprite', { type: 'asset', assetType: 'sprite' });
LevelInterface.attributes.add('finalEnabledSprite', { type: 'asset', assetType: 'sprite' });
LevelInterface.attributes.add('animateLevelUp', { type: 'boolean' });
LevelInterface.attributes.add('levelText', { type: 'entity' });

pc.extend(LevelInterface.prototype, {
    initialize: function() {
        this.app.on('levelInterface:changeLevel', this.setLevel, this);
    },
    
    setLevel: function(level) {
        this.levelText.element.text = level;
        
        if (!this.entity.enabled) {
            return;
        }
        
        for (var i = 0; i < this.entity.children.length; i += 1) {
            this.setSprite(this.entity.children[i], i < level, i === this.entity.children.length - 1);
            if (this.animateLevelUp && i === level - 1) {
                this.entity.children[i].script.tweenScale.startTween();
            }
        }
    },
    
    setSprite: function(item, isEnabled, isFinal) {
        if (isFinal) {
            if (isEnabled) {
                item.element.sprite = this.finalEnabledSprite.resource;
            } else {
                item.element.sprite = this.finalDisabledSprite.resource;
            }
        } else {
            if (isEnabled) {
                item.element.sprite = this.enabledSprite.resource;
            } else {
                item.element.sprite = this.disabledSprite.resource;
            }
        }
    }
});

// LifeInterface.js
var LifeInterface = pc.createScript('lifeInterface');

LifeInterface.attributes.add('playerLives', { type: 'entity' });
LifeInterface.attributes.add('enemyLives', { type: 'entity' });
LifeInterface.attributes.add('playerEnabledSprite', { type: 'asset', assetType: 'sprite' });
LifeInterface.attributes.add('enemyEnabledSprite', { type: 'asset', assetType: 'sprite' });
LifeInterface.attributes.add('disabledSprite', { type: 'asset', assetType: 'sprite' });

pc.extend(LifeInterface.prototype, {
    initialize: function() {
        pc.lifeInterface = this;
        this.currentPlayerLives = 0;
        this.currentEnemyLives = 0;
    },

    setPlayerLives: function(lives) {
        if (this.currentPlayerLives < lives) {
            // enable
            for (var i = this.currentPlayerLives; i < lives; i += 1) {
                this.startPulseSpriteEnable(this.playerLives.children[i], true);
                
            }
        } else if (this.currentPlayerLives > lives) {
            for (var j = this.currentPlayerLives; j > lives; j -= 1) {
                this.startPulseSpriteDisable(this.playerLives.children[j-1], true);
            }
        }
        this.currentPlayerLives = lives;
    },

    setEnemyLives: function(lives) {
        if (this.currentEnemyLives < lives) {
            // enable
            for (var i = this.currentEnemyLives; i < lives; i += 1) {
                this.startPulseSpriteEnable(this.enemyLives.children[i], false);
            }
        } else if (this.currentEnemyLives > lives) {
            for (var j = this.currentEnemyLives; j > lives; j -= 1) {
                this.startPulseSpriteDisable(this.enemyLives.children[j-1], false);
            }
        }
        this.currentEnemyLives = lives;      
    },
    
    setEnemyTotalLives: function(totalLives) {
        for (var i = 0; i < this.enemyLives.children.length; i += 1) {
            this.enemyLives.children[i].enabled = i < totalLives;
        }
    },

    setSprite: function(item, isEnabled, isPlayer) {
        if (isEnabled) {
            if (isPlayer) {
                item.element.sprite = this.playerEnabledSprite.resource;
            } else{
                item.element.sprite = this.enemyEnabledSprite.resource;
            }
        } else {
            item.element.sprite = this.disabledSprite.resource;
        }
    },
    
    startPulseSpriteEnable: function(sprite, isPlayer) {
        sprite.enabled = true;
        pc.pulse.startPulse(this,
                            this.setSprite.bind(this, sprite, true, isPlayer),
                            this.setSprite.bind(this, sprite, false, isPlayer),
                            100,
                            9,
                            50);
    },    
    
    startPulseSpriteDisable: function(sprite, isPlayer) {
        pc.pulse.startPulse(this,
                            this.setSprite.bind(this,sprite, true, isPlayer),
                            this.setSprite.bind(this, sprite, false, isPlayer),
                            50,
                            10,
                            10);
    },
});

// DynamicElement.js
var DynamicElement = pc.createScript('dynamicElement');

DynamicElement.attributes.add('scaleCurve', { type: 'curve', default: { keys: [ 0, 1] } });

pc.extend(DynamicElement.prototype, {

    initialize: function() {
        pc.famobiAPI.setOnOrientationChange(this.calculateDimensions, this);

        this.on('attr:maxWidth', this.calculateDimensions, this);
        
        this.calculateDimensions();
    },

    calculateDimensions: function() {
        var scale = this.scaleCurve.value(window.innerWidth / window.innerHeight / 2);
        
        this.entity.setLocalScale(scale, scale, scale);
    },
});


// DynamicElement.js
var DynamicElement = pc.createScript('dynamicElement');

// initialize code called once per entity
DynamicElement.prototype.initialize = function() {
    
};

// update code called every frame
DynamicElement.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// DynamicElement.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

// utils.js
var Utils = pc.createScript('utils');

pc.extend(Utils.prototype, {
    initialize: function() {
        pc.utils = this;
    },

    toNumberWithCommas: function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    getRandomMinMax: function (min, max) {
      return Math.random() * (max - min) + min;
    }
});

// SoundButton.js
var SoundButton = pc.createScript('soundButton');

SoundButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
SoundButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });


pc.extend(SoundButton.prototype, {
    // initialize code called once per entity
    initialize: function() {
        this.button = this.entity.button;

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);

        this.on('state', function(enabled) {
            this.setButtonState();
        }.bind(this));
    },

    postInitialize: function() {
        this.sfxKey = pc.audioManager.sfxSettingKey;
        this.setButtonState();
        
        if (pc.famobiAPI.hasFeature("external_mute")) {
            this.entity.destroy();
        }
    },

    setButtonState: function() {
        if (!this.sfxKey) return;
        this.useSFX = pc.storageManager.get(this.sfxKey); 
        this.setActive(this.useSFX);
    },

    // update code called every frame
    onRelease: function() {
        this.useSFX = !this.useSFX;

        this.setActive(this.useSFX);
        this.app.fire('Audio:sfx', 'sfx_button.mp3');
    },

    setActive: function(isActive) {
        this.icon.element.sprite = this.iconSprites[isActive ? 1 : 0].resource;


        this.app.fire('GameManager:initGame');
        pc.storageManager.set(this.sfxKey, isActive ? 1 : 0);
        pc.audioManager.setSFXSetting(isActive);
    }
});



// WorldDynamicElement.js
var WorldDynamicElement = pc.createScript('worldDynamicElement');

WorldDynamicElement.attributes.add('portraitEntity', { type: 'entity' });
WorldDynamicElement.attributes.add('landscapeEntity', { type: 'entity' });
WorldDynamicElement.attributes.add('orientationTransition', { type: 'number' });
WorldDynamicElement.attributes.add('scaleCurve', { type: 'curve', curves: [ 'x', 'y', 'z'], default: { keys: [[0, 1], [0, 1], [0, 1]] }});


// initialize code called once per entity
pc.extend(WorldDynamicElement.prototype, {
    initialize: function() {
        pc.famobiAPI.setOnOrientationChange(function() {
            setTimeout(this._calculateTransform.bind(this));
        }, this);

        this.on('enable', this._calculateTransform, this);
    },

    _calculateTransform: function() {

        var orientation = innerWidth / innerHeight > this.orientationTransition ? 'landscape' : 'portrait';

        switch (orientation){
            case 'landscape': 
                this._setLandscapeTransform();
                break;
            case 'portrait':
                this._setPortraitTransform();
                break;
        }
    },

    _setPortraitTransform: function() {
        var newScale = this.scaleCurve.value(innerWidth / innerHeight / 2);
        this.entity.setLocalScale(newScale[0], newScale[1] ,newScale[2]);
        var position = pc.worldToScreenManager.worldToScreen(this.portraitEntity);
        var scale = pc.uiManager.getScale();

        this.entity.setLocalPosition((position.x * window.devicePixelRatio - this.app.graphicsDevice.width / 2) / scale,
                                     (this.app.graphicsDevice.height / 2 - position.y * window.devicePixelRatio) / scale,
                                     0);
    },

    _setLandscapeTransform: function() {
        var newScale = this.scaleCurve.value(innerWidth / innerHeight / 2);
        this.entity.setLocalScale(newScale[0], newScale[1] ,newScale[2]);

        var position = pc.worldToScreenManager.worldToScreen(this.landscapeEntity);
        var scale = pc.uiManager.getScale();
        this.entity.setLocalPosition((position.x * window.devicePixelRatio - this.app.graphicsDevice.width / 2) / scale,
                                     (this.app.graphicsDevice.height / 2 - position.y  * window.devicePixelRatio) / scale,
                                     0);

    },


});


// VibrateButton.js
var VibrateButton = pc.createScript('vibrateButton');

VibrateButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
VibrateButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });

pc.extend(VibrateButton.prototype, {

    initialize: function() {
        this.button = this.entity.button;
    },

    postInitialize: function() {
        var visible = this.setVisibility();

        if (!visible) {
            this.entity.destroy();

            return;
        }

        // mouse events
        this.entity.element.on('click', this.onClick, this);

        this.setButtonState();
    },

    setVisibility: function() {
        this.entity.enabled = pc.vibrationManager.isVibrationSupported();

        return this.entity.enabled;
    },

    setButtonState: function() {
        this.vibrate = pc.storageManager.get('vibrate'); 
        this.setActive(this.vibrate);
    },


    onClick: function() {
        this.app.fire('Audio:sfx', 'sfx_button.mp3');
        this.vibrate = !this.vibrate;   
        this.setActive(this.vibrate, true);
    },

    setActive: function(vibrate, doVibrate) {
        this.icon.element.sprite = this.iconSprites[+vibrate].resource;
        pc.vibrationManager.set(vibrate);

        if (doVibrate && vibrate) {
            this.app.fire('vibrate');
        }
    },
});

// MusicButton.js
var MusicButton = pc.createScript('musicButton');

MusicButton.attributes.add('icon', { type: 'entity' });
/**
 * For feed forward: on icon sprite first
 * For feed back: off icon sprite first
 **/
MusicButton.attributes.add('iconSprites', { type: 'asset', assetType: 'sprite', array: true });


pc.extend(MusicButton.prototype, {
    // initialize code called once per entity
    initialize: function() {
        this.button = this.entity.button;

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);
        
        this.on('state', function(enabled) {
            this.setButtonState();
        }.bind(this));
    },

    postInitialize: function() {
        this.bgmKey = pc.audioManager.bgmSettingKey;
        this.setButtonState();
        
        if (pc.famobiAPI.hasFeature("external_mute")) {
            this.entity.destroy();
        }
    },
    
    setButtonState: function() {
        if (!this.bgmKey) return;
        this.useBgm = pc.storageManager.get(this.bgmKey); 
        this.setActive(this.useBgm);
    },


    // update code called every frame
    onRelease: function() {
        this.app.fire('Audio:sfx', 'sfx_button.mp3');
        this.useBgm = !this.useBgm;

        this.setActive(this.useBgm);
    },

    setActive: function(isActive) {
        this.icon.element.sprite = this.iconSprites[isActive ? 1 : 0].resource;
        

        this.app.fire('GameManager:initGame');
        pc.storageManager.set(this.bgmKey, isActive ? 1 : 0);
        pc.audioManager.setBGMSetting(isActive);
    }
});



// WorldToScreenManager.js
var WorldToscreenManager = pc.createScript('worldToscreenManager');

WorldToscreenManager.attributes.add('camera', { type: 'entity' });

pc.extend(WorldToscreenManager.prototype, {
    
    initialize: function() {
        pc.worldToScreenManager = this;
    },
    
    worldToScreen: function(entity) {
        var position = this.camera.camera.worldToScreen(entity.getPosition());
        return position;
    },
});



// HamburgerMenu.js
var HamburgerMenu = pc.createScript('hamburgerMenu');

HamburgerMenu.attributes.add('menuButton', { type: 'entity' });
HamburgerMenu.attributes.add('content', { type: 'entity', array: true });
HamburgerMenu.attributes.add('unfoldDirectionType', { type: 'number', enum: [
    { 'top':    0 },
    { 'bottom': 1 },
    { 'left':   2 },
    { 'right':  3 }
]});
HamburgerMenu.attributes.add('unfoldDistance', { type: 'number', default: 120});
HamburgerMenu.attributes.add('unfoldDuration', { type: 'number', default: 0.1});
HamburgerMenu.attributes.add('autoCloseTimer', { type: 'number', default: 4 });

pc.extend(HamburgerMenu.prototype, {
    initialize: function() {  
        this.directionTranslate = [new pc.Vec2(0, 1), new pc.Vec2(0, -1), new pc.Vec2(-1, 0), new pc.Vec2(1, 0)];
        this.unfoldDirection = this.directionTranslate[this.unfoldDirectionType];

        this.countdown = false;
        this.counter = 0;
        this.isOpen = false;

        this.menuButton.element.on('mousedown', this._onPress, this);
        this.menuButton.element.on('touchstart', this._onPress, this);
    },
    
    postInitialize: function() {
        setTimeout(() => {
            var hasParent = false;
            
            for (var i = this.content.length - 1; i >= 0; i--) {
                if (this.content[i].parent) {
                    hasParent = true;
                } else {
                    this.content.splice(i, 1);
                }
            }
            
            if (!hasParent) {
                this.entity.destroy();
            }
        });
    },
    
    update: function(dt) {
        if (this.countdown) {
            this.counter -= dt;
            
            if (this.counter <= 0) {
                this.countdown = false;
                this.counter = 0;
                this.toggleMenu(false, false);
            }
        }
    },

    _onPress: function() {
        this.toggleMenu();
        this.app.fire('Audio:sfx', 'sfx_button.mp3');
    },

    /*
     * Open or close hamburger menu
     * par isIntant: use tween to open content or not
     * par isOpen: force to certain position, leave undefined to toggle
     */
    toggleMenu: function(isInstant, isOpen) {
        if (isOpen === undefined) {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = isOpen;
        }
        
        if (this.isOpen && this.autoCloseTimer && this.autoCloseTimer !== 0) {
            this.countdown = true;
            this.counter = this.autoCloseTimer;
        }

        for (var i = 0; i < this.content.length; i += 1) {
            this._setItemPosition(this.content[i], this.isOpen ? this.unfoldDirection.clone().scale(this.unfoldDistance * (i + 1) ): new pc.Vec2(0, 0), isInstant);
        }
    },

    _setItemPosition: function(item, position, isInstant) {
        if (isInstant) {
            item.setLocalPosition(position.x, position.y, 0);
        } else {
            var pos = new pc.Vec3(position.x, position.y, 0);
            item.tween(item.getLocalPosition()).to(pos, this.unfoldDuration, pc.SineOut).start();
        }
    }
});

// tween.js
pc.extend(pc, function () {

    /**
     * @name pc.TweenManager
     * @description Handles updating tweens
     * @param {pc.Application} app  The application
     */
    var TweenManager = function (app) {
        this._app = app;
        this._tweens = [];
        this._add = []; // to be added
    };

    TweenManager.prototype = {
        add: function (tween) {
            this._add.push(tween);
            return tween;
        },

        update: function (dt) {
            var i = 0;
            var n = this._tweens.length;
            while (i < n) {
                if (this._tweens[i].update(dt)) {
                    i++;
                } else {
                    this._tweens.splice(i, 1);
                    n--;
                }
            }

            // add any tweens that were added mid-update
            if (this._add.length) {
                this._tweens = this._tweens.concat(this._add);
                this._add.length = 0;
            }
        }
    };

    /**
     * @name  pc.Tween
     * @param {Object} target The target property that will be tweened
     * @param {pc.TweenManager} manager The tween manager
     * @param {pc.Entity} entity The pc.Entity whose property we are tweening
     */
    var Tween = function (target, manager, entity) {
        pc.events.attach(this);

        this.manager = manager;

        if (entity) {
            this.entity = null; // if present the tween will dirty the transforms after modify the target
        }

        this.time = 0;

        this.complete = false;
        this.playing = false;
        this.stopped = true;
        this.pending = false;

        this.target = target;

        this.duration = 0;
        this._currentDelay = 0;
        this.timeScale = 1;
        this._reverse = false;

        this._delay = 0;
        this._yoyo = false;

        this._count = 0;
        this._numRepeats = 0;
        this._repeatDelay = 0;

        this._from = false; // indicates a "from" tween

        // for rotation tween
        this._slerp = false; // indicates a rotation tween
        this._fromQuat = new pc.Quat();
        this._toQuat = new pc.Quat();
        this._quat = new pc.Quat();

        this.easing = pc.EASE_LINEAR;

        this._sv = {}; // start values
        this._ev = {}; // end values
    };

    Tween.prototype = {
        // properties - js obj of values to update in target
        to: function (properties, duration, easing, delay, repeat, yoyo) {
            if (properties instanceof pc.Vec3) {
                this._properties = {
                    x: properties.x,
                    y: properties.y,
                    z: properties.z
                };
            } else if (properties instanceof pc.Color) {
                this._properties = {
                    r: properties.r,
                    g: properties.g,
                    b: properties.b,
                };
                if (properties.a !== undefined) {
                    this._properties.a = properties.a;
                }
            } else {
                this._properties = properties;
            }

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            return this;
        },

        from: function (properties, duration, easing, delay, repeat, yoyo) {
            if (properties instanceof pc.Vec3) {
                this._properties = {
                    x: properties.x,
                    y: properties.y,
                    z: properties.z
                };
            } else if (properties instanceof pc.Color) {
                this._properties = {
                    r: properties.r,
                    g: properties.g,
                    b: properties.b,
                };
                if (properties.a !== undefined) {
                    this._properties.a = properties.a;
                }
            } else {
                this._properties = properties;
            }

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._from = true;

            return this;
        },

        rotate: function (properties, duration, easing, delay, repeat, yoyo) {
            if (properties instanceof pc.Quat) {
                this._properties = {
                    x: properties.x,
                    y: properties.y,
                    z: properties.z,
                    w: properties.w
                };
            } else if (properties instanceof pc.Vec3) {
                this._properties = {
                    x: properties.x,
                    y: properties.y,
                    z: properties.z
                };
            } else if (properties instanceof pc.Color) {
                this._properties = {
                    r: properties.r,
                    g: properties.g,
                    b: properties.b,
                };
                if (properties.a !== undefined) {
                    this._properties.a = properties.a;
                }
            } else {
                this._properties = properties;
            }

            this.duration = duration;

            if (easing) this.easing = easing;
            if (delay) {
                this.delay(delay);
            }
            if (repeat) {
                this.repeat(repeat);
            }

            if (yoyo) {
                this.yoyo(yoyo);
            }

            this._slerp = true;

            return this;
        },

        start: function () {
            this.playing = true;
            this.complete = false;
            this.stopped = false;
            this._count = 0;
            this.pending = (this._delay > 0);

            if (this._reverse && !this.pending) {
                this.time = this.duration;
            } else {
                this.time = 0;
            }

            if (this._from) {
                for (var prop in this._properties) {
                    this._sv[prop] = this._properties[prop];
                    this._ev[prop] = this.target[prop];
                }

                if (this._slerp) {
                    this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    var _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    var _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    var _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._fromQuat.setFromEulerAngles(_x, _y, _z);
                }
            } else {
                for (var prop in this._properties) {
                    this._sv[prop] = this.target[prop];
                    this._ev[prop] = this._properties[prop];
                }

                if (this._slerp) {
                    this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z);

                    var _x = this._properties.x !== undefined ? this._properties.x : this.target.x;
                    var _y = this._properties.y !== undefined ? this._properties.y : this.target.y;
                    var _z = this._properties.z !== undefined ? this._properties.z : this.target.z;
                    this._toQuat.setFromEulerAngles(_x, _y, _z);
                }
            }

            // set delay
            this._currentDelay = this._delay;

            // add to manager when started
            this.manager.add(this);

            return this;
        },

        pause: function () {
            this.playing = false;
        },

        resume: function () {
            this.playing = true;
        },

        stop: function () {
            this.playing = false;
            this.stopped = true;
        },

        delay: function (delay) {
            this._delay = delay;
            this.pending = true;

            return this;
        },

        repeat: function (num, delay) {
            this._count = 0;
            this._numRepeats = num;
            if (delay) {
                this._repeatDelay = delay;
            } else {
                this._repeatDelay = 0;
            }

            return this;
        },

        loop: function (loop) {
            if (loop) {
                this._count = 0;
                this._numRepeats = Infinity;
            } else {
                this._numRepeats = 0;
            }

            return this;
        },

        yoyo: function (yoyo) {
            this._yoyo = yoyo;
            return this;
        },

        reverse: function () {
            this._reverse = !this._reverse;

            return this;
        },

        chain: function () {
            var n = arguments.length;

            while(n--) {
                if (n > 0) {
                    arguments[n-1]._chained = arguments[n];
                } else {
                    this._chained = arguments[n];
                }
            }

            return this;
        },

        update: function (dt) {
            if (this.stopped) return false;

            if (!this.playing) return true;

            if (!this._reverse || this.pending) {
                this.time += dt*this.timeScale;
            } else {
                this.time -= dt*this.timeScale;
            }

            // delay start if required
            if (this.pending) {
                if (this.time > this._currentDelay) {
                    if (this._reverse) {
                        this.time = this.duration - (this.time - this._currentDelay);
                    } else {
                        this.time = this.time - this._currentDelay;
                    }
                    this.pending = false;
                } else {
                    return true;
                }
            }

            var _extra = 0;
            if ((!this._reverse && this.time > this.duration) || (this._reverse && this.time < 0)){
                this._count++;
                this.complete = true;
                this.playing = false;
                if (this._reverse) {
                    _extra = this.duration - this.time;
                    this.time = 0;
                } else {
                    _extra = this.time - this.duration;
                    this.time = this.duration;
                }
            }

            var elapsed = this.time / this.duration;

            // run easing
            var a = this.easing(elapsed);

            // increment property
            var s,e,d;
            for (var prop in this._properties) {
                s = this._sv[prop];
                e = this._ev[prop];

                this.target[prop] = s + (e - s) * a;
            }

            if (this._slerp) {
                this._quat.slerp(this._fromQuat, this._toQuat, a);
            }

            // if this is a entity property then we should dirty the transform
            if (this.entity) {
                this.entity._dirtifyLocal(true);

                // apply element property changes
                if (this.element && this.entity.element) {
                    this.entity.element[this.element] = this.target;
                }

                if (this._slerp) {
                    this.entity.setLocalRotation(this._quat);
                }
            }

            this.fire("update", dt);

            if (this.complete) {
                var repeat = this._repeat(_extra);
                if (!repeat) {
                    this.fire("complete", _extra);
                    if (this._chained) this._chained.start();
                } else {
                    this.fire("loop");
                }

                return repeat;
            }

            return true;
        },

        _repeat: function (extra) {
            // test for repeat conditions
            if (this._count < this._numRepeats) {
                // do a repeat
                if (this._reverse) {
                    this.time = this.duration - extra;
                } else {
                    this.time = extra; // include overspill time
                }
                this.complete = false;
                this.playing = true;

                this._currentDelay = this._repeatDelay;
                this.pending = true;

                if (this._yoyo) {
                    // swap start/end properties
                    for (var prop in this._properties) {
                        tmp = this._sv[prop];
                        this._sv[prop] = this._ev[prop];
                        this._ev[prop] = tmp;
                    }

                    if (this._slerp) {
                        this._quat.copy(this._fromQuat);
                        this._fromQuat.copy(this._toQuat);
                        this._toQuat.copy(this._quat);
                    }
                }

                return true;
            }
            return false;
        },

    };


    /**
     * Easing methods
     */

    var Linear = function (k) {
        return k;
    };

    var QuadraticIn = function (k) {
        return k * k;
    };

    var QuadraticOut = function (k) {
        return k * (2 - k);
    };

    var QuadraticInOut = function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    };

    var CubicIn = function (k) {
        return k * k * k;
    };

    var CubicOut = function (k) {
        return --k * k * k + 1;
    };

    var CubicInOut = function (k) {
        if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
        return 0.5 * ( ( k -= 2 ) * k * k + 2 );
    };

    var QuarticIn = function (k) {
            return k * k * k * k;
    };

    var QuarticOut = function (k) {
        return 1 - ( --k * k * k * k );
    };

    var QuarticInOut = function (k) {
        if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
        return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
    };

    var QuinticIn = function (k) {
            return k * k * k * k * k;
    };

    var QuinticOut = function (k) {
            return --k * k * k * k * k + 1;
    };

    var QuinticInOut = function (k) {
        if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
        return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
    };

    var SineIn = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 1 - Math.cos( k * Math.PI / 2 );
    };

    var SineOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return Math.sin( k * Math.PI / 2 );
    };

    var SineInOut = function (k) {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
    };

    var ExponentialIn = function (k) {
        return k === 0 ? 0 : Math.pow( 1024, k - 1 );
    };

    var ExponentialOut = function (k) {
        return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
    };

    var ExponentialInOut = function (k) {
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
        return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
    };

    var CircularIn = function (k) {
        return 1 - Math.sqrt( 1 - k * k );
    };

    var CircularOut = function (k) {
        return Math.sqrt( 1 - ( --k * k ) );
    };

    var CircularInOut = function (k) {
        if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
        return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);
    };

    var ElasticIn = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
    };

    var ElasticOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
    };

    var ElasticInOut = function (k) {
        var s, a = 0.1, p = 0.4;
        if ( k === 0 ) return 0;
        if ( k === 1 ) return 1;
        if ( !a || a < 1 ) { a = 1; s = p / 4; }
        else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
        if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
        return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
    };

    var BackIn = function (k) {
            var s = 1.70158;
            return k * k * ( ( s + 1 ) * k - s );
    };

    var BackOut = function (k) {
        var s = 1.70158;
        return --k * k * ( ( s + 1 ) * k + s ) + 1;
    };

    var BackInOut = function (k) {
        var s = 1.70158 * 1.525;
        if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
        return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
    };

    var BounceIn = function (k) {
        return 1 - BounceOut( 1 - k );
    };

    var BounceOut = function (k) {
        if ( k < ( 1 / 2.75 ) ) {
            return 7.5625 * k * k;
        } else if ( k < ( 2 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
        } else if ( k < ( 2.5 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
        } else {
            return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
        }
    };

    var BounceInOut = function (k) {
        if ( k < 0.5 ) return BounceIn( k * 2 ) * 0.5;
        return BounceOut( k * 2 - 1 ) * 0.5 + 0.5;
    };

    return {
        TweenManager: TweenManager,
        Tween: Tween,
        Linear: Linear,
        QuadraticIn: QuadraticIn,
        QuadraticOut: QuadraticOut,
        QuadraticInOut: QuadraticInOut,
        CubicIn: CubicIn,
        CubicOut: CubicOut,
        CubicInOut: CubicInOut,
        QuarticIn: QuarticIn,
        QuarticOut: QuarticOut,
        QuarticInOut: QuarticInOut,
        QuinticIn: QuinticIn,
        QuinticOut: QuinticOut,
        QuinticInOut: QuinticInOut,
        SineIn: SineIn,
        SineOut: SineOut,
        SineInOut: SineInOut,
        ExponentialIn: ExponentialIn,
        ExponentialOut: ExponentialOut,
        ExponentialInOut: ExponentialInOut,
        CircularIn: CircularIn,
        CircularOut: CircularOut,
        CircularInOut: CircularInOut,
        BackIn: BackIn,
        BackOut: BackOut,
        BackInOut: BackInOut,
        BounceIn: BounceIn,
        BounceOut: BounceOut,
        BounceInOut: BounceInOut,
        ElasticIn: ElasticIn,
        ElasticOut: ElasticOut,
        ElasticInOut: ElasticInOut
    };
}());

// Create a default tween manager on the application
(function () {
    var application = pc.Application.getApplication();
    if (application) {
        // create tween manager and update it
        application._tweenManager = new pc.TweenManager(application);
        application.on("update", function (dt) {
            application._tweenManager.update(dt);
        });

        // Add pc.Application#tween method
        pc.Application.prototype.tween = function (target) {
            return new pc.Tween(target, this._tweenManager);
        };

        // Add pc.Entity#tween method
        pc.Entity.prototype.tween = function (target, options) {
            var tween = this._app.tween(target);
            tween.entity = this;

            this.on('destroy', function () {
                tween.stop();
            });

            if (options && options.element) {
                // specifiy a element property to be updated
                tween.element = element;
            }
            return tween;
        };
    }
})();

// pulse.js
var Pulse = pc.createScript('pulse');


pc.extend(Pulse.prototype, {

    initialize: function() {
        pc.pulse = this;
    },
    
    startPulse: function(context, cb1, cb2, interval, amount, intervalRandomness, intervalCB, doneCB) {
        var pulseObject = {};
        pulseObject.currentCall = 0;
        pulseObject.cb = [];
        pulseObject.cb.push(cb1, cb2);
        pulseObject.intervalCB = intervalCB;
        pulseObject.doneCB = doneCB;
        pulseObject.context = context;
        pulseObject.interval = interval;
        pulseObject.amount = amount;
        pulseObject.intervalRandomness = (typeof intervalRandomness === 'number') ? intervalRandomness : 0;
        this.doPulse(pulseObject);
    },
    
    doPulse: function(pO) {
        pO.cb[pO.currentCall % 2].call(pO.context);
        pO.currentCall += 1;
        if (typeof pO.intervalCB === 'function') pO.intervalCB.call(pO.context);
        var nextInterval = pc.utils.getRandomMinMax(pO.interval - pO.intervalRandomness, pO.interval + pO.intervalRandomness);
        if (pO.currentCall < pO.amount) setTimeout(this.doPulse.bind(this, pO), nextInterval);     
        else if (typeof pO.doneCB === 'function') pO.doneCB.call(pO.context);
    },
});
// swap method called for script hot-reloading
// inherit your script state here
// Pulse.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

// LightManager.js
var LightManager = pc.createScript('lightManager');

LightManager.attributes.add('pulseInterval', { type: 'number', default: 50 });
LightManager.attributes.add('pulseAmount', { type: 'number', default: 8 });
LightManager.attributes.add('intervalRandomness', { type: 'number', default: 0 });

pc.extend(LightManager.prototype, {
    initialize: function() {
        pc.lightManager = this;
        
    },
    
    startPulse: function(color, baseColor, mechInstances, context, intervalCB, doneCB) {        
        var iCB = (typeof intervalCB === 'function') ? intervalCB.bind(context) : undefined;
        var dCB = (typeof doneCB === 'function') ? doneCB.bind(context) : undefined;
        pc.pulse.startPulse(this, 
                            this.changeColor.bind(this, color, mechInstances), 
                            this.changeColor.bind(this, baseColor, mechInstances),
                            this.pulseInterval, 
                            this.pulseAmount, 
                            this.intervalRandomness,
                            iCB,
                            dCB);
    },
    
    changeColor: function(color, meshInstances) {
        // Assign the color the ball
        for (var i = 0; i < meshInstances.length; i += 1) {
            meshInstances[i].material.emissive = color;
            meshInstances[i].material.diffuse = color;
            meshInstances[i].material.update();
        }
    },
});

// swap method called for script hot-reloading
// inherit your script state here
// LightManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

// Highscore.js
var Highscore = pc.createScript('highscore');

pc.extend(Highscore.prototype, {
    
    initialize: function() {
        this.app.on('ScoreManager:highscore', this._setText, this);
    }, 
    
    postInitialize: function() {
        this._setText(pc.scoreManager.getHighscore());  
    },
    
    _setText: function(score) {
        this.entity.element.text = String(pc.utils.toNumberWithCommas(score));
    },
});


// FakeFamobiAPI.js
// /*
//  * Source: https://famobi.atlassian.net/wiki/spaces/FAMAPI/pages/4554764/Famobi+API+Docs
//  */

// var FakeFamobiApi = pc.createScript('fakeFamobiApi');

// var templateName = 'BOILERPLATE_FAMOBI';

// FakeFamobiApi.attributes.add('templateName', { type: 'string', default: templateName, title: 'Template Name', description: 'This value is used for saving in the localStorage. Make sure to make it unique, so it doesn\'t override any other storages.' });
// FakeFamobiApi.attributes.add('hasRewardedAd', { type: 'boolean', default: false, title: "Has Rewarded Ad", description: 'You can change this value for testing purposes. This will not affect the real famobi API' });
// FakeFamobiApi.attributes.add('interstitialDuration', { type: 'number', default: 3000, title: 'Interstitial Duration' });
// FakeFamobiApi.attributes.add('rewardedDuration', { type: 'number', default: 3000, title: 'Rewarded Ad Duration' });
// FakeFamobiApi.attributes.add('eventDuration', { type: 'number', default: 50, title: 'Event tracking duration' });
// FakeFamobiApi.attributes.add('currentLanguage', {
//     type: 'string', default: 'en', 'title': 'Default Language', enum: [
//         { 'German': 'de' },
//         { 'English': 'en' },
//         { 'Turkish': 'tr' },
//         { 'Polish': 'pl' },
//         { 'Russian': 'ru' },
//         { 'Dutch': 'nl' },
//         { 'Spanish': 'es' },
//         { 'Portuguese': 'pt' },
//         { 'French': 'fr' },
//     ]
// });
// FakeFamobiApi.attributes.add('trackingLog', { type: 'boolean' });
// FakeFamobiApi.attributes.add('debug', { type: 'boolean', default: false });

// FakeFamobiApi.attributes.add('feature_highscores', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_rewarded', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_auto_quality', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_copyright', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_credits', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_external_achievements', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_external_leaderboard', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_external_mute', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_external_pause', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_external_start', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_forced_mode', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_leaderboard', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_multiplayer', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_multiplayer_local', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_skip_title', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_skip_tutorial', { type: 'number', default: 1 });
// FakeFamobiApi.attributes.add('feature_version', { type: 'number', default: 1 });

// FakeFamobiApi.attributes.add('feature_properties_forced_mode', { type: 'asset', assetType: 'json' });

// FakeFamobiApi.attributes.add('volume', { type: 'number', min: 0, max: 1, default: 0.5 });


// pc.extend(FakeFamobiApi.prototype, {

//     initialize: function () {
//         this.on('attr:hasRewardedAd', function (value) {
//             window.famobi_hasRewardedAd = value;
//         });

//         this.on('attr:interstitialDuration', function (value) {
//             window.famobi_interstitialDuration = value;
//         });

//         this.on('attr:rewardedDuration', function (value) {
//             window.famobi_rewardedDuration = value;
//         });

//         this.on('attr:currentLanguage', function (value) {
//             window.famobi_currentLanguage = value;
//         });

//         this.on('attr:debug', function (value) {
//             window.famobi_debug = value;
//         });

//         if (!window.famobi) {

//             window.famobi.log("No window.famobi found, creating a fake one.");

//             window.famobi_currentLanguage = this.currentLanguage;
//             window.famobi_interstitialDuration = this.interstitialDuration;
//             window.famobi_hasRewardedAd = this.hasRewardedAd;
//             window.famobi_rewardedDuration = this.rewardedDuration;
//             window.famobi_gameID = this.templateName;
//             window.famobi_eventDuration = this.eventDuration;
//             window.famobi_debug = this.debug;

//             window.famobi_script = this;

//             if (window.famobi_gameID === templateName) {
//                 console.warn("Set a different Famobi Game ID in FakeFamobiAPI");
//             }

//             window.famobi = {

//                 gameReady: function () {
//                     window.famobi.log("Game is Ready");
//                 },

//                 hasFeature: function (feature) {
//                     return !!window.famobi_script[`feature_${feature}`];
//                 },

//                 getFeatureProperties: function (feature) {
//                     return window.famobi_script[`feature_properties_${feature}`].resource || {};
//                 },

//                 getVolume: function () {
//                     return window.famobi_script.volume;
//                 },

//                 getBrandingButtonImage: function () {
//                     var url = pc.Application.getApplication().assets.find('placeholder_famobi_branding_button.png').getFileUrl();
//                     var correctUrl = url.replace('/api/', '');

//                     return correctUrl;
//                 },

//                 playerReady: function () {
//                     window.famobi.log("Player Ready");
//                 },

//                 openBrandingLink: function () {
//                     window.open('https://html5games.com/');
//                 },

//                 showAd: function () {
//                     console.warn("showAd is deprecated");
//                     return this.showInterstitialAd();
//                 },

//                 setPreloadProgress: function(percent) {
//                     window.famobi.log(percent);
//                 },

//                 showInterstitialAd: function() {
//                     window.famobi.log("[Show Interstitital Ad] Waiting for " + window.famobi_interstitialDuration / 1000 + " seconds");

//                     if (typeof window.famobi_onPauseRequested === 'function') {
//                         window.famobi_onPauseRequested();
//                     }

//                     return new Promise(function (resolve, reject) {
//                         setTimeout(function () {
//                             if (typeof window.famobi_onResumeRequested === 'function') {
//                                 window.famobi_onResumeRequested();
//                             }
//                             resolve();
//                         }, window.famobi_interstitialDuration);
//                     });
//                 },

//                 hasRewardedAd: function () {
//                     return window.famobi_hasRewardedAd;
//                 },

//                 rewardedAd: function (callback) {
//                     window.famobi.log("[Show Rewarded Ad] Waiting for " + window.famobi_rewardedDuration / 1000 + " seconds");

//                     if (typeof window.famobi_onPauseRequested === 'function') {
//                         window.famobi_onPauseRequested();
//                     }

//                     window.famobi_hasRewardedAd = false;
//                     setTimeout(function () {
//                         window.famobi_hasRewardedAd = true;
//                     }, 0);

//                     setTimeout(function () {
//                         if (typeof window.famobi_onPauseRequested === 'function') {
//                             window.famobi_onResumeRequested();
//                         }
//                         callback({ rewardGranted: true });
//                     }, window.famobi_rewardedDuration);
//                 },

//                 __: function (key) {
//                     window.famobi.log("need a smart solution for this.");

//                     return key;
//                 },

//                 onRequest: function (event, callback) {
//                     switch (event) {
//                         case 'startGame':
//                             new Promise(resolve => {
//                                 setTimeout(callback, 2000);
//                             });
//                         case 'disableAudio':
//                         case 'enableAudio':
//                         case 'disableMusic':
//                         case 'enableMusic':
//                         case 'changeVolume':
//                         case 'pauseGameplay':
//                         case 'resumeGameplay':
//                             window.famobi_script.app.on(`Famobi:${event}`, callback);
//                             break;
//                         default:
//                             console.warn(`Event [${event}] is not recognized`);
//                             break;
//                     }
//                 },

//                 getCurrentLanguage: function () {
//                     return window.famobi_currentLangauge;
//                 },

//                 localStorage: {
//                     setItem: function (key, value) {
//                         window.localStorage.setItem(window.famobi_gameID + ":" + key, value);
//                     },
//                     getItem: function (key) {
//                         return window.localStorage.getItem(window.famobi_gameID + ":" + key);
//                     },
//                     removeItem: function (key) {
//                         window.localStorage.removeItem(key);
//                     },
//                     clear: function () {
//                         for (var key in window.localStorage) {
//                             if (key.startsWith(window.famobi_gameID + ":")) {
//                                 window.localStorage.removeItem(key);
//                             }
//                         }
//                     }
//                 },

//                 getOrientation: function () {
//                     var innerWidth = window.innerWidth;
//                     var innerHeight = window.innerHeight;

//                     if (innerWidth > innerHeight) return 'landscape';
//                     if (innerWidth < innerHeight) return 'portrait';
//                     return "";
//                 },

//                 onOrientationChange: function (callback) {
//                     window.addEventListener('resize', callback);
//                 },

//                 log: function (...param) {
//                     window.famobi.log(...param);
//                 },
//             };
//         } else {
//             window.famobi.log("Famobi api found");
//         }

//         /**
//          */
//         if (!window.famobi_analytics) {

//             window.famobi.log("No window.famobi_analytics found, creating a fake one.");

//             window.famobi_analytics = {
//                 EVENT_LEVELSUCCESS: "EVENT_LEVELSUCCESS", // { levelName: String }
//                 EVENT_LEVELFAIL: "EVENT_LEVELFAIL", // { levelName: String, reason: "timeout" | "dead" | "wrong_answer" | "draw" } | {levelName: String, reason: "quit"}
//                 EVENT_LEVELSTART: "EVENT_LEVELSTART", // {levelName: String}
//                 EVENT_LEVELRESTART: "EVENT_LEVELRESTART", // {levelName: String}
//                 EVENT_TOTALSCORE: "EVENT_TOTALSCORE", // { totalScore: Number }
//                 EVENT_LEVELSCORE: "EVENT_LEVELSCORE", // { levelName: String, levelScore: Number }    
//                 EVENT_VOLUMECHANGE: "EVENT_VOLUMECHANGE", // { bgmVolume: Number, sfxVolume: Number }
//                 EVENT_PAUSE: "EVENT_PAUSE", // null
//                 EVENT_RESUME: "EVENT_RESUME", // nul
//                 EVENT_CUSTOM: "EVENT_CUSTOM", // { * } 
//                 EVENT_LIVESCORE: "EVENT_LIVESCORE", // { liveScore: Number }
//                 /**
//                  * The trackEvent function returns a Promise and is “then-able”, in some cases this will simply come in handy for you, in others we actually ask you to halt game functions until the respective promise resolves.
//                  * As first parameter you can use a string or alternatively its respective famobi_analytics constant, e.g. "EVENT_LEVELSTART" ->famobi_analytics.EVENT_LEVELSTART
//                  * If your game doesn't contain levels, leave the levelName blank (empty string!).
//                  */
//                 trackEvent: function (eventName, object) {
//                     console.warn("event tracked ", eventName, object);
//                     this._validateParameters(eventName, object);

//                     return new Promise(function (resolve, reject) {
//                         setTimeout(function () {
//                             if ((eventName === window.famobi_analytics.EVENT_LEVELSUCCESS || eventName === window.famobi_analytics.EVENT_LEVELFAIL) && window.famobi.hasFeature('forced_mode')) {
//                                 reject("done");
//                             } else {
//                                 resolve();
//                             }

//                         }, window.famobi_eventDuration);
//                     });
//                 },

//                 trackStats: function (key, value) {
//                     if (window.famobi_debug) {
//                         console.warn("Track stats", key, value)
//                     }

//                     // window.famobi.log('[trackStats]', key, value)
//                     return new Promise(function (resolve, reject) {
//                         var res = {};
//                         var values = {};

//                         if (typeof key === 'string') {
//                             values[key] = value;
//                         }

//                         var statsValidator = function () {
//                             for (var k in values) {
//                                 var testKey = (typeof key === 'string' && key.length && key.length <= 42) && key.match(/^[a-z\_0-9]+$/);
//                                 if (!testKey) {
//                                     console.warn("trackStats(): key '" + key + "' contains not only lowercase letters, numbers and underscore ([a-z_0-9]), maximum length: 42 characters");
//                                     return false;
//                                 }
//                             }
//                             return true;
//                         };
//                         var isValid = statsValidator();
//                         if (!isValid) {
//                             reject("trackStats(): invalid params " + JSON.stringify(key, value));
//                             return false;
//                         }

//                         resolve(res);
//                     });
//                 },

//                 _validateParameters: function (eventName, object) {
//                     switch (eventName) {
//                         case this.EVENT_LEVELSUCCESS: {
//                             if (!object || typeof object.levelName !== 'string') {
//                                 window.famobi.log("Object with the key levelName has a wrong value", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_LEVELFAIL: {
//                             if (!object || typeof object.levelName !== 'string') {
//                                 window.famobi.log("Object with the key levelName has a wrong value", object);
//                             }

//                             if (!object || typeof object.reason !== 'string') {
//                                 window.famobi.log("Object with the key reason has a wrong value. It should be either \"timeout\" | \"dead\" | \"wrong_answer\" | \"draw\"", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_LEVELSTART: {
//                             if (!object || typeof object.levelName !== 'string') {
//                                 window.famobi.log("Object with the key levelName has a wrong value", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_LEVELRESTART: {
//                             if (!object || typeof object.levelName !== 'string') {
//                                 window.famobi.log("Object with the key levelName has a wrong value", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_TOTALSCORE: {
//                             if (!object || typeof object.totalScore !== 'number') {
//                                 window.famobi.log("Object with the key totalScore has a wrong value", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_LEVELSCORE: {
//                             if (!object || typeof object.levelName !== 'string') {
//                                 window.famobi.log("Object with the key levelName has a wrong value", object);
//                             }

//                             if (!object || typeof object.levelScore !== 'number') {
//                                 window.famobi.log("Object with the key levelScore has a wrong value", object);
//                             }
//                             break;
//                         }
//                         case this.EVENT_VOLUMECHANGE: {
//                             if (!object || (typeof object.bgmVolume !== 'number' && typeof object.sfxVolume !== 'number')) {
//                                 window.famobi.log("Object has no bgmVolume and sfxVolume value", object);
//                             }

//                             break;
//                         }
//                         case this.EVENT_PAUSE: {
//                             break;
//                         }
//                         case this.EVENT_RESUME: {
//                             break;
//                         }
//                         case this.EVENT_CUSTOM: {
//                             if (Object.keys(object).length === 0) {
//                                 window.famobi.log("Object should have atleast one key value pair", object);
//                             }

//                             break;
//                         }
//                         case this.EVENT_LIVESCORE: {
//                             if (!object || typeof object.liveScore !== 'number') {
//                                 window.famobi.log("Object with the key liveScore has a wrong value", object);
//                             }

//                             break;
//                         }
//                         default: {
//                             console.warn("Event name", eventName, "is not recognized!");
//                             break;
//                         }

//                     }
//                 }
//             };
//         } else {
//             window.famobi.log("Famobi api analytics found");
//         }

//         if (!window.famobi_tracking) {

//             window.famobi_tracking = {
//                 trackingLog: this.trackingLog,
//                 tracking: {
//                     queue: [],
//                     currentPromise: Promise.resolve(),
//                 },
//                 EVENTS: {
//                     LEVEL_START: 'event/level/start',
//                     LEVEL_END: 'event/level/end',
//                     LEVEL_UPDATE: 'event/level/update',
//                     AD: 'event/ad',
//                 },

//                 EVENT_PARAMS: {
//                     'level': 'number', 	// The current level number
//                     'score': 'number', 	// Scores
//                     'stars': 'number', 	// Earned stars
//                     'movesAvailable': 'number', 	// Total number of available moves
//                     'movesLeft': 'number', 	// Moves left when the user finishes the level
//                     'success': 'boolean', 	// User has successfully solved the level
//                     'revives': 'number', 	// Number of ressurrections
//                     'powerups': 'object', 	// Powerups used in the level
//                     'jumpStarters': 'object', 	// Initial starting power ups used
//                     'data': 'object',	// Custom json object
//                 },

//                 init: function (gameTitle, preferredUid, clientVersion, enableLog, trackAds) {
//                     window.famobi.log(gameTitle, preferredUid, clientVersion, enableLog, trackAds);
//                 },

//                 trackEvent: function (event, data) {
//                     if (window.famobi_debug) {
//                         console.warn("Track Event", event, data);
//                     }


//                     if (event in this.EVENTS) {
//                         event = this.EVENTS[event];
//                     }

//                     if (this.trackingLog) {
//                         window.famobi.log('queuing event', event, 'with data', data);
//                     }

//                     if (typeof event !== 'string' || typeof data !== 'object' || data === null) {
//                         window.famobi.log('tracking event cancelled - wrong/missing parameters', 'event', event, 'data', data);
//                         return;
//                     }

//                     var keys = Object.keys(data);

//                     for (var i = 0; i < keys.length; i++) {
//                         var key = keys[i];
//                         if (!(key in this.EVENT_PARAMS) || typeof data[key] !== this.EVENT_PARAMS[key]) {
//                             window.famobi.log('tracking event cancelled - wrong key or type', 'event', event, 'data', data, 'key', key);
//                         }
//                     }

//                     this.tracking.queue.push({ 'event': event, 'data': data });
//                     this.processQueue();
//                 },

//                 sendRequest: function (event, data) {
//                     if (this.trackingLog) {
//                         window.famobi.log('tracking event', event, 'with data', data);
//                     }

//                     return new Promise(function (resolve, reject) {
//                         setTimeout(resolve, 1000);
//                     });
//                 },

//                 processQueue: function () {
//                     this.tracking.queue.forEach(function (queuedEvent) {
//                         this.tracking.currentPromise = this.tracking.currentPromise.then(function () {
//                             return this.sendRequest(queuedEvent.event, queuedEvent.data);
//                         }.bind(this), function () {
//                             return this.sendRequest(queuedEvent.event, queuedEvent.data);
//                         }.bind(this));
//                     }.bind(this));

//                     this.tracking.queue.length = 0;
//                 },
//             };
//         }
//     }
// });

// StatisticsManager.js
var StatisticsManager = pc.createScript('statisticsManager');

pc.extend(StatisticsManager.prototype, {

    initialize: function() {
        StatisticsManager.instance = this;

        this.app.on('StatisticsManager:incrementStatistic', this.incrementStatistic, this);
        this.app.on('StatisticsManager:setStatistic', this.setStatistic, this);
    },

    incrementStatistic: function(key, value) { 
        var oldValue = pc.storageManager.get(key);
        
        value += oldValue;
        
        pc.storageManager.set(key, value);

        window.famobi_analytics.trackStats(key, value);
    },

    setStatistic: function(key, value, higherOnly) {
        var oldValue = pc.storageManager.get(key);
        
        if (oldValue === value) {
            return;
        }
        
        if (higherOnly && oldValue > value) {
            return;
        }
        
        pc.storageManager.set(key, value);

        window.famobi_analytics.trackStats(key, value);
    },
});

// LoseButton.js
var LoseButton = pc.createScript('loseButton');

pc.extend(LoseButton.prototype, {

    initialize: function() {
        this._clicked = false;
        // mouse events
        this.entity.script.switchUibutton.deactivate();
        this.entity.script.switchUibutton.on('click', this._onClick, this);
    },

    _onClick: function() {
        if (this._clicked) {
            return;    
        }

        this._clicked = true;
        var promise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELFAIL, { levelName: 'level_' + pc.gameManager.level, reason: 'dead' });
        var promise2 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TOTALSCORE, { totalScore: pc.scoreManager.score });
        var promiseLevelEnd = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_CUSTOM, { eventName: "LEVELEND", result: "fail", score: pc.scoreManager.score });
        
        return Promise.all([promise1, promise2, promiseLevelEnd]).then(function() {
            this._onEvent();
        }.bind(this));
    },

    _onEvent: function() {
        this._clicked = false;
        this.entity.script.switchUibutton.changeUIEntities();

        // TODO ADD statistics.
    },
});


// eventTrackButton.js
var EventTrackButton = pc.createScript('eventTrackButton');

pc.extend(EventTrackButton.prototype, {

    initialize: function() {
        this._clicked = false;
        // mouse events
        this.entity.script.switchUibutton.deactivate();
        this.entity.script.switchUibutton.on('click', this._onClick, this);
    },

    _onClick: function() {
        if (this._clicked) {
            return;    
        }
        
        this._clicked = true;

        var promise1 = window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, { levelName: "level_" + pc.gameManager.level });
        if (pc.gameManager.level === 1) {
            StatisticsManager.instance.incrementStatistic("statistics_amount_of_level_one_starts", 1);
        }
        
        return Promise.all([promise1]).then(function() {
            this._onEvent();
        }.bind(this));
    },

    _onEvent: function() {
        this._clicked = false;
        this.entity.script.switchUibutton.changeUIEntities();
        pc.famobiAPI.playerReady();
        // TODO ADD statistics.
    },
});


// Copyright.js
var Copyright = pc.createScript('copyright');

// initialize code called once per entity
pc.extend(Copyright.prototype, {
    initialize: function() {
        this.onEnable();

        this.on('enable', this.onEnable, this);
    },
    
    onEnable: function() {
        let hasFeature = pc.famobiAPI.hasFeature("copyright");

        this.entity.enabled = hasFeature;
        
        if (hasFeature) {
            this.entity.element.text = '(C) Famobi';
        }
    }
});


// Camera.js
pc.extend(pc.Camera.prototype, {
    screenToWorld: function (x, y, z, cw, ch, worldCoord = new pc.Vec3()) {

        this._updateViewProjMat();
        _invViewProjMat.copy(this._viewProjMat).invert();

        // Calculate the screen click as a point on the far plane of the
        // normalized device coordinate 'box' (z=1)
        _far.set(x / cw * 2 - 1, (ch - y) / ch * 2 - 1, 1);

        // Transform to world space
        _invViewProjMat.transformPoint(_far, _farW);

        var w = _far.x * _invViewProjMat.data[3] +
            _far.y * _invViewProjMat.data[7] +
            _far.z * _invViewProjMat.data[11] +
            _invViewProjMat.data[15];

        _farW.scale(1 / w);

        var alpha = z / this._farClip;
        worldCoord.lerp(this._node.getPosition(), _farW, alpha);

        return worldCoord;
    },
});

var _deviceCoord = new pc.Vec3();
var _far = new pc.Vec3();
var _farW = new pc.Vec3();
var _invViewProjMat = new pc.Mat4();

// BrandingButton.js
var BrandingButton = pc.createScript('brandingButton');

pc.extend(BrandingButton.prototype, {

    initialize: function() {
        var imageUrl = window.famobi.getBrandingButtonImage();

        var asset = new pc.Asset("famobi_branding_button", "texture", {
            url: imageUrl
        });

        this.app.assets.add(asset);

        pc.lazyLoader.lazyLoad(asset, this.onLoadedAsset, this);

        // mouse events
        this.entity.element.on('mouseup', this.onRelease, this);

        // touch events
        this.entity.element.on('touchend', this.onRelease, this);
    },

    onLoadedAsset: function(asset) {
        this.entity.element.enabled = true;
        
        this.entity.element.texture = asset.resource;
    },

    onRelease: function() {
        window.famobi.openBrandingLink();
    },
    
});

