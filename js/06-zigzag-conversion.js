
/**
 * ## Z 字形变换
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * ```
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * ```
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。请你实现这个将字符串进行指定行数变换的函数：
 * 
 * 示例：
 * ```
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * ```
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows == 1) return s;
    const n = 2 * numRows - 2
    const tmpArr = new Array(numRows)
    for(let i = 0; i < tmpArr.length; ++i) {
        tmpArr[i] = new Array();
    }
    for(let i = 0; i < s.length; i++) {
        const x = i % n
        if(x === 0 || x === Math.floor(n / 2)){
            tmpArr[x].push(s[i])
        } else if(x < Math.floor(n / 2)) {
            tmpArr[x].push(s[i])
            const nextIdx = i + n - 2 * x
            if(nextIdx > s.length) continue
            tmpArr[x].push(s[nextIdx])
        }
    }
    return [].concat(...tmpArr).join('')
};