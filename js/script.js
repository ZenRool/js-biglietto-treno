const priceKm = 0.21;
let discount = "";
// Chiedo i chilometri da percorrere e l'età del passeggiero e converto tutto
const km = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
const age = parseInt (prompt ("Quanti anni hai?"));
// assegnio il prezzo
let priceTicket = priceKm * km;
// modifico il pezzo in base allo sconto 
if (age < 18) {
    discount = `${priceTicket} € meno il 20% per i minori <br>`;
    priceTicket = priceTicket - ( priceTicket / 5);
}
else if (age >= 65){
    discount = `${priceTicket} € meno il 40% per lo sconto anziani <br>`;
    priceTicket = priceTicket - ( priceTicket / 2.5);
}
document.getElementById("receipt").innerHTML = `Il prezzo del biglietto è di ${discount} ${priceTicket.toFixed(2)} €`;