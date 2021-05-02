const calculator = () => (
  { add(A, B) { return Math.floor(A + B); },
  mult(A, B) { return Math.floor(A * B); },
  div(A, B) { return Math.floor(A / B); },
  sub(A, B) { return Math.floor(A - B); },
});

// const createStudent = (string) => ({ name: string, feedback() { return 'Eita pessoa boa!'; } });

console.log(calculator.mult(2.2,3));