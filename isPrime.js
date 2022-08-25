//1. isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false


function isPrime(num)
{
    let prime = false
    if (num === 1) prime = false
    else if (num === 2 || num % 2 === 1) prime = true
    return prime
}
    alert(isPrime(0)); //False
    alert(isPrime(1)); //False
    alert(isPrime(17)); //True
    alert(isPrime(10000000000000)); //False