function add(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  addFinal = [];
  if (num1.length >= num2.length) {
    num1Spliced = num1.slice(num1.length-num2.length);
    num1Rest = num1.slice(0,(num1.length - num2.length));
    for (n in num1Spliced) {
      addFinal.push(eval(num1Spliced[n])+eval(num2[n]));
    }
   num1 = num1Rest;
   num2 = addFinal.join('');
   return parseInt(num1 + num2);
  }
  else {
    num2Spliced = num2.slice(num2.length-num1.length);
    num2Rest = num2.slice(0,(num2.length - num1.length));
    for (n in num2Spliced) {
      addFinal.push(eval(num2Spliced[n])+eval(num1[n]));
    }
   num1 = num2Rest;
   num2 = addFinal.join('');
   return parseInt(num1 + num2);
  }
}