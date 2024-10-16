document.addEventListener("DOMContentLoaded", () => {
    const arabicBtn = document.getElementById('arabic-btn');
    const englishBtn = document.getElementById('english-btn');
    const htmlTag = document.documentElement; // عنصر الـ <html>

    // تحميل ملف الترجمة
    async function loadTranslations(lang) {
        const response = await fetch('translation_public_health.json');
        const translations = await response.json();

        // تغيير النصوص بناءً على اللغة باستخدام id
        Object.keys(translations[lang]).forEach(id => {
            const elementById = document.getElementById(id);
            if (elementById) {
                elementById.innerHTML = translations[lang][id]; // تغيير إلى innerHTML
            }

            // تغيير النصوص بناءً على اللغة باستخدام class
            const elementsByClass = document.getElementsByClassName(id);
            for (const element of elementsByClass) {
                element.innerHTML = translations[lang][id]; // تغيير إلى innerHTML
            }
        });

        // تغيير اتجاه النصوص بناءً على اللغة
        if (lang === 'ar') {
            htmlTag.lang = 'ar';
            document.body.style.direction = 'rtl'; // من اليمين إلى اليسار
        } else {
            htmlTag.lang = 'en';
            document.body.style.direction = 'ltr'; // من اليسار إلى اليمين
        }
    }

    // حدث عند الضغط على زر العربية
    arabicBtn.addEventListener('click', () => loadTranslations('ar'));

    // حدث عند الضغط على زر الإنجليزية
    englishBtn.addEventListener('click', () => loadTranslations('en'));
});
