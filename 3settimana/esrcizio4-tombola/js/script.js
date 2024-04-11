const tabelloneTombola = function () {
    const tabella = document.querySelector(".tabellone");
    for (let i = 0; i < 90; i++) {
        tabella.innerHTML += `<div class='tab'>${i + 1}</div>`
    }
}
tabelloneTombola();

const fillArray = function () {
    const array = [];
    for (let i = 0; i < 90; i++) {
    array.push(i + 1)
    }
    return array
} 

const getRandomNum = function (e) {
  const randomindex = Math.floor(Math.random() * e.length);
  const randomnum = e.splice(randomindex, 1)[0];
  return randomnum;
}


const generateRandNumber = function (e) {
    const randnum = getRandomNum(e);
    const divnum = document.getElementById("#random");
    divnum.addEventListener("click", function() {
        divnum.innerText = "E' uscito il numero: " + randnum;
    })
    

}
generateRandNumber()
  

