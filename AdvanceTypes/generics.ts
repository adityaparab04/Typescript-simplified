function getSecond<T>(array: T[]) {
	return array[1]
}

const a5 = [1, 2, 3]
const b5 = ["asd", "sdf"]

const retA = getSecond(a5)
const retB = getSecond(b5)

type APTResponse<TData> = {
	data: TData
	isError: boolean
}

type UserResponse = APIResponse<{
	name: string
	age: number
}>

const a6: UserResponse = {
	data: { name: "Aditya", age: 25 },
	isError: false,
}
