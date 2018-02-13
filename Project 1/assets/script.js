



$(document).mousemove(function(e){

  // update mouse x and y position
  xPos = e.pageX;
  yPos = e.pageY;
  $('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

  // change div with the id "element"s CSS when you move your mouse
  $('#triangle').css({
    'transform' : 'rotate3d(' + xPos/100 + ',130,100,' + xPos + 'deg)',


  });
});
