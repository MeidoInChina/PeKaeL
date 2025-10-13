<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Desa Wisata Kakaskasen Dua</title>
</head>
<body>
    <!-- navbar -->
    <nav>
        <div class="logo">
            <img src="img/logoKK2.png" alt="Logo">
            <span>Desa Wisata Kakaskasen II</span>
        </div>

        <!-- Hamburger -->
        <div class="hamburger" id="hamburger">
            ☰
        </div>

        <ul class="nav-links" id="navLinks">
            <li><a href="#">Beranda</a></li>
            <li><a href="#intro">Tentang</a></li>
            <li><a href="#map">Peta</a></li>
            <li><a href="#lembaga">Lembaga</a></li>
            <li><a href="#paket">Paket</a></li>
            <li><a href="#homestay">Homestay</a></li>
            <li><a href="https://wa.me/6285397072088" target="_blank">Kontak</a></li>
        </ul>
        <script>
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        </script>
    </nav>
    <!-- end nav -->

    <!-- sponsor -->
    <div class="ticker-wrapper">
        <div class="ticker-content" id="tickerContent">
            <!-- Logos will be loaded here -->
        </div>
    </div>
    <!-- end sponsor -->

    <!-- footer -->
    <footer>
        <div class="footer-container">
            <!-- Kolom Kiri -->
            <div class="footer-column">
                <img src="img/logoKK2.png" alt="Logo" class="footer-logo">
                <p style="color: #ffffff;">"Ini tampilan Quotes" - writer</p>
                <!-- Footer - bagian social icons (GANTI Facebook jadi YouTube) -->
            <ul class="wrapper">
                <li class="icon youtube">
                    <span class="tooltip">@kampungwisatakakaskasendua</span>
                    <a href="https://www.youtube.com/@kampungwisatakakaskasen2316" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                        </svg>
                    </a>
                </li>
                <li class="icon instagram">
                    <span class="tooltip">@kampung.wisata.kakaskasen_dua</span>
                    <a href="https://www.instagram.com/kampung_wisata_kakaskasen_dua/?hl=en"></a>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                </li>
                <!-- WhatsApp -->
                    <li class="icon whatsapp">
                    <span class="tooltip">+62 853-9707-2088</span>
                    <a href="https://wa.me/6285397072088" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.5-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                    </a>
                    </li>
                <!-- Email -->
                <li class="icon email">
                    <span class="tooltip">pokdanwisvictory@gmail.com</span>
                    <a href="mailto:pokdanwisvictory@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a>
                </li>
            </ul>
            </div>

            <!-- Kolom Kanan -->
            <div class="footer-column">
                <h3>Get in touch</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i><a href="https://maps.app.goo.gl/oLbm5NZ92zqAZ4yT7" target="_blank" rel="noopener"> Lokasi desa wisatanya</a></li>
                    <li><i class="fab fa-whatsapp"></i> +62 85397072088</li>
                    <li><i class="fas fa-envelope"></i> pokdanwisvictory@gmail.com</li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p style="color: #ffffff;">&copy;Desa Wisata Kakaskasen II</p>
        </div>

        <!-- Tombol Back to Top -->
        <a href="#" class="back-to-top">
            <i class="fas fa-arrow-up"></i>
        </a>
    </footer>
    <!-- end footer -->
    <script src=""></script>
</body>
</html>