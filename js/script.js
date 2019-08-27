
    window.sr = ScrollReveal({ duration : 2000 });
    sr.reveal('.site-content .d-flex');
    sr.reveal('.section-1 .card');
    sr.reveal('.section-2 .d-flex');
    sr.reveal('.section-3 .col-md-4');
    sr.reveal('.section-4 .col-md-7, .col-md-5');


    document.querySelectorAll('#btn-top')
    function scrollFun() {
        let scrollTop = document.body.scrollTop
       let top = document.documentElement.scrollTop  
        if ( scrollTop > 30 || top > 40) {
            btn.style.display = 'block'
        }else{
            btn.style.display = "none"
        }
    }
    
    // function topFun() {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }
    
    window.onscroll = function () {
        scrollFun();
    }
    
    
    // btn.addEventListener('click', topFun)
    
    // var container = document.querySelector('.container')
    // var nav = document.querySelector('#menu')
    // var ul = document.querySelectorAll('#list')