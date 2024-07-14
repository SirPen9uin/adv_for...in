// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default function orderByProps(obj, arr) {
	const objFirst = [];
	const objSecond = [];

	for (const key in obj) {
		if (arr.includes(key)) {
			objFirst.push({key, value: obj[key]});
		} else {
			objSecond.push({key, value: obj[key]});
		}
	}

	objFirst.sort((a, b) => arr.indexOf(a.key) - arr.indexOf(b.key));
	objSecond.sort((a, b) => (a.key > b.key ? 1 : -1));

	return [...objFirst, ...objSecond];
}