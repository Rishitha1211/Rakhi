/* =====================================================
   OPENING SCREEN
===================================================== */

window.addEventListener("load", () => {

    const opening =
        document.getElementById("opening");

    setTimeout(() => {

        opening.classList.add("closed");

    }, 1800);

});



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



/* =====================================================
   SUBTLE PHOTO REVEAL
===================================================== */

const photos =
    document.querySelectorAll(".memory-card");


const photoObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.animate(

                        [
                            {
                                opacity: 0,
                                transform:
                                    "translateY(25px)"
                            },

                            {
                                opacity: 1,
                                transform:
                                    "translateY(0)"
                            }
                        ],

                        {
                            duration: 750,
                            easing: "cubic-bezier(.2,.7,.2,1)",
                            fill: "forwards"
                        }

                    );

                    photoObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.08
        }

    );


photos.forEach(photo => {

    photoObserver.observe(photo);

});



/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

document.querySelectorAll("img")
    .forEach(img => {

        img.addEventListener("error", () => {

            console.warn(
                "Could not load:",
                img.src
            );

        });

    });