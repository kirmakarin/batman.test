$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $('.tabs-selected').toggleClass('tabs-selected');
        $(activeContent).toggleClass('visible');
        $(this).toggleClass('tabs-selected');
    });
});
