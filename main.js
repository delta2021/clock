const timeImgs = document.getElementsByClassName('time');
const dateDOM = document.getElementById('date');

dateDOM.innerText = new Date().toLocaleDateString();
updateTime();

setInterval(updateTime, 1000);

function updateTime(){
    const time = new Date();
    const hours = time.getHours(), minutes = time.getMinutes(), 
    seconds = time.getSeconds();
    const timeStr = '' + formatted(hours) + formatted(minutes) + formatted(seconds);
    for (let i = 0; i < 6; i++){
        timeImgs[i].src = `images/${timeStr[i]}-Number-PNG.png`;
    }
}


function formatted(num){
    if (num < 10){
        return "0" + num;
    } 
    return num;
}