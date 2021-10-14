function betweenNumbers(a, b) {
  let start = a;

  let timerId = setInterval(function() {
    console.log(start);
    if (start == b) {
      clearInterval(timerId);
    }
    start++;
  }, 1000);
}


betweenNumbers(5, 15); 