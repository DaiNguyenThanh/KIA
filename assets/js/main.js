
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
    // ---------HomePage----------//
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
            carousel(wrapper, next, prev, gap, width - gap)
        }
        mouseScroll(wrapper, 2)

    }
    // ---------ProductPage----------------
    var slide = document.getElementsByClassName("list-picture")[0]
    if (slide != null) {
        const wrapper = this.document.getElementsByClassName('list-picture')[0]
        const next = this.document.getElementsByClassName("btn-next-thumbnail")
        const prev = this.document.getElementsByClassName("btn-prev-thumbnail")
        const width = this.document.getElementsByClassName("thumbnail")[0].offsetWidth
        let activeThumbnail = document.getElementsByClassName("active-thumbnail")
     
       mouseScroll(slide, 1)

        carousel(wrapper, next[0], prev[0], gap, width)
        nextAndPrev(next[0],prev[0])
        nextAndPrev(next[1],prev[1])
    }
    // -----------Function-------------//
    // scroll funtion
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
            slider.style.scrollBehavior = "none";

        });
    }
    // carousel funtion
    function carousel(wrapper, next, prev, gap, width) {

        next.addEventListener("click", e => {
            wrapper.scrollBy(width + gap, 0)
            if (wrapper.scrollWidth !== 0) {
                prev.style.display = "flex"
            }
            if (wrapper.scrollWidth - width <= wrapper.scrollLeft + width) {
                next.style.display = "none"
            }
        })
        prev.addEventListener("click", e => {
            wrapper.scrollBy(-width - gap, 0)
            if (wrapper.scrollLeft - width <= 0) {
                prev.style.display = "none"
            }
            if (wrapper.scrollWidth - width < wrapper.scrollLeft + width) {
                next.style.display = "flex"
            }
        })

    }

    // nexxt and prev funtion
    function nextAndPrev(next, prev) {
        let thumbnails = document.getElementsByClassName("thumbnail")

        next.addEventListener("click", function () {

            for (let i = 0; i <= thumbnails.length - 1; i++) {
                if (thumbnails[i].className == "thumbnail active-thumbnail") {
                    thumbnails[i].classList.remove("active-thumbnail")

                    if(i==thumbnails.length-1){
                        i=-1;
                        let slide = document.getElementsByClassName("list-picture")[0]
                        slide.scrollTo(0,0)
                    }
                    thumbnails[i + 1].classList.add("active-thumbnail")
                    document.getElementsByClassName("show-picture")[0].src = thumbnails[i + 1].src
                    document.getElementsByClassName("show-picture")[1].src = thumbnails[i + 1].src
                    break;
                }
                
            }
        })
        prev.addEventListener("click", function () {

            for (let i = thumbnails.length - 1; i > 0; i--) {
                if (thumbnails[i].className == "thumbnail active-thumbnail") {
                    thumbnails[i].classList.remove("active-thumbnail")
                    thumbnails[i - 1].classList.add("active-thumbnail")
                    document.getElementsByClassName("show-picture")[0].src = thumbnails[i - 1].src
                    document.getElementsByClassName("show-picture")[1].src = thumbnails[i - 1].src
                    break;
                }
                
            }
        })
    }

    // end
})

