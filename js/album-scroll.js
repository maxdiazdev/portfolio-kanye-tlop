// GLOBALS
var windowHeight;
var albumHeight;
var lockedPos = {
  forBox: "",
  forBrowser: ""
};

// FUNCTIONS
function getDimensions() {
  windowHeight = $(window).height();
  console.log("Window: " + windowHeight);
  albumHeight = $('#albumBox').height();
  console.log(albumHeight);
  $('body').height((windowHeight - albumHeight) + albumHeight * 3 + 50);
  console.log("Body: " + $('body').height());
}
function getScrollPos() {
  var scrollPos = $(document).scrollTop();
  console.log("scrollPos: " + scrollPos);
  if (scrollPos >= albumHeight + 25) {
    if ((window.mozInnerScreenX == null)) {
      $('#creditsBox').css({
        position: "absolute",
        top: albumHeight * 2 + 50 + "px"
      })
      .addClass('locked');
    } else {
    $('#creditsBox').css({
        position: "absolute",
        top: albumHeight + 25 + "px"
      })
      .addClass('locked');
    }
    if (lockedPos.forBox == "") {
      lockedPos.forBox = parseInt($('#creditsBox').css("top"));
      lockedPos.forBrowser = scrollPos;
    }
    console.log($('#creditsBox'));
    console.log("LockedPos: " + lockedPos.forBox);
  } else if (scrollPos < lockedPos.forBrowser && $('#creditsBox').css("position") == "absolute") {
    $('#creditsBox').css({
      position: "fixed",
      top: "0px"
    })
    .removeClass('locked');
  }
}

// DOCUMENT READY
$(document).ready(getDimensions);

// WINDOW RESIZE
$(window).resize(getDimensions);
