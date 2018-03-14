// $("button").on("click",function(){
//   $('div').fadeOut(1000, function() {
//     console.log("Fadeout Completed!");
//     $(this).remove();
//   });
// });
// $("button").on("click",function(){
//   $('div').fadeIn(1000, function() {
//     console.log("Fadeout Completed!");
//     $(this).remove();
//   });
// });
// $("button").on("click",function(){
//   $('div').fadeToggle(500);
// });
// $("button").on("click",function(){
//   $('div').slideUp();
// });
// $("button").on("click",function(){
//   $('div').slideDown();
// });
$("button").on("click",function(){
  $('div').slideToggle(1000, function() {
    console.log("Slide Toggle Done");
  });
});
