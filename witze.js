// Pfad zur Textdatei
const witzeDateiPfad = 'witze.txt';

// Asynchronen Dateilesevorgang starten
var zeilenArrayWitze;

fetch(witzeDateiPfad)
	.then(response => response.text())
	.then(daten => {
		// Zeilen in ein Array aufteilen
		zeilenArrayWitze = daten.split('\n');

        // Jetzt hast du den Inhalt der Datei in einem Array gespeichert
        // Du kannst auf die Zeilen über die Indizes zugreifen: zeilenArray[index]
        // Zum Beispiel: console.log(zeilenArray[0]);
    })
    .catch(err => {
        console.error('Fehler beim Lesen der Datei:', err);
    });




function erzähleWitz() {
	// Zufälligen Index generieren
	const zufallsIndex = Math.floor(Math.random() * zeilenArrayWitze.length);

	// Zufälliges Element aus dem Array abrufen
	const zufaelligesElement = zeilenArrayWitze[zufallsIndex];

	console.log('Zufälliges Element:', zufaelligesElement);
	sendMes('Okay, hier ist ein Witz: ' + zufaelligesElement);
}
