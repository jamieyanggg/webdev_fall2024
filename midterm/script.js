// Ensures the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function () {
    // On page load, show the main content and activate (not hidden) the home section
    window.addEventListener("load", () => {
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".home-section").classList.add("active");
    });

    // Toggle Navbar
    const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener("click", () => {
        hideSelection(); // Hides the currently whatever active page
        toggleNavbar(); // Toggles the navbar's visibility
        document.body.classList.toggle("hide-scrolling"); // Prevents scrolling when the navbar is open
    });

    function hideSelection() {
        // Fades out the currently active page/section
        document.querySelector("section.active").classList.toggle("fade-out");
    }

    function toggleNavbar() {
        // Toggles the 'active' state of the header/navbar
        document.querySelector(".header").classList.toggle('active');
    }

    /* Active Section */
    document.addEventListener("click", (e) => {
        // Handles navigation to different sections
        if (e.target.classList.contains("link-item") && e.target.hash !== "") {
            // Activate the overlay to prevent multiple clicks
            document.querySelector(".overlay").classList.add("active");
            navToggler.classList.add("hide"); // Hides the navbar toggle button
            if (e.target.classList.contains("nav-item")) {
                toggleNavbar(); // Closes the navbar if a navigation item is clicked
            } else {
                hideSelection(); // Fades out the current section
                document.body.classList.add("hide-scrolling"); // Disables scrolling during navigation
            }
            setTimeout(() => {
                document.querySelector("section.active").classList.remove("active", "fade-out"); // Deactivates the current section
                document.querySelector(e.target.hash).classList.add("active");  // Activates the target section
                window.scrollTo(0, 0); // Scrolls to the top of the page
                document.body.classList.remove("hide-scrolling"); // Re-enables scrolling
                navToggler.classList.remove("hide"); // Shows the navbar toggle button again
                document.querySelector(".overlay").classList.remove("active"); // Removes the overlay
            }, 500); // Waits for animations to complete
        }
    });

    /* Portfolio Item Details Popup */
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
             // Opens the portfolio popup and displays project details
            togglePortfolioPopup(); // Toggles the popup visibility
            document.querySelector(".portfolio-popup").scrollTo(0, 0); // Scrolls the popup to the top
            portfolioItemDetails(e.target.parentElement); // Loads the selected project's details
        }
    });

    function togglePortfolioPopup() {
         // Toggles the portfolio popup visibility
        document.querySelector(".portfolio-popup").classList.toggle("open"); 
        document.body.classList.toggle("hide-scrolling"); // Prevents scrolling while the popup is open
        document.querySelector(".main").classList.toggle("fade-out"); // Fades out the main content
    }

    // Closes the popup when the close button is clicked
    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup); 

    // fills popup with details of the selected portfolio item
    function portfolioItemDetails(portfolioItem) {
        // Sets the project thumbnail
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
        // Sets the project title
        document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
        // Sets the project description
        document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }
    /* Contact form Input Animation */
    document.querySelectorAll(".input-control").forEach(input => {
        input.addEventListener("focus", () => {
          gsap.to(input, { boxShadow: "0 0 10px #e02f6b", duration: 0.3 }); // Highlights input fields on focus
        });
        input.addEventListener("blur", () => {
          gsap.to(input, { boxShadow: "none", duration: 0.3 }); // Removes the highlight when focus is lost
        });
      });

      /* Section Animation on Scroll */
      gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        });
      });

      // button hover animation
      document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.1, duration: 0.2, ease: "bounce.out" }); // englarges buttons on hover
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.2 }); // Restores button size when the mouse leaves
        });
      });

      // Portfolio Image Hover Animation
      document.querySelectorAll(".portfolio-item-thumbnail img").forEach(img => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" }); // englarges buttons on hover
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.3 }); // Restores button size when the mouse leaves
        });
      });

      // Navbar Item Hover Animation 
      document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { color: "#e02f6b", duration: 0.3 }); // Changes the color of navbar links on hover
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { color: "#18293c", duration: 0.3 }); // restores orginal color
        });
    });
    
    /* Social Link Hover Animation */
    document.querySelectorAll(".social-links a").forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            gsap.to(icon, { rotate: 10, duration: 0.2, yoyo: true, repeat: 1 }); // Slight rotation effect on social icons
        });
    });
    
    /* Portfolio Item Hover Animation */
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, { rotate: 5, duration: 0.3, ease: "power1.out" }); // Slight rotation effect on portfolio items
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, { rotate: 0, duration: 0.3, ease: "power1.out" }); // Restores rotation
        });
    });

    /* Contact Form Floating Animation */
    gsap.to(".contact-form", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut", // Adds a subtle floating animation to the contact form
    });
});



