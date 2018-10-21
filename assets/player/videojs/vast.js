   // Remove controls from the player on iPad to stop native controls from stealing
    // our click
    var contentPlayer = document.getElementById('content_video_html5_api');
    if ((navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i)) &&
        contentPlayer.hasAttribute('controls')) {
        contentPlayer.removeAttribute('controls');
    }

    // Initialize the ad container when the video player is clicked, but only the
    // first time it's clicked.
    var initAdDisplayContainer = function () {
        player.ima.initializeAdDisplayContainer();
        wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
    }

    var startEvent = 'click';
    if (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i)) {
        startEvent = 'touchend';
    }

    var wrapperDiv = document.getElementById('content_video');
    wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
