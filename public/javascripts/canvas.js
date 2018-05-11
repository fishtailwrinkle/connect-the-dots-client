(function() {
  var $ = function(id){return document.getElementById(id)};

  var canvas = this.__canvas = new fabric.Canvas('c', {
    isDrawingMode: true
  });
 
/*canvas.loadFromJSON('{"objects":[{"type":"path","version":"2.2.3","originX":"left","originY":"top","left":163.25685258964143,"top":272.04046812749004,"width":0.06,"height":0.06,"fill":null,"stroke":"#ff0000","strokeWidth":30,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",178.25685258964143,287.04046812749004],["L",178.31685258964143,287.10046812749]]},{"type":"path","version":"2.2.3","originX":"left","originY":"top","left":163.25685258964143,"top":272.04046812749004,"width":0.06,"height":0.06,"fill":null,"stroke":"#ff0000","strokeWidth":30,"strokeDashArray":null,"strokeLineCap":"round","strokeLineJoin":"round","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","paintFirst":"fill","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"path":[["M",178.25685258964143,287.04046812749004],["L",178.31685258964143,287.10046812749]]}]}');
*/
  
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

