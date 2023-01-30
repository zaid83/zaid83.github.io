
// initialisation
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '263f8622b6msh13c42c737f25ffep199739jsn50a6197de45d',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};
// Recuperer  les élémeents du DOM par l'id

let track = document.getElementById("trackmp3");
let repeatIcon = document.getElementById("repeat");
let shuffleIcon = document.getElementById("shuffle");
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volumeSong = document.getElementById("progressVolume");
let titleTrack = document.getElementById("titleTrack");
let authorTrack = document.getElementById("authorTrack");
let backtrack = document.getElementById("backtrack");
let fortrack = document.getElementById("fortrack");
let imgTrack = document.getElementById("imgTrack");
/*let artists = ["Tupac Shakur", "Artic Monkeys", "Damso", "Damso"];
let titles = ["Changes", "R U Mine", "J Respect R", "Tueurs"];
let covers = ["https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/1/8/0728706300810/tsp20120923101435/All-eyez-on-me-remasterise.jpg",
    "https://i.ytimg.com/vi/ngzC_8zqInk/hqdefault.jpg", "https://static.fnac-static.com/multimedia/Images/FR/NR/4f/77/9a/10123087/1507-1/tsp20221209165218/Ipseite.jpg", "https://images.genius.com/8acfc71149a71fa2d33061a21b4196cc.958x958x1.png"];
const tracks = ["2Pac - Changes ft. Talent.mp3", "Arctic Monkeys - R U Mine.mp3", "Damso - N. J Respect R.mp3", "Tueurs.mp3"];*/
let tracksId = 0;
let trackIsPlaying = false;
let repeat = false;
let shuffle = false;
let trackPlayed = false;


//Chargement de la track et des informations
loadTrack();

// Volume de base
song.volume = 0.5;





function loadTrack() {

    
    fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
        .then(response => response.json())
        .then(response =>   {
            console.log(response);
    imgTrack.src = response.items[tracksId].track.album.images[0].url;
    authorTrack.textContent = response.items[tracksId].track.artists[0].name;
    titleTrack.textContent = response.items[tracksId].track.name;
    track.src = response.items[tracksId].track.preview_url + ".mp3";
    song.load();})
    .catch(err => console.error(err));
}




// Durée de la musique = barre de progression
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    volumeSong.value = song.volume;
}



// Synchroniser la barre de progression avec la musique ttes les 500 milisecondes 
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
        // Passer à la track suivante à la fin automatiquement
        if (song.duration == song.currentTime && repeat == false) {
            forTrack();
        };
    }, 500)
}

// Changer le temps de la musique lorsque l'on clique sur la barre de progression
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');

}

//// Changer le volume lorsque l'on clique sur la barre 
volumeSong.onchange = function () {
    song.volume = volumeSong.value;

}

// Fonction Play/Pause avec changement d'icones
function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');
        trackIsPlaying = false;
      imgTrack.classList.remove("rotate");

    }
    else {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        trackIsPlaying = true;
        imgTrack.classList.add("rotate");
    }
}

// Fonction pour passer à la musique précédente
function backTrack() {
    fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
    .then(response => response.json())
    .then(response => {


    if (tracksId > 0) {
        tracksId--;
        loadTrack();
        song.play();

    }
    else {
        tracksId = response.items.length - 1;
        loadTrack();
        song.play();

    }
})
.catch(err => console.error(err));

}


// Fonction pour passer à la musique suivante
function forTrack() {

    fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
    .then(response => response.json())
    .then(response => {

    if (tracksId < response.items.length - 1) {
        tracksId++;
        loadTrack();
        song.play();

    }
    else {
        tracksId = 0;
        loadTrack();
        song.play();

    }
    })
    .catch(err => console.error(err));
}

// Fonction pour répéter la musiquess
function repeatTrack() {
    repeat = true;
    repeatIcon.classList.toggle("repeatActive");

    if (repeat && document.getElementsByClassName("repeatActive")) {
        setInterval(() => {
            // Passer à la track suivante à la fin automatiquement
            if (song.duration == song.currentTime && repeat) {
                loadTrack();
                song.play();
                repeat = false;

            }
            else if (repeat == false && document.getElementsByClassName("repeatActive")) {
                repeatIcon.classList.remove("repeatActive");
            }
            ;
        }, 500)
    }
}

// passer a la musique suivante au hasard 
function shuffleTrack() {
    shuffle = true;
    let trackplayed= tracksId;
    fetch('https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
    .then(response => response.json())
    .then(response => {


    let randomId = Math.floor(Math.random() * response.items.length);

    if (shuffle && repeat == false && randomId != trackplayed) {

        tracksId = randomId;
        loadTrack();
        song.play();
        shuffle == false;
    }
    
    else if (shuffle && repeat == false && randomId == trackplayed) {
        if (tracksId < response.items.length - 1){
        tracksId++;
        loadTrack();
        song.play();
        shuffle == false;
        }
    }
})
.catch(err => console.error(err));
}

