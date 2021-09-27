//language of browser
const lang = navigator.language;
console.log(lang);
//user of the web
var usero = navigator.userAgent;
console.log(usero);
var myCacheStorage = self.caches;
console.log(myCacheStorage);
//pixel bit depth of the screen
let depth = window.screen.pixelDepth;
console.log(depth);
let screenW = window.screen.width;
let screenH = window.screen.height;
console.log(screenW,screenH);

//geolocation
var x = document.getElementById("demo");

function getlocation (){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
  }
  else {
    x.innerHTML = "Geolocation is not supported by this browser"
  }
}

function showPosition(position) {
  x.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longuitud: " + position.coords.longitude;
}

getlocation();