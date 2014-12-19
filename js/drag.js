$(document).ready(function () {
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var $canvas=$("#myCanvas");
var canvasOffset=$canvas.offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;

//Cat
var image1=new Image();
image1.src = "images/cat.png";

var $cat=$("#cat");
var $myCanvas=$("#myCanvas");

$cat.draggable({
    helper:'clone',
});
// set the data payload
$cat.data("image",image1); // key-value pair

//Dog
var image2=new Image();
image2.src = "images/dog.png";

var $dog=$("#dog");
var $myCanvas=$("#myCanvas");

$dog.draggable({
    helper:'clone',
});
// set the data payload
$dog.data("image",image2); // key-value pair

//Bug
var image3=new Image();
image3.src = "images/bug.png";

var $bug=$("#bug");
var $myCanvas=$("#myCanvas");

$bug.draggable({
    helper:'clone',
});
// set the data payload
$bug.data("image",image3); // key-value pair

//Ribbon
var image4=new Image();
image4.src = "images/ribbon.png";

var $ribbon=$("#ribbon");
var $myCanvas=$("#myCanvas");

$ribbon.draggable({
    helper:'clone',
});
// set the data payload
$ribbon.data("image",image4); // key-value pair

$myCanvas.droppable({
    drop:dragDrop,
});


function dragDrop(e,ui){
    var element=ui.draggable;
    var data=element.data("url");
    var x=parseInt(ui.offset.left-offsetX);
    var y=parseInt(ui.offset.top-offsetY);
    ctx.drawImage(element.data("image"),x-1,y);
}
});
