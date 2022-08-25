// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    let i = 0
    let j = str.length-1
    let breakPoint = Math.floor(str.length/ 2)
    if(str.length%2==0){
        while (i < breakPoint && j >= breakPoint ) {
            if (str[i]!==str[j]){
                return false
            }
            i++
            j--
        }
        return true
    } else{
        while (i < breakPoint && j > breakPoint) {
            if (str[i]!==str[j]){
                return false
            }
            i++
            j--
        }
        return true
    }
}
alert(isPalindrome(''))                                // true
alert(isPalindrome('abcdcba'))                         // true
alert(isPalindrome('abcd'))                            // false
alert(isPalindrome('A man a plan a canal Panama'))     // true