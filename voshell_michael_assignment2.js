//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 2

// Varibales

var mhName = "Bev"
var tripTime = 3
var numberOfDaysDown = 4


console.log( " Our Computer systems at work crashed on Sat ")
console.log( "it's been a very hectic week to say the least because of it ")
console.log( " I have to drive to Laurel, DE over " + tripTime + " hours round trip, every nght")

// functions

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
 
var thinkUp = function(upYet) {
   if (upYet === true ) {
        console.log ("good thing cuz 1 day was too many")
        return upYet;
        } else {
            if (upYet === false ) {
            // while-loop
                var daysDown = 3
                while (daysDown > 0) {
                console.log ("it sure is a pain to have the system dowm for " + daysDown + " more days")
                daysDown--;
                };
                    console.log ("3 down days ")
                    return upYet;
            };
            };
            };


// number funtion
// for-loop

var totalTimeDown = function (numberOfDaysDown) {
    var timeDownInHours = ( hoursInADay * numberOfDaysDown)
    console.log (timeDownInHours)
    time = timeDownInHours
        return time;
    
    
    };



// Main Code

//systemUp()
// var upYet = confirm ( "do you think it'll be up tomorrow?")
//thinkUp(upYet)
//var tUp = thinkUp()
   // console.log (tUp)

totalTimeDown(numberOfDaysDown)
var timeDown = totalTimeDown(numberOfDaysDown);
    console.log (timeDown + " is way too many hours to be down.")
    








