// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false

function isBalanced(str) {
    let braket = []
    let result
    for(let i=0;i<str.length;i++){
        if (str[i]=='{' || str[i]=="}"){
            braket.push(str[i])
        }
    }
    let catchThis = 0
    if (braket.length<=1 || braket[0]=="}"){
        result = false
    } else{
        for (let i=0;i<braket.length;i++){
            if (braket[i]=="{"){
                catchThis++
            } else{
                catchThis--
            }
        }
        if (catchThis ==0){
            result = true
        } else{
            result = false
        }
    }
    return result
}
alert(isBalanced('}{'))                      // false
alert(isBalanced('{{}'))                     // false
alert(isBalanced('{}{}'))                    // true
alert(isBalanced('foo { bar { baz } boo }')) // true
alert(isBalanced('foo { bar { baz }'))       // false
alert(isBalanced('foo { bar } }'))           // false