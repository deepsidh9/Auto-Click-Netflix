function getElementbyXpath(xpath) {

    return document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null).iterateNext();
}

function clickOnSkip() {
    var skipButtonClassName = 'nf-icon-button nf-flat-button nf-flat-button-uppercase no-icon'
    var skipButton = document.getElementsByClassName(skipButtonClassName)

    console.log("skipButton", skipButton)
    console.log("length of array as", skipButton.length)
    if (skipButton.length > 0) {
        console.log("Element Visible")
        console.log("Clicking")
        skipButton[0].click();
    }
    else {
        setTimeout(function () { clickOnSkip() }, 1000); // wait for 1 second to check the skip intro button
    }
}


chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {

        console.log("Content.js logging : Message Received", request.message)

        if (request.message === "click_on_skip") {
            clickOnSkip();
        }
    }
);

// var skipButton = getElementsByClassName('//*[@id="appMountPoint"]/div/div/div[1]/div/div/div[2]/div/div[3]/div[1]/a/span')
// var skipButtonXpath = "//a[contains(text(),'Skip Intro')]";
// var skipButtonXpath = "//a[text()='Skip Intro']";

// var skipButton = getElementbyXpath(skipButtonXpath)

// var skipButton = document.getElementsByClassName('nf-flat-button-text')