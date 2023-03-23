
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

    if (passengerAge < ageunder) {
        var totalPrice = totalPrice * ( 1 - discunder );
    } else if (passengerAge >= ageover) {
        var totalPrice = totalPrice * ( 1 - discover );
    } else {
        var totalPrice = totalPrice;
    }
    /* end: compute total price */

    




    document.getElementById('p_result').innerText = totalPrice;

    return passengerNameSurname, numberkm, passengerAge;

}



