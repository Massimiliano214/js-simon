containerDom = document.querySelector(".container");

containerDom.innerHTML

const listaNum = [];


for (i = 0; i < 5; i++) {
    let addNum = randomNum();
    addNum.innerHTML += randomNum();
    console.log(addNum);
    //containerDom.innerHTML +=" " + randomNum() + ";";
    listaNum.push(addNum);
    console.log(listaNum);
}



function randomNum() {
    let numGot = Math.floor(Math.random() * 20) + 1;
    return numGot;
}


setTimeout(function() {
    containerDom.innerHTML = "?";
}, 1000);


setTimeout(function() {
    const primoInput = prompt("Inserisci il primo numero");
    const secondoInput = prompt("Inserisci il secondo numero");
    const terzoInput = prompt("Inserisci il terzo numero");
    const quartoInput = prompt("Inserisci il quarto numero");
    const quintoInput = prompt("Inserisci il quinto numero");

    console.log(primoInput, secondoInput, terzoInput, quartoInput, quintoInput);
}, 1100);