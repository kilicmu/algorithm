/**
 * ## 最长回文子串
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 示例 1：
 * ```
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * ```
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s == null || s.length < 1) return ''
    if(s.length == 1) return s
    let left = right = 0
    let maxLen = 0
    let ret = ''

    for(let i = 0; i < s.length; i++) {
        const len1 = helper(i, i)
        const len2 = helper(i, i+1)
        const max = Math.max(len1, len2)
        if(max > maxLen) {
            ret = s.slice(i - Math.floor((max - 1) / 2), i + Math.floor(max / 2) + 1)
            maxLen = max
        }
    }

    return ret;

    function helper (left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return right - left - 1
    }
};