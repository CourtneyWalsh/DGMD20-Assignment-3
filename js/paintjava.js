$(document).ready(function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var draw = false;
    var colorRed = "#e52d2d";
    var colorOrange = "#ffa500";
    var colorYellow = "#ffff32";
    var colorGreen = "#659b41";
    var colorBlue = "#2828cc";
    var colorPurple = "#a64ca6";
    var colorBrown = "#986928";
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var clickColor = new Array();
    var clickSize = new Array();
    var paint;
    var curColor = colorPurple;
    var clickColor = new Array();
    var started = false;

    context.strokeStyle = '#1685ad';


    //mousedown
    $("#myCanvas").mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
        
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
    });

    //mouseup
    $("#myCanvas").mouseup(function(e){
    paint = false;
    });

    //mousemouve
    $("#myCanvas").mousemove(function (e) {
         if(paint) {
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
            }
    });

    //mouseleave
    $('#myCanvas').mouseleave(function(e) {
    paint = false;
    });


    $('#choosePurple').mousedown(function(e){
        curColor = colorPurple;
    });
    $('#chooseGreen').mousedown(function(e){
        curColor = colorGreen;
    });
    $('#chooseYellow').mousedown(function(e){
        curColor = colorYellow;
    });
    $('#chooseBrown').mousedown(function(e){
        curColor = colorBrown;
    }); 
    $('#chooseRed').mousedown(function(e){
        curColor = colorRed;
    });
    $('#chooseBlue').mousedown(function(e){
        curColor = colorBlue;
    });
    $('#chooseOrange').mousedown(function(e){
        curColor = colorOrange;
    });
   $('#clearCanvas').mousedown(function(e)
    {
        clickX = new Array();
        clickY = new Array();
        clickDrag = new Array();
        clickColor = new Array();
        clearCanvas();
    });

    //add click
    function addClick(x, y, dragging)
    {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(curColor);
    }

    //clear canvas
    function clearCanvas() {
        context.fillStyle = '#ffffff'; // Work around for Chrome
        context.fillRect(0, 0, 900, 500); // Fill in the canvas with white
        canvas.width = canvas.width; // clears the canvas 
    }


    //redraw 
    function redraw() {
    clearCanvas();

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;
            
    for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }
        else {
            context.moveTo(clickX[i]-1, clickY[i]);
        }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.strokeStyle = clickColor[i];
            context.stroke();
        }
    }

});