const lang = localStorage.getItem("lang")
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


        let request = indexedDB.open("UserDatabase", 1);

        request.onsuccess = function (event) {
            let db = event.target.result;
            let transaction = db.transaction(["users"], "readonly");
            let objectStore = transaction.objectStore("users");
            let index = objectStore.index("email");

            let getRequest = index.get(email);

            getRequest.onsuccess = function (event) {
                let patient = event.target.result;
                if (patient && patient.password === password) {
                    localStorage.setItem("loggedPatient", JSON.stringify(patient));
                    localStorage.setItem("isLoginPatient" , true)
                    window.location.href = "../index.html"; 
                } else {
                    document.querySelector("#submitError").innerHTML = lang=== "en" ? "Incorrect email or password":
                        "البريد الإلكتروني أو كلمة المرور غير صحيحة";
                }
            };
            getRequest.onerror = function () {
                alert("حدث خطأ في جلب البيانات.");
            };
        };

        request.onerror = function () {
            alert("فشل الاتصال بقاعدة البيانات.");
        };



    }
});