
window.addEventListener("load", function () {
    // scroll navbar
    $(document).ready(function ($) {
        window.onscroll = function () {
            const nav = document.getElementById("navigation")
            const getheight = window.pageYOffset
            if (getheight > nav.offsetHeight * 2) {
                $(".temp").attr("style", `display: block !important; height: ${nav.offsetHeight}px`);
                $("#navigation").addClass("navigation-animate");
            }
            else if (getheight == 0) {
                $("#navigation").removeClass("navigation-animate");
                $(".temp").removeAttr("style");
            }
        }

    })
    // end
    // navlink hover
    const navlink = document.querySelectorAll(".nav-link");
    $(".navbar-nav").mouseleave(function () {
        navlink[0].classList.add("active");
    });
    navlink.forEach(element => {
        element.addEventListener("mouseover", function () {
            element.classList.add("active");
            navlink[0].classList.remove("active");
        });
        element.addEventListener("mouseout", function () {
            element.classList.remove("active")
        });

    });
    // end
    // carousel news
    const gap = 16;
    const carouselnews = this.document.getElementById("carousel-news");

    if (carouselnews != null) {
        var content = document.getElementsByClassName("content")[0];
        const wrapper = this.document.getElementsByClassName("wrapper")[0];
        const next = this.document.getElementsByClassName("next")[0];
        const prev = this.document.getElementsByClassName("prev")[0];
        if (content != null) {
            var num = content.children.length;
            content.style.width = num * (this.document.getElementsByClassName("news-link")[0].offsetWidth + gap) + 'px';
            let width = wrapper.offsetWidth;
            this.window.addEventListener("resize", () => {
                this.location.reload();
                width = wrapper.offsetWidth;
                content.style.width = num * (this.document.getElementsByClassName("news-link")[0].offsetWidth + gap) + 'px';
            })
            carousel(wrapper, next, prev, gap, width-gap)
        }
        mouseScroll(wrapper, 2)

    }
    var slide = document.getElementsByClassName("list-picture")[0]
    if (slide != null) {
        const wrapper=this.document.getElementsByClassName('list-picture')[0]
        const next =this.document.getElementsByClassName("btn-next-thumbnail")[0]
        const prev =this.document.getElementsByClassName("btn-prev-thumbnail")[0]
        const width=this.document.getElementsByClassName("thumbnail")[0].offsetWidth
        carousel(wrapper, next, prev, gap, width)
        mouseScroll(slide, 1)
    }
    function mouseScroll(slider, speed) {
        let isDown = false;
        let startX;
        let scrollLeft;
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * speed; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    // carousel funtion
    function carousel(wrapper, next, prev, gap, width) {

        next.addEventListener("click", e => {
            wrapper.scrollBy(width+gap, 0)
            if (wrapper.scrollWidth !== 0) {
                prev.style.display = "flex"
            }
            if (wrapper.scrollWidth - width <= wrapper.scrollLeft + width) {
                next.style.display = "none"
            }
        })
        prev.addEventListener("click", e => {
            wrapper.scrollBy(-width-gap, 0)
            if (wrapper.scrollLeft - width <= 0) {
                prev.style.display = "none"
            }
            if (wrapper.scrollWidth - width < wrapper.scrollLeft + width) {
                next.style.display = "flex"
            }
        })

    }



    // end
})

