$(() => {
    $('.nav-link').on("click", e => {
        $('.nav-link').removeClass('active');
        $(e.target).addClass('active');
    });

    $('body').scrollspy({
        target: '#navbar'
    })
});