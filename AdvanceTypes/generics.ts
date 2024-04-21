function getSecond<T>(array: T[]) {
	return array[1];
}

const a5 = [1, 2, 3];
const b5 = ["asd", "sdf"];

const retA = getSecond(a5);
const retB = getSecond(b5);
