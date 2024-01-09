/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let memo = new Array(nums.length).fill('UNKNOWN');
    memo[memo.length - 1] = 'GOOD';
    return canJumpFromPosition(0, nums, memo);
};

function canJumpFromPosition(position, nums, memo) {
    if (memo[position] !== 'UNKNOWN') {
        return memo[position] === 'GOOD';
    }

    const furthestJump = Math.min(position + nums[position], nums.length - 1);
    for (let nextJump = position + 1; nextJump <= furthestJump; nextJump++) {
        if (canJumpFromPosition(nextJump, nums, memo)) {
            memo[position] = 'GOOD';
            return true;
        }
    }
    memo[position] = 'BAD';
    return false;
}
