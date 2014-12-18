$(document).ready(function () {
    var canvas = document.getElementById("MyCanvas");
    var context = canvas.getContext("2d");
    var draw = false;

    context.strokeStyle = '#1685ad';

	var curColor = colorPurple;
	var curSize = "normal";


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
	
	var colorPurple = "#cb3594";
	var colorGreen = "#659b41";
	var colorYellow = "#ffcf33";
	var colorBrown = "#986928";
	
	//mouseleave
    $('#MyCanvas').mouseleave(function(e){
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
	$('#chooseSmall').mousedown(function(e){
		curSize = "small";
	});
	$('#chooseNormal').mousedown(function(e){
		curSize = "normal";
	});
	$('#chooseLarge').mousedown(function(e){
		curSize = "large";
	});
	$('#chooseHuge').mousedown(function(e){
		curSize = "huge";
	});
	
	$('#clearCanvas').mousedown(function(e)
	{
		clickX = new Array();
		clickY = new Array();
		clickDrag = new Array();
		clickColor = new Array();
		clickSize = new Array();
		clearCanvas();
	});
}

	//add click
	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var clickColor = new Array();
	var clickSize = new Array();
	var paint;

	function addClick(x, y, dragging)
	{
  	clickX.push(x);
  	clickY.push(y);
  	clickDrag.push(dragging);
  	clickColor.push(curColor);
	clickSize.push(curSize);
	}

function clearCanvas()
{
	context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function redraw(){
{
	clearCanvas();
	
	var radius;
	context.lineJoin = "round";
	
			
	for(var i=0; i < clickX.length; i++)
	{
		if(clickSize[i] == "small"){
			radius = 2;
		}else if(clickSize[i] == "normal"){
			radius = 5;
		}else if(clickSize[i] == "large"){
			radius = 10;
		}else if(clickSize[i] == "huge"){
			radius = 20;
		}
	
		context.beginPath();
		if(clickDrag[i] && i) {
      		context.moveTo(clickX[i-1], clickY[i-1]);
    	}
    	else {
       		context.moveTo(clickX[i]-1, clickY[i]);
    	}
		context.lineTo(clickX_MyCanvas[i], clickY_MyCanvas[i]);
		context.closePath();
		context.strokeStyle = clickColor_MyCanvas[i];
		context.lineWidth = radius;
		context.stroke();
	}
}
