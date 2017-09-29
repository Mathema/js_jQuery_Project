$(document).ready(function(){
  var currentcolor = '#000000';
  var colorcodes = ['#FF0000', '#FF7C00', '#FFFF00', '#5DFF00', '#0078FF', '#B200FF'];
  var state ='';
  function setUp(){
    $('.block').remove();
    var numberOfBlocks=prompt("How many squares per side?\n(For best performance choose a number below 150)");

    if(!numberOfBlocks)
    numberOfBlocks = 1;

    for(var i=0; i<numberOfBlocks*numberOfBlocks; i++){
      var block = $('<div class="block"></div>');
      $('#grid').append(block);
    }
    $('.block').css({'height': $('#grid').height()/numberOfBlocks+'px', 'width': 960/numberOfBlocks+'px'});

    //draw();

  };

  function draw(){
    var x=0;
    $('.block').on('mouseenter', function(){

      //$(this).addClass(currentcolor);
      switch(state){
        case 'rainbow':
          x%=colorcodes.length;
          currentcolor = colorcodes[x];
          x++;
          break;
        default:
          currentcolor = currentcolor;
          break;

      }
      $(this).css('background-color', currentcolor);
    });
  };

  $('.reset').on('click', function(){
    //$('.block').removeClass('highlight');
    setUp();
    draw();
  });

  $('.random').on('click', function(){
    //$('.block').removeClass(currentcolor);
    state = 'random';
    currentcolor = colorcodes[Math.floor(Math.random()*colorcodes.length)];
    //currentcolor = colorcodes[Math.floor(Math.random()*colorcodes.length)];
    //draw();
  });
  $('.rainbow').on('click', function(){
    state = 'rainbow';
    ;
    //$('.block').removeClass(currentcolor);
    //var x =0;
    //$('.block').on('mouseenter', function(){
      //x%=colorcodes.length;
       //currentcolor = colorcodes[x];
      //$(this).addClass(currentcolor);
      //$(this).css('background-color', currentcolor);
//x++;
    });
  });
