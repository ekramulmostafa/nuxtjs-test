/**
 * videojs-suggestion
 * @version 0.0.0
 * @copyright 2018 Samia Ruponti <samia@bongobd.com>
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
        typeof define === 'function' && define.amd ? define(['video.js'], factory) :
            (global.videojsSuggestion = factory(global.videojs));
}(this, (function (videojs) {
    'use strict';

    videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

    var version = "0.0.0";

// Default options for the plugin.
    var defaults = {
        header: 'You may also like…',
        suggestions: [{
            title: '',
            url: '',
            image: '',
            alt: '',
            target: '_self'
        }]
    };

    var constructSuggestionContent = function constructSuggestionContent(player, options) {
        var sugs = options.suggestions;
        var _frag = document.createDocumentFragment();
        var _aside = document.createElement('aside');
        var _div = document.createElement('div');
        var _header = document.createElement('h5');
        // can only hold eight suggestions at a time
        var i = sugs.length - 1 > 6 ? 6 : sugs.length - 1;
        var _a;
        var _img;

        _aside.className = 'vjs-suggested-video-endcap';
        _div.className = 'vjs-suggested-video-endcap-container';

        _header.innerHTML = options.header;
        _header.className = 'vjs-suggested-video-endcap-header';

        _aside.appendChild(_header);

        // construct the individual suggested content pieces
        for (; i >= 0; --i) {
            _a = document.createElement('a');
            _a.className = 'vjs-suggested-video-endcap-link';
            _a.href = sugs[i].url;
            _a.target = sugs[i].target || '_self';
            _a.title = sugs[i].title;

            _img = document.createElement('img');
            _img.className = 'vjs-suggested-video-endcap-img';
            _img.src = sugs[i].image;
            _img.alt = sugs[i].alt || sugs[i].title;
            _a.appendChild(_img);

            _a.innerHTML += sugs[i].title;

            _div.appendChild(_a);
        }

        _aside.appendChild(_div);
        var _sve = _aside;
        _frag.appendChild(_aside);
        player.el().appendChild(_frag);

        player.on('ended', function () {
            _sve.classList.add('is-active');
        })
        player.on('play', function () {
            _sve.classList.remove('is-active');
        });
    };
// Cross-compatibility for Video.js 5 and 6.
    var registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

    /**
     * Function to invoke when the player is ready.
     *
     * This is a great place for your plugin to initialize itself. When this
     * function is called, the player will have its DOM and child components
     * in place.
     *
     * @function onPlayerReady
     * @param    {Player} player
     *           A Video.js player object.
     *
     * @param    {Object} [options={}]
     *           A plain object containing options for the plugin.
     */
    var onPlayerReady = function onPlayerReady(player, options) {
        player.addClass('vjs-suggestion');
        player.ready(function () {
            constructSuggestionContent(player, options)
        });
    };

    /**
     * A video.js plugin.
     *
     * In the plugin function, the value of `this` is a video.js `Player`
     * instance. You cannot rely on the player being in a "ready" state here,
     * depending on how the plugin is invoked. This may or may not be important
     * to you; if not, remove the wait for "ready"!
     *
     * @function suggestion
     * @param    {Object} [options={}]
     *           An object of options left to the plugin author to define.
     */
    var suggestion = function suggestion(options) {
        var _this = this;

        this.ready(function () {
            onPlayerReady(_this, videojs.mergeOptions(defaults, options));
        });
    };

// Register the plugin with video.js.
    registerPlugin('suggestion', suggestion);

// Include the version number.
    suggestion.VERSION = version;

    return suggestion;

})));
