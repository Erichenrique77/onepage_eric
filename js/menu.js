$(document).ready(function () {

  $('#btn-menu').click(function (e) {
    e.preventDefault()
    $('#menu').toggle('slow')
  })

 $('a').click(function(e){
    e.preventDefault()
    let url = $(this).attr('href')
    $('#'+url).show()

    if (id == '#home') {
      $('home').toggle();
      $('acao').hide(1000);
      $('sobre').hide(1000);
      $('contact').hide(1000);
      


      }

  })
}) 