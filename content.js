function getElementbyXpath(xpath) {

    return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
}

function clickOnSkipAndNext() {
    var skipButtonClassName = 'nf-icon-button nf-flat-button nf-flat-button-uppercase no-icon'
    var skipButton = document.getElementsByClassName(skipButtonClassName)

    var nextEpisodeClassName = '.draining'
    var nextEpisodeButton = document.querySelector(nextEpisodeClassName)

    console.log("skipButton", skipButton)
    console.log("length of array as", skipButton.length)


    if (skipButton.length > 0) {
        console.log("Skip Button Element Visible")
        console.log("Clicking")
        skipButton[0].click();
        setTimeout(function () { clickOnSkipAndNext() }, 1000); // wait for 1 second to check the skip intro button
    }
    else if (nextEpisodeButton) {
        console.log("Next Episode Button Element Visible")
        console.log("Pressing Next")
        const pressEnterEvent = new KeyboardEvent("keydown", {
            bubbles: true, cancelable: true, keyCode: 13
        });
        nextEpisodeButton.dispatchEvent(pressEnterEvent);
    }
    else {
        setTimeout(function () { clickOnSkipAndNext() }, 1000); // wait for 1 second to check the skip intro button
    }
}


chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {

        console.log("Content.js logging : Message Received", request.message)

        if (request.message === "click_on_skip") {
            clickOnSkipAndNext();
        }
    }
);