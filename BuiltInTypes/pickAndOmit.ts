type TODO = {
	id: string;
	name: string;
	status: string;
	completed: boolean;
};

type NewTODO = Pick<TODO, "name" | "status" | "completed">;

type NewTODO_1 = Omit<TODO, "id">;

function saveTODO(todo: TODO) {
	return { ...todo, id: crypto.randomUUID() };
}

function renderTODO(todo: TODO) {
	const div = document.createElement("div");
	div.id = todo.id;
}
