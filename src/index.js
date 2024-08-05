module.exports = function reverse (n) {
	const myArray = n.toString().split('');
	const reversed = myArray.reverse();
	const toString = reversed.join('');
	const number = parseInt(toString);
	const result = Math.abs(number);
	return result;
}
