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
        // $('#header .row .depth1 > li').on('mouseover mouseout', function(){
        //     if ($('html').hasClass('pc')) {
        //         $(this).toggleClass('on').siblings().removeClass('on')
        //     }
        // })
        $('#header .row .depth1 > li').hover(
            function() {
                if ($('html').hasClass('pc')) {
                            $(this).addClass('on')
                        } 
            },
            function() { if ($('html').hasClass('pc')) {
                $(this).removeClass('on')
            } 
                }
        )

        $('#header .row .depth2 > li').on('mouseover mouseout', function(){
                $(this).toggleClass('on')
        })

        $('#header .row .open').on('click', function(){
                $(this).next().slideToggle()
        })
        // open 다음 동생인 navbox
        $('#header .row .depth1 > li > a').on('click', function(){
            if($('html').hasClass('mobile')) {
                $(this).next().slideToggle()
                $(this).parent().siblings().find('.depth2').slideUp()
                return false
            }
           // a 다음 동생인  denth2
        })
