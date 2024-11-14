// 滚动监测，显示或隐藏导航栏
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {  // 当滚动超过200像素时显示导航栏
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});
