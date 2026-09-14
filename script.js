document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".content-section, .project-featured, .skill-card, .project-row, .experience-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    const navigationLinks = document.querySelectorAll(
        ".nav-links a, .mobile-nav a"
    );

    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            /*
             * Keep the browser URL clean.
             * No #about, #skills, #projects, etc.
             */
            history.replaceState(null, "", window.location.pathname);

        });

    });


    const brand = document.querySelector(".brand");

    if (brand) {

        brand.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            history.replaceState(null, "", window.location.pathname);
        });

    }


    const backToTop = document.querySelector(
        'footer a[href="#home"]'
    );

    if (backToTop) {

        backToTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            history.replaceState(null, "", window.location.pathname);
        });

    }

});