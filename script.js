/* nim trainer by Ari*/
*/

/* Global variables */
var trainer = false;
var count = 0;

/** 

 * main lets user play and control the game* 
 * @param none. 
 * @return none. 
 */
function main(){
    let again = false; 
     trainer = confirm("trainer mode?");
    playNim();
    trainer = confirm("again?");
    if (again == true) main();
    }
/** 
 *playNim runs nim player first and then computer, and says who wins.  * 
 * @param none. 
 * @param none. 
 * @return none. 
 */
function playNim(){
    count = 0;
    while (count < 21){
        playerTurn();
        if ( count > 20) alert(" you lose !");
        else  cpuTurn();
        if (count > 20) alert(" you win !");
    }

}

/** 
 * user gets a turn from the user and checks if it is cheating with recusion * 
 * @param none. 
 * @param none. 
 * @return none. 
 */
function userTurn(){
    count += 3;
    alert(" you counted 3 . count is now " + count);
    var  turn;
    if (turn < 1 || turn > 3){
         alert("you're cheating !");
        userTurn();
    }
    else {
         count += turn;
         alert(" count is now" + count);
    }
}
/** 
 * cpuTurn runs a computer turn based on the mode  * 
 * @param none. 
 * @param none. 
 * @return none. 
 */
function cpuTurn(){
    count += 1;
    alert(" I counted 1 . count is now " + count);
    if (count = 19 ||20) turn= 1;
    else if (count = 18) turn= 2;
    else if (count = 17) turn= 3;
    else if (trainer == false) turn= Math.floor(Math.random ()*3) + 1;
    else turn = 4 - count % 4;
    count+= turn;
    alert(" I count" + turn + " count" + count);
}

