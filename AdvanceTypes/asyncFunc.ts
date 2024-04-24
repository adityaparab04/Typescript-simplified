function wait(duration: number): Promise<string> {
	return new Promise<string>((resolve) => {
		setTimeout(() => resolve("Hi"), duration);
	});
}

wait(1000).then((value) => {
	console.log(value);
});

async function wait1(duration: number): Promise<any> {
	return await fetch("aditya");
}
