containerDom = document.querySelector(".container");



const listaNum = [];

const listaNumPlayer = [];

let listaVerita = [];

for (i = 0; i < 5; i++) {
    let addNum = randomNum();
    addNum.innerHTML += randomNum();
    console.log(addNum);
    //containerDom.innerHTML +=" " + randomNum() + ";";
    listaNum.push(addNum);
    console.log(listaNum);
}

containerDom.innerHTML = listaNum;






function randomNum() {
    let numGot = Math.floor(Math.random() * 20) + 1;
    return numGot;
}


setTimeout(function() {
    containerDom.innerHTML = "?";
}, 1000);


setTimeout(function() {
    const primoInput = parseInt(prompt("Inserisci il primo numero"));
    listaNumPlayer.push(primoInput);
    const secondoInput = parseInt(prompt("Inserisci il secondo numero"));
    listaNumPlayer.push(secondoInput);
    const terzoInput = parseInt(prompt("Inserisci il terzo numero"));
    listaNumPlayer.push(terzoInput);
    const quartoInput = parseInt(prompt("Inserisci il quarto numero"));
    listaNumPlayer.push(quartoInput);
    const quintoInput = parseInt(prompt("Inserisci il quinto numero"));
    listaNumPlayer.push(quintoInput);

   // console.log(primoInput, secondoInput, terzoInput, quartoInput, quintoInput);

    console.log(listaNumPlayer);

    containerDom.innerHTML = "";
    let scoreCheck = 0;

    for (i = 0; i < 5; i++) {
        if (listaNum[i] == listaNumPlayer[i]){
            listaVerita.push("il " + (i + 1) + "  numero inserito è uguale");
            containerDom.innerHTML += ("il " + (i + 1) + "  numero inserito è uguale. ");
            scoreCheck++;

            
        } else {
            listaVerita.push("il " + (i + 1) + "  numero inserito è diverso");
            containerDom.innerHTML += ("il " + (i + 1) + "  numero inserito è diverso. ");

        }
    }
    containerDom.innerHTML += ("lo score complessivo totalizzato è di " + scoreCheck + " punti.");

    console.log(listaVerita);
    return listaVerita;
}, 1100);


/*
containerDom.innerHTML = "Hai inserito il primo numero correttamente";
console.log("primonumero" + listaNum[i]);
console.log("primonumero" + listaNumPlayer[i]);
*/