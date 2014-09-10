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

//  Prompt Arguement
//  Procedure
var systemUp = function () {
    var myPrompt = prompt("Hey, Mich it's " + mhName + " is the system back up?"); { 
        if (myPrompt === "yes"){
            //output 1 if yes
            console.log ('if it\'s up why isn\'t working'  )
            } else {
                if (myPrompt === "no") {
                    // output 2 if no
                    console.log ("That really stinks, more work for us tonight")
                //any other answer than yes or no returns an humorous answer
                } else {
                    console.log ( "Stop playing around we have work to do" ) }
        
                };
            };
        };
 
// Confirm Argument
// Boolean Function 
 
var thinkUp = function () {
    var upYet = confirm ( "do you think it'll be up tomorrow?")
        // we were down for three days
        if (upYet === true ) {
            console.log ("good thing cuz 1 day was too many")
            return
            //the system will be up tomorrow so there is no need to loop 
            } else {
                
                var upYet = 3
                // while loop
                     while (upYet > 0) {
                       var myConfirm = confirm ("do you think it'll be up tomorrow?")
                            if (myConfirm === true) {
                             // early return makes sence if the system is up
                             return
                             } else {
                    console.log ("it sure is a pain to have the system dowm for " + upYet + " more days")
                     upYet--;
                       
                
                        };
                    };
            };
        };


systemUp()
thinkUp()
