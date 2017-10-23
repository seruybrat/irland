(function() {

    function equalHeight(target) {
        var maxHeight = 0;
        var trgt = $(target);

        trgt.removeAttr("style");

        trgt.each(function() {
            maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        trgt.each(function() {
           $(this).height(maxHeight);
        });
    }

    function scrollToAnchor(id){
        var headerHeight = 102;
        var aTag = $(id);

        $('html,body').animate({scrollTop: aTag.offset().top - headerHeight},'slow');
    }

    function fullHeight() {
        $('.top-wrapper').height(function (index, height) {
            return window.innerHeight ;
        });
    }

    function toggleClassScroll(item) {
        var scroll = $(window).scrollTop();
        var trgt = $(item);

        if (scroll >= trgt.offset().top - window.innerHeight/2 && scroll < trgt.offset().top - 50) {
            trgt.addClass('active');
              
        } else {
            trgt.removeClass('active');
        }
    }

    $(document).ready(function() {

        fullHeight();

        $('.hamburger').click(function () {
            $('#menu-desktop').toggleClass('open');
        });

        $('.tabs__item').click(function() {

            $('.tabs__item, .top').removeClass('active');
            $('.output').hide();
            var trgt = $(this);

            switch(trgt.data('item')) {

                case 'customers': 
                    $('#output1').addClass('active');
                    trgt.addClass('active');
                    $('.provider-js').show();
                    break;

                case 'providers': 
                    $('#output2').addClass('active');
                    trgt.addClass('active');
                    $('.client-js').show();
                    break;

                case 'manufactures': 
                    $('#output3').addClass('active');
                    trgt.addClass('active');
                    $('.manufactures-js').show();
                    break;

                case 'softwareDevs': 
                    $('#output4').addClass('active');
                    trgt.addClass('active');
                    $('.sofrwareDevs-js').show();
                    break;

                case 'insurance':
                    $('#output5').addClass('active');
                    trgt.addClass('active');
                    $('.insurance-js').show();
                    break;

                case 'state':
                    $('#output6').addClass('active');
                    trgt.addClass('active');
                    $('.state-js').show();
                    break;

            }
            
            equalHeight('.benefits__txt');
            equalHeight('.how__item');

        });

        // var loopTrgt = $('.tabs__item');
        // var counter = 0;

        // setInterval(function(){
        //     if (counter >= 6) {
        //        counter = 0
        //     }
        //     loopTrgt[counter].click();
        //     counter++;
        //     console.log(counter);
        // }, 5000);
    

        $(".scroll_link").click(function() {
           scrollToAnchor($(this).attr('href'));
           $('#menu-desktop').removeClass('open');
        });

        // modal

        $('.modal_link').click(function() {
            $('#form-modal').fadeIn();
            $('#menu-desktop').removeClass('open');
            return false;
        });

        $('.emergency_link').click(function() {
            $('#emergency').fadeIn();
            $('#menu-desktop').removeClass('open');
            return false;
        });

        $('.modal__close').click(function() {
            $('.modal').fadeOut();
        });

        $('.form__input').on('focus', function() {
            $(this).siblings('.form__lbl').addClass('active');
        });

        $('.form__input').on('blur', function() {
            if (!$(this).val()) {
                $(this).siblings('.form__lbl').removeClass('active');
            }
        });

         //E-mail Ajax Send

       $("form").submit(function(e) {

            e.preventDefault();

            var th = $(this);

            $.ajax({
                type: th.attr('method'),
                url: th.attr('action'),
                data: th.serialize()

            }).done(function() {

                $('#form-succes').fadeIn();

                setTimeout(function() {
                    th.trigger("reset");
                    $('.modal').fadeOut();
                    $('.form__lbl').removeClass('active');
                }, 5000);
            });

        });

        equalHeight('.benefits__txt');
        equalHeight('.how__item');


    });

    $(window).resize(function(){

        equalHeight('.benefits__txt');
        equalHeight('.how__item');
        fullHeight();

    });

    $(window).scroll(function() { 

        if (window.matchMedia('(max-width: 550px)').matches) {

            $('.how__item').each(function() {
                toggleClassScroll(this);
            });

            $('.benefits__txt').each(function() {
                toggleClassScroll(this);
            });

        } else {
            $(window).unbind('scroll');
        }
       
    });

})();