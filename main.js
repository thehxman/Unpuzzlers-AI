 // main.js
    const backgrounds = document.querySelectorAll('.hero-bg');
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const textData = [
      {
        title: "AI is reshaping industries",
        description: "AI is moving fast—faster than most companies can keep up with. Industries are being disrupted overnight, and those who understand its possibilities are the ones leading the change. We help you navigate this transformation, ensuring AI works for you, not against you.",
      },
      {
        title: "The Right Solution, Every Time.",
        description: "AI isn’t a one-size-fits-all tool. We craft solutions tailored specifically to your business, your challenges, and your vision. It’s not about adding more tech—it’s about creating something that fits perfectly.",
      },
      {
        title: "Impact",
        description: "AI is only as powerful as the outcomes it delivers. We focus on creating measurable, meaningful change—whether that’s streamlining operations, driving growth, or reimagining customer experiences.",
      },
    ];

    let currentIndex = 0;

    function changeSlide() {
        // Remove active class from current background
        backgrounds[currentIndex].classList.remove('active');
        
        // Update current index
        currentIndex = (currentIndex + 1) % backgrounds.length;
        
        // Update the text with consistent formatting
        heroTitle.textContent = textData[currentIndex].title;
        heroDescription.textContent = textData[currentIndex].description;

        // Add active class to the new background
        backgrounds[currentIndex].classList.add('active');
    }

    backgrounds[0].classList.add('active');
    setInterval(changeSlide, 12000);

    function toggleContent(index) {
        const content = document.getElementById(`content-${index}`);
        const icon = content.previousElementSibling.querySelector('.toggle-icon');

        document.querySelectorAll('.services-content').forEach((c, i) => {
            if (i !== index) {
                c.classList.remove('visible');
                c.previousElementSibling.querySelector('.toggle-icon').classList.remove('rotate');
            }
        });

        if (content.classList.contains('visible')) {
            content.classList.remove('visible');
            icon.classList.remove('rotate');
        } else {
            content.classList.add('visible');
            icon.classList.add('rotate');
        }
    }
// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("JJuq7aF_v_ZX9pag8"); // Replace with your actual EmailJS Public Key
})();

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Send email using EmailJS
    emailjs.sendForm("service_na3trjf", "template_ujxiwaq", this, "JJuq7aF_v_ZX9pag8") // Replace with actual Template ID and Public Key
    .then(function(response) {
        alert("✅ Email Sent Successfully!");
        document.getElementById("contact-form").reset(); // Clear form after submission
    }, function(error) {
        alert("❌ Failed to send email. Try again.");
        console.error("Error:", error);
    });
});

    // Scroll Fade-In Effect
    document.addEventListener("DOMContentLoaded", () => {
        const fadeElements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            {
                threshold: 0.43, // Trigger when 43% of the element is visible
            }
        );

        fadeElements.forEach((el) => observer.observe(el));
    });
