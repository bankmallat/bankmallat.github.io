jQuery(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.pmd-tabs').pmdTab();

    $('.matchHeight,.matchHeight-1').matchHeight();

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        $('.matchHeight-1').matchHeight();

    })

    //custom function to add and remove active class
    $(function () {
        $(".collapse.in").parents(".panel").addClass("active");
        $('a[data-toggle="collapse"]').on('click', function () {
            var objectID = $(this).attr('href');
            var expandale = $(this).attr('data-expandable');
            if (expandale == 'true') {
                if ($(objectID).hasClass('in')) {
                    $(objectID).collapse('hide');
                }
                else {
                    $(objectID).collapse('show');
                }
            }
            $accoID = $(this).parents(".panel-group").attr("id");
            $availiblity = $(this).parents(".panel").children(".in").length;
            $expandable = $(this).attr("data-expandable");
            $expanded = $(this).attr("aria-expanded");
            $current = $(this).parent().parent().parent().parent().attr("id");
            if ($expandable == "false") {
                if ($expanded == "true") {
                    $("#" + $current + " .active").removeClass("active");
                }
                else {
                    $("#" + $current + " .active").removeClass("active");
                    $(this).parents('.panel').addClass("active");
                }
            }
            if ($expandable == "true") {
                if ($expanded == "true") {
                    $(this).parents('.panel').addClass("active");
                }
                else {
                    $(this).parents('.panel').removeClass("active");
                }
            }
        });

    });
 
    /*$('.slide').textSlider({

        timeout: 15500,
        slideTime: 500,
        loop: 1

    });*/

    $('.sub-menu').hide(); //Hide children by default

    $('.main-menu').children().click(function () {
        //event.preventDefault();
        $(this).children('.sub-menu').slideToggle('slow');
    });

    $('.drop-icon').on('click', function () {
        event.preventDefault();
        $(this).children('.sub-menu').slideToggle('slow');
    });
    
});