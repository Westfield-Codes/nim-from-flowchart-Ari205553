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

}

/** 
 * user gets a turn from the user and checks if it is cheating with recusion * 
 * @param none. 
 * @param none. 
 * @return none. 
 */
function userTurn(){

}
/** 
 * cpuTurn runs a computer turn based on the mode  * 
 * @param none. 
 * @param none. 
 * @return none. 
 */
function cpuTurn(){
    
}