


//typewriter for text 
//clear message typewriter
var txt = ["click here to begin"];
var text = ""
var i = 0;
var j = 0;

// typeWriter()
setTimeout(setInterval, 1000, write, 150)
// var typewriter = setInterval(write, 150) 

function write() {
    if (i < txt[j].length) {
        text+=txt[j][i]
        i++
        document.getElementById("typewriter").innerHTML = text
    } else {
        if (j == txt.length - 1) {
            clearInterval(typewriter)
        } else {
            document.getElementById("typewriter").innerHTML = "";
            text = "";
            i = 0;
            j++
        }
    }
}