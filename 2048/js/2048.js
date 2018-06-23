

var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d');          // demarre le canvas pour une representation 2d
var sizeInput = document.getElementById('size');
var changeSize = document.getElementById('change-size'); // changer la taille de grille
var scoreLabel = document.getElementById('score'); // id score
var score = 0;
var size = 4;         // taille de grille
var width = canvas.width / size - 6;
var cells = [];
var fontSize;
var loss = false;


startGame();
 

changeSize.onclick = function () {
   score = 0;
  if (sizeInput.value >= 2 && sizeInput.value <= 20) {    // si la valeur de l'input est entre 2 et 20
    size = sizeInput.value;
    width = canvas.width / size - 6;
    herewego();
   
    console.log(sizeInput.value);    // valeur envoyer dans la console
    canvasClean();
     
    startGame();
  }
}

function cell(row, coll) {                     // cellule (ligne, colonne) taille cellule
  this.value = 0;
  this.x = coll * width + 5 * (coll + 1);    
  this.y = row * width + 5 * (row + 1);
}

function createCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    cells[i] = [];
    for(j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
}


function drawCell(cell) {                                    //dessine la cellule
    
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, width, width);
  switch (cell.value){
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 2 : ctx.fillStyle = '#FAD008'; break;
    case 4 : ctx.fillStyle = '#EC1C24'; break;
    case 8 : ctx.fillStyle = '#1298D6'; break;
    case 16 : ctx.fillStyle = '#33AF4A'; break;
    case 32 : ctx.fillStyle = '#40ff00'; break;
    case 64 : ctx.fillStyle = '#00bfff'; break;
    case 128 : ctx.fillStyle = '#FF7F50'; break;
    case 256 : ctx.fillStyle = '#0040ff'; break;
    case 512 : ctx.fillStyle = '#ff0080'; break;
    case 1024 : ctx.fillStyle = '#D2691E'; break;
    case 2048 : ctx.fillStyle = '#FF7F50'; break;
    case 4096 : ctx.fillStyle = '#ffbf00'; break;
    default : ctx.fillStyle = '#ff0080';
  }
  ctx.fill();                                               //ecriture du texte dans la cellule
  if (cell.value) {
    fontSize = width / 2;
    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2 + width/7);
 

  }

    }



function canvasClean() {
  ctx.clearRect(0, 0, 500, 500);
}

document.onkeydown = function (event) {                                  // foncion a la pression de la touche
  if (!loss) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      moveUp(); 
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      moveRight();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      moveDown(); 
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      moveLeft(); 
    }
    scoreLabel.innerHTML = 'Score : ' + score;         
      //affichage du score
      if (score > 200) {
          $('.imgdroite').attr('src','assets/img/3.png');
      }
            if (score > 400) {
          $('.imgdroite').attr('src','assets/img/4.png');
      }
                  if ( score > 800) {
          $('.imgdroite').attr('src','assets/img/5.png');
      }
                  if ( score > 1000) {
          $('.imgdroite').attr('src','assets/img/6.png');
      }
                  if (score > 1200) {
          $('.imgdroite').attr('src','assets/img/7.png');
      }
                        if (score > 1500) {
          $('.imgdroite').attr('src','assets/img/8.png');
      }


      
  }

}

function startGame() {                                //commencement du eju
  createCells();
  drawAllCells();
  pasteNewCell();
  pasteNewCell();


}

function finishGame() {

  canvas.style.opacity = '0.5';
  loss = true;
  $('#score2').html('SCORE : ' + score + ' Pts');
  $('#game-over').css('display','block');
    memario();
  
  
  
}

function drawAllCells() {
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      drawCell(cells[i][j]);
    }
  }
}

function pasteNewCell() {                        //ajoute nouvelle  cellule
  var countFree = 0;
  var i, j;
  for(i = 0; i < size; i++) {
    for(j = 0; j < size; j++) {
      if(!cells[i][j].value) {
        countFree++;
      }
        
    }
  }         
  if(!countFree) {                              // si le compteur tombe a zero , fin du jeu
    finishGame();
    return;
  }
  while(true) {                                                       
    var row = Math.floor(Math.random() * size);
    var coll = Math.floor(Math.random() * size);
    if(!cells[row][coll].value) {
      cells[row][coll].value = 2 * Math.ceil(Math.random() * 2);
      drawAllCells();
      return;
    }
  }
}

function moveRight () {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = size - 2; j >= 0; j--) {
      if(cells[i][j].value) {
        coll = j;
        while (coll + 1 < size) {
          if (!cells[i][coll + 1].value) {
            cells[i][coll + 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll++;
          } else if (cells[i][coll].value == cells[i][coll + 1].value) {
            cells[i][coll + 1].value *= 2;
            score +=  cells[i][coll + 1].value;
            cells[i][coll].value = 0;
               ambiance1();
            
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveLeft() {
  var i, j;
  var coll;
  for(i = 0; i < size; i++) {
    for(j = 1; j < size; j++) {
      if(cells[i][j].value) {
        coll = j;
        while (coll - 1 >= 0) {
          if (!cells[i][coll - 1].value) {
            cells[i][coll - 1].value = cells[i][coll].value;
            cells[i][coll].value = 0;
            coll--;
          } else if (cells[i][coll].value == cells[i][coll - 1].value) {
            cells[i][coll - 1].value *= 2;
            score +=   cells[i][coll - 1].value;
            cells[i][coll].value = 0;
              ambiance1();
            break;
             
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveUp() {
  var i, j, row;
  for(j = 0; j < size; j++) {
    for(i = 1; i < size; i++) {
      if(cells[i][j].value) {
        row = i;
        while (row > 0) {
          if(!cells[row - 1][j].value) {
            cells[row - 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row--;
          } else if (cells[row][j].value == cells[row - 1][j].value) {
            cells[row - 1][j].value *= 2;
            score +=  cells[row - 1][j].value;
            cells[row][j].value = 0;
              ambiance1();
            break;
              
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}

function moveDown() {
  var i, j, row;
  for(j = 0; j < size; j++) {
    for(i = size - 2; i >= 0; i--) {
      if(cells[i][j].value) {
        row = i;
        while (row + 1 < size) {
          if (!cells[row + 1][j].value) {
            cells[row + 1][j].value = cells[row][j].value;
            cells[row][j].value = 0;
            row++;
          } else if (cells[row][j].value == cells[row + 1][j].value) {
            cells[row + 1][j].value *= 2;
            score +=  cells[row + 1][j].value;
            cells[row][j].value = 0;
              ambiance1();
            break;
          } else {
            break; 
          }
        }
      }
    }
  }
  pasteNewCell();
}