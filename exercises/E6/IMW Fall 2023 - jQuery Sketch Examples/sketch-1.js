/* 
SKETCH 1 FOR JQUERY DEMO
*/

// For loop creating 1700 elements.
for (let i = 0; i < 1700; i++) {
    // Select the element with the id name of blocks and add the HTML div to the blocks container.
    $("#blocks").append(`<div class="block" style="width: 100%; height:10px;background-color: white;"></div>`)
}

// Select all of the blocks that were created by the for loop and access each individual one of them.
$(".block").each(function () {
    // Keyword 'this' references the current block the cursor is on
    $(this).mouseenter(function () {
        // When the cursor is on a specific block, then add the class 'no-width'. See CSS file for styles.
        $(this).addClass("no-width");
    })
})

// Select the entire document and when a key is pressed...
$(document).on("keypress", function () {
    // Select all of the blocks again, and remove the class 'no-width'.
    $(".block").removeClass("no-width");
});

