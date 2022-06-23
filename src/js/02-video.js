
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
    // console.log(typeof data.seconds);
};

const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
// console.log(typeof currentTime);

if(currentTime) {
    player.setCurrentTime(currentTime);
};
