$(document).ready(function () {
    $("html, .presents, .present-list").niceScroll({
        cursorcolor: "#8B8989",
        cursoropacitymin: 1,
        cursorwidth: "8px"
    });

    $('.block-p').on('click', function () {

        var image = $(this).children('.img').clone();

        if (!$(this).hasClass('cloned')) {
            $(this).prepend('<div class="selected" data-index="' + $(this).index() + '">' +
                '<i class="fa fa-check-square-o" style="font-size: 28px"></i>' +
                '<p class="click">This item has already been added to your list</p></div>');

            image.children().addClass('img-tr');
            $('.present-list').append('<div class="bl-one" data-index="' + $(this).index() + '">'+
                '<div class="remove">' +
                '<div class="view-item btn2"><span><i class="fa fa-search" style="font-size:20px"></i>View item</span></div>' +
                '<div class="more-options btn2"><div>More Options<i class="fa fa-caret-down" style="font-size:20px" aria-hidden="true"></i></div>' +
                '<ul>' +
                '<li class="remove-item"><i class="material-icons">cancel</i>Remove Item</li>' +
                '<li><i class="material-icons">sync</i>Re-assign Item</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '<div class="img-pres">' +
                image[0].innerHTML +
                '</div>' +
                '<div class="pres-desc">' +
                '<p class="cap1">Remote Control Tractor</p>' +
                '<p class="cap2">Best Price: &pound;12</p>' +
                '<p class="cap3">By: <img src="img/amazon.png"></p>' +
                '</div>' +
                '<img class="clip-two" src="img/clip-two.png" alt="">' +
                '</div>'
            );
            $(this).addClass('cloned');
        }

        $(function () {
            $('.bl-one').hover(function () {
                    $(this).find('.remove').fadeIn(100);
                },
                function () {
                    $(this).find('.remove').fadeOut(100)
                });
        });

        $('.remove-item').on('click', function () {
            var current = $(this).closest('.bl-one').data('index');
            var k = $('div[data-index=' + current + ']');
            k.parent().removeClass('cloned');
            k.remove();
        });

    });

    $('#nav-toggle').on('click', function () {
        $('.header-nav').stop().slideToggle();
        $(this).toggleClass('on')
    });



    // Configure/customize these variables.
    var showChar = 125;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more &raquo;";
    var lesstext = "Read less &raquo;";

    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>'
                + h + '</span>&nbsp;&nbsp;<p class="morelink link">' + moretext + '</p></span>';
            $(this).html(html);
        }
    });
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });


});
