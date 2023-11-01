//160 circles created within the box "container"
for (let step = 0; step < 160; step++) {
    let circles = '<div class="circle">';
    $(".container").append(circles);
}

//call all elements of class circle and hover 
const buttons = $(".circle")
for (const button of buttons) {
    $(button).hover(function () {
        $(this).css("width", "25px");
        $(this).css("height", "25px");
    });
}

//to get random values 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


$(".circle").each(function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")");
        //to center the circle within the div
        $(this).css("margin", "auto");
    })

    $(this).on("click", function () {
        //delay of 1000 milliseconds before increasing the size
        $(this)
            .delay(1000)
            .queue(function (next) {
                $(this).css("width", "50px");
                $(this).css("height", "50px");
                next(); // Continue the queue
            });
    });

})

