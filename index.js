(function() {
    const warningBox = document.getElementById('mobile-warning');

    function isMobile() {
        const ua = navigator.userAgent.toLowerCase();
        const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
        const isMobileUA = mobileKeywords.test(ua);
        const isSmallScreen = window.innerWidth <= 768;
        return isMobileUA || isSmallScreen;
    }

    if (isMobile()) {
        warningBox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                warningBox.style.display = 'none';
                document.body.style.overflow = '';
            } else {
                warningBox.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    }
})();

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
});