AOS.init(); // تهيئة AOS
 // تأخير ظهور قسم الغلاف


 document.addEventListener('DOMContentLoaded', function() {
    const openNavIcon = document.getElementById('open-nav');
    const closeNavIcon = document.getElementById('close-nav');
    const navbarCollapse = document.querySelector('#navbarNav');
  
    // عند الضغط على أيقونة فتح القائمة
    openNavIcon.addEventListener('click', function() {
      navbarCollapse.classList.add('show');  // عرض القائمة
      openNavIcon.classList.add('d-none');   // إخفاء أيقونة الفتح
      closeNavIcon.classList.remove('d-none'); // إظهار أيقونة الغلق
    });
  
    // عند الضغط على أيقونة غلق القائمة
    closeNavIcon.addEventListener('click', function() {
      navbarCollapse.classList.remove('show');  // إخفاء القائمة
      closeNavIcon.classList.add('d-none'); // إخفاء أيقونة الغلق
      openNavIcon.classList.remove('d-none'); // إظهار أيقونة الفتح
    });
  });

 

  
    