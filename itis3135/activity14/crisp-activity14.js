$(document).ready(function() {
    $("#nav_list li").click(function(){
    $.ajax({
        type: "get",
        url: "json_files/" + $(this).children("a").attr("title") + ".json",
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data)
        {
            $.each(data, function()
            {
                $.each(this, function(key, value){

                $("main h1").html(value.title),
                $("main h2").html(value.month),
                $("main h3").html(value.speaker),
                $("main img").html(value.image),
                $("main p").html(value.text)
                })
            });
        }
    })
});
}); // end ready