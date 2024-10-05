const dropdownMenuButton = document.getElementById('dropdownMenuButton');
const selectedFlag = document.getElementById('selectedFlag');
const countryCodes = document.querySelectorAll('.country-code');

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        const flag = item.getAttribute('data-flag');
        const code = item.getAttribute('data-code');
        selectedFlag.src = flag;
        countryCodes.forEach(codeElem => {
            codeElem.innerText = code;
        });
    });
});


 // تفعيل أو إلغاء تفعيل زر التأمين الطبي
 const toggleInsurance = document.getElementById('toggleInsurance');
 toggleInsurance.addEventListener('click', function () {
     toggleInsurance.classList.toggle('active');
 });

 // التحقق عند إرسال النموذج
 document.getElementById('registrationForm').addEventListener('submit', function (event) {
     event.preventDefault(); // منع الإرسال الافتراضي للنموذج

     let isValid = true;

     const fullName = document.getElementById('fullName').value.trim();
     const mobileNumber = document.getElementById('mobileNumber').value.trim();
     const email = document.getElementById('email').value.trim();
     const password = document.getElementById('password').value.trim();
     const insuranceSelected = toggleInsurance.classList.contains('active'); // التأكد إذا كان التأمين مفعلًا

     // إعادة تعيين رسائل الأخطاء
     document.getElementById('nameError').textContent = '';
     document.getElementById('mobileError').textContent = '';
     document.getElementById('emailError').textContent = '';
     document.getElementById('passwordError').textContent = '';
     document.getElementById('insuranceError').textContent = '';

     // التحقق من الاسم (أحرف فقط)
     const nameRegex = /^[A-Za-z\s\u0600-\u06FF]+$/;  // يشمل الأحرف الإنجليزية والعربية مع الفراغات
     if (fullName === '' || !nameRegex.test(fullName)) {
         document.getElementById('nameError').textContent = 'الاسم يجب أن يحتوي على أحرف فقط';
         isValid = false;
     }

     // التحقق من رقم الموبايل (أرقام فقط)
     const mobileRegex = /^[0-9]{11}$/;
     if (mobileNumber === '' || !mobileRegex.test(mobileNumber)) {
         document.getElementById('mobileError').textContent = 'رقم الموبايل غير صحيح، يجب أن يتكون من 11 رقمًا';
         isValid = false;
     }

     // التحقق من البريد الإلكتروني
     if (email === '') {
         document.getElementById('emailError').textContent = 'البريد الإلكتروني مطلوب';
         isValid = false;
     }

     // التحقق من كلمة المرور
     if (password === '' || password.length < 6) {
         document.getElementById('passwordError').textContent = 'كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل';
         isValid = false;
     }

     // التحقق من التأمين الطبي
     if (!insuranceSelected) {
         document.getElementById('insuranceError').textContent = 'يجب تفعيل التأمين الطبي';
         isValid = false;
     }

     if (isValid) {
         // إذا كان التحقق صحيحًا، يمكن إرسال النموذج
         this.submit();
     }
 });