const infoDateipfad = 'informationen.txt';

// Asynchronen Dateilesevorgang starten
var informationen;
var wörterImSatz;
fetch (infoDateipfad)
    .then(response => response.text())
    .then(daten => {
        daten = daten.toLowerCase();
        informationen = daten.split('\n');
        console.log(informationen);


    })
    .catch(err => {
        console.error('Fehler beim Lesen der Datei:', err);
    });




 


// Funktion zum Finden passender Sätze
function findePassendeInformationen(eingabeWörter) {

    // Initialisieren einer leeren Liste für passende Sätze
    const passendeSätze = [];
    console.log('informationen:' +informationen)
    console.log('passendeSätze:' +passendeSätze)
    // Iterieren über jeden Satz
    for (const satz of informationen) {

        const wörterImSatz = satz.split(" ");
        console.log('Wörterimsatz' +wörterImSatz)
        console.log(satz)
        // Zählen der Anzahl der Eingabewörter im Satz
        const anzahl = eingabeWörter.filter(wort => wörterImSatz.includes(wort)).length;
        console.log('anzahl:' +anzahl);
        console.log(satz)
        // Wenn mindestens zwei Eingabewörter gefunden wurden, fügen Sie den Satz zu den passenden Sätzen hinzu
        if (anzahl >= 2) {
            passendeSätze.push(satz);
        }
        console.log(satz)
    }

        
        const passendeErgebnisse = passendeSätze;
        console.log(passendeErgebnisse);
        
        
       
        if (passendeErgebnisse.length > 0) {
            console.log("Passende Informationen:");
            for (const satz of passendeErgebnisse) {
                console.log("-", satz);
                sendMes(satz);
            }
        } else {
            console.log("Keine passenden Daten gefunden.");
            sendMes('Entschuldigung, ich verstehe nicht ganz. Kannst du das genauer oder mit anderen Worten erklären?');
            if (lernen == 'on') {
                

            }
        }

}

