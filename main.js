Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}
var classifier = ml5.imageClassifier("/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis
    var speakData1 = "The first prediction is - " + prediction1;
    var speakData2 = "The second prediction is - " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
synth.speak(utterThis);
}