let display = document.getElementById('display'); // Zugriff auf das Display-Element
let buttons = Array.from(document.getElementsByClassName('btn')); // Erstellt ein Array aus den Tastenelementen
buttons.map( button => { // Durchläuft jedes Tastenelement
    button.addEventListener('click', (e) => { // Fügt einen Klick-Event-Listener zu jeder Taste hinzu
        switch(e.target.innerText){ // Überprüft den Text der geklickten Taste
            case 'C': // Wenn die Taste 'C' ist
                display.innerText = ''; // Leert das Display
                break;
            case '=': // Wenn die Taste '=' ist
                try{
                    display.innerText = eval(display.innerText); // Berechnet und zeigt das Ergebnis der Eingabe an
                } catch {
                    display.innerText = "Error" // Zeigt 'Error' an, wenn die Eingabe ungültig ist
                }
                break;
            default:
                display.innerText += e.target.innerText; // Fügt den Text der geklickten Taste zur Anzeige hinzu
        }
    });
});
