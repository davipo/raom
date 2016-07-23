
function onAudioInput(evt) {
    // 'evt.data' is an integer array containing raw audio data 
    console.log("Audio data received: " + evt.data.length + " samples");
    var samples = JSON.stringify(evt.data.slice(0,200))
    $('#testaudio').html(samples)
}

// Listen to audioinput events 
window.addEventListener("audioinput", onAudioInput, false);

captureCfg = {};
audioinput.start(captureCfg);
$.delay(500);
audioinput.stop();


 