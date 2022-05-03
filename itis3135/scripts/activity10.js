$(document).ready(function() {


    /*// preload the image for each link
    $('#image_list a').each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr('href');
    });
    
    // set up the event handlers for each link
    $('#image_list a').click(function(evt) {

        //swap image
        var imageURL = $(this).attr("href");
        $('#main-image').attr('src', imageURL);

        //swap caption
        var caption = $(this).attr('title');
        $('#caption').text(caption);
    });
    */
    
    var image, imageCounter = 0, imageCache = [];
    $('#image_list a').each(function() {
        image = new Image();
        image.src = $(this).attr('href');
        image.title = $(this).attr('title');
        imageCache[imageCounter] = image;
        imageCounter++;
    });

    imageCounter = 0;
    var nextImage;

    setInterval(function(){

        $("#caption").fadeOut(1000);
        $("#main-image").fadeOut(1000, function(){
            imageCounter = (imageCounter + 1) % imageCache.length;
            nextImage = imageCache[imageCounter];

            $("#main-image").attr('src', nextImage.src).fadeIn(1000);
            $("#caption").text(nextImage.title).fadeIn(1000);
        });
    }, 3000);
}); 