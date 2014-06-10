"use strict";



$(function() {
    console.log( "ready!" );

    var current_turn = 'X'

// function toggle_current_turn()

//     var square = $(event.target);
//     var current_value= square.html();

//     if (current_value =="")

//       square.html((current_turn);
//         togle.current_turn);

// // upon clicking the box click 

var toggleTurn = function () {
  console.log("turn is toggled");
    if (current_turn == "X"){
      current_turn = "O";

    } else {
      current_turn = "X";
    };
};

 // var win = function (){
  // if box 1 ==2 == 3 
 //  if ("td#0" == "td#1"){
 //     console.log("x wins");
 //  }
// };


       // if ( $("#0").val() == "x" && $("#4").val() == "x" && $(".box8").val() == "x" )  {       
    
       //         $("#button").text("X WINS! Congratulations");


// };      
//

$('.button').click(
   function(event){
   // console.log('reset clicked');
    $('td').html("");
  });

$('#board').delegate(
  'td', 'click', function(event){

    var turn = $(event.target).html(current_turn);
    toggleTurn();
    console.log(turn);

  });



});