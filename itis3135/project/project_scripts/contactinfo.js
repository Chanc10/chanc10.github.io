$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "project_scripts/contactinfo.json",
        beforeSend: function() {
            $("#contactinfo").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#contactinfo").html("");
            $.each(data, function() {

                $.each(this, function(key, value){

                $("#contactinfo").append
                    ("Name: " + value.name + "<br>" +
                    "Email: " + value.email + "<br>" +
                    "Phone: " + value.phone + "<br>");
                    })
            });
        }
    });
});