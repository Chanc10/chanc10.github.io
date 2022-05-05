
function openTab(event, tabNum){
    var i
    var tabContent;
    

    tabContent = document.getElementsByClassName('tabContent');

    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }

    tabButtons = document.getElementsByClassName('tabButtons');
    for(i = 0; i < tabButtons.length; i++){
        tabButtons[i].className = tabButtons[i].className.replace('active', "");
    }

    document.getElementById(tabNum).style.display = "block";
    event.currentTarget.className += " active";
}