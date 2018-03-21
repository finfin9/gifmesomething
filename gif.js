$(document).ready(function() {
  $('#get-gif').on('click', function(e) {
    $.ajax({
      method: 'get',
      url: 'http://api.giphy.com/v1/gifs/random',
      data: {
        'api_key': '2jvft6DQeD1IWpEHdvrxA4jus744CxYS',
        'tag': $('input#tag').val()
      },

      beforeSend: function() {
        $('#gif-here').slideUp('fast', function() {
          $('.overlay-loader').css('display', 'block')
        })
      },

      complete: function() {

      },

      error: function(data) {
        console.log('Something went wrong!')
        console.log(data)
      },
      success: function(res) {
        console.log('The cats arrived!')
        console.log(res)
        if (res.data.image_url == null) {
          $('.overlay-loader').css('display', 'none')
          $('#gif-here').html('Dafuq did you type?').show(500)
        } else {
          var img = '<img  src="' + res.data.image_url + '">'
          console.log(img)

          $('#gif-here').html(img)
          $('#gif-here').hide();
          $('#gif-here').find("img").on('load', function() {
            $('.overlay-loader').css('display', 'none')
            $(this).closest("#gif-here").show(500)
          });
        }
      }
    })
  })
});
