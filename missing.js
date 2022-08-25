// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing(arr) {
    arr = arr.sort((a, b) => a - b)
    let carry
    let missing
    if (arr.length==0){
        missing = undefined
    } else if(arr[0]!==1){
        missing = 1
    } else{
        for (let i = 0; i < arr.length; i++) {
            if (i==0){
                carry = arr[i]
            } else{
                if (carry ==arr[i]-1){
                    missing = undefined
                    carry = arr[i]
                } else{
                    missing = carry+1
                }
            }
        }
    }
    return missing
}
alert(missing([]))                        // undefined
alert(missing([1, 4, 3]))                  // 2
alert(missing([2, 3, 4]))                  // 1
alert(missing([5, 1, 4, 2]))               // 3
alert(missing([1, 2, 3, 4]))               // undefined