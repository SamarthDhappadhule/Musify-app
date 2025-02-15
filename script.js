
const container = document.querySelector(".container");
const musicbar = document.querySelector(".music-bar");
const bar = document.querySelector("#bar");
const menubar = document.querySelector(".menubar");
const sidebar2 = document.querySelector(".sidebar2");

function show() {
    menubar.style.display = "flex";
}


function remove() {
    menubar.style.display = "none";
}

const soundbar = document.querySelector(".sound-bar");
const artist = document.querySelector(".artist");
const heading1 = document.querySelector("#heading1");
const heading2 = document.querySelector("#heading2");
const heading3 = document.querySelector("#heading3");
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2 ");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");
const row5 = document.querySelector(".row5");
const card1 = document.querySelector("#card1");
const main = document.querySelector(".main");




function artist_data() {
    heading1.style.display = "none";
    heading1.style.margin = "0px";

    heading2.style.display = "none";
    heading2.style.margin = "0px";

    heading3.style.display = "none";
    heading3.style.margin = "0px";


    row1.style.display = "none";
    row2.style.display = "none";
    row3.style.display = "none";
    row4.style.display = "none";
    row5.style.display = "none";

    main.style.height = "100vh";
}

function back_data() {
    heading1.style.display = "";
    heading1.style.margin = "20px 0 0 20px";

    heading2.style.display = "flex";
    heading2.style.margin = "10px 0 0 20px";

    heading3.style.display = "flex";
    heading3.style.margin = "20px 0 0 20px";

    row1.style.display = "flex";
    row2.style.display = "flex";
    row3.style.display = "flex";
    row4.style.display = "flex";
    row5.style.display = "flex";

    musicbar.style.display = "flex";
    main.style.height = "100vh";

}



card1.addEventListener("click", () => {

    artist.style.display = "contents";

    artist2.style.display = "none";
    artist3.style.display = "none";
    artist4.style.display = "none";
    artist5.style.display = "none";
    artist6.style.display = "none";
    musicbar.style.display = "none";
    artist_data();
})



const back = document.querySelector("#back");


back.addEventListener('click', () => {
    back_data();
    artist.style.display = "none";


})





const artist2 = document.querySelector('.artist2');
const card2 = document.querySelector("#card2");

card2.addEventListener("click", () => {

    artist2.style.display = "contents";

    artist.style.display = "none";
    artist3.style.display = "none";
    artist4.style.display = "none";
    artist5.style.display = "none";
    artist6.style.display = "none";
    musicbar.style.display = "none";
    artist_data();
});

const back2 = document.querySelector("#back2");
back2.addEventListener('click', () => {
    sidebar2.style.display = "";
    artist2.style.display = "none";

    back_data();

});


const artist3 = document.querySelector('.artist3');
const card3 = document.querySelector("#card3");

card3.addEventListener("click", () => {
    artist3.style.display = "contents";

    artist.style.display = "none";
    artist2.style.display = "none";
    artist4.style.display = "none";
    artist5.style.display = "none";
    artist6.style.display = "none";
    musicbar.style.display = "none";
    artist_data();
});

const back3 = document.querySelector("#back3");
back3.addEventListener('click', () => {
    sidebar2.style.display = "";
    artist3.style.display = "none";

    back_data();
});

const artist4 = document.querySelector('.artist4');
const card4 = document.querySelector("#card4");

card4.addEventListener("click", () => {
    artist4.style.display = "contents";

    artist.style.display = "none";
    artist2.style.display = "none";
    artist3.style.display = "none";
    artist5.style.display = "none";
    artist6.style.display = "none";
    musicbar.style.display = "none";
    artist_data();
});

const back4 = document.querySelector("#back4");
back4.addEventListener('click', () => {
    sidebar2.style.display = "";
    artist4.style.display = "none";

    back_data();
});

const artist5 = document.querySelector('.artist5');
const card5 = document.querySelector("#card5");

card5.addEventListener("click", () => {
    artist5.style.display = "contents";

    artist.style.display = "none";
    artist2.style.display = "none";
    artist3.style.display = "none";
    artist4.style.display = "none";
    artist6.style.display = "none";
    musicbar.style.display = "none";
    artist_data();

});

const back5 = document.querySelector("#back5");
back5.addEventListener('click', () => {
    sidebar2.style.display = "";
    artist5.style.display = "none";

    back_data();

});

const artist6 = document.querySelector('.artist6');
const card6 = document.querySelector("#card6");

card6.addEventListener("click", () => {
    artist6.style.display = "contents";

    artist.style.display = "none";
    artist2.style.display = "none";
    artist3.style.display = "none";
    artist4.style.display = "none";
    artist5.style.display = "none";
    musicbar.style.display = "none";
    artist_data();

});

const back6 = document.querySelector("#back6");
back6.addEventListener('click', () => {
    sidebar2.style.display = "";
    artist6.style.display = "none";

    back_data();
});

const next = document.getElementById("next");


next.addEventListener("click", () => {
    artist.style.display = "none";
    artist2.style.display = "contents";
});



const next2 = document.getElementById("next2");


next2.addEventListener("click", () => {
    artist2.style.display = "none";
    artist3.style.display = "contents";
});



const next3 = document.getElementById("next3");


next3.addEventListener("click", () => {
    artist3.style.display = "none";
    artist4.style.display = "contents";
});



const next4 = document.getElementById("next4");

next4.addEventListener("click", () => {
    artist4.style.display = "none";
    artist5.style.display = "contents";
});



const next5 = document.getElementById("next5");

next5.addEventListener("click", () => {
    artist5.style.display = "none";
    artist6.style.display = "contents";
});


const next6 = document.getElementById("next6");
const privious6 = document.getElementById("privious6");

next6.addEventListener("click", () => {
    artist6.style.display = "none";
    artist.style.display = "contents";
});





let audio = new Audio();
let songs = [
    { src: "musics/tum hi ho.mp3", title: "Tum Hi Ho" },
    { src: "musics/a dil hai mushkil.mp3", title: "A Dil Hai Mushkil" },
    { src: "musics/humari adhuri kahani.mp3", title: "Adhuri Kahani" },
    { src: "musics/jo tum mere ho.mp3", title: "Jo Tum Mere Ho" },
    { src: "musics/sidhat.mp3", title: "Shiddat" },
    { src: "musics/jab tak.mp3", title: "Jab Tak" },
    { src: "musics/pehle bhi main.mp3", title: "Pehle Bhi Main" },
    { src: "musics/agar tum sath ho.mp3", title: "Agar Tun Sath Ho" },
    { src: "musics/hawayein.mp3", title: "Hawayein" },
    { src: "musics/khulke jeene ka.mp3", title: "Khul ke Jeene" },
    { src: "musics/heeriye.mp3", title: "Heeriye" },
    { src: "musics/badtamiz dil.mp3", title: "Badtaeez Dil" },
    { src: "musics/makhna.mp3", title: "Makhna" },
    { src: "musics/matargasti.mp3", title: "Matargashti" },
    { src: "musics/kashmir main tu kanyakumari.mp3", title: "Kanyakumari" },
    { src: "musics/chammak chalo.mp3", title: "Chammak Chalo" },
    { src: "musics/illahi.mp3", title: "Illahi" },
    { src: "musics/sooraj dooba hain.mp3", title: "Sooraj Dooba Hain" },
    { src: "musics/maay bhavani.mp3", title: "Maay Bhavani" },
    { src: "musics/ved tuja.mp3", title: "Ved Tujha" },
    { src: "musics/dhaga dhaga.mp3", title: "Dhaga dhaga" },
    { src: "musics/gulabi sadi.mp3", title: "Gulabi Sadi" },
    { src: "musics/tula japnar ahe.mp3", title: "Tula Japnar Ahe" },
    { src: "musics/chandra.mp3", title: "Chandra" },
    { src: "musics/kakan.mp3", title: "Kakan" },
    { src: "musics/sairat zhal ji.mp3", title: "Sairat" },
    { src: "musics/sukha kalale.mp3", title: "Sukha Kalale" },
    { src: "musics/bhijun gela vara.mp3", title: "Bhijun Gela Vara" },
    { src: "musics/swapna chalun ale.mp3", title: "Swapna Chalun Ale" },
    { src: "musics/mala ved lagle.mp3", title: "Mala Ved Lagle" },

];
let currentIndex = 0;
let currentSong = null;
function playSong(songSrc, songTitle) {
    currentSong = songSrc;
    audio.src = songSrc;
    audio.play();

    document.getElementById("song-title").innerText = songTitle;
    document.getElementById("play-pause").innerText = "⏸";


}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        document.getElementById("play-pause").innerHTML = "<h4>⏸</h4>";
    } else {
        audio.pause();
        document.getElementById("play-pause").innerHTML = "▶";
    }
}

function prevSong() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = songs.length - 1;
    }
    playSong(songs[currentIndex].src, songs[currentIndex].title);
}

function nextSong() {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    playSong(songs[currentIndex].src, songs[currentIndex].title);
}

audio.addEventListener("timeupdate", () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById("progress-bar").value = progress;
});

document.getElementById("progress-bar").addEventListener("input", (e) => {
    let seekTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});
