const priceKm = 0.21;
let discountTicket = null;
// Chiedo i chilometri da percorrere e l'età del passeggiero e converto tutto
const km = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
const age = parseInt (prompt ("Quanti anni hai?"));
// assegnio il prezzo
const priceTicket = priceKm * km;
// modifico il pezzo in base allo sconto 
if (age < 18) {
    discountTicket  = priceTicket * 0.8;
}
else if (age >= 65){
    discountTicket  = priceTicket * 0.6;
}

document.getElementById("receipt").innerHTML = `Per il viaggio di ${km}km Il prezzo del biglietto è di ${priceTicket.toFixed(2)}€${discountTicket ? ` <br>meno il  ${age < 18 ? (`20% per i minori `) : (`40% per gli anziani `)} ${discountTicket.toFixed(2)}€` : (``)}` ;