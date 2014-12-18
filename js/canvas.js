$(document).ready(function () {
    var canvas = document.getElementById("MyCanvas");
    var context = canvas.getContext("2d");
    var draw = false;

    context.strokeStyle = '#1685ad';

    //mousedown
    $("#MyCanvas").mousedown(function(e){
  	var mouseX = e.pageX - this.offsetLeft;
  	var mouseY = e.pageY - this.offsetTop;
		
  	paint = true;
  	addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  	redraw();
	});

    //mouseup
    $("#MyCanvas").mouseup(function(e){
  	paint = false;
	});

    //mousemouve
    $("#MyCanvas").mousemove(function (e) {
         if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  	}
	});

    //mouseleave
    $('#MyCanvas').mouseleave(function(e){
  	paint = false;
	});

    //add click
	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var paint;

	function addClick(x, y, dragging)
	{
  	clickX.push(x);
  	clickY.push(y);
  	clickDrag.push(dragging);
  	clickColor.push(curColor);
	}

	var colorPurple = "#cb3594";
	var colorGreen = "#659b41";
	var colorYellow = "#ffcf33";
	var colorBrown = "#986928";

	var curColor = colorPurple;
	var clickColor = new Array();


	function redraw(){
  	context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
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
