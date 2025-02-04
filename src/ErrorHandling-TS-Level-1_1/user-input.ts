//Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.

function greetUser() {
	const personName = window.prompt("Wie lautet dein Name?");
	try {
		if (personName === null || personName === undefined || personName === "") {
			throw new Error("kein name");
		}
		console.log(`Hallo ${personName}!`);
	} catch (err) {
		console.log("Hallo User");
	}
}

greetUser();
