document.addEventListener("DOMContentLoaded", function() {

    // ------------------------------
    // Profile Image Hover Effect
    // ------------------------------
    const profileImage = document.querySelector('.intro-photo img');
    
    // Set up hover effect: grayscale to color
    profileImage.addEventListener('mouseover', function() {
        profileImage.style.filter = 'grayscale(0%)';
    });
    
    profileImage.addEventListener('mouseout', function() {
        profileImage.style.filter = 'grayscale(100%)';
    });

    // ------------------------------
    // Dynamic Skill Grid Layout
    // ------------------------------
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Function to add a new skill card dynamically (this can be extended in the future)
    function addSkill(skillName, skillLogo) {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card');
        
        const skillImage = document.createElement('img');
        skillImage.src = `assets/icons/${skillLogo}`;
        skillImage.alt = skillName;
        
        const skillText = document.createElement('p');
        skillText.innerText = skillName;

        skillCard.appendChild(skillImage);
        skillCard.appendChild(skillText);
        skillsGrid.appendChild(skillCard);
    }

    // Example of adding skills dynamically (you can replace these with your actual skills)
    // addSkill("Python", "python-logo.png");
    // addSkill("JavaScript", "javascript-logo.png");
    // addSkill("React", "react-logo.png");
    
    // ------------------------------
    // Certificate Slider (Auto Slide & Hover Stop)
    // ------------------------------
    const certificates = document.querySelectorAll('.certificate img');
    let currentCertificate = 0;
    
    // Function to move the certificate slider
    function slideCertificates() {
        if (certificates.length > 1) {
            certificates[currentCertificate].style.display = 'none';
            currentCertificate = (currentCertificate + 1) % certificates.length;
            certificates[currentCertificate].style.display = 'block';
        }
    }

    // Set interval for automatic sliding

    // ------------------------------
    // Hover Effect on Certificate (Stop on Hover)
    // ------------------------------
    // certificates.forEach(cert => {
    //     cert.addEventListener('mouseover', function() {
    //         clearInterval(certSliderInterval); // Stop the auto slide when hovered
    //     });
    //     cert.addEventListener('mouseout', function() {
    //         certSliderInterval = setInterval(slideCertificates, 3000); // Resume auto slide when mouse out
    //     });
    // });

    // ------------------------------
    // Contact Form Validation
    // ------------------------------
    const contactForm = document.querySelector('#contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting to server
        
        const email = contactForm.querySelector('input[type="email"]');
        const phone = contactForm.querySelector('input[type="tel"]');
        
        if (!email.value || !phone.value) {
            alert("Please provide both your email and phone number for authenticity.");
            return;
        }
        
        // Here you can add further form submission logic, such as sending to a server
        alert("Thank you for your message! We'll get in touch soon.");
        contactForm.reset(); // Reset form after successful submission
    });

    // ------------------------------
    // Hover Effect for Authors in Projects Section
    // ------------------------------
    const authorImages = document.querySelectorAll('.project-card .author-photo');
    
    authorImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            const card = img.closest('.project-card');
            const authorInfo = card.querySelector('.author-info');
            authorInfo.style.display = 'block';
        });

        img.addEventListener('mouseout', function() {
            const card = img.closest('.project-card');
            const authorInfo = card.querySelector('.author-info');
            authorInfo.style.display = 'none';
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const certificationSlider = document.querySelector('.certification-slider');
    
    // Auto slide effect (optional)
    let scrollAmount = 0;
    //const scrollTime = 0; // Time between slides (3 seconds)

    function autoSlide() {
        scrollAmount += 1;
        certificationSlider.scrollTo({
            left: certificationSlider.scrollLeft + 300, // Scroll by 300px
            behavior: 'smooth'
        });
    }

    // Automatically scroll every 3 seconds
    setInterval(autoSlide, scrollTime);

    // Add event listener to detect mouse scroll and enable scrolling
    certificationSlider.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            certificationSlider.scrollTo({
                left: certificationSlider.scrollLeft + 300,
                behavior: 'smooth'
            });
        } else {
            certificationSlider.scrollTo({
                left: certificationSlider.scrollLeft - 300,
                behavior: 'smooth'
            });
        }
        event.preventDefault();
    });
});

// JavaScript to open the modal with certificate details
document.addEventListener('DOMContentLoaded', function () {
    const certificates = document.querySelectorAll('.certificate');
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCompany = document.getElementById('modal-company');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');

    // Loop through all certificates and add event listeners
    certificates.forEach(cert => {
        cert.addEventListener('click', function () {
            const title = cert.getAttribute('data-title');
            const company = cert.getAttribute('data-company');
            const date = cert.getAttribute('data-date');
            const description = cert.getAttribute('data-description');
            const imageSrc = cert.querySelector('img').src;

            // Set the modal content
            modalTitle.textContent = title;
            modalCompany.textContent = `Issued by: ${company}`;
            modalDate.textContent = `Date: ${date}`;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;

            // Show the modal
            modal.style.display = 'flex';
        });
    });

    // Close the modal when the user clicks on the close button
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside the modal content
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
