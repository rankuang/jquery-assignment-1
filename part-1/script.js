// Do your work in this file.

//Create a `div` element with a class name of "**view**" and append it to the document `body`
// var div = document.createElement("div");
// $(div).addClass("view").appendTo(document.body);

$("<div>").addClass("view").appendTo(document.body);

// $("view").add("div").addClass("grass");
// It add another class to .view. Did I misunderstand the add()?

$("<div>").addClass("grass").appendTo(".view");

$("<div>").addClass("sun").appendTo(".view");

var i = 1;
while (i <= 5) {
    $("<div>").addClass("ray-" + i).appendTo(".sun");
    i++;
}

$("<div>").addClass("mountain").appendTo(".view");
$("<div>").addClass("mountain-top").appendTo(".mountain");

var i = 1;
do {
    $("<div>").addClass("mountain-cap-" + i).appendTo(".mountain-top");
    i++;
} while (i <= 3)