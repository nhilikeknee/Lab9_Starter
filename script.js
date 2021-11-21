TrackJS.track('Testing TrackJS!');

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}


function consoleLog() {
    console.log("Console Log Demo");
}

function consoleError() {
    console.error("Console Error Demo");
}

function consoleCount() {
    console.count("Count Button");
}

function consoleWarn() {
    console.warn("Console Warn Button");
}

function consoleAssert() {
    const number = 2;
    const errorMsg = "The number does not equal 3";
    console.assert(number === 3, { number: number, errorMsg: errorMsg });
}

function consoleClear() {
    console.clear();
}

function consoleDir() {
    console.dir(document.getElementById("c-dir"));
}

function consoleDirXML() {
    console.dirxml(document.getElementById("c-dirxml"));
}

function consoleGroupStart() {
    console.group();
}

function consoleGroupEnd() {
    console.groupEnd();
}

function consoleTable() {
    var courses = {};

    courses[0] = new Course('Software Engineering', 110);
    courses[1] = new Course('Programming Languages: Principles and Paradigms', 130);
    courses[2] = new Course('Advanced Software Engineering', 112);

    console.table(courses);
}

function Course(name, num) {
    this.name = name;
    this.num = num;
}

function startTimer() {
    console.time('Timer Button');
}

function endTimer() {
    console.timeEnd('Timer Button')
}


function deep() {
    deeper();
}

function deeper() {
    deepest();
}

function deepest() {
    console.trace()
}

function triggerGlobalError() {
    console.log(boom);
}



window.onload = function () {

    // removes the Console Log Button
    function removeButton() {
        var elem = document.getElementById('c-log');
        elem.parentNode.removeChild(elem);
        return;
    }

    function addButton() {
        const button = document.createElement('button');
        button.id = 'c-log';
        button.innerHTML = 'Console Log';
        button.setAttribute("onclick", "consoleLog()");
        document.getElementsByTagName('section')[0].prepend(button);

    }


    // expected output: Uncaught TypeError: Cannot read properties of null
    try {
        removeButton();
        if (document.getElementsByTagName('section')[0].firstElementChild.innerText !== "Console Log") {
            throw new ValidationError("The Console Log button is missing, we can't click it!");
        }
        document.getElementById('c-log').click();
    } catch (error) {
        console.error(error);
        addButton(); //adds Console Log button back after removing it, should work normally afterwards
        console.log('Inside catch statement, just added the Console Log button back :)');
    }

    finally {
        console.log("We tried to click a button that may have been removed...but we've fixed it now WOOHOO!");
    }
};
