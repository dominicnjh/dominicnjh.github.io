$(function () {
    // NavBar Smooth Scrolling Animation
    $("#nav a").click(function (e) {
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

    // Experience
    $(".project").hover(function () {
        $(this).find(".project-details").fadeIn(200);
    }, function () {
        $(this).find(".project-details").fadeOut(200);
    });

    // Skills Bar Animation
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
});