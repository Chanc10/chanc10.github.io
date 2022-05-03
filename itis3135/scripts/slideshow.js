   
var slideIndex = 1;
    displaySlide(slideIndex);

function moveSlides(n){
    displaySlide(slideIndex += n);
}
function activeSlide(n){
    displaySlide(slideIndex = n);
    }

    function displaySlide(n){

        var i;
        var totalSlides = document.getElementsByClassName("slide");
        var totalDots = document.getElementsByClassName("footerdot");

            if(n > totalSlides.length){
                slideIndex = 1;
            }

            if(n < 1){
                slideIndex = totalSlides.length;
            }

                for(i = 0; i < totalSlides.length; i++){
                    totalSlides[i].style.display = "none";
                }

                for(i = 0; i < totalDots.length; i++){
                    totalDots[i].className = totalDots[i].className.replace(" active", "");
                }

                totalSlides[slideIndex - 1].style.display = "block";
                totalDots[slideIndex - 1].className += " active";
    }