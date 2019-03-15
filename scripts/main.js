$(function () {
    // NavBar
    // Fixed Position after Education Section
    $("#education").waypoint(function (direction) {
        if (direction === "down") {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
        }
    }, {
            offset: "10%"
        });

    // Smooth Scrolling Animation
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Education
    $("#education").waypoint(function (direction) {
        setTimeout(function () {
            $("#education .item:nth-child(2)").addClass("animated fadeInUp");
        }, 200);
        setTimeout(function () {
            $("#education .item:nth-child(3)").addClass("animated fadeInUp");
        }, 400);
        setTimeout(function () {
            $("#education .item:nth-child(4)").addClass("animated fadeInUp");
        }, 600);
    }, {
            offset: "50%"
        });

    // Projects
    $("#projects .item:nth-child(2)").waypoint(function (direction) {
        setTimeout(function () {
            $("#projects .item:nth-child(2)").addClass("animated fadeInUp");
        }, 200);
    }, {
            offset: "80%"
        });
    
    $("#projects .item:nth-child(3)").waypoint(function (direction) {
        setTimeout(function () {
            $("#projects .item:nth-child(3)").addClass("animated fadeInUp");
        }, 200);
    }, {
        offset: "80%"
    });

    // Experience
    $(".project").hover(function () {
        $(this).find(".project-details").fadeIn(200);
    }, function () {
        $(this).find(".project-details").fadeOut(200);
    });

    // Skills
    $("#skills").waypoint(function (direction) {
        $("#skills .col-lg-6:nth-child(odd)").addClass("animated fadeInLeft");
        $("#skills .col-lg-6:nth-child(even)").addClass("animated fadeInRight");
        // SkillBar Animation
        setTimeout(function () {
            $(".bar").each(function () {
                $(this).find(".barfill").animate({
                    width: $(this).attr("data-percent")
                }, 2000);
            });
        }, 200);
    }, {
            offset: "50%"
        });
});