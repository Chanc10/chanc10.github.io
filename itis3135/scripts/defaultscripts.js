function doubtMe(){
    alert("I love you");
}

var companyName = "Crisp Incorporated";


function displayGreeting(){
    var firstName = document.introForm.firstName.value;
    var feeling = document.introForm.feeling.value;

    alert(companyName + " welcomes you, " 
         + firstName + "! " + "We're glad you are " 
         + feeling + "!");
}

function claimFreeMoney(){
    var message = "Congratulations! You are now infected!"

    alert(message);
}

function funnyFace(){
    var message = "( Í¡à²¥â€¯ÍœÊ– Í¡à²¥)";

    alert(message);
}

function LUL(){
    var message = "LUL";
    document.write(message + "<br>");
    setInterval("LUL()", 50);
}




