// Navigation scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const currentScrollTop = window.scrollY;

    // Check scroll direction
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
        if (currentScrollTop > 50) {
            nav.style.background = '#000000';
        } else {
            nav.style.background = 'linear-gradient(#000000 50%, #00000000)';
        }
    }
    lastScrollTop = currentScrollTop;
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
        this.currentSlide = 0;
        this.totalSlides = 6;
        this.slidesToShow = 3;
        this.slidesToScroll = 1;
        this.viewport = document.getElementById('carouselViewport');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.init();
        this.updateResponsive();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        window.addEventListener('resize', () => this.updateResponsive());
        
        this.addTouchSupport();
        this.addCardClickHandlers();
    }
    
    updateResponsive() {
        if (window.innerWidth <= 768) {
            this.slidesToShow = 1;
        } else if (window.innerWidth <= 1024) {
            this.slidesToShow = 2;
        } else {
            this.slidesToShow = 3;
        }
        this.updateCarousel();
    }
    
    updateCarousel() {
        const slideWidth = 100 / this.slidesToShow;
        const translateX = -this.currentSlide * slideWidth;
        this.viewport.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        const indicatorIndex = Math.floor(this.currentSlide / this.slidesToScroll);
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === indicatorIndex);
        });
    }
    
    nextSlide() {
        const maxSlide = this.totalSlides - this.slidesToShow;
        if (this.currentSlide < maxSlide) {
            this.currentSlide += this.slidesToScroll;
        } else {
            this.currentSlide = 0;
        }
        this.updateCarousel();
    }
    
    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide -= this.slidesToScroll;
        } else {
            this.currentSlide = this.totalSlides - this.slidesToShow;
        }
        this.updateCarousel();
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex * this.slidesToScroll;
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
        const cards = document.querySelectorAll('.package-card');
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
    
    exploreCloseBtn.addEventListener('click', () => {
        exploreOverlay.style.display = 'none';
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
        if (event.target === exploreOverlay) {
            exploreOverlay.style.display = 'none';
        }
    });
});
// =====================================================================================================
// end package

 //Sponsor
// =====================================================================================================
function loadLogos() {
    const logoFiles = [
        'img/sponsor1.png',
        'img/sponsor2.png', 
        'img/sponsor3.png',
        'img/sponsor4.png'
    ];

    const tickerContent = document.getElementById('tickerContent');
    
    for (let set = 0; set < 2; set++) {
        logoFiles.forEach((logoPath, index) => {
            const logoItem = document.createElement('div');
            logoItem.className = 'logo-item';
            
            const img = document.createElement('img');
            img.src = logoPath;
            img.alt = `Company Logo ${index + 1}`;
            
            // Add border radius specifically for sponsor4.jpg
            if (logoPath === 'img/sponsor4.png') {
                img.style.borderRadius = '100%';
            }
            
            img.onerror = function() {
                // Fallback if image doesn't load
                this.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="50" fill="#333" stroke="#666" stroke-width="2"/>
                        <text x="100" y="30" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">Logo ${index + 1}</text>
                    </svg>
                `)}`;
            };
            
            logoItem.appendChild(img);
            tickerContent.appendChild(logoItem);
        });
    }
}

        // Load logos when page loads
        window.addEventListener('load', loadLogos);
// =====================================================================================================
// end sponsor

// penginapan
// =====================================================================================================
class UniqueDualTourismPackageCarousel {
            constructor() {
                this.leftCarousel = {
                    currentSlide: 1,
                    totalSlides: 3,
                    slides: document.querySelectorAll('.unique-dtp-left-carousel .unique-dtp-carousel-slide'),
                    viewport: document.getElementById('uniqueDtpLeftCarouselViewport')
                };
                
                this.rightCarousel = {
                    currentSlide: 1,
                    totalSlides: 3,
                    slides: document.querySelectorAll('.unique-dtp-right-carousel .unique-dtp-carousel-slide'),
                    viewport: document.getElementById('uniqueDtpRightCarouselViewport')
                };
                
                this.init();
                this.updateCarousel('left');
                this.updateCarousel('right');
            }
            
            init() {
                // Navigation buttons
                document.querySelectorAll('.unique-dtp-carousel-nav').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const carousel = e.target.dataset.carousel;
                        const direction = e.target.classList.contains('unique-dtp-prev') ? 'prev' : 'next';
                        
                        if (direction === 'prev') {
                            this.previousSlide(carousel);
                        } else {
                            this.nextSlide(carousel);
                        }
                    });
                });
                
                this.addTouchSupport();
                this.addCardClickHandlers();
            }
            
            updateCarousel(side) {
                const carousel = this[side + 'Carousel'];
                
                // Remove all active classes first
                carousel.slides.forEach(slide => {
                    slide.className = 'unique-dtp-carousel-slide';
                });
                
                // Add appropriate active classes to 3 visible slides
                for (let i = 0; i < 3; i++) {
                    const slideIndex = (carousel.currentSlide - 1 + i + carousel.totalSlides) % carousel.totalSlides;
                    carousel.slides[slideIndex].classList.add(`unique-dtp-active-${i + 1}`);
                }
            }
            
            nextSlide(side) {
                const carousel = this[side + 'Carousel'];
                carousel.currentSlide = (carousel.currentSlide % carousel.totalSlides) + 1;
                this.updateCarousel(side);
            }
            
            previousSlide(side) {
                const carousel = this[side + 'Carousel'];
                carousel.currentSlide = carousel.currentSlide === 1 ? carousel.totalSlides : carousel.currentSlide - 1;
                this.updateCarousel(side);
            }
            
            addTouchSupport() {
                ['left', 'right'].forEach(side => {
                    const viewport = this[side + 'Carousel'].viewport;
                    let startX = 0;
                    let currentX = 0;
                    let diffX = 0;
                    
                    viewport.addEventListener('touchstart', (e) => {
                        startX = e.touches[0].clientX;
                    });
                    
                    viewport.addEventListener('touchmove', (e) => {
                        currentX = e.touches[0].clientX;
                        diffX = startX - currentX;
                    });
                    
                    viewport.addEventListener('touchend', () => {
                        if (Math.abs(diffX) > 50) {
                            if (diffX > 0) {
                                this.nextSlide(side);
                            } else {
                                this.previousSlide(side);
                            }
                        }
                    });
                });
            }
            
            addCardClickHandlers() {
                const cards = document.querySelectorAll('.unique-dtp-card');
                cards.forEach(card => {
                    card.addEventListener('click', () => {
                        const carouselType = card.getAttribute('data-carousel');
                        this.showPackageDetails(carouselType);
                    });
                });
            }
            
            showPackageDetails(carouselType) {
                // Get modal elements
                const modal = document.getElementById('uniqueDtpPackageModal');
                const modalHeader = document.getElementById('uniqueDtpModalHeader');
                const modalBody = document.getElementById('uniqueDtpModalBody');
                const modalTitle = document.getElementById('uniqueDtpModalPackageTitle');
                const modalIntro = document.getElementById('uniqueDtpModalPackageIntro');
                const modalPoints = document.getElementById('uniqueDtpModalPackagePoints');
                
                // Package data based on carousel type (only 2 types now)
                const packages = {
                    'adventure': {
                        title: "Charisma Bed and BreakFast",
                        type: "unique-dtp-adventure",
                        intro: "Akomodasi ini merupakan tempat menginap berbiaya rendah (budget accommodation) di Tomohon. Tempat ini menawarkan akomodasi dengan taman, teras, dan dapur bersama. Terdapat beberapa hewan peliharaan di dalam rumah, termasuk anjing, bebek, dan anak kucing yang berkeliaran bebas.",
                        points: [
                            "Lokasi: Tomohon, Sulawesi Utara. Berada 24 km dari Pelabuhan Manado.",
                            "Akses: Terletak di area perumahan, dekat dengan Gereja Pniel. Berjarak sekitar 24 km dari Pelabuhan Manado.",
                            "Fasilitas: Wi-Fi gratis, parkir gratis, antar-jemput bandara (dengan biaya tambahan), dan dapur bersama.",
                            "Sarapan: Tersedia sarapan prasmanan, kontinental, atau vegetarian.",
                            "Lain-lain: Menyediakan sewa skuter, BBQ, dan dapat membantu mengatur tur atau kegiatan wisata"
                        ]
                    },
                    'culture': {
                        title: "Alina's Homestay",
                        type: "unique-dtp-culture",
                        intro: "Homestay Alina merupakan akomodasi dengan fasilitas dasar yang memadai, seperti kamar mandi dalam, dapur umum, balkon dan ruang santai dengan view gunung lokon dan mahawu yang indah. Tersedia breakfast di tiap reservasi, parkiran yang nyaman bagi wisatawan.",
                        points: [
                            "Lokasi: Desa Wisata Kakaskasen Dua, Kota Tomohon, Sulawesi Utara",
                            "Fasilitas: Kamar mandi pribadi, Sarapan pagi, Wifi Area, Perlengkapan Mandi, Area Selfie"
                        ]
                    }
                };
                
                // Set modal content based on selected carousel type
                const selectedPackage = packages[carouselType];
                
                // Set modal style based on package type
                modalHeader.className = `unique-dtp-modal-header ${selectedPackage.type}`;
                modalBody.className = `unique-dtp-modal-body ${selectedPackage.type}`;
                
                modalTitle.textContent = selectedPackage.title;
                modalIntro.textContent = selectedPackage.intro;
                
                // Create points list
                if (selectedPackage.points.length > 0) {
                    modalPoints.innerHTML = '<ul>' + 
                        selectedPackage.points.map(point => `<li>${point}</li>`).join('') + 
                        '</ul>';
                } else {
                    modalPoints.innerHTML = '';
                }
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const carousel = new UniqueDualTourismPackageCarousel();
            
            // Close modal functionality
            const modal = document.getElementById('uniqueDtpPackageModal');
            const closeModal = document.getElementById('uniqueDtpCloseModal');
            
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (modal.style.display === 'block' && e.key === 'Escape') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });
// =====================================================================================================
// end penginapan

// Footer social icon tooltip/copy effect
// ====================================================================================================
document.querySelectorAll('.footer-column .icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const tooltip = icon.querySelector('.tooltip');
    if (tooltip) {
      const originalText = tooltip.textContent;

      // Copy tooltip text to clipboard
      navigator.clipboard.writeText(originalText);

      tooltip.textContent = 'Copied!';
      setTimeout(() => {
        if (icon.classList.contains('youtube')) {
          tooltip.textContent = '@kampungwisatakakaskasendua';
        } else if (icon.classList.contains('instagram')) {
          tooltip.textContent = '@kampung.wisata.kakaskasen_dua';
        } else if (icon.classList.contains('whatsapp')) {
          tooltip.textContent = '+62 853-9707-2088';
        } else if (icon.classList.contains('email')) {
          tooltip.textContent = 'pokdanwisvictory@gmail.com';
        }
      }, 1200);
    }
  });
});
// =====================================================================================================
// end footer social icon tooltip/copy effect

// maps
// =====================================================================================================
// Add click animations to cards
        document.querySelectorAll('.kakaskasen-info-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('kakaskasen-contact-button')) {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-5px)';
                    }, 150);
                }
            });
        });

        // Contact button functionality
        document.querySelectorAll('.kakaskasen-contact-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const cardTitle = this.closest('.kakaskasen-info-card').querySelector('.kakaskasen-card-title').textContent;
                alert(`Anda akan menghubungi layanan: ${cardTitle}`);
            });
        });

        // Add entrance animation
        function animateCards() {
            const cards = document.querySelectorAll('.kakaskasen-info-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }

        // Run animation when page loads
        window.addEventListener('load', animateCards);
// =====================================================================================================
// end maps