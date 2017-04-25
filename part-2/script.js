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