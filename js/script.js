//L'utente seleziona tramite l'apposito menù il livello di difficolta
//Creare una funzione che genera una griglia, le dimensioni variano in baso al livello di difficoltà
    //Con difficoltà Easy => tra 1 e 100
    //Con difficoltà Hard => tra 1 e 81
    //Con difficoltà Crazy => tra 1 e 49
//Creare una funzione che permette di colorare i quadratini al click dell'utente

//Creo la funzione per selezionare la difficoltà
function setLevel(event){

    const levelDifficulty = document.getElementById('level-difficulty').value;
    let numSquare;
    switch (levelDifficulty) {
        case "1":
        default:
          numSquare = 100;
          break;
        case "2":
          numSquare = 81;
          break;
        case "3":
          numSquare = 49;
          break;
      }
      let squareperSide = Math.sqrt(numSquare);
      generateGrid(numSquare, squareperSide);
}

//Creo la funzione per generare la griglia
function generateGrid(numSquare, squareperSide){

    const gridContainer = document.querySelector('.mContainer');
    gridContainer.innerHTML = "";
    let row = document.createElement('div');
    row.className = 'grid';
    for (let i = 1; i <= numSquare; i++){

        const square = generateCell(i, squareperSide);
        row.append(square);

    }

    gridContainer.append(row);

}

//Creo la funzione per generare le box
function generateCell(num, squareperSide){

    let square = document.createElement("div");
    square.className = "box";
    square.style.width = `calc(100% / ${squareperSide})`;
    square.style.height = `calc(100% / ${squareperSide})`;
    square.innerHTML = `<span>${num}</span>`;
    square.addEventListener("click", colorCell);
    return square;

}

//Creo la funzione per colorare la cella
function colorCell(){

    this.classList.add("pink");
    this.removeEventListener("click", colorCell);

}


document.getElementById("start").addEventListener("click", setLevel);

