
// document.addEventListener("DOMContentLoaded", function () {
//   const openNav = document.getElementById("open-nav");
//   const closeNav = document.getElementById("close-nav");
//   const navbarNav = document.getElementById("navbarNav");

//   // إضافة تأثير عند فتح القائمة
//   openNav.addEventListener("click", function () {
//     navbarNav.classList.add("show");
//     openNav.classList.add("d-none");
//     closeNav.classList.remove("d-none");
//   });

//   // إضافة تأثير عند غلق القائمة
//   closeNav.addEventListener("click", function () {
//     navbarNav.classList.remove("show");
//     openNav.classList.remove("d-none");
//     closeNav.classList.add("d-none");
//   });
// });



//  document.addEventListener('DOMContentLoaded', function() {
//     const openNavIcon = document.getElementById('open-nav');
//     const closeNavIcon = document.getElementById('close-nav');
//     const navbarCollapse = document.querySelector('#navbarNav');

//     // عند الضغط على أيقونة فتح القائمة
//     openNavIcon.addEventListener('click', function() {
//       navbarCollapse.classList.add('show');  // عرض القائمة
//       openNavIcon.classList.add('d-none');   // إخفاء أيقونة الفتح
//       closeNavIcon.classList.remove('d-none'); // إظهار أيقونة الغلق
//     });

//     // عند الضغط على أيقونة غلق القائمة
//     closeNavIcon.addEventListener('click', function() {
//       navbarCollapse.classList.remove('show');  // إخفاء القائمة
//       closeNavIcon.classList.add('d-none'); // إخفاء أيقونة الغلق
//       openNavIcon.classList.remove('d-none'); // إظهار أيقونة الفتح
//     });
//   });




function updatePageLanguageAndDirection() {
    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        // document.body.style.textAlign = "right";
    } else {
        document.documentElement.dir = "ltr";
        // document.body.style.textAlign = "left";
    }
}

window.onload = function () {
    updatePageLanguageAndDirection();
};



const swiper = new Swiper('.swiper-container', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

