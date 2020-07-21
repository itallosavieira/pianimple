const keys = document.querySelectorAll(".key");

const playNote = function(event) {
    let audioDataKey = getDataKey(event);

    const key = document.querySelector(`.key[data-key="${audioDataKey}"]`);

    const isKeyExists = key;

    if (!isKeyExists) {
        console.log("Not Exists.");
    }
    
    const audio = document.querySelector(`audio[data-key="${audioDataKey}"]`);
    audio.currentTime = 0;
    audio.play();
};

const getDataKey = function(event) {
    let dataKey;

    if(event.type === "keydown") {
        dataKey = event.key;
    } else {
        dataKey = event.target.dataset.key;
    };

    return dataKey;
};

keys.forEach( function(key){
    key.addEventListener("click", playNote);
});

window.addEventListener("keydown", playNote);