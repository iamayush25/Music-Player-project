document.getElementById("btn").addEventListener("click", () => {
    let songName = document.querySelector("#text").value
    console.log(songName);
    let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${songName}`;
    let Get = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a30104380cmsh9540154b3e422e6p1bbe00jsn7f0be4b7b67a',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }
    // console.log(songName);
    fetch(url, Get)
        .then((value) => {
            let resp = value.json()
            return resp
        }).then((info) => {
            if (info.data.length !== 0) {
                for (let obj of info.data) {
                    console.log("comming");
                    document.getElementById("singer").innerHTML = obj.artist.name
                    document.getElementById("musictitle").innerHTML = obj.title
                    document.getElementById("audiosource").src = obj.preview
                    // document.getElementById("image").src = obj.album.cover_medium
                    break
                }
            } else {
                console.log("not comming");
                let wrong = "music is not found";
                document.getElementById("musictitle").innerHTML = wrong
            }
            console.log(info);
        }).catch(() => {
            let Error = "Somrthing is wrong please check...";
            document.getElementById("musictitle").innerHTML = Error
        });
});

let myAudio = document.getElementById("myaudio")
function playpause() {
    if (myAudio.paused) {
        myAudio.load();
        myAudio.play();
    } else {
        myAudio.pause()
    }
};