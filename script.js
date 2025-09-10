// Navigation scroll effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
      nav.style.background = '#000000';
  } else {
      nav.style.background = 'linear-gradient(#000000 50%, #00000000)';
  }
});
// end navigation scroll effect

// Icon button toggle effect
document.addEventListener('DOMContentLoaded', () => {
// Select all icon buttons with the class 'acc-icon'
const iconButtons = document.querySelectorAll('.acc-icon');
iconButtons.forEach(button => {
button.addEventListener('click', () => {
  // Find the parent container of the clicked button
  const parentContainer = button.closest('.icon-container');
  // Find the bubble element inside that same container
  const bubble = parentContainer.querySelector('.bubble');
  
  // Toggle the 'active' class on the bubble
  bubble.classList.toggle('active');
});
});
// This part hides the bubble when the user clicks anywhere else
document.addEventListener('click', (event) => {
  // Select all currently active bubbles
  document.querySelectorAll('.bubble.active').forEach(bubble => {
    const parentContainer = bubble.closest('.icon-container');
    // If the click happened outside of this bubble's container, hide it
    if (!parentContainer.contains(event.target)) {
      bubble.classList.remove('active');
    }
  });
});
// Paket Wisata Modal Popup
const modal = document.getElementById('package-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalDetail = document.getElementById('modal-detail');
const orderBtn = document.querySelector('.modal-order');
const cancelBtn = document.querySelector('.modal-cancel');
document.querySelectorAll('.package-card').forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = card.getAttribute('data-img');
    modalTitle.textContent = card.getAttribute('data-title');
    modalDesc.textContent = card.getAttribute('data-desc');
    // modalDetail tetap default, bisa diubah jika ingin detail berbeda
  });
});
cancelBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// Optional: close modal when clicking outside content
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});
});
// =====================================================================================================
// end icon button toggle effect

//halaman baru
// =====================================================================================================
const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const overlayDesc = document.getElementById('overlay-desc');
const closeBtn = document.getElementById('closeBtn');


// animasi scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach((card, i) => {
  observer.observe(card);

  // Klik buka overlay
  card.addEventListener('click', () => {
    overlayImg.src = card.dataset.img;
    overlayDesc.textContent = card.dataset.desc;
    overlay.style.display = 'flex';
  });
});

// Tutup overlay
closeBtn.addEventListener('click', () => overlay.style.display = 'none');
overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.style.display = 'none';
});
// =====================================================================================================
// end about section


// package
// =====================================================================================================
class Carousel {
    constructor() {
        this.currentSlide = 2; // Start with the center slide
        this.totalSlides = 6;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.viewport = document.getElementById('carouselViewport');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.init();
        this.updateCarousel();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        this.addTouchSupport();
        this.addCardClickHandlers();
    }
    
    updateCarousel() {
        // Remove all active classes first
        this.slides.forEach(slide => {
            slide.className = 'carousel-slide';
        });
        
        // Add appropriate active classes to visible slides
        for (let i = 0; i < 5; i++) {
            const slideIndex = (this.currentSlide - 2 + i + this.totalSlides) % this.totalSlides;
            this.slides[slideIndex].classList.add(`active-${i + 1}`);
        }
        
        // Update indicators
        const indicatorIndex = Math.floor(this.currentSlide / 2);
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === indicatorIndex);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex * 2;
        this.updateCarousel();
    }
    
    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let diffX = 0;
        
        this.viewport.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.viewport.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
            diffX = startX - currentX;
        });
        
        this.viewport.addEventListener('touchend', () => {
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
    }
    
    addCardClickHandlers() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const cardId = card.getAttribute('data-card');
                this.showPackageDetails(cardId);
            });
        });
    }
    
    showPackageDetails(cardId) {
        // Get modal elements
        const modal = document.getElementById('packageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalPackageTitle');
        const modalSubtitle = document.getElementById('modalPackageSubtitle');
        const modalIntro = document.getElementById('modalPackageIntro');
        const modalPoints = document.getElementById('modalPackagePoints');
        
        // Package data based on card ID
        const packages = {
            1: {
                title: "Walking Tour Kakaskasen II",
                subtitle: "Selusuri Keindahan Alam dan Pagoda",
                image: "card-1",
                intro: "Butuh short escape yang menyegarkan, menenangkan, namun tetap berkesan? Ikuti Walking Tour Kakaskasen Dua untuk rehat sejenak dari rutinitas dan mengisi energi positif dengan berjalan santai melewati alam, budaya, dan kuliner khas Minahasa. Bayangkan indahnya: pagi yang sejuk, berjalan santai mengelilingi desa dengan latar belakang megahnya Gunung Lokon. Setelah puas berfoto dan menikmati pemandangan, Anda bisa melanjutkan perjalanan ke Pagoda yang ikonik. Di sana, Anda juga dapat mencicipi berbagai makanan khas Minahasa yang pedasnya menggugah selera.",
                points: []
            },
            2: {
                title: "Walking Tour Taman Kelong",
                subtitle: "Healing di Desa Kakaskasen II",
                image: "card-2",
                intro: "Nikmati udara segar, pemandangan indah, dan energi positif di salah satu destinasi terbaik di Tomohon. Tur ini cocok untuk Anda yang ingin melepas penat dan mengisi feed Instagram dengan foto-foto yang menawan. Apa saja yang bisa Anda nikmati?",
                points: [
                    "Keindahan Kebun Bunga: Kagumi kebun bunga yang tertata apik, termasuk kebun bunga Nance Florist.",
                    "Mengenal Budaya Minahasa: Selami kebudayaan lokal lebih dalam, mulai dari kerajinan tangan hingga ceritacerita unik.",
                    "Belajar Kerajinan Lokal: Ikut serta dalam sesi belajar kerajinan tangan yang interaktif, dan bawa pulang hasil karya Anda sendiri sebagai kenang-kenangan.",
                    "Pemandangan Alam Memukau: Nikmati pemandangan alam desa yang indah, dengan latar belakang megahnya Gunung Lokon dan Gunung Mahawu.",
                ]
            },
            3: {
                title: "Minahasa Highland Tour",
                subtitle: "Keajaiban Alam Tomohon",
                image: "card-3",
                intro: "Nikmati petualangan tak terlupakan bersama kami di Minahasa Highland Tour. Jelajahi keindahan alam Tomohon yang menakjubkan dan ciptakan kenangan seumur hidup. Destinasi utama yang akan Anda kunjungi:",
                points: [
                    "Gunung Lokon/Mahawu: Saksikan langsung keindahan dan kegagahan gunung berapi di Tomohon. ",
                    "Extreme Market: Rasakan sensasi unik di pasar tradisional Tomohon yang terkenal dengan berbagai kuliner ekstremnya.",
                    "Air Terjun: Segarkan diri di bawah air terjun yang indah dan alami.",
                    "Danau Tondano & Danau Linow: Nikmati pemandangan danau yang memukau dan keunikan warna air yang bisa berubah-ubah.",
                    "Pemandian Air Panas Alami: Rilekskan tubuh dan pikiran di pemandian air panas alami. Kami juga menawarkan itinerary yang dapat disesuaikan dengan keinginan Anda."
                ]
            },
            4: {
                title: "MEMERET: Berburu tikus ekor putih",
                subtitle: "Petualangan malam hari yang unik dan penuh dengan tantangan",
                image: "card-4",
                intro: "Dalam budaya Minahasa, Memeret bukan hanya sekadar berburu, tapi juga tradisi warisan leluhur yang melatih ketangkasan dan mengajarkan keseimbangan hidup dengan alam. Dapatkan pengalaman otentik yang memacu adrenalin sambil menyelami cerita dan kearifan lokal. Kegiatan ini mencakup:",
                points: [
                    "Berburu tikus ekor putih yang dimulai pukul 20:00.",
                    "Mendapatkan pengalaman menembak yangseru.",
                    "Kelas memasak (cooking class) tikus ekor putih hasil buruan.",
                    "Mencicipi hidangan lezat yang khas"
                ]
            },
            5: {
                title: "Tarian Perang Kabasaran",
                subtitle: "Warisan Budaya Minahasa yang Heroik",
                image: "card-5",
                intro: "Tarian Kabasaran bukan sekadar pertunjukan, melainkan seni bela diri yang melambangkan keberanian para ksatria yang telah diwariskan turun-temurun. Setiap gerakan energik dan kostum merah mencolok yang dikenakan penari menggambarkan semangat kepahlawanan yang tak pernah padam. Tarian ini sempurna untuk memeriahkan acara penting, menyambut tamu kehormatan, atau sekadar dinikmati sebagai tontonan budaya yang otentik. Ingin merasakan pengalaman yang lebih mendalam? Kami menawarkan kelas pelatihan Kabasaran bagi siapa saja, dari pemula hingga profesional. Bersama instruktur berpengalaman, Anda akan mempelajari makna filosofis, teknik dasar, dan setiap gerakan heroik dari tarian ini",
                points: []
            },
            6: {
                title: "Wisata Edukasi: Budaya & Kreativitas Minahasa",
                subtitle: "Jelajahi sisi lain Minahasa melalui Wisata Edukasi yang interaktif dan penuh nilai budaya di Desa Wisata Kakaskasen II",
                image: "card-6",
                intro: "Program ini dirancang khusus untuk pelajar, komunitas, maupun siapa saja yang ingin mengenal lebih dekat kekayaan budaya lokal. Pilihan wisata edukasi kami:",
                points: [
                    "Belajar Kolintang Tradisional: Kenali alat musik kebanggaan Minahasa dan pelajari cara memainkannya langsung dari pengrajin serta pemain kolintang lokal.",
                    "Kreasi Handycraft Perca Kain: Kembangkan imajinasi Anda dengan merangkai kain perca menjadi karya unik seperti tas, hiasan, hingga aksesori bernilai seni tinggi yang ramah lingkungan dan sarat makna.",
                    "Cooking Class Masakan Minahasa: Masak langsung kuliner khas Minahasa seperti rica-rica, sambal dabudabu, hingga kue tradisional bersama ibu-ibu lokal."
                ]
            }
        };
        
        // Set modal content based on selected card
        const selectedPackage = packages[cardId];
        modalImage.className = 'modal-image ' + selectedPackage.image;
        modalTitle.textContent = selectedPackage.title;
        modalSubtitle.textContent = selectedPackage.subtitle;
        modalIntro.textContent = selectedPackage.intro;
        
        // Create points list
        modalPoints.innerHTML = '<ul>' + 
            selectedPackage.points.map(point => `<li>${point}</li>`).join('') + 
            '</ul>';
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel();
    
    // Close modal functionality
    const modal = document.getElementById('packageModal');
    const closeModal = document.getElementById('closeModal');
    const bookButton = document.getElementById('bookButton');
    
    // Add event listeners for social icons
    const whatsappIcon = document.querySelector('.social-icon.whatsapp');
    const emailIcon = document.querySelector('.social-icon.email');
    
    whatsappIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Anda akan diarahkan ke WhatsApp untuk menghubungi kami.');
    });
    
    emailIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Anda akan diarahkan untuk mengirim email kepada kami.');
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    bookButton.addEventListener('click', () => {
        alert('Terima kasih! Anda akan diarahkan ke halaman pemesanan.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
// =====================================================================================================
// end package
