/* 
SKETCH 2 FOR JQUERY DEMO  
The code is similar to sketch-1 with some changes on how the div is created.
*/

// Select paragraph tags (in this case, there's only one in the document) and hide the element
$("p").hide();

for (let i = 0; i < 845; i++) {
    /* 
    Notice that the HTML code is wrapped in back ticks (` `) instead of quotations (" ") or apostrophes (' '). The back ticks allow us to use variables inside the string. 
    
    In this case, the variable being used is 'i' which is created by the for loop. The i variable will increase by 1 which will give a different width and color each time the div is created.
    */
    $("body").append(`<div class="block" style="width: ${i}px; height:100vh; background-color: hsl(${i},50%,50%);"></div>`)
}


// The rest is the same as sketch-1.
$(".block").each(function () {
    $(this).mouseenter(function () {
        $(this).addClass("no-width");
    })
})

$(document).on("keypress", function () {
    $(".block").removeClass("no-width");
});