 const audio = document.getElementById('audio-player');
const playIcon = document.getElementById('playIcon');
const title = document.getElementById('song-title');
const progressBar = document.getElementById('progress');

// Songs ki list (Aap yahan apne MP3 files ka naam daal sakte ho)
const songs = [
    {
        name: "Last Christmas",
        // Ye link online free music ka hai, aap ise apne computer file se replace kar sakte ho: "music/song1.mp3"
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
    },
    {
        name: "Jingle Bells",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        name: "Silent Night",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let songIndex = 0;

// Gaana load karne ka function
function loadSong(index) {
    songIndex = index;
    title.innerText = songs[songIndex].name;
    audio.src = songs[songIndex].src;
    audio.play();
    isPlaying = true;
    updateIcon();
}

// Play / Pause Logic
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        // Agar koi gaana select nahi hai, toh pehla chalao
        if (!audio.src) {
            loadSong(0);
        } else {
            audio.play();
        }
    }
    isPlaying = !isPlaying;
    updateIcon();
}

function updateIcon() {
    if (isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

// Next aur Previous Button Logic
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songIndex);
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
}

// Progress Bar update hona
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = ${progressPercent}%;
});
}