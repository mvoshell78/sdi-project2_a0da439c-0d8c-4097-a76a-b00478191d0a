//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 2

// Varibales

var mhName = "Bev"
var tripTime = 3

console.log( " Our Computer systems at work crashed on Sat ")
console.log( "it's been a very hectic week to say the least because of it ")
console.log( " I have to drive to Laurel, DE over " + tripTime + " hours round trip, every nght")



// Procedure with prompt

var myPrompt = prompt ("Hey, Mich it's " + mhName + " is the system back up?");
 
 
    // function for procedure with prompt
    // if system is up responds thats awesome
    // if it's no respondes that stinks 
var systemUp = function (myPrompt) {
       if (myPrompt === "yes" ){
        console.log ('Thats awesome! it\'ll save us a bunch of work tonight ')
        } else {
        console.log ("That really stinks, more work for us tonight" )
        
        return
        
        };
};


    systemUp(myPrompt)

    