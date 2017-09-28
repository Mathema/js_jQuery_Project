$(document).ready(function(){
  var currentcolor = '#000000';
  var colorcodes = ['#FF0000', '#FF7C00', '#FFFF00', '#5DFF00', '#0078FF', '#B200FF'];

  function setUp(){
    $('.block').remove();
    var numberOfBlocks=prompt("How many squares per side?");
    alert(numberOfBlocks);
    if(!numberOfBlocks)
    numberOfBlocks = 1;
    for(var i=0; i<numberOfBlocks*numberOfBlocks; i++){
      var block = $('<div class="block"></div>');
      $('#grid').append(block);
    }
    $('.block').css({'height': 864/numberOfBlocks+'px', 'width': 960/numberOfBlocks+'px'});

    $('.block').on('mouseenter', function(){

      //$(this).addClass(currentcolor);
      $(this).css('background-color', currentcolor);
    });
  };



  $('.reset').on('click', function(){
    //$('.block').removeClass('highlight');

    setUp();
  });

  $('.random').on('click', function(){
    //$('.block').removeClass(currentcolor);
    currentcolor = colorcodes[Math.floor(Math.random()*colorcodes.length)];
  });
  $('.rainbow').on('click', function(){
    //$('.block').removeClass(currentcolor);
    var x =0;
    $('.block').on('mouseenter', function(){
      x%=colorcodes.length;
       currentcolor = colorcodes[x];
      //$(this).addClass(currentcolor);
      $(this).css('background-color', currentcolor);
      x++;
    });
  });

});
