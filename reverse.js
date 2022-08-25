// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

function reverse(arr){
    let newArr = []
    for (let i =arr.length-1;i>=0;i--){
    newArr.push(arr[i])
    }
    return newArr
}
alert(reverse(''))           // ''
alert(reverse('abcdef'))    // 'fedcba'