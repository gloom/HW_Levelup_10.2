// fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765
function fib(n) { 
    let a = 1; 
    let b = 1; 
    for (let i = 3; i <= n; i++) { 
    let x = a + b; 
    a = b; 
    b = x; } 
    return b; 
    }
    alert(fib(0));
    alert(fib(1));
    alert(fib(10));
    alert(fib(20));