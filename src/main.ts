import CV from './cv';
function hello(compiler: string) {
  const cv = new CV();
  cv.fullname = 'Nguyen Minh Son 123';
  console.log(`Hello from ${compiler}`, cv.toJSON());
}
hello("TypeScript");