$(document).ready(function(){
    var box = $(".box");

    //hide
    $("#hide-btn").click(function(){
        box.hide();
    });

    //show
    $("#show-btn").click(function(){
        box.show();
    });

    //toggle
    $("#toggle-btn").click(function(){
        box.toggle();
    });
});