// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
/*TO DO: add .ready so the jQuery waits for the dom structure to load completely*/
$(document).ready(function makeGrid(){

  $('#sizePicker').submit(function makeGrid(grid){
    $('table tr').remove();
    /*TO DO: create variables for height and width of the grid*/
    var height = $('#input-Height').val();
    var width =$('#input-Weight').val();
      /*TO DO: loop function to iterate over the grid variables*/
      for (var i = 1; i<= height; i++){
        $('table').append('<tr></tr>');
        for (var j = 1; j<= width; j++){
          $('tr:last').append('<td></td>');// tr:last - so the additional collums are added only to the last collumn of the grid.
          $('td').attr('class', 'pixels');// adding class atribute to the td, so we can call back on it later in the .on(click) fucntion.
        }
      }
      /*TO DO: prevent the grid from dissapearing by preventDefault()*/
      grid.preventDefault();
      /*TO DO: make the pixels change color on click*/
      $('.pixels').click(function(event) {
        var color = $('#colorPicker').val();
        $(event.target).css('background-color', color);
      })
  });
});
