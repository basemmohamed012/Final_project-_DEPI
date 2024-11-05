// const lang = localStorage.getItem("lang")


document.querySelector(".login-container").innerHTML = ` 
    <h4 class="welcome-text"> ${lang === "en" ? "Welcome Back!" : "مرحبا بعودتك !"} </h4>
        <div class="form-group">
          <i class="fa-regular fa-envelope"></i>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="${lang === "en" ? "Email" : "البريد الإلكتروني"}"
            required
          />
          <div class="error-message" id="email-error"></div>
        </div>
        <div class="form-group">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="${lang === "en" ? "Password" : "كلمة المرور"}"
            required
          />
          <div class="error-message" id="password-error">
          </div>
        </div>
        <p class="text-center">

        ${lang === "en" ? "Don't have an account?" : "هل لديك حساب؟"}
          
          <span style="color: #0070cd; cursor: pointer"
            ><a href="nextpage.html" style="color: #0070cd">
            ${lang === "en" ? "Sign Up" : "تسجيل جديد"}
            
            </a></span
          >
        </p>
        <button id="login-button" class="btn btn-primary login-button">
        ${lang === "en" ? "Log In" : "تسجيل دخول"}
          
        </button>

        <div class="error-message" id="submitError"></div>
        `


const loginButton = document.getElementById("login-button");

const formControls = document.querySelectorAll(".form-control");





loginButton.addEventListener("click", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const errorMessages = document.querySelectorAll(".error-message");
console.log(email , password)



    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // التحقق من البريد الإلكتروني
    if (email === "") {
        emailError.textContent = lang ==="en " ? "Email required"  : "البريد الإلكتروني مطلوب";
        isValid = false;
    } else if (!emailRegex.test(email) ) {
        emailError.textContent =
           lang === "en" ? "You must enter a valid email address" : "يجب إدخال بريد إلكتروني صحيحا";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = lang  === "en" ? " Password must contain at least 6 characters":
            "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل";
        isValid = false;
    }

    if (isValid) {
        let request = indexedDB.open("DoctorsDB", 1);

        request.onsuccess = function (event) {
            let db = event.target.result;
            let transaction = db.transaction(["doctors"], "readonly");
            let objectStore = transaction.objectStore("doctors");
            let index = objectStore.index("email");

            let getRequest = index.get(email);

            getRequest.onsuccess = function (event) {
                let doctor = event.target.result;
                if (doctor && doctor.password === password) {
                    localStorage.setItem("loggedDoctor", JSON.stringify(doctor));
                    localStorage.setItem("isLoginDoctor" , true)
                    window.location.href = "../index.html"; // الانتقال إلى صفحة بيانات الدكتور
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
