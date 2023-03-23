
function generateTicket(){

    /* start: define the data */
    var ppkm = 0.21; /* euro/km */
    var ageunder = 18; /* minorenni */
    var ageover = 65; /* over aged people */
    var discunder = 20/100; /* discount for under 18 */
    var discover = 40/100; /* discount for over 65 */
    /* start: define the data */

    /* start: extract input from html */
    let passengerNameSurname = document.getElementById('passengerNameSurname').value;
    var numberkm = +document.getElementById('kmNumber').value;
    let passengerAge = document.getElementById("passengerAge").value;
    /* end: extract input from html */

    /* start: convert born date to passenger age */
    const year = parseFloat(passengerAge.substring(0,4));
    const month = parseFloat(passengerAge.substring(5,7));
    const day = parseFloat( passengerAge.substring(8,10) );
    
    const jPassenger = 367*year - Math.trunc(7*(year + Math.trunc((month + 9)/12))/4) + Math.trunc(275*month/9) + day + 1721013.5;

    var currentdate = new Date();

    var curryear = currentdate.getFullYear();
    var currmonth = currentdate.getMonth()+1;
    var curday = currentdate.getDate();

    const jToday = 367*curryear - Math.trunc(7*(curryear + Math.trunc((currmonth + 9)/12))/4) + Math.trunc(275*currmonth/9) + curday + 1721013.5;

    var passengerCurrAge = ( jToday - jPassenger ) / 365.25;
    /* end: convert born date to passenger age */

    /* start: compute total price */
    var totalPrice = numberkm * ppkm; 

    if (passengerCurrAge < ageunder) {
        var totalPrice = totalPrice * ( 1 - discunder );
        var discName = "Ridotto minorenni";
    } else if (passengerCurrAge >= ageover) {
        var totalPrice = totalPrice * ( 1 - discover );
        var discName = "Ridotto over 65";
    } else {
        var totalPrice = totalPrice;
        var discName = "Biglietto standard";
    }
    totalPrice = parseFloat(totalPrice.toFixed(2));
    let stringPriceFinal = totalPrice.toString();
    /* end: compute total price */

    /* start: create ticket */
    var maxCoach = 12;
    var minCoach = 1;
    var coach = Math.floor(Math.random() * (maxCoach - minCoach + 1) + minCoach);
    var cpCode = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

    document.getElementById('genPassengerName').innerText = passengerNameSurname;
    document.getElementById('genPassAge').innerText = discName;
    document.getElementById('genCoach').innerText = coach;
    document.getElementById('genCPcode').innerText = cpCode;
    document.getElementById('genPrice').innerText = stringPriceFinal.concat("€");
    /* end: create ticket */

    
    

}


var element = document.getElementById("genTicket");

const button = document.querySelector("button")
button.addEventListener("click", () => {
    element.style.display = "inline-block";
})




