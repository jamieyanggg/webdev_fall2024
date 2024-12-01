
document.addEventListener('DOMContentLoaded', function () {
    // On page load, show the main content and activate the home section
    window.addEventListener("load", () => {
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".home-section").classList.add("active");
    });

    /* Toggle Navbar */
    const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", () => {
        hideSelection();
        toggleNavbar();
        document.body.classList.toggle("hide-scrolling");
    });

    function hideSelection() {
        document.querySelector("section.active").classList.toggle("fade-out");
    }

    function toggleNavbar() {
        document.querySelector(".header").classList.toggle('active');
    }

    /* Active Section */
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {
            // Activate the overlay to prevent multiple clicks
            document.querySelector(".overlay").classList.add("active");
            navToggler.classList.add("hide");
            if (e.target.classList.contains("nav-item")) {
                toggleNavbar();
            } else {
                hideSelection();
                document.body.classList.add("hide-scrolling");
            }
            setTimeout(() => {
                document.querySelector("section.active").classList.remove("active", "fade-out");
                document.querySelector(e.target.hash).classList.add("active");
                window.scrollTo(0, 0);
                document.body.classList.remove("hide-scrolling");
                navToggler.classList.remove("hide");
                document.querySelector(".overlay").classList.remove("active");
            }, 500);
        }
    });

    /* About Tabs */
    const tabsContainer = document.querySelector(".about-tabs"),
        aboutSection = document.querySelector(".about-selection");

    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            tabsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.add("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    });

    /* Portfolio Item Details Popup */
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0, 0);
            portfolioItemDetails(e.target.parentElement);
        }
    });

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");
    }

    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

    // Hide popup when clicking outside of it
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pp-inner")) {
            togglePortfolioPopup();
        }
    });

    function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

        document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

        document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }

    document.querySelectorAll(".input-control").forEach(input => {
        input.addEventListener("focus", () => {
          gsap.to(input, { boxShadow: "0 0 10px #e02f6b", duration: 0.3 });
        });
        input.addEventListener("blur", () => {
          gsap.to(input, { boxShadow: "none", duration: 0.3 });
        });
      });
      
      gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.1, duration: 0.2, ease: "bounce.out" });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.2 });
        });
      });

      document.querySelectorAll(".portfolio-item-thumbnail img").forEach(img => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.3 });
        });
      });

      document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { color: "#e02f6b", duration: 0.3 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { color: "#18293c", duration: 0.3 });
        });
    });
    
    document.querySelectorAll(".social-links a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { rotate: 10, duration: 0.2, yoyo: true, repeat: 1 });
        });
    });
    
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { rotate: 5, duration: 0.3, ease: "power1.out" });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, { rotate: 0, duration: 0.3, ease: "power1.out" });
        });
    });

    gsap.to(".contact-form", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });
    
    gsap.to(".contact-form", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    

});



