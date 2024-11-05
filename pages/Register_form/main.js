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


if (lang === "ar") {
    document.documentElement.dir = "rtl";
} else {
    document.documentElement.dir = "ltr";
}



// التحقق عند إرسال النموذج
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    let isValid = true;

    const fullName = document.getElementById('fullName').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // إعادة تعيين رسائل الأخطاء
    document.getElementById('nameError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

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



    if (isValid) {
        // إذا كان التحقق صحيحًا، يمكن إرسال النموذج
        const request = indexedDB.open('UserDatabase', 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('fullName', 'fullName', { unique: false });
            objectStore.createIndex('mobileNumber', 'mobileNumber', { unique: true });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('gender', 'gender', { unique: false });
            objectStore.createIndex('dob', 'dob', { unique: false });
        };

        request.onsuccess = function (event) {
            console.log('Database opened successfully');
            const db = event.target.result;



            const transaction = db.transaction(['users'], 'readwrite');
            const objectStore = transaction.objectStore('users');

            const fullName = document.getElementById('fullName').value;
            const mobileNumber = document.getElementById('mobileNumber').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const dob = document.getElementById('dob').value;

            const userData = {
                fullName: fullName,
                mobileNumber: mobileNumber,
                email: email,
                gender: gender,
                dob: dob,
                password: password
            };

            // تأكد من تعريف addRequest داخل نطاق هذا الحدث
            const addRequest = objectStore.add(userData);

            addRequest.onsuccess = function () {
                console.log('Data added successfully');
                document.getElementById('registrationForm').reset();
                window.location.href = "../../index.html";
                localStorage.setItem("loggedPatient", JSON.stringify(userData));
                localStorage.setItem("isLoginPatient", true)


            };

            addRequest.onerror = function () {
                alert('حدث خطأ أثناء إضافة بياناتك. تفاصيل الخطأ: ' + addRequest.error.message);
                console.error('Add error:', addRequest.error);
            };



        };

        request.onerror = function (event) {
            console.error('Database error:', event.target.errorCode);
        };

    }
});












// make index database

// فتح (أو إنشاء) قاعدة بيانات
