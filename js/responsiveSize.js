var width = window.innerWidth
var newWidth = window.innerWidth

changeSize()
setInterval(getScreenSize, 100)
setInterval(getScreenSize1, 101)

function getScreenSize() {
    width = window.innerWidth
    height = window.innerHeight

    if (width != newWidth) {
        changeSize()
    }
}

function getScreenSize1() {
    newWidth = window.innerWidth
    newHeight = window.innerHeight

    if (newWidth != width) {
        changeSize()
    }
}


function changeSize() {
    var headers = document.getElementsByClassName("courseName")
    var headerText = [];
    var descText = [];
    var desc = document.getElementsByClassName("description")
    var descHeights = [];
    var headerHeights = [];

    var listSize = [];
    


    for (var i = 0; i < headers.length; i++) {
        headerText.push(headers[i].getElementsByClassName("title"))
        descText.push(desc[i].getElementsByTagName("p"))
    }
    
    for (var j = 0; j < headers.length; j++) {
        headerHeights.push(headerText[j][0].clientHeight)
        descHeights.push(descText[j][0].clientHeight)
    }

    listSize.push(document.getElementsByClassName("list"))
    descHeights[0] += listSize[0].item(0).clientHeight
    descHeights[3] += listSize[0].item(1).clientHeight



    var maxHeightDesc = maxInArr(descHeights)
    var maxHeightHeader = maxInArr(headerHeights);
    // var maxHeightDesc = maxInArr(descHeights);

    for (var k = 0; k < headers.length; k++) {
        headers[k].style.height = (maxHeightHeader + 25) + "px";
        desc[k].style.height = (maxHeightDesc + 50) + "px";
    }

}

function maxInArr(arr) {
    maxValue = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }

    return maxValue
}
