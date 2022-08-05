"use strict";

setInterval(currentTime, 1000)

function currentTime() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var newDate = new Date()
    var currentTime;
    //Thu, 04 Aug 2022 03:40:35 GMT
    if (newDate.getSeconds() < 10 || newDate.getMinutes() < 10 || newDate.getHours() < 10) {
        var currentMins = "", currentSecs = "", currentHour = "";
        if (newDate.getSeconds() < 10) {
            currentSecs = `0${newDate.getSeconds()}`
        } else {
            currentSecs = `${newDate.getSeconds()}`
        }

        if (newDate.getMinutes() < 10) {
            currentMins = `0${newDate.getMinutes()}`
        } else {
            currentMins = `${newDate.getMinutes()}`
        }

        if (newDate.getHours() < 10) {
            currentHour = `0${newDate.getHours()}`
        } else {
            currentHour = `${newDate.getHours()}`
        }
        currentTime = `${days[newDate.getDay() - 1]}, ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()} ${currentHour}:${currentMins}:${currentSecs}`
    } else {
        currentTime = `${days[newDate.getDay() - 1]}, ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
    }
    
    document.getElementById("date").innerHTML = currentTime
}

setInterval(currentLesson, 1000)
function currentLesson() {
    var current = "";
    var currentDate = new Date("5 Aug 2022 12:00:00")
    var currentHour = currentDate.getHours()
    var currentDay = currentDate.getDay();
    //get current day of the week, 1 = monday, 5 = friday
    var currentMins = currentDate.getMinutes();

    if ((currentHour >= 18 && currentMins > 0 )|| (currentHour < 8 && currentMins > 0) || currentDay > 5 || currentDay == 0) {
        setCard("HOME")
    } else {
        switch (currentDay) {
            case 1:
                if ((currentMins >= 0 && currentHour > 15 || currentMins >= 30 && currentHour >= 15) && (currentMins >= 0 && currentHour < 18)) {
                    setCard("FED")
                } else {
                    setCard("NONE")
                }
                break;
            
            case 2:
                if ((currentMins >= 0 && currentHour >= 13) && (currentMins <= 0 && currentHour <= 15)) {
                    setCard("ECG")
                } else if ((currentMins >= 0 && currentHour >= 16) && (currentMins <= 0 && currentHour <= 18)) {
                    setCard("SFL")
                } else {
                    setCard("NONE")
                }
                break;

            case 3:
                if ((currentMins >= 0 && currentHour > 9 || currentMins >= 30 && currentHour >= 9) && (currentMins >= 0 && currentHour < 11)) {
                    setCard("MATH")
                } else if ((currentMins >= 0 && currentHour >= 12) && (currentMins <= 0 && currentHour <= 15)) {
                    setCard("FOP")
                } else {
                    setCard("NONE")
                }
                break;
            
            case 4:
                if ((currentMins >= 0 && currentHour >= 8) && (currentMins < 30 && currentHour <= 10 || currentMins >= 0 && currentHour < 10)) {
                    setCard("FED")
                } else if ((currentMins >= 0 && currentHour >= 13) && (currentMins <= 0 && currentHour <= 15)) {
                    setCard("FOC")
                } else if ((currentMins >= 0 && currentHour >= 15) && (currentMins <= 0 && currentHour <= 18)) {
                    setCard("FOP")
                } else {
                    setCard("NONE")
                }
                break;

            case 5:
                console.log(currentHour, currentMins)
                if ((currentMins >= 0 && currentHour >= 8) && (currentMins >= 0 && currentHour < 10)) {
                    setCard("FOC")
                } else if ((currentMins >= 0 && currentHour >= 10) && (currentMins >= 0 && currentHour < 12)) {
                    setCard("CAT")
                } else if ((currentMins >= 0 && currentHour >= 13) && (currentMins < 30 && currentHour <= 14 || currentMins >= 0 && currentHour < 14)) {
                    setCard("MATH")
                } else if ((currentMins >= 0 && currentHour > 14 || currentMins >= 30 && currentHour >= 14) && (currentMins < 30 && currentHour <= 16 || currentMins >= 0 && currentHour < 16)) {
                    setCard("CPR")
                } else {
                    setCard("NONE")
                }
                break;
            
        }
    }
}

function setCard(subj) {
    // CAT - Critical Analytical and Thinking
    // CPR - Communicating for Project Effectiveness (Proposal)
    // ECG - Education and Career Guidance
    // FED - Front-End Web Development
    // FOC - Fundamentals of Computing
    // FOP - Fundamentals of Programming
    // MATH - Mathematics
    // SFL - Sports for Life
    switch (subj) {
        case "CAT":
            document.getElementById("currentClass").innerHTML = 
            `
            LC0860<br />CAT<br />Tutorial<br />DIT/FT/1A<br />01<br />T2257<br />Melissa
            Ong
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(255, 200, 255, 0.5)"
            break;

        case "CPR":
            document.getElementById("currentClass").innerHTML = 
            `
            LC0855<br />CPR<br />Tutorial<br />DIT/FT/1A<br />01<br />T2251<br />Tan
            Jui Liang Kenneth
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(255, 240, 200, 0.75)"
            break;

        case "ECG":
            document.getElementById("currentClass").innerHTML = 
            `
            SP108B<br />ECG 1<br />Tutorial<br />DIT/FT/1A<br />01<br />T2256<br />Kenneth
            Tan
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(225, 200, 255, 0.5)"
            break;

        case "FED":
            document.getElementById("currentClass").innerHTML = 
            `
            ST0501<br />FED<br />Practical<br />DIT/FT/1A<br />01<br />T2257<br />Wong
            Shaohao Vincent
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(255, 200, 200, 0.5)"
            break;

        case "FOC":
            document.getElementById("currentClass").innerHTML = 
            `
            ST2413<br />FOC<br />Practical<br />DIT/FT/1A<br />01<br />T2257<br />Casey
            How
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(145, 255, 255, 0.5)"
            break;

        case "FOP":
            document.getElementById("currentClass").innerHTML = 
            `
            ST0502<br />FOP<br />Practical<br />DIT/FT/1A<br />01<br />T2257<br />Kenneth
            Tan
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(200, 255, 200, 0.5)"
            break;

        case "MATH":
            document.getElementById("currentClass").innerHTML = 
            `
            MS0105<br />MATH<br />Tutorial<br />DIT/FT/1A<br />01<br />T2257<br />Toh
            Eng Kiat
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(255, 255, 200, 0.5)"
            break;

        case "SFL":
            document.getElementById("currentClass").innerHTML = 
            `
            PE125L<br />YR1 BADMINTON<br />Miscellaneous<br />SL/PE125L/FT<br />02<br />SPArenaLv3<br />Quek
            Kin Chuang
            `
            document.getElementById("cardBG").style.backgroundColor = "rgba(135, 135, 255, 0.25)"
            break;
        
        case "NONE":
            document.getElementById("currentClass").innerHTML = 
            `
            <h2 class="text-white m-0">NO LESSON</h2>
            `

            //background: linear-gradient(90deg, rgba(82,196,255,1) 0%, rgb(255, 133, 133) 0%, rgba(35,76,255,1) 100%);
            //background-size: 400% 400%;
            // animation-duration: 5s;
            // animation-iteration-count: infinite;
            // animation-timing-function: linear;
            document.getElementById("cardbody").style.background = "linear-gradient(90deg, rgba(82,196,255,1) 0%, rgb(230, 120, 255) 0%, rgba(35,76,255,1) 100%)"
            document.getElementById("cardbody").style.backgroundSize = "400% 400%"
            document.getElementById("cardbody").style.borderRadius = "5px"
            document.getElementById("cardbody").style.animationName = "backgroundPersonality3"
            document.getElementById("cardbody").style.animationDuration = "5s"
            document.getElementById("cardbody").style.animationIterationCount = "infinite"
            document.getElementById("cardbody").style.animationTimingFunction == "linear"
            break;
    
        case "HOME":
            document.getElementById("currentClass").innerHTML = 
            `
            <h2 class="text-white m-0">HOME</h2>
            `
            
            document.getElementById("cardbody").style.background = "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
            document.getElementById("cardbody").style.backgroundSize = "400% 400%"
            document.getElementById("cardbody").style.borderRadius = "5px"
            document.getElementById("cardbody").style.animationName = "backgroundPersonality3"
            document.getElementById("cardbody").style.animationDuration = "5s"
            document.getElementById("cardbody").style.animationIterationCount = "infinite"
            document.getElementById("cardbody").style.animationTimingFunction == "linear"
            break;
    }
}