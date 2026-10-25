(function() {
    
    if (window.location.pathname.includes('ban-mobile.html')) {
        return; 
    }

    function isMobile() {
        const ua = navigator.userAgent.toLowerCase();
        const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
        const isMobileUA = mobileKeywords.test(ua);
        const isSmallScreen = window.innerWidth <= 768;
        return isMobileUA || isSmallScreen;
    }
    if (isMobile()) {
        window.location.href = 'ban-mobile.html';
    }
})();

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // 防止在非主页报错
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
});