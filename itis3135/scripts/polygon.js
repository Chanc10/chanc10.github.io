/**The work submitted here is my work - I have not copied and pasted code into these pages. 
 * I have gotten help from no one. and these sites: (list the sites). 
 * - Sign with First M. Last and include the date and time. 
 * Chandler Crisp, 04/27/2022 5:53 PM.
 */

 function getNumberOfSides(){
    
    var numSides = parseInt(prompt("Creative Cats wants to tell you the name of a shape based on the number of sides you enter from the range of 1-10"));
    numSides = Math.abs(numSides);
    var validatedNumSides = validateEntry(numSides);    
    var results = getShape(validatedNumSides);      
    alert(results);     
}

function validateEntry(numSides){      

    while(numSides < -10 || numSides > 10 || isNaN(numSides)){    
        numSides = parseInt(prompt("Creative Cats states that is an invalid entry, please try again."));
    }
    return Math.abs(numSides);
}

function getShape(validatedNumSides){       

    var shapeName;
    if(validatedNumSides == 0)
        shapeName = "Not a shape";
    if(validatedNumSides == 1)
        shapeName = "Henagon";
    if(validatedNumSides == 2)
        shapeName = "Digon";
    if(validatedNumSides == 3)
        shapeName = "Trigon";
    if(validatedNumSides == 4)
        shapeName = "Tetragon";
    if(validatedNumSides == 5)
        shapeName = "Pentagon";
    if(validatedNumSides == 6)
        shapeName = "Hexagon";
    if(validatedNumSides == 7)
        shapeName = "Heptagon";
    if(validatedNumSides == 8)
        shapeName = "Octagon";
    if(validatedNumSides == 9)
        shapeName = "Enneagon";
    if(validatedNumSides == 10)
        shapeName = "Decagon";
    
    return shapeName;   
}

getNumberOfSides();