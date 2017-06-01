$(document).ready(function() {
  $('#get-gif').on('click', function(e) {
    $.ajax({
      method: 'get',
      url: 'http://api.giphy.com/v1/gifs/random',
      data: {
        'api_key': 'dc6zaTOxFJmzC',
        'tag': $('input#tag').val()
      },

      beforeSend: function() {
        $('#gif-here').slideUp('fast', function() {
          $(this).css('display', 'none')
          $('.overlay-loader').css('display', 'block')
        })
      },

      complete: function() {
        $('.overlay-loader').css('display', 'none')
      },

      error: function(data) {
        console.log('Something went wrong!')
        console.log(data)
      },
      success: function(res) {
        console.log('The cats arrived!')
        console.log(res)
        var img = '<img src="' + res.data.image_url + '">'
        console.log(img)
        $('#gif-here').html(img).css('display', 'block')
      }
    })
  })
});
