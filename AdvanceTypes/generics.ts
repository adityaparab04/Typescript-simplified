function getSecond<T>(array: T[]) {
	return array[1];
}

const a5 = [1, 2, 3];
const b5 = ["asd", "sdf"];

const retA = getSecond(a5);
const retB = getSecond(b5);

type APIResponse<TData> = {
	data: TData;
	isError: boolean;
};

type UserResponse = APIResponse<{
	name: string;
	age: number;
}>;

const a6: UserResponse = {
	data: { name: "Aditya", age: 25 },
	isError: false,
};

const a7: APIResponse<{ name: string }> = {
	data: {
		name: "Aditya",
	},
	isError: false,
};

const a8: APIResponse<Array<number>> = {
	data: [1, 2, 3],
	isError: false,
};
