document.addEventListener('DOMContentLoaded', () => {
    // Dynamic current year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Initialize AOS Animations with Mobile Optimization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            once: true,
            easing: 'ease-out-cubic',
            disable: 'mobile' // إيقاف الأنيميشن الثقيل على الهواتف لسرعة الفتح
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // WhatsApp Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input');
            const name = inputs[0] ? inputs[0].value : '';
            const phone = inputs[1] ? inputs[1].value : '';
            const service = this.querySelector('select') ? this.querySelector('select').value : '';
            const details = this.querySelector('textarea') ? this.querySelector('textarea').value : '';
            
            const message = `طلب جديد من الموقع:%0A- الاسم: ${name}%0A- الجوال: ${phone}%0A- الخدمة: ${service}%0A- التفاصيل: ${details}`;
            
            window.open(`https://wa.me/966595110679?text=${message}`, '_blank');
        });
    }
});
