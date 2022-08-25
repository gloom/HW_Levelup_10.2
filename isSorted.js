// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

function isSorted(arr){
    let result
    let carry
    if (arr.length<=0){
        result = true
    }
    for (let i =0;i<arr.length;i++){
        if (i==0){
            carry = arr[i]
        } else{
            if (carry<=arr[i]){
                carry = arr[i]
            } else{
                result = false
                break
            }
            result = true
        }
    }
    return result
}
alert(isSorted([]))                         // true
alert(isSorted([-Infinity, -5, 0, 3, 9]))   // true
alert(isSorted([3, 9, -3, 10]))             //false  