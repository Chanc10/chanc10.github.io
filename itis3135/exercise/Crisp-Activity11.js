// jQuery call to the accordion() method. //
$(document).ready(function() {
    $("#tabs").accordion({
        event: "mouseover",
        heightStyle: "content",
        collapsible: true
    });

});