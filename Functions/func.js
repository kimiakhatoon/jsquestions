let add = calculate(2)(3); 
let result = add('*'); 

  
function calculate(a) {
    return function(b) {
      return function(op) {
        switch(op) {
          case '+':
            return a + b;
          case '-':
            return a - b;
          case '*':
            return a * b;
          case '/':
            return a / b;
          default:
            return 'Invalid operator';
        }
      }
    }
  }
  


function sumFromTo(a, b) {
  if (a == b) return a; 
  return a + sumFromTo(a + 1, b); 
}



function logName() { 
  console.log("ali") }

const lazyLogName = callOnceAfter(logName, 2000)
function callOnceAfter(func, delay) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

