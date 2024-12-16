document.body.onload = nachdenken;

var anzEingaben = 0;
var inputField;
const ladebildschirm = document.getElementById("ladebildschirm");
const chatContainer = document.getElementById("chat-container");

async function nachdenken() {
	ladebildschirm.style.display = "none"; // Ladebildschirm ausblenden
	
	checkCookie();
	await sendMes('Hallo ich bin Perfect, was kann ich für dich tun?');
	await inMes();	
	
}
async function sendMes(text) {
	// Ein neues <div> für die Chat-Nachricht erstellen
	const erstelleDiv = document.createElement("div");
	erstelleDiv.className = "ausgabe-text";
	
	var textSplit = text.split("");
	textSplit.forEach(function (char, index) {
		setTimeout(function () {
			var neuertext = erstelleDiv.textContent + char;
			erstelleDiv.textContent = neuertext;
		}, 100 * index);
		});
	
	
	// add the newly created element and its content into the DOM
	chatContainer.appendChild(erstelleDiv);
}

async function inMes() {
	// Ein neues <div> für die Chat-Nachricht erstellen
	const erstelleInput = document.createElement("input");
	erstelleInput.className = "eingabe-text";
	
	anzEingaben ++; // Setzt den Wert von anzEingaben auf eins Grösser als den bisherigen Wert
	
	const eingabefeldId = "Eingabefeld" + anzEingaben; // Hier den gewünschten Wert setzen
	erstelleInput.setAttribute("id", eingabefeldId); 
	erstelleInput.setAttribute('autocomplete', 'off');

    // Den Wert des Eingabefelds ändern
	erstelleInput.value = " ";
	
	inputField = erstelleInput;
	
	// das erstellte Eingabefeld dem Dokument hinzufügen
	chatContainer.appendChild(erstelleInput);
	erstelleInput.focus();
}



document.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		console.log('Enter gedrückt!'); // Diese Nachricht sollte in der Konsole erscheinen

		antworten();
		
		inMes();
		
	}
});