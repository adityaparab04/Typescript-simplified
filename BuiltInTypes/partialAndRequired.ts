type TODO_1 = {
	title?: string;
	completed: boolean;
	address?: {
		street?: string;
	};
};

type FormTodo = Required<Pick<TODO_1, "title">> & Omit<TODO_1, "title">;

const todo_1: FormTodo = {
	completed: true,
	title: "sdfsd",
};

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>>;
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;

type FormTodo_1 = RequiredPick<FormTodo, "title">;
