import Vue from 'vue';

enum Color {
  WHITE,
  BLACK,
}
enum ChessType {
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',  
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  PAWN = 'pawn'
}

type ChessMan = [type: ChessType, label: string, index: number, color: Color]

class Point {
  x!: number;
  y!: number;
  cm!: ChessMan | null;
}

