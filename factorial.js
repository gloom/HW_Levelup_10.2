// factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(n) { 
    let a = 1; 
    for (var i = 1; i <= n; i++) { 
    a = a * i; } 
    return a; 
    }
    alert(factorial(0));
    alert(factorial(1));
    alert(factorial(6));