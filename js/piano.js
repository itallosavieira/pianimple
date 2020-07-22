const keys = document.querySelectorAll(".key");

const getDataKey = function(event) {
    let dataKey;

    if(event.type === "keydown") {
        dataKey = event.key;
    } else {
        dataKey = event.target.dataset.key;
    };

    return dataKey;
};

const playNote = function(event) {
    const key = document.querySelector(`.key[data-key="${getDataKey(event)}"]`);

    if (!key) {
        console.log("Not Exists.");
    }
    
    const audio = document.querySelector(`audio[data-key="${getDataKey(event)}"]`);
    audio.currentTime = 0;
    audio.play()
};



for (key of keys) {
    key.addEventListener("mousedown", playNote);
}

window.addEventListener("keydown", playNote);

