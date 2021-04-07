/**
 * ## 无重复字符的最长子串
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * demo:
 * ```
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * ```
 * @param {String} s 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const st = {};
    const strs = s.split('');
    let i  = -1,
        ans = 0;

    for(let j = 0; j < strs.length; ++j) {
        if(st[strs[j]] !== undefined) {
            i = Math.max(st[strs[j]], i);
        }
        ans = Math.max(ans, j = i);
        st[strs[j]] = j;
    }

    return ans;
};