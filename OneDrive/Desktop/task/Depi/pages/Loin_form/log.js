document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    let isValid = true;

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // إعادة تعيين رسائل الأخطاء
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // التحقق من البريد الإلكتروني أو رقم الهاتف
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // التحقق من البريد الإلكتروني
    const mobileRegex = /^[0-9]{11}$/;  // التحقق من رقم الهاتف المكون من 11 رقمًا
    if (email === '') {
        document.getElementById('emailError').textContent = 'البريد الإلكتروني أو رقم الموبايل مطلوب';
        isValid = false;
    } else if (!emailRegex.test(email) && !mobileRegex.test(email)) {
        document.getElementById('emailError').textContent = 'يجب إدخال بريد إلكتروني صحيح أو رقم موبايل يتكون من 11 رقمًا';
        isValid = false;
    }

    // التحقق من كلمة المرور (يجب أن تحتوي على 6 أحرف على الأقل)
    if (password === '' || password.length < 6) {
        document.getElementById('passwordError').textContent = 'كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل';
        isValid = false;
    }

    if (isValid) {
        this.submit(); // إرسال النموذج إذا كانت جميع المدخلات صحيحة
    }
});