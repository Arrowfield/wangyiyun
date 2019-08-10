$(function () {

    $('.goto-login').click(function () {
        $('#demo').show()
        //mychange('.login')
    })

    $('[data-change=change]').click(function(){
        //if(timer){time=60;clearInterval(timer)}
        $('#demo').hide()
        //mychange('.login')
      })
      

    $('.modal-header').on({
        mousedown: function (e) {
            var el = $('.modal-content')
            var os = el.offset();
            var left = e.pageX - os.left,
                top = e.pageY - os.top;
            $(document).on("mousemove.drag", function (e) {
                el.offset({
                    top: e.pageY - top,
                    left: e.pageX - left
                })
            }).on('mouseup', function (e) {
                $(document).off('mousemove.drag')
            })
        }
    })

})