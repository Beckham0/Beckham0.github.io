document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up_down");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                   observer.unobserve(popUp);
                }else {
                    popUp.classList.remove("show1");
                }
            });
        });

        observer.observe(popUp);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".img_card");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                   observer.unobserve(popUp);
                }else {
                    popUp.classList.remove("show1");
                }
            });
        });

        observer.observe(popUp);
    });
});