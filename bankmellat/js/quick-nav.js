var QuickNav = function () {

    return {
        init: function () {
            if ($('.quick-nav').length > 0) {
                var stretchyNavs = $('.quick-nav');
                stretchyNavs.each(function () {
                    var stretchyNav = $(this),
                        stretchyNavTrigger = stretchyNav.find('.quick-nav-trigger');

                    stretchyNavTrigger.on('click', function (event) {
                        event.preventDefault();
                        stretchyNav.toggleClass('nav-is-visible');
                        $('.bounce').hide();
                    });
                });

                $(document).on('click', function (event) {                    
                    (!$(event.target).is('.quick-nav-bg') && !$(event.target).is('.quick-nav-trigger') && !$(event.target).is('.quick-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
                });
            }
        }
    };
}();

jQuery(document).ready(function () {
    QuickNav.init();
});