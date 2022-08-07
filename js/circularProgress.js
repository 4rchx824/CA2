const personality = document.querySelector(".typesCard");


const options = {
  root: null,
  threshold: 0.5, 
  rootMargin: "0px",
}

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgress();
    } 
  })
}, options)

observer.observe(personality)




function animateProgress() {
  var circles = document.getElementsByClassName("progressCircle")
  var percentage = [62, 64, 53, 51, 57];
  var colors = ["#4298b4", "#e4ae3a", "#33a474", "#88619a", "#f25e62"];
  var counts = [0, 0, 0, 0, 0]
  
  for (var i = 0; i < circles.length; i++) {
    var degree = Math.floor(percentage[i]/100 * 360)
    circleAnimation = setInterval(changeCircle, 10, degree, colors[i], circles[i], i)
    //10 = 1s
    //Max % = 64 (conv to deg, floor(64/100 * 360) ), 230/10 = 2.3 seconds longest animation
    // circleAnimation = changeCircle(degrees[i], colors[i], circles[i]);
  }
  
  function changeCircle(degree, color, element, i) {
    if (counts[i] == degree) {
      return 0
    } else {
      element.style.background = `radial-gradient(white 50%, transparent 51%),
      conic-gradient(transparent ${counts[i]}deg 0deg, gainsboro ${counts[i]}deg 360deg),
      conic-gradient(${color} 0deg, ${color} 90deg, ${color} 180deg, ${color})`
      counts[i]++
    }
  }
}