// ============================================
// PORTFOLIO WEBSITE JAVASCRIPT
// Beginner friendly + Bengali comments
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // 1. SELECT HTML ELEMENTS
    // =========================================

    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("section[id]");

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const heroCard = document.querySelector(".hero-card");

    const buttons = document.querySelectorAll(".btn");
    const skillCards = document.querySelectorAll(".skill-card");
    const projectCards = document.querySelectorAll(".project-card");
    const projectLinks = document.querySelectorAll(".project-link");

    const contactItems = document.querySelectorAll(".contact-item");

    const footer = document.querySelector(".footer");


    // =========================================
    // 2. MOBILE MENU
    // =========================================

    if (menuIcon && navMenu) {

        menuIcon.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuIcon.textContent = "✕";
                menuIcon.setAttribute("aria-expanded", "true");
            } else {
                menuIcon.textContent = "☰";
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    }


    // =========================================
    // 3. NAVIGATION LINK CLICK
    // =========================================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#") &&
                targetId.length > 1
            ) {

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }

            // Mobile menu বন্ধ করা
            if (navMenu) {
                navMenu.classList.remove("active");
            }

            if (menuIcon) {
                menuIcon.textContent = "☰";
                menuIcon.setAttribute("aria-expanded", "false");
            }
        });
    });


    // =========================================
    // 4. ACTIVE NAVIGATION
    // =========================================

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 200;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    // =========================================
    // 5. HEADER SCROLL EFFECT
    // =========================================

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");
        }
    }

    window.addEventListener(
        "scroll",
        updateHeader
    );

    updateHeader();


    // =========================================
    // 6. HERO SECTION ANIMATION
    // =========================================

    if (heroContent) {

        heroContent.classList.add("hero-animation");
    }

    if (heroCard) {

        heroCard.classList.add("hero-card-animation");
    }


    // =========================================
    // 7. SCROLL REVEAL
    // =========================================

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-text, " +
            ".about-info, " +
            ".skill-card, " +
            ".timeline-item, " +
            ".project-card, " +
            ".contact-box"
        );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);
    });


    // =========================================
    // 8. SKILL BAR ANIMATION
    // =========================================

    const skillObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        const skillBar =
                            entry.target.querySelector(
                                ".skill-level span"
                            );

                        if (skillBar) {

                            const finalWidth =
                                skillBar.style.width;

                            skillBar.style.width = "0%";

                            setTimeout(function () {

                                skillBar.style.width =
                                    finalWidth;

                            }, 200);
                        }

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.4
            }
        );


    skillCards.forEach(function (card) {

        skillObserver.observe(card);
    });


    // =========================================
    // 9. SKILL CARD INTERACTION
    // =========================================

    skillCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.classList.add("skill-hover");
            }
        );

        card.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove("skill-hover");
            }
        );
    });


    // =========================================
    // 10. PROJECT CARD INTERACTION
    // =========================================

    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.classList.add("project-hover");
            }
        );

        card.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove("project-hover");
            }
        );
    });


    // =========================================
    // 11. PROJECT LINKS
    // =========================================

    projectLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const href =
                    this.getAttribute("href");

                // "#" থাকলে prevent করা
                if (href === "#") {

                    event.preventDefault();

                    alert(
                        "🚀 Project link will be added soon!"
                    );
                }
            }
        );
    });


    // =========================================
    // 12. BUTTON INTERACTION
    // =========================================

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                this.classList.add("button-click");

                setTimeout(() => {

                    this.classList.remove(
                        "button-click"
                    );

                }, 300);
            }
        );
    });


    // =========================================
    // 13. CONTACT ITEMS
    // =========================================

    contactItems.forEach(function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                this.classList.add(
                    "contact-hover"
                );
            }
        );

        item.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove(
                    "contact-hover"
                );
            }
        );
    });


    // =========================================
    // 14. ESC KEY
    // Mobile menu বন্ধ করার জন্য
    // =========================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (navMenu) {
                    navMenu.classList.remove(
                        "active"
                    );
                }

                if (menuIcon) {
                    menuIcon.textContent = "☰";
                }
            }
        }
    );


    // =========================================
    // 15. WINDOW RESIZE
    // =========================================

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 768) {

                if (navMenu) {
                    navMenu.classList.remove(
                        "active"
                    );
                }

                if (menuIcon) {
                    menuIcon.textContent = "☰";
                }
            }
        }
    );


    // =========================================
    // 16. SCROLL TO TOP BUTTON
    // JavaScript দিয়ে তৈরি হবে
    // =========================================

    const topButton =
        document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className =
        "scroll-top";

    topButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    document.body.appendChild(topButton);


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );
            }
        }
    );


    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );


    // =========================================
    // 17. FOOTER YEAR
    // =========================================

    if (footer) {

        const currentYear =
            new Date().getFullYear();

        const yearText =
            document.createElement("small");

        yearText.textContent =
            `© ${currentYear} My Portfolio`;

        footer.appendChild(yearText);
    }


    // =========================================
    // 18. PAGE LOADED MESSAGE
    // =========================================

    console.log(
        "✅ Portfolio website loaded successfully!"
    );

});