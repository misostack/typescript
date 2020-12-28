class Numbers {
  static twoVectorMatrix = (w: number, h: number) => {
    const matrix: Array<Array<number>> = Array.from(
      new Array(w),
      ((_, x) => {
        return Array.from(new Array(h), (_, y) => {
          return x + y;
        })
      })      
    );
    return matrix;
  }

  static sumOfPrime = (n: number) => {
    // isPrime === >1 && only % 1 === 0 && only % itself === 0
    let sum : number = 0;
    let sumArr : Array<number> = [];
    let i: number = 1;
    const isPrime = ((x: number) => {
      if(x <= 1) return false;    
      for(let i = 2; i < x-1;i++){
        if(x % i === 0) return false;
      }
      return true;
    })
    while(n > 0) {
      if(isPrime(i)){
        sumArr.push(i);
        sum += i;
        n--;
      }
      i++;
    }    
    return `SUM(${sumArr.toString()}) = ${sum}`;
  }
}

export default Numbers;