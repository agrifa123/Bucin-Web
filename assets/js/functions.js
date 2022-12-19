const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
const getTime = () => {
    // Get current hour
    const now = new Date().getHours();
    if (now >= 18) return "evening";
    // If right now is equals to or greater than 15 (3pm), turn on darkmode
    if (now >= 15) return "afternoon";
    // If right now is equals to or greater than 11 (11am), turn on darkmode
    if (now >= 11) return "day";
    // If right now is equals to or greater than 5 (5am), turn on daymode
    if (now >= 5) return "morning";
    // If right now is equals to or greater than 0 (12am), turn on darkmode
    if (now >= 0) return "night";
}
const generateTypeIt = (el, speed, cursor, arr) => {
    const typeit = new TypeIt(el, { speed, cursor, lifeLike: true });
    const lengthValue = arr.length;
    let i = 0;
    for (i; i < lengthValue; i++) {
        let key = arr[i];
        let val = parseInt(key.slice(1))
        if (key.startsWith("^")) typeit.pause(val);
        else if (key.startsWith("<")) {
            if (key.length == 1) typeit.delete();
            else typeit.delete(val);
        }
        else typeit.type(key);
    }
    typeit.go();
}

const getMode = (time) => (time == "afternoon" || time == "night" || time == "evening") ? "darkBG" : "lightBG";
function playAudio() {
        var source = "Instrumen romantis.mp3";
        var audio = document.createElement("audio");
        audio.autoplay = true;
        audio.loop = true;
        audio.controls = true;
        audio.load();
        audio.addEventListener("load", function() {   audio.loop();
            audio.play();
            audio.controls();
        }, true);
            
        audio.src = source;

    }

    function audio() {
        $.ajax({url: "http://url/to/audiomusik", 
                success: function(totnotif) {
    
                if (totnotif > 0) {
                    //play sound
                    playAudio();
                }
    
                setTimeout(function(){ cekNotifikasi();}, 60000);//60 detik
            }
        });
    }
