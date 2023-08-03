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

// React learn
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}