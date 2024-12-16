var höhe; // height
var breite; //width

function erstelleBild(bildrichtlinie) {
    const erstelleEinBild = document.createElement("div");
    erstelleEinBild.alt = 'bilderstellungsprogramm-container'
    chatContainer.appendChild(erstelleEinBild);
    

    if  (bildrichtlinie.includes('baum')) {
        bildererstellen('baum', erstelleEinBild);
    }
    if (bildrichtlinie.includes('haus')) {
        bildererstellen('haus', erstelleEinBild);
    }
    
    const downloadBtn = document.createElement("button");
    chatContainer.appendChild(downloadBtn);
    downloadBtn.innerText = "Bild Herunterladen";
    downloadBtn.style.width = "100px"; 
    downloadBtn.style.height = "40px";
    // Event-Listener für den Button
    downloadBtn.addEventListener("click", function() {
        console.log("Button wurde geklickt!");
        downloadImage(erstelleEinBild);
    });
    
}

function bildererstellen(bildname, erstelleEinBild) {
    const bild = document.createElement('div');
    bild.className = 'bild-container'
    const meinBild = new Image();
    meinBild.src = 'bilder/' +bildname+ '.jpg';
    meinBild.alt = 'baum';
    meinBild.className = 'mein-bild';

    const farbfilter = document.createElement('div');
    farbfilter.className = 'farbfilter';    
    ladebildschirm.style.display = "block"; 
    // Lade das Bild nach 5 Sekunden
    setTimeout(function () {
           
        ladebildschirm.style.display = "none"; // Ladebildschirm ausblenden
            
        bild.appendChild(meinBild);
        bild.appendChild(farbfilter);            
        erstelleEinBild.appendChild(bild);
    }, 3000); // 3000 Millisekunden = 3 Sekunden
    höhe + meinBild.height
    breite + meinBild.width
        
        
}

// Download-Funktion
function downloadImage(meinBild) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = breite;
    canvas.height = höhe;

    // Durchlaufe alle Bilder im erstelleEinBild-Element
    meinBild.querySelectorAll(".mein-bild").forEach(function(bild) {
        // Zeichne jedes Bild auf das Canvas
        ctx.drawImage(bild, 0, 0);
    });

    // Durchlaufe alle Farbfilter im erstelleEinBild-Element
   meinBild.querySelectorAll(".farbfilter").forEach(function(filter) {
        // Zeichne jeden Farbfilter auf das Canvas (z. B. mit fillRect)
        ctx.fillStyle = filter.style.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    // Erstelle einen Download-Link
    const link = document.createElement("a");
    link.download = "mein-bild-mit-filter.jpg"; // Dateiname
    link.href = canvas.toDataURL("image/jpeg"); // Bild als Daten-URL

    // Klicke auf den Link, um den Download zu starten
    link.click();
    höhe = undefined;
    breite = undefined;
}

