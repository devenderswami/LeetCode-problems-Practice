/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let p = s.length - 1;
        while (p >= 0 && s.charAt(p) === ' ') {
            p--;
        }

        // compute the length of the last word
        let length = 0;
        while (p >= 0 && s.charAt(p) !== ' ') {
            p--;
            length++;
        }

        return length;
    
};