$(function () {
    //alert('Javascript and JQuery are working.');
    
    $("#pillars ul").hide();

    $("#pillars").hover(function () {
        $("#pillars ul").stop(true, false).slideDown(200);
    }, function() {
        $("#pillars ul").stop(true, false).slideUp(100);
    });
    
});