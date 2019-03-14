$(function () {
    // NavBar Fixed Position after Education Section
    $("#education").waypoint(function(direction) {
        if (direction === "down") {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    }, {
        offset: "10%"
    });

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

    // Skills Bar Animation & Highlight NavBar Active Element
    $(window).on("scroll", function () {
        const winT = $(window).scrollTop();
        const winH = $(window).height();
        const posActive = winT + 50;

        const profileT = $("#profile").offset().top;
        const educationT = $("#education").offset().top;
        const projectsT = $("#projects").offset().top;
        const experienceT = $("#experience").offset().top;
        const skillsT = $("#skills").offset().top;
        const contactT = $("#contact").offset().top;

        if (posActive > profileT) { highlightLink("#profile"); }
        if (posActive > educationT) { highlightLink("#education"); }
        if (posActive > projectsT) { highlightLink("#projects"); }
        if (posActive > experienceT) { highlightLink("#experience"); }
        if (posActive > skillsT) { highlightLink("#skills"); }
        if (posActive > contactT || winT + winH === $(document).height()) { highlightLink("#contact"); }

        if (winT + winH > skillsT + (winH / 2)) {
            $(".bar").each(function () {
                $(this).find(".barfill").animate({
                    width: $(this).attr("data-percent")
                }, 1000);
            });
        }
    });


    function highlightLink(anchor) {
        $('nav .active').removeClass('active');
        $("nav").find('[href="' + anchor + '"]').addClass('active');
    }

});