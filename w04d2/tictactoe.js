$(document).ready(function(){
  //
  // is there a winner yet?
  //

  //
  // on each turn, this event handler will run
  //
  $("td").click(function(){
    const next = $("#next").html(); // find out who plays next
    $(this).addClass(next); // add that players idenity to the TD
    if ('X' === next){ // switch who is playing
      $("#next").html('O');
    } else {
      $("#next").html('X');
    }
    $(this).unbind("click"); // remove the click event handler from this TD


    const $newDOMElement = $("<h2>I was clicked.</h2>");
    $('table').append($newDOMElement);


  });

});
