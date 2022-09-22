$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function (evt) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    evt.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
if(evt.which === 13){
  var todoText = $(this).val();
  $(this).val("");
  $("ul").append("<li><span><i class='fa-solid fa-trash-can'></i></span>" + todoText + "</li>")
}
});

$(".fa-circle-plus").click(function(){
    $("input[type='text']").fadeToggle();
});