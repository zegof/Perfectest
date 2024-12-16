function antworten() {
	const userText = inputField.value.toLowerCase();
	
// Beispielantworten (vordefiniert)
	if (userText.includes('perfect')) {
		sendMes('Hallo, mein name ist Perfect und ich bin eine Künstliche Inteligenz (KI).<br> Was kann ich für dich tun?')
	} else if  (userText.includes('heisst') && userText.includes('du')) {
		sendMes('Ich heisse PERFECT. Was kann ich für dich tun?');
	} else if (userText.includes('heisst')) {
		sendMes('So wie es heisst.😉 <br></br> <br></br><br></br><br></br>Kann ich sonst was für dich tun?');
	} else if (userText.includes('heisse') && userText.includes('ich')) {
		sendMes('Ich weiss nicht wie du heisst 😁<br></br> <br></br><br></br><br></br>😁<br></br> <br></br><br></br><br></br>😁<br></br> <br></br><br></br><br></br>');
	} else if (userText.includes('hallo')) {
		sendMes('Hallo! Wie kann ich dir helfen?');
	} else if (userText.includes('wetter')) {
		sendMes('Das Wetter ist sonnig und warm.');
	} else if (userText.includes('cool')) {
		sendMes('Was meinst du mit "cool"? <br>Die Kühle oder den Ausdruck "Das ist so gut."?');
	} else if (userText.includes('rechne') || userText.includes('berechne') || userText.includes('ergibt')) {
		rechneaus(userText);
	} else if (userText.includes('witz')) {
		erzähleWitz();
	} else if (userText.includes('erstelle')|| userText.includes('male')) {
		sendMes('zurzeit kann dies leider nicht Perfekt tun.');
		sendMes('Dies ist eine Testversion');
		sendMes(userText);
		erstelleBild(userText);
		}
	else {
		var a = userText
		a = a.replace('der', '');
		a = a.replace('die', '');
		a = a.replace('das', '');
		a = a.replace('?', '');
		const q = a.split(' ');
		findePassendeInformationen(q);

		
	}	
	
}