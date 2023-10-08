var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

setTimeout(function()
{
imgId = "selfie1";
takeSelfie();
speakData = "Tirando sua selfie em 10 segundos"; 
var utterThis = new SpeechSynthesisUtterance(speakData); 
synth.speak(utterThis);

}, 1000);


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

setTimeout(function() {
    takeSelfie(imgId2);
    console.log(`Selfie capturada`);
}, 10000);

setTimeout(function()  {
   takeSelfie(imgId1);
   console.log(`Selfie capturada`);
}, 5000);

function takeSelfie()
{
if(imgId=="selfie1") document.getElementById("result1").innerHTML  = '<img id="selfie1" src="'+data_uri+'"/>';
console.log(imgId);
Webcam.snap (function(data_uri) {
if(imgId=="selfie1"){
document.getElementById("result1").innerHTML = '<img id="selfiel" src="'+data_uri+'" />';
}
if(imgId=="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'" />';
}
if(imgId=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie2" src="'+data_uri+'" />';
}
});
}


function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


}