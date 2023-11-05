
var numDecodings = function(s) {
	if (s.length === 0)
		return 0;

	const memo = Array(s.length).fill(-1);
	return helper(s, 0, memo);
};

var helper = function(s, i, memo) {
	if (i === s.length)
		return 1;

	if (s[i] == '0')
		return 0;

	if (memo[i] !== -1)
		return memo[i];

	let res = helper(s, i + 1, memo);

	if (i < s.length - 1 && (s[i] == '1' || s[i] == '2' && s[i + 1] < '7'))
		res += helper(s, i + 2, memo);

	return memo[i] = res;
};