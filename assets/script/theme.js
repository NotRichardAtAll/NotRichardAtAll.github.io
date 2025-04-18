(function () {
    const root = document.documentElement;
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      root.setAttribute('data-theme', userTheme);
    }
  
    window.setTheme = function (mode) {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
    };
  })();