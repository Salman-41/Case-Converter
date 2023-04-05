const inputTextareaEl = document.getElementById('input-textarea');
const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');

const toUpperCase = function() {
    const textareaValue = inputTextareaEl.value;
    inputTextareaEl.value = textareaValue.toUpperCase();
};

const toLowerCase = function() {
    const textareaValue = inputTextareaEl.value;
    inputTextareaEl.value = textareaValue.toLowerCase();
};

const toProperCase = function() {
    let textareaValue = inputTextareaEl.value.toLowerCase().split(' ');
    for (let i = 0; i < textareaValue.length; i++) {
        textareaValue[i] = textareaValue[i].charAt(0).toUpperCase() + textareaValue[i].trim().slice(1);
    }
    textareaValue = textareaValue.join(' ');
    inputTextareaEl.value = textareaValue;
};

const toSentenceCase = function() {
    const textareaValue = inputTextareaEl.value.toLowerCase();
    let newSentence = '';
    let capitalizeNext = true;
    for (let i = 0; i < textareaValue.length; i++) {
        const currentChar = textareaValue.charAt(i);
        if (capitalizeNext && currentChar.match(/[a-z]/i)) {
            newSentence += currentChar.toUpperCase();
            capitalizeNext = false;
        } else {
            newSentence += currentChar;
            if (currentChar === '.') {
                capitalizeNext = true;
            }
        }
    }
    inputTextareaEl.value = newSentence;
};

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = inputTextareaEl.value
    let filename = "text.txt"
    download(filename ,text);
}, false);


upperCaseBtn.addEventListener('click', toUpperCase);
lowerCaseBtn.addEventListener('click', toLowerCase);
properCaseBtn.addEventListener('click', toProperCase);
sentenceCaseBtn.addEventListener('click', toSentenceCase);
