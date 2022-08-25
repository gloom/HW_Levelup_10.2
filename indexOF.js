//indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

function indexOf(arr,val){
    let result
    if (!arr.includes(val)){
        result = -1
    }
    for (let i =0;i<arr.length;i++){
        if (arr[i]==val){
            result = i
        }
    }
    return result
}
 alert(indexOf([1, 2, 3], 1))           // 0
 alert(indexOf([1, 2, 3], 4)) // -1    // -1