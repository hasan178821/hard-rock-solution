// const searchSongs = () => {
//     const searchText = document.getElementById("searchInput").value;
//     const url = `https://api.lyrics.ovh/suggest/${searchText}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displaySongs(data.data))
// }
const searchSongs = async() => {
    const searchText = document.getElementById("searchInput").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displaySongs(data.data);
}

const displaySongs = song => {
    const songSingle = document.getElementById('result');
    songSingle.innerHTML = '';

    song.forEach(music => {
        console.log(music)
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${music.title}</h3>
                <p class="author lead">Album by <span>${music.artist.name}</span></p>
                <audio controls>
                    <source src="${music.preview}" type="audio/mpeg">
                <audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="displayLyrics('${music.artist.name}', '${music.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `;
        songSingle.appendChild(songDiv);

    })

}


// const displayLyrics = (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => displaySingleLyrics(data.lyrics))
// }

// const displaySingleLyrics = singleLyrics => {
//     const lyricsShow = document.getElementById('showLyrics');
//     lyricsShow.innerText = singleLyrics;
// }
const displayLyrics = async(artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const response = await fetch(url);
    const data = await response.json();
    displaySingleLyrics(data.lyrics);
}

const displaySingleLyrics = singleLyrics => {
    const lyricsShow = document.getElementById('showLyrics');
    lyricsShow.innerText = singleLyrics;
}