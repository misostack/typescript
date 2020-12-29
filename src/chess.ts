enum Color {
  WHITE = 'white',
  BLACK = 'black',
}
enum ChessType {
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',  
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  PAWN = 'pawn'
}

class ChessMan {
  type!: ChessType;  
  color!: Color;
  constructor(type: ChessType, color: Color) {
    this.type = type;
    this.color = color;
  }

  get name(){
    return this.type;
  }
}

class Point {
  x!: number;
  y!: number;
  cm!: ChessMan | null;
  constructor(x: number, y: number, cm: ChessMan) {
    this.x = x;
    this.y = y;
    this.cm = cm;
  }
}


export default class Chess {
  static rootEle : HTMLElement | null = document.getElementById('chess');
  static boardMatrix: Array<Point> = [];
  static chessManPositions: Array<{x:number, y: number, cm: ChessType, color: Color}> = [];
  static setupChessMans(){
    Chess.chessManPositions.push(
      {x:0,y:0,cm:ChessType.ROOK,color: Color.BLACK},
      {x:1,y:0,cm:ChessType.KNIGHT,color: Color.BLACK},
      {x:2,y:0,cm:ChessType.BISHOP,color: Color.BLACK},
      {x:3,y:0,cm:ChessType.QUEEN,color: Color.BLACK},
      {x:4,y:0,cm:ChessType.KING,color: Color.BLACK},
      {x:5,y:0,cm:ChessType.BISHOP,color: Color.BLACK},
      {x:6,y:0,cm:ChessType.KNIGHT,color: Color.BLACK},
      {x:7,y:0,cm:ChessType.ROOK,color: Color.BLACK},      
    )
    for(let i = 0; i<8;i++){
      Chess.chessManPositions.push({x:i, y:1, cm:ChessType.PAWN, color:Color.BLACK})
    }
    Chess.chessManPositions.push(
      {x:0,y:7,cm:ChessType.ROOK,color: Color.WHITE},
      {x:1,y:7,cm:ChessType.KNIGHT,color: Color.WHITE},
      {x:2,y:7,cm:ChessType.BISHOP,color: Color.WHITE},
      {x:3,y:7,cm:ChessType.QUEEN,color: Color.WHITE},
      {x:4,y:7,cm:ChessType.KING,color: Color.WHITE},
      {x:5,y:7,cm:ChessType.BISHOP,color: Color.WHITE},
      {x:6,y:7,cm:ChessType.KNIGHT,color: Color.WHITE},
      {x:7,y:7,cm:ChessType.ROOK,color: Color.WHITE},      
    )
    for(let i = 0; i<8;i++){
      Chess.chessManPositions.push({x:i, y:6, cm:ChessType.PAWN, color:Color.WHITE})
    }    
  }
  static render() {
    if(Chess.rootEle){
      Chess.setupChessMans();
      Chess.boardMatrix = Array.from(new Array(8*8), (_v, idx) => {        
        const x= idx % 8;
        const y = (idx - x) / 8;
        return new Point(x,y, null);
      });
      let cells: Array<HTMLElement> = [];
      console.error(Chess.boardMatrix.length);
      Chess.boardMatrix.map(p => {                
        let cell = document.createElement('td');
        cell.classList.add((p.x+p.y) % 2 == 0 ? 'cell-green': 'cell-yellow')
        // cell.innerHTML = `${p.x} ${p.y}`;
        cell.setAttribute('data-point-x', `${p.x}`);
        cell.setAttribute('data-point-y', `${p.y}`);
        cell.onclick = (e => {
          e.preventDefault();
          let target = e.target as HTMLElement;
          target.classList.add('selected');
        })
        Chess.chessManPositions.forEach(cm => {
          if(p.x === cm.x && p.y === cm.y){
            let img = document.createElement('img');
            img.src = '/assets/' + cm.color + '_' + cm.cm.toString().toLowerCase() + '.png';
            cell.appendChild(img);
          }
        });
        cells.push(cell);
        if(cells.length === 8){
          // create new rows and clear
          const row = document.createElement('tr');
          cells.map(c => row.appendChild(c));
          Chess.rootEle.appendChild(row);
          // clean
          cells = [];
        }        
      });
    }
  }
}
