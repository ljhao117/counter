var countNum = 0;

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    console.log('countNum = ' + keyName);
    countNum++;
    document.getElementById("count").innerHTML = countNum;
}, false);

function resetButton() {
    countNum = 0;
    document.getElementById("count").innerHTML = countNum;
}

function plusButton() {
    countNum++
    document.getElementById("count").innerHTML = countNum;
}