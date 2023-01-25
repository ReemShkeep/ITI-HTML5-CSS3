var playlist = ['https://ia601004.us.archive.org/3/items/cd_night-visions_imagine-dragons/disc1/01.%20Imagine%20Dragons%20-%20Radioactive_sample.mp3',
                'https://ia801004.us.archive.org/3/items/cd_night-visions_imagine-dragons/disc1/02.%20Imagine%20Dragons%20-%20Tiptoe_sample.mp3',
                'https://ia801004.us.archive.org/3/items/cd_night-visions_imagine-dragons/disc1/03.%20Imagine%20Dragons%20-%20It%27s%20Time_sample.mp3'];

var playlistname = ["Radioactive", "Tiptoe", "It's Time"]
var x = document.getElementById("myAudio");
var ul = document.getElementById('MyList')
var buttons = document.querySelectorAll("#MyList li button")
var songlist = document.querySelectorAll("#MyList li")

for(let i =0; i < playlist.length; i++){
    createElements(playlist[i],playlistname[i])
}
// createElements function
function createElements(sSrc,sName){
    let li = document.createElement("li");
    ul.appendChild(li);
    let a = document.createElement("a");
    li.appendChild(a);
    a.href = sSrc;
    a.innerHTML += sName;
    let removeButton = document.createElement("button")
    li.appendChild(removeButton)
    removeButton.innerHTML += "x" 
}

// playAudio function
function playAudio() { 
    x.play(); 
} 

// Remove function
function Remove() {
    buttons = document.querySelectorAll("#MyList li button")
    songlist = document.querySelectorAll("#MyList li")
    for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        delete playlist[i]
        songlist[i].remove()
        })
    }
}

Remove()
// preventDef function
function preventDef(){
    let anchors = document.querySelectorAll("a")
    for(let i=0; i < playlist.length; i++){
        anchors[i].addEventListener("click",(e)=>{
        e.preventDefault()    
        x.src = playlist[i]
        playAudio()
        })
    }    
}

preventDef()

// pauseAudio function
function pauseAudio() { 
  x.pause(); 
} 

var inputAudio = document.querySelector(".custom-file-input")
// Adding songs function
inputAudio.addEventListener("change",()=>{
    fileName = inputAudio.files[0].name
    let name = fileName.split(".")
    staticPath = "../Songs/" + fileName
    playlist.push(staticPath)
    playlistname.push(name[0])
    createElements(staticPath, name[0])
    preventDef()
    Remove()
})

// Playback function
var index = 0;
function Playback() {
    x.src = playlist[0];
    playAudio()
    x.addEventListener("ended", function () {
        index++;
        if (index == playlist.length) {
            index = 0;
        }
        else{
            x.src = playlist[index];
            playAudio();
        }
    });
}

// RandomPlay function
var lastSong = null;
var selection = null;
function RandomPlay() { 
    x.src = playlist[0];
    playAudio()
    x.addEventListener("ended", function() {
        while(selection == lastSong){
            selection = Math.floor(Math.random() * playlist.length);
        }
        lastSong = selection;
        x.src = playlist[selection];
        playAudio();
    });
} 