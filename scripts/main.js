$(function () {
    // NavBar
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

    // Add Active State to Navbar items when scrolled to
    highlightLink("#profile", "#profile");
    highlightLink("#profile", "#education");
    highlightLink("#education", "#projects");
    highlightLink("#projects", "#experience");
    highlightLink("#experience", "#skills");
    highlightLink("#skills", "#contact");

    // Profile
    $("#profile").waypoint(function (direction) {
        $("#profile .col-lg-5").addClass("animated fadeInLeft");
        $("#profile .col-lg-7").addClass("animated fadeInRight");
    }, {
            offset: "50%"
        });

    // Education
    contentAnimation("#education .item:nth-child(2)");
    contentAnimation("#education .item:nth-child(3)");
    contentAnimation("#education .item:nth-child(4)");

    // Projects
    contentAnimation("#projects .item:nth-child(2)");
    contentAnimation("#projects .item:nth-child(3)");
    $("#projects .project").waypoint(function (direction) {
        setTimeout(function () {
            $("#projects .project:nth-child(1)").addClass("animated fadeInUp");
        }, 500);
        setTimeout(function () {
            $("#projects .project:nth-child(2)").addClass("animated fadeInUp");
        }, 700);
    }, {
            offset: "80%"
        });

    // Experience
    contentAnimation("#experience .item:nth-child(2)");
    contentAnimation("#experience .item:nth-child(3)");
    $("#experience .project").waypoint(function (direction) {
        setTimeout(function () {
            $("#experience .project:nth-child(1)").addClass("animated fadeInUp");
        }, 500);
        setTimeout(function () {
            $("#experience .project:nth-child(2)").addClass("animated fadeInUp");
        }, 700);
        setTimeout(function () {
            $("#experience .project:nth-child(3)").addClass("animated fadeInUp");
        }, 900);
    }, {
            offset: "80%"
        });

    $(".project").hover(function () {
        $(this).find(".project-details").addClass("animated fadeInUp");
    }, function () {
        $(this).find(".project-details").removeClass("animated fadeInUp");
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

    // Simple Function to Animate Content Fade In
    function contentAnimation(selector) {
        $(selector).waypoint(function (direction) {
            $(selector).addClass("animated fadeInUp");
        }, {
                offset: "80%"
            });
    }

    // Highlight Active NavBar Element
    function highlightLink(prev, current) {
        $(current).waypoint(function (direction) {
            if (direction === "down") {
                $("nav .nav-item").removeClass("nav-active");
                $('nav a[href="' + current + '"]').parent().addClass('nav-active');
            } else {
                $("nav .nav-item").removeClass("nav-active");
                $('nav a[href="' + prev + '"]').parent().addClass('nav-active');
            }
        }, {
                offset: "20%"
            });

    }
});