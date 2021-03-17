$(document).ready(function(){
  add_remove_edit();
});


function add_remove_edit() {
  $('#add').click(function() {
// AL CLICK PRENDO IL VALORE DELL IMPUT,
// FACCIO LA COPIA DELL LI MODELLO
// METTO IL VALORE ELL IMPUT PRIMA DELLA COPIA
    var que_hacer = $('#que_hacer').val();
    $('#que_hacer').val('');
    var copia = $('.list_none li').clone()
    copia.children('span').text(que_hacer);
// CLICCANDO SU REMOVE ELIMINO L ELEMENTO AGGIUNTO
    copia.children('#remove').click(function () {
      $(this).parent().remove();
    });
// CLICCANDO SU EDIT MODIFICO L ELEMENTO
    copia.children('#edit').click(function () {
    var ind_span = $(this).siblings('span');
    var val = ind_span.text();
    ind_span.addClass('none');
    $(this).siblings('.edit_mode').removeClass('none').addClass('active').val(val);
    });
    $('#lista').append(copia);
    $('.edit_mode').keydown(function(e) {
      if (e.which == 13) {
        var val = $(this).val();
        $(this).siblings('span').text(val).removeClass('none').addClass('active');
        $(this).removeClass('active').addClass('none');
      }
    })
  })
}
