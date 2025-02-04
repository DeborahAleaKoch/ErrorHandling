// Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.

const lottoNumbers: number[] = [];

function generateLottoNumber() {
	const randomNumber: number = Math.floor(Math.random() * 100) + 1;
	if (randomNumber <= 49) {
		lottoNumbers.push(randomNumber);
		return randomNumber;
	} else {
		// Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
		throw new Error("die zahl ist größer als 49");
	}
}

generateLottoNumber();

//Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
//Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
//Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.

while (lottoNumbers.length < 7) {
	try {
		generateLottoNumber();
		console.log(lottoNumbers);
	} catch (err) {
		console.log(err);
	}
}
