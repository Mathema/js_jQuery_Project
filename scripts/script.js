$(document).ready(function(){

  function setUp(){
    $('.block').remove();
    var numberOfBlocks=prompt("How many squares per side?");
    for(var i=0; i<numberOfBlocks*numberOfBlocks; i++){
      var block = $('<div class="block"></div>');
      $('#grid').append(block);
    }
    $('.block').css({'height': 864/numberOfBlocks+'px', 'width': 960/numberOfBlocks+'px'});
    $('.block').on('mouseenter', function(){
      $(this).addClass('highlight');
    });
  };

  $('.reset').on('click', function(){
    $('.block').removeClass('highlight');
    setUp();

  });
});
