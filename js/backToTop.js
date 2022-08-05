setInterval(yOffset, 100);


function yOffset() {
  var offsetValue = window.scrollY;

  if (offsetValue > 100) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}
