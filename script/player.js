let player;
const playerContainer = $('.player');
const playerButton = $('.player__start')

let eventsInit = () => {
    $('.player__start').click(e => {
        e.preventDefault();

        const btn = $(e.currentTarget);

        if (playerContainer.hasClass('active')) {
            playerContainer.removeClass('active');
            playerContainer.addClass('paused');
            playerButton.addClass('paused');
            playerButton.removeClass('play')
            player.pauseVideo()
        } else {
            playerContainer.addClass('active');
            playerContainer.removeClass('paused');
            playerButton.addClass('play');
            playerButton.removeClass('paused');
            player.playVideo()
        }

    });

    $('.player__playback').click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $('.player__playback-button').css({
            left: `${newButtonPositionPercent}%`
        });


        player.seekTo(newPlaybackPositionSec);
    })
}

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes}:${seconds}`;
}

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    $('.player__duration-estimate').text(formatTime(durationSec));

    if (typeof interval === 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $('.player__playback-button').css({
            left: `${completedSec}%`
        });
        $('.player__duration-complited').text(formatTime(completedSec))
    }, 1000)
};

const onPlayerStateChange = event => {
    /*
    player.getPlayerState():Number
    Возвращает состояние проигрывателя. Возможные значения:
    -1 – воспроизведение видео не началось
    0 – воспроизведение видео завершено
    1 – воспроизведение
    2 – пауза
    3 – буферизация
    5 – видео находится в очереди */
    switch (event.data) {
        case 1:
            playerContainer.addClass('active')
            break;

        case 2:
            playerContainer.removeClass('active')
            break;

    }
}


function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '392',
        width: '662',
        videoId: '1_f3RcyYdfA',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        },
        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
        }
    });
}

eventsInit();
