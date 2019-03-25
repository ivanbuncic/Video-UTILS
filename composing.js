const compose = (f, g) => (data) => f(g(data));
const mul3 = (num) => num*3;
const makePos = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(mul3, makePos);
