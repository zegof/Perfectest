const infoDateipfad = 'informationen.txt'; 
var informationen; 
var wörterImSatz;

fetch(infoDateipfad)
  .then(response => response.text())
  .then(daten => {
    daten = daten.toLowerCase();
    informationen = daten.split('\n');
    console.log(informationen);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });

function findePassendeInformationen(eingabeWörter) {
  let besteÜbereinstimmung = { satz: '', anzahl: 0 };

  for (const satz of informationen) {
    const wörterImSatz = satz.split(" ");
    const anzahl = eingabeWörter.filter(wort => wörterImSatz.includes(wort)).length;

    if (anzahl > besteÜbereinstimmung.anzahl) {
      besteÜbereinstimmung = { satz, anzahl };
    }
  }

  if (besteÜbereinstimmung.anzahl > 0) {
    console.log("Beste Übereinstimmung:", besteÜbereinstimmung.satz);
    sendMes(besteÜbereinstimmung.satz);
  } else {
    console.log("Keine passenden Daten gefunden.");
    sendMes('Entschuldigung, ich verstehe nicht ganz. Kannst du das genauer oder mit anderen Worten erklären?');
  }
}
