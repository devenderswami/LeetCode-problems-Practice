/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const left2right = Array(n).fill(1);
    const right2left = Array(n).fill(1);

    // Left-to-Right traversal
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left2right[i] = left2right[i - 1] + 1;
        }
    }

    // Right-to-Left traversal
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right2left[i] = right2left[i + 1] + 1;
        }
    }

    // Calculate the minimum number of candies required
    let minimumCandies = 0;
    for (let i = 0; i < n; i++) {
        minimumCandies += Math.max(left2right[i], right2left[i]);
    }

    return minimumCandies;

};