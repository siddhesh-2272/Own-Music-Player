console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressBar = document.getElementById('progressbar');
let gif = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

masterplay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

        gif.style.opacity = 0;
    }
})
let songs = [
    { songName: "mann meri jaan", filePath: "song/1.mp3", coverPath: "cover/1.jfif" },
    { songName: "rang lageya...", filePath: "song/2.mp3", coverPath: "cover/2.jfif" },
    { songName: "apna balane piya...", filePath: "song/3.mp3", coverPath: "cover/3.jfif" },
    { songName: "Brown-munde..", filePath: "song/4.mp3", coverPath: "cover/4.jfif" },
    { songName: "Normal guy-2", filePath: "song/5.mp3", coverPath: "cover/5.jfif" },
    { songName: "unstoppable", filePath: "song/6.mp3", coverPath: "cover/6.jfif" }
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar

    progressBar.value = parseInt((audioElement.currentTime / audioElement.duration) * 100);
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = parseFloat(progressBar.value * audioElement.duration / 100);
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {


        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })


}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // console.log(index);
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else {
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 5;
    }
    else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})


