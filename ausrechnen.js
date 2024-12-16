function rechneaus(userText) {
    var eingabeMitText = userText;

    var zuEntfernendeWorter = ['rechne', 'ausrechnen', 'berechne', 'was', 'ergibt', 'aus'];
    var eingabeOhneText = eingabeMitText;

	for (var i = 0; i < zuEntfernendeWorter.length; i++) {
		eingabeOhneText = eingabeOhneText.replace(new RegExp(zuEntfernendeWorter[i], 'g'), '');
	}

	var eingabeOhneText = eingabeOhneText.replace('mal', '*');
	var eingabeOhneText = eingabeOhneText.replace('durch', '/');
	var eingabeOhneText = eingabeOhneText.replace('hoch', '**');
	var eingabeOhneText = eingabeOhneText.replace('plus', '+');
	var eingabeOhneText = eingabeOhneText.replace('minus', '-');
	
		
    var resultat = eval(eingabeOhneText);
	console.log(resultat);
	var antwort = 'Das ergibt ' + resultat;
    sendMes(antwort);
}