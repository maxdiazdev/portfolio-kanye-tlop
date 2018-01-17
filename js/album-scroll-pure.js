var body = document.getElementsByTagName('body')[0];
var creditsBox = document.getElementById('creditsBox');
var albumHeight;
var lockedPos = {
  forBox: "",
  forBrowser: ""
};
var salesPitch = document.getElementById('salesPitch');

/* Document.ready equivalent */
document.addEventListener("DOMContentLoaded", function(event) {
  var windowHeight = window.innerHeight;
  albumHeight = document.getElementById('albumBox').offsetHeight;
  //- console.log(windowHeight);
  body.style.height = (windowHeight - albumHeight) + albumHeight * 3 + 50 + "px";
  //- console.log(body.style.height);
});

/* Window.resize listener */
window.addEventListener('resize', function(event){
  var windowHeight = window.innerHeight;
  albumHeight = document.getElementById('albumBox').offsetHeight;
  //- console.log(windowHeight);
  body.style.height = (windowHeight - albumHeight) + albumHeight * 3 + 50 + "px";
  //- console.log(body.style.height);
});

function getScrollPos() {
  var scrollPos = body.scrollTop;
  //- console.log(scrollPos);
  // Not sure why I have to half the 50px gap here for album cover not to jump up...
  if (scrollPos >= albumHeight + 25) {
    creditsBox.style.position = "absolute";
    creditsBox.style.top = albumHeight * 2 + 50 + "px";
    creditsBox.style.left = "-2px"; // Compensate for unknown jump to right when switching positioning
    creditsBox.classList.add('locked');
    // Ensure lockedPos array is assigned values once by checking if it's empty
    if (lockedPos.forBox == "") {
      lockedPos.forBox = parseInt(creditsBox.style.top);
      lockedPos.forBrowser = scrollPos;
      //- console.log("For Box: " + lockedPos.forBox);
      //- console.log("For Browser: " + lockedPos.forBrowser);
    }
  } else if (scrollPos < lockedPos.forBrowser && creditsBox.classList.contains('locked')) {
    //- console.log('Alert');
    //- creditsBox.style.top = (parseInt(lockedPos.forBox) - (parseInt(lockedPos.forBrowser) - scrollPos)) - 50 + "px";
    //- creditsBox.style.top = lockedPos.forBox - Math.abs((scrollPos - lockedPos.forBrowser)) + "px";
    //- console.log("Math: " + Math.abs((scrollPos - lockedPos.forBrowser)));
    creditsBox.style.position = "fixed";
    creditsBox.style.top = 0 + "px";
  }
}
