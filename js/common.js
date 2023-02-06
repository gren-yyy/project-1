var ww = $(window).width()
        if (ww>1024) {
            $('html').addClass('pc')
        } else {$('html').addClass('mobile')}
        console.log(ww)

        // $('#header .row .depth1 > li').on('mouseover mouseout', function(){
        //     if ($('html').hasClass('pc')) {
        //         $(this).toggleClass('on')
        //     }
        // })
        $('#header .row .depth1 > li').on('mouseover mouseout', function(){
            if ($('html').hasClass('pc')) {
                $(this).toggleClass('on').siblings().removeClass('on')
            }
        })
        $('#header .row .depth2 > li').on('mouseover mouseout', function(){
            if($('html').hasClass('pc')) {
                $(this).toggleClass('on')
                return false
            }
        })

        $('#header .row .open > i').on('click', function(){
            if($('html').hasClass('mobile')) {
                $(this).parent().toggleClass('on')
                return false
            }
        })

        $('#header .row .depth1 > li').on('mouseover mouseout', function(){
            if($('html').hasClass('mobile')) {
                $(this).toggleClass('on')
            }
        })

        $('#header .row .depth2 > li').on('mouseover mouseout', function(){
            if($('html').hasClass('mobile')) {
                $(this).toggleClass('on')
            }
        })