document.addEventListener('click', () => {
    const audio = document.getElementById('ambient-tech');
    if (audio && audio.paused) {
        audio.volume = 0.2; // Keep it low and professional
        audio.play().catch(error => console.log("Audio play blocked until interaction."));
    }
}, { once: true }); // Only runs on the first click
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.gallery-track');
    
    if (track) {
        // Clone the content of the gallery to create the infinite loop effect
        const galleryContent = track.innerHTML;
        track.innerHTML = galleryContent + galleryContent;
        
        // Dynamic adjustment: Set the track width based on the number of images
        // This prevents the "cutting in half" on different screen sizes
        const images = track.querySelectorAll('img');
        const totalImages = images.length;
        // 640px is (width 600px + 20px margin left + 20px margin right)
        track.style.width = `${totalImages * 640}px`;
    }

    // FAQ Dropdown logic (Keep this if you have it)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('active');
        });
    });
});