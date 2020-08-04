//Check off to do item by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

//Add to do
$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
})

//Toggle input
$(".fa-plus-square").click(function() {
    $("input[type='text']").fadeToggle();
})