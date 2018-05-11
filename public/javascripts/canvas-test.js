var canvas;

(function() {
  canvas = this.__canvas = new fabric.Canvas('canvas');
  canvas.backgroundColor = '#000000';
  canvas.isDrawingMode = 1;
  canvas.freeDrawingBrush.color = "purple";
  canvas.freeDrawingBrush.width = 10;
  canvas.renderAll();


    var debug = $('debug');

    debug.onclick = function() {
      console.log(JSON.stringify(canvas));
      console.log(canvas.isDrawingMode);
    };


})();

