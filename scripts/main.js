$(window).on("scroll", function () {
    const winT = $(window).scrollTop();
    const winH = $(window).height();
    const skillsT = $("#skills").offset().top;

    if (winT + winH > skillsT) {
        $(".bar").each(function () {
            $(this).find(".barfill").animate({
                width: $(this).attr("data-percent")
            }, 1000);
        });
    }
});