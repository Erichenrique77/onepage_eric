$(document).ready(function () {

  $('#btn-menu').click(function (e) {
    e.preventDefault()
    $('#menu').toggle('slow')
  })

  $('a').click(function (e) {
    e.preventDefault()
    let url = $(this).attr('href')
    $('#' + url).show()

    if (id == 'home') {
      $("# + id").show();
      $("#acao").hide();
      $("#sobre").hide();
      $("#contact").hide();
      } else if 
  });

});
