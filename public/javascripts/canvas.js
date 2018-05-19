(function() {
  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });
  
  fabric.Object.prototype.transparentCorners = false;


  var drawingColorEl = $('drawing-color'),
      drawingLineWidthEl = $('drawing-line-width'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
  };

  
/*  
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
*/
/*
$('#drawing-line-width').change(event => {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  });

$('#drawing-color').change(event => {
    canvas.freeDrawingBrush.color = this.value;
  });
      $('#clear-canvas').click(event => {
        canvas.clear();
      });

      cdebug.click(event => {
          console.log(JSON.stringify(canvas));
        });

*/
    var debug = $('debug');

    debug.onclick = function() {
      console.log(JSON.stringify(canvas));
      console.log(canvas.isDrawingMode);
    };

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = 'purple';
    //  canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = 10;
    //  canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    }

})();

