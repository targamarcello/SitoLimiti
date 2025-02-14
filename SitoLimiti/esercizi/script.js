// Funzione che calcola il limite di una funzione data in input
function calculateLimit(expr, limitValue) {
    try {
        const math = window.math;  // Usa la libreria Math.js per eseguire i calcoli
        // Sostituisce tutte le occorrenze di 'x' con il valore del limite e calcola l'espressione
        const result = math.evaluate(expr.replace(/x/g, limitValue.toString()));

        return result;  // Restituisce il risultato del calcolo
    } catch (error) {
        // Se si verifica un errore nel calcolo (ad esempio, espressione non valida), restituisce un messaggio di errore
        return 'Errore nel calcolo, verifica l\'espressione.';
    }
}

// Aggiunge un evento di click al pulsante per calcolare il limite
document.getElementById("calculateLimitButton").addEventListener("click", function() {
    // Ottiene l'espressione inserita dall'utente e il valore di x (limite)
    const expr = document.getElementById("userExpression").value.trim();
    const limitValue = parseFloat(document.getElementById("limitValue").value.trim());

    // Se l'espressione e il valore del limite sono validi
    if (expr && !isNaN(limitValue)) {
        // Calcola il limite chiamando la funzione calculateLimit
        const result = calculateLimit(expr, limitValue);

        // Mostra il risultato calcolato sulla pagina
        document.getElementById("limitResult").innerHTML = `
            <h4>Risultato:</h4>
            <p>Il limite di ${expr} quando x tende a ${limitValue} è: <strong>${result}</strong></p>
        `;
    } else {
        // Se l'espressione o il valore del limite non sono validi, mostra un messaggio di errore
        document.getElementById("limitResult").innerHTML = '<p>Per favore, inserisci una funzione valida e un valore per x.</p>';
    }
});
