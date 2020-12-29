import 'reflect-metadata';
import 'es6-shim';

import CV from './cv';
import Numbers from './numbers';
import DataTypes from './datatypes';
import Functions from './functions';
const log = (text: string) : void => {
  const styles = 'color: green; font-weight:bold; font-size: 1.2rem;'
  console.log(`%c ${text} :`, styles);
}

function hello(compiler: string) {
  console.clear();
  const styles = 'color: green; font-weight:bold; font-size: 1.2rem;'
  const cv = new CV();
  cv.fullname = 'Nguyen Minh Son 123';
  console.log(`Hello from ${compiler}`, cv.toJSON());
  console.log('%c 2 vector Matrix', styles);
  console.table(Numbers.twoVectorMatrix(10, 10));
  console.log('%c isPrime', styles);
  const startTime = Date.now();
  const isPrimeTestSuits = [2,4,10,23,100] .map((v) => {
    return {input: v, output: Numbers.sumOfPrime(v)}
  });
  console.table(isPrimeTestSuits);
  const runTime: number = Date.now() * 1000 - startTime * 1000;
  console.log(`%c Total time :` + runTime, styles);
  log('Datatypes');
  DataTypes.loadJSON();
  log('Functions');
  console.log(Functions.sum(1,2));
  console.log(Functions.sum(1,2,3));
  console.log(Functions.total(1,2,3,4,5,6,7,8,9,10));  
  
}
hello("TypeScript");