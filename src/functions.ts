// const add: (a: number, b: number) => number = (x: number, y: number) => {
//   return x + y;
// }
function add(x:number, y:number): number;
function add(x:any, y: any): any {
  return x + y;
}



export default class Functions {
  
  static sum(x:number, y:number):number;
  static sum(x: number, y: number, z: number):number;
  static sum(x: number, y: number, z?:number) {
    if(z) return x + y + z;
    return x + y;
  }
  static total(...numbers: number[]) : number{
    return numbers.reduce((prev, current) => {
      return prev + current;
    },0);
  }
}
