//Schreibe eine Funktion getCurrentPosition, die die Geolocation-API verwendet, um die aktuellen Koordinaten des Benutzers abzurufen.

// const outputSection = document.querySelector<HTMLDivElement>("#output");

function getCurrentLocation() {
	try {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			throw new Error("Geolocation is not supported by this browser.");
		}
	} catch (err) {
		window.alert("die Daten werde nicht geladen!");
	} finally {
		console.log("getCurrentPosition finished");
	}
}
type GeoData = {
	coords: { latitude: number; longitude: number };
};

function showPosition(position: GeoData) {
	window.confirm(
		`Latitude: ${position.coords.latitude} und die Londitude: ${position.coords.longitude}`
	);
	console.log(
		"Latitude: " +
			position.coords.latitude +
			"  Longitude: " +
			position.coords.longitude
	);
}

getCurrentLocation();
