// Do your work in this file.

for (var i = 1; i <= 196; i++) {
    var remainder = i % 2;
    switch(remainder) {
        case 0:
            $("<div>").addClass("box type-1").appendTo(document.body);
            break;
        case 1:
            $("<div>").addClass("box type-2").appendTo(document.body);
            break;
    }
}


$(".box").click(function() {
    if($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
    }
})


// $(".box").click(function() {
//     $(this).addClass("clicked");
// });
