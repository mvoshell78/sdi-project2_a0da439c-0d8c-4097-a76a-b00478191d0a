//alert("JavaScript works!");
// Michael Voshell
// SDI 092014
// Project 2

// Varibales

var mhName = "Bev"
var problem1 = "Our Comcast modem is fried"
var problem2 = "our juniper device has burnt ports. "
var tripTime = 3
var numberOfDaysDown = 4
var say = function(message) {console.log(message); };// simplified console log

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
        
                };  // else if
            };// my prompt
        };// close function
 
// Confirm Argument
// Boolean Function 
 
var thinkUp = function(upYet) {
   if (upYet === true ) {
        say("good thing cuz 1 day is too many")
        return upYet;
        } else {
            if (upYet === false ) {
            // while-loop
                var daysDown = 4
                while (daysDown > 0) {
                say("It sure is a pain to have the system dowm for " + daysDown + " more days")
                daysDown--;
                };// while
                    say("4 down days ")
                    return upYet;
            };// if upYet = false
            };//  else
            };// close function


// number funtion
// for-loop

var totalTimeDown = function (numberOfDaysDown) {
    var hoursInADay = 24
        for (time = (hoursInADay * numberOfDaysDown); time > 0; time--) {
            say( time + " more hours to go I can't believe how long this is")
         }; // close loop
    
       return time;
    
    
    }; // close function 

//string function

var whatHappened = function (problem1, problem2) {
  
   var cause = " lightening stuck our building, ";
   var totalProblem = (cause + problem1 + ", " + "and " + problem2 );
  // console.log (totalProblem)
  return totalProblem
};   // close function
    
  

// Main Code

say ( " Our Computer systems at work crashed on Sat ")
say ( "it's been a very hectic week to say the least because of it ")
say ( " I have to drive to Laurel, DE over " + tripTime + " hours round trip, every nght")


systemUp()

var upYet = confirm ( "Do you think it'll be up before Wednesday?")


var tUp = thinkUp(upYet) // boolean conditon for upyet function
   if (tUp === true ) {
    say(" It'll be good to be back up" )
    } else {
    say('To bad so sad')
   };
  
// added a confirm to help the story flow alittle 
var feelings = confirm ("do you want to see how long it feels to have the system down for so long?")
    if (feelings === true ) {
      var timeDown =  totalTimeDown(numberOfDaysDown)
        say(timeDown + " hours! Yea we're back up and running.")
    }else{
        
        say("That's no fun")
        var timeDown = totalTimeDown(numberOfDaysDown)
        say(timeDown + " hours! Yea we're back up and running.")
    }// end else


    
  
whatHappened(problem1, problem2)

// added additional confrim to interact with the story
var wHapp = confirm ("Would you like to know what happened?")
    if (wHapp === true) {
      var string = whatHappened(problem1, problem2)
      say(string)  
    } else {
        say (" Well it would be good to tell you any way to prevent future issues.")
        var string = whatHappened(problem1, problem2)
        say(string);
        };// end else








