setInterval(() => {
    // code for transit
    let transit = document.getElementById("transit").value;
    document.getElementById("transit_value").innerHTML = transit + "" + "* 30 =";
    document.getElementById("transit_result").innerHTML = transit * 30 + "&#x20b9";
    let transit_val = transit * 30

    // code for car 
    let car = document.getElementById("car").value;
    document.getElementById("car_value").innerHTML = car + "" + "* 30 = " + "";
    document.getElementById("car_result").innerHTML = car * 30 + "&#x20b9";
    let car_val = car * 30

    // code for sumo
    let sumo = document.getElementById("sumo").value;
    document.getElementById("sumo_value").innerHTML = sumo + "" + "* 40 = " + "";
    document.getElementById("sumo_result").innerHTML = sumo * 40 + "&#x20b9";
    let sumo_val = sumo * 40

    // code for traveller
    let traveller = document.getElementById("traveller").value;
    document.getElementById("traveller_value").innerHTML = traveller + "" + "* 70 = " + "";
    document.getElementById("traveller_result").innerHTML = traveller * 70 + "&#x20b9";
    let traveller_val = traveller * 70

    // code for bus
    let bus = document.getElementById("bus").value;
    document.getElementById("bus_value").innerHTML = bus + "" + "* 100 = " + "";
    document.getElementById("bus_result").innerHTML = bus * 100 + "&#x20b9"
    let bus_val = bus * 100

    // code for final sum
    let final_sum = car_val + transit_val + sumo_val + traveller_val + bus_val
    document.getElementById("final_sum_value").innerHTML = car_val + " + " + transit_val + " + " + sumo_val + " + " + traveller_val + " + " + bus_val + " =";
    document.getElementById("final_sum_result").innerHTML = final_sum + "&#x20b9"


}, 1000);
