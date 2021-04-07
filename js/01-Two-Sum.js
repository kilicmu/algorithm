// O(nlogn)
var twoSum = function(nums, target) {
    const nNums = [...nums].sort((a, b) => a-b)
    let [l, r] = [0, nums.length - 1]

    while(l < r) {
        if(nNums[l] + nNums[r] === target) {
            return [nums.indexOf(nNums[l]), nums.lastIndexOf(nNums[r])]
        }
        if(nNums[l] + nNums[r] > target) {
            --r
        }else {
            ++l
        }
    }

    return []
};