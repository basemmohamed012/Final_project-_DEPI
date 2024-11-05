// تحديث كائن الترجمات مع إضافة العناصر الجديدة
const translations = {
  ar: {
      // الترجمات السابقة
      'page-title': 'عيادة الحياة',
      'join-now': 'انضم الآن',
      'login': 'تسجيل الدخول',
      'life-for-doctors': 'الحياة للأطباء',
      'articles': 'المقالات',
      'contact-us': 'اتصل بنا',
      'egypt': 'مصر',
      'cover-lead': 'أعلى مستوى من الخدمة يمكنك الحصول عليها.',
      'cover-title': 'اعتنِ بصحتك الآن',
      'cover-description': 'نحن هنا لنقدم لك أفضل العلاجات والرعاية الصحية التي تستحقها. فريقنا من الخبراء متواجد لمساعدتك في جميع احتياجاتك الطبية.',
      'cover-button': 'احجز موعدًا',
      'specialty-title': 'احجز كشف حسب التخصص',
      'pediatrics': 'أطفال وحديثي الولادة',
      'psychiatry': 'نفسي',
      'dentistry': 'أسنان',
      'dermatology': 'جلدية',
      'neurology': 'مخ و أعصاب',
      'obstetrics': 'نسا و توليد',
      'orthopedics': 'عظام',
      'ent': 'أنف و أذن',
      "Surgery" : "جراحة",
      // إضافة ترجمات قسم العدادات
      'doctors-count': 'طبيب',
      'departments-count': 'قسم',
      'labs-count': 'معمل بحث',
      'awards-count': 'جائزة',
      'doctors-title': 'أطباء',
      'departments-title': 'أقسام',
      'labs-title': 'معامل البحث',
      'awards-title': 'جوائز',
      // بقية الترجمات...
      'testimonials-title': 'آراء بعض المرضى',
      'testimonial1': '"تجربة رائعة مع عيادة الحياة، أوصي بها تمامًا."',
      'client1': 'كريم السيد',
      'position1': 'موظف',
      'testimonial2': '"دكاترة ممتازين وذات خبرة، راضٍ تمامًا"',
      'client2': 'عمر أحمد',
      'position2': 'مدرس',
      'contact-title': 'تواصل معنا',
      'contact-subtitle': 'تواصل معنا لأي استفسارات أو دعم!',
      'name': 'اسمك',
      'email': 'البريد الإلكتروني',
      'subject': 'الموضوع',
      'message': 'الرسالة',
      'submit-button': 'إرسال',
      'name-placeholder': 'اسمك',
      'email-placeholder': 'البريد الإلكتروني',
      'subject-placeholder': 'الموضوع',
      'message-placeholder': 'الرسالة',
      'footer-about-title': 'تواصل معنا',
      'footer-address': 'شارع الأمل A108',
      'footer-city': '535022 كفر الشيخ، مصر',
      'footer-phone': 'الهاتف: +20 123 456 7890',
      'footer-email': 'البريد الإلكتروني: info@alhayah.com',
      'footer-useful-links': 'روابط مفيدة',
      'footer-home': 'الرئيسية',
      'footer-about': 'عننا',
      'footer-services': 'خدماتنا',
      'footer-faq': 'الأسئلة المتكررة',
      'footer-testimonials': 'تعليقات المرضى',
      'footer-our-services': 'خدماتنا',
      'footer-medical-consultation': 'استشارة طبية',
      'footer-appointment': 'حجز موعد',
      'footer-quick-response': 'سرعة الاستجابة',
      'footer-healthy-nutrition': 'التغذية الصحية'
  },
  en: {
      // الترجمات السابقة
      'page-title': 'Al-Hayat Clinic',
      'join-now': 'Join Now',
      'login': 'Login',
      'life-for-doctors': 'Life for Doctors',
      'articles': 'Articles',
      'contact-us': 'Contact Us',
      'egypt': 'Egypt',
      'cover-lead': 'The highest level of service you can get.',
      'cover-title': 'Take care of your health now',
      'cover-description': 'We are here to provide you with the best treatments and healthcare you deserve. Our team has experience in the field.',
      'cover-button': 'Book Now',
      'specialty-title': 'Book an Appointment by Specialty',
      'pediatrics': 'Pediatrics and Newborns',
      'psychiatry': 'Psychiatry',
      'dentistry': 'Dentistry',
      'dermatology': 'Dermatology',
      'neurology': 'Neurology',
      'obstetrics': 'Obstetrics and Gynecology',
      'orthopedics': 'Orthopedics',
      'ent': 'ENT',
      "Surgery":"Surgery",
      // إضافة ترجمات قسم العدادات
      'doctors-count': 'Doctors',
      'departments-count': 'Departments',
      'labs-count': 'Research Labs',
      'awards-count': 'Awards',
      'doctors-title': 'Doctors',
      'departments-title': 'Departments',
      'labs-title': 'Research Labs',
      'awards-title': 'Awards',
      // بقية الترجمات...
      'testimonials-title': 'Patient Feedback',
      'testimonial1': '"Great experience with Al-Hayat Clinic, highly recommend it."',
      'client1': 'Kareem El-Sayed',
      'position1': 'Employee',
      'testimonial2': '"Excellent doctors with experience, completely satisfied."',
      'client2': 'Omar Ahmed',
      'position2': 'Teacher',
      'contact-title': 'Contact Us',
      'contact-subtitle': 'Reach out to us for any inquiries or support!',
      'name': 'Your Name',
      'email': 'Email',
      'subject': 'Subject',
      'message': 'Message',
      'submit-button': 'Send',
      'name-placeholder': 'Your Name',
      'email-placeholder': 'Email',
      'subject-placeholder': 'Subject',
      'message-placeholder': 'Message',
      'footer-about-title': 'Contact Us',
      'footer-address': 'Street of Hope A108',
      'footer-city': '535022 Kafr El-Sheikh, Egypt',
      'footer-phone': 'Phone: +20 123 456 7890',
      'footer-email': 'Email: info@alhayah.com',
      'footer-useful-links': 'Useful Links',
      'footer-home': 'Home',
      'footer-about': 'About Us',
      'footer-services': 'Our Services',
      'footer-faq': 'FAQ',
      'footer-testimonials': 'Patient Testimonials',
      'footer-our-services': 'Our Services',
      'footer-medical-consultation': 'Medical Consultation',
      'footer-appointment': 'Appointment Booking',
      'footer-quick-response': 'Quick Response',
      'footer-healthy-nutrition': 'Healthy Nutrition'
  }
};

// تحديث HTML عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // إضافة IDs للعناصر التي تحتاج إلى ترجمة في Navbar
  const navbarElements = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
  navbarElements.forEach((element, index) => {
      if (!element.id) {
          if (element.classList.contains('btn-outline-light')) {
              element.id = 'join-now';
          } else if (element.textContent.trim().toLowerCase().includes('login')) {
              element.id = 'login';
          } else if (element.textContent.trim().toLowerCase().includes('doctors')) {
              element.id = 'life-for-doctors';
          } else if (element.textContent.trim().toLowerCase().includes('articles')) {
              element.id = 'articles';
          }
      }
  });

  // إضافة IDs لعناصر قسم العدادات
  const counterBoxes = document.querySelectorAll('.counter-box');
  counterBoxes.forEach((box, index) => {
      const title = box.querySelector('p');
      if (title) {
          switch (index) {
              case 0:
                  title.id = 'doctors-title';
                  break;
              case 1:
                  title.id = 'departments-title';
                  break;
              case 2:
                  title.id = 'labs-title';
                  break;
              case 3:
                  title.id = 'awards-title';
                  break;
          }
      }
  });

  // إضافة زر تبديل اللغة
  const langListItem = document.querySelector('.lang');
  langListItem.innerHTML = `
      <a class="nav-link text-white lang" id="languageToggle">
          <span id="currentLang">English</span>
      </a>
  `;

  // تطبيق اللغة المحفوظة
  const savedLanguage = localStorage.getItem('lang') || 'ar';
  applyLanguage(savedLanguage);

  // إضافة مستمع حدث للزر
  document.getElementById('languageToggle').addEventListener('click', function() {
      const currentLanguage = localStorage.getItem('lang') || 'ar';
      const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', newLanguage);
      applyLanguage(newLanguage);
  });
});

// دالة تطبيق اللغة
function applyLanguage(lang) {
  // تحديث نص الزر
  const buttonText = lang === 'ar' ? 'English' : 'العربية';
  document.getElementById('currentLang').textContent = buttonText;

  // تحديث اتجاه الصفحة
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث classes النافبار
  const navbar = document.querySelector('.navbar-nav');
 

  // تطبيق الترجمات
  for (const [key, value] of Object.entries(translations[lang])) {
      const element = document.getElementById(key);
      if (element) {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              element.placeholder = value;
          } else {
              element.textContent = value;
          }
      }
  }

  // تحديث classes الصفحة
  document.body.classList.toggle('rtl', lang === 'ar');
  document.body.classList.toggle('ltr', lang === 'en');

  // تحديث النصوص في قسم العدادات
  updateCounterSection(lang);
}

// دالة تحديث قسم العدادات
function updateCounterSection(lang) {
  const counterBoxes = document.querySelectorAll('.counter-box');
  counterBoxes.forEach((box, index) => {
      const title = box.querySelector('p');
      if (title) {
          switch (index) {
              case 0:
                  title.textContent = translations[lang]['doctors-title'];
                  break;
              case 1:
                  title.textContent = translations[lang]['departments-title'];
                  break;
              case 2:
                  title.textContent = translations[lang]['labs-title'];
                  break;
              case 3:
                  title.textContent = translations[lang]['awards-title'];
                  break;
          }
      }
  });
}

// إضافة CSS
const style = document.createElement('style');
style.textContent = `
  #languageToggle {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 20px;
      transition: all 0.3s ease;
  }
  
  #languageToggle:hover {
      background-color: rgba(255, 255, 255, 0.2);
  }
  
  #currentLang {
      font-size: 14px;
  }

  .rtl {
      text-align: right;
      direction: rtl;
  }

  .ltr {
      text-align: left;
      direction: ltr;
  }

  .rtl .navbar-nav {
      padding-right: 0;
  }

  .ltr .navbar-nav {
      padding-left: 0;
  }
`;
document.head.appendChild(style);