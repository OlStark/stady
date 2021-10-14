let foo = (x, n) => {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
  };
  
  console.log(foo(3, 39));  