









// الكائن الذي يحتوي على التاريخ والوقت
let myObjectDate = JSON.parse(localStorage.getItem("selectedDateTime"))

// مصفوفات أسماء شهور السنة بالإنجليزية والعربية
const monthsInArabic = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const monthsInEnglish = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// دالة لتحويل الوقت من 24 ساعة إلى 12 ساعة مع صيغة صباحًا ومساءً أو AM/PM
function convertTo12Hour(time, language) {
  let [hour, minute] = time.split(':');
  let period = language === 'ar' ? 'ص' : 'AM';

  hour = parseInt(hour);
  if (hour >= 12) {
    period = language === 'ar' ? 'م' : 'PM';
    if (hour > 12) hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  return `${hour}:${minute} ${period}`;
}

function formatDate(language) {
  let dateObj = new Date(myObjectDate.date);
  let today = new Date();

  // حساب اليوم وغدًا
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // استخراج مكونات التاريخ
  let day = dateObj.getDate();
  let monthIndex = dateObj.getMonth();
  let monthName = language === 'ar' ? monthsInArabic[monthIndex] : monthsInEnglish[monthIndex];

  // تحديد ما إذا كان اليوم أو غدًا أو تاريخ محدد
  let dayText;
  if (dateObj.toDateString() === today.toDateString()) {
    dayText = language === 'ar' ? "اليوم" : "Today";
  } else if (dateObj.toDateString() === tomorrow.toDateString()) {
    dayText = language === 'ar' ? "غدًا" : "Tomorrow";
  } else {
    dayText = `${monthName} ${day}`;
  }

  // تحويل الوقت إلى صيغة 12 ساعة مع إزالة "ص" و"م" فقط إذا كان الوقت موجودًا
  let formattedTime = myObjectDate.time ? convertTo12Hour(myObjectDate.time.replace('م', '').replace('ص', ''), language) : "";

  // تنسيق النتيجة النهائية
  if (dayText === "Today" || dayText === "Tomorrow" || dayText === "اليوم" || dayText === "غدًا") {
    return `${dayText} - ${formattedTime}`;
  } else {
    return `${dayText} - ${formattedTime}`;
  }
}









const language = localStorage.getItem("lang");
let doctor = JSON.parse(localStorage.getItem("selected-docotor"))

let selectedDate = JSON.parse(localStorage.getItem("selectedDateTime"))
console.log(selectedDate)
const doctorList = document.getElementById('doctorList');
doctorList.innerHTML = `
            <div class="profile-card">
            <div class="info">
                <img src="${doctor.profileImage}" alt="${doctor.name[language]}" class="img-fluid rounded-circle">
                <div>
                <h2>${doctor.name[language]}</h2>
                <p>${doctor.jobTitle[language]}</p>
                </div>
            </div>
            <p class="date">، الدخول بموعد محدد  ${formatDate(localStorage.getItem("lang"))}  </p>
            </div>
            `;




document.querySelector(".form-card").innerHTML = language === "ar" ? `
    <div class="form-header">ادخل بيانات الحجز</div>
    <form class="form-book">

    <div> 
      <div class="form-group">
    <i class="fas fa-user"></i>
      <input
      type="text" 
      class="form-control"
      id="patientName"
      placeholder="اسم المريض الذي سيقوم بالكشف"
      
      />
      </div>
      <span class="error-message" id="nameError" style="color: red; display: none;"></span>
    </div>


      <div>
      <div class="form-group">
        <i class="fas fa-phone-alt"></i>
        <input
          type="tel"
          class="form-control"
          id="mobileNumber"
          placeholder="ادخل رقم الموبايل"
          
        />
        </div>
        <span class="error-message" id="mobileError" style="color: red; display: none;"></span>
      </div>

      <div>
       <div class="form-group">
        <i class="fas fa-envelope"></i>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="ادخل البريد الإلكتروني"
        />
        </div>
        <span class="error-message" id="emailError" style="color: red; display: none;"></span>
      </div>
    
      <button type="submit" class="btn btn-danger btn-block">
        <span>احجز</span>
      </button>
      
    </form>
  </div>
</div>
` : `
    <div class="form-header">Enter Booking Information</div>
    <form class="form-book">
    <div>
    <div class="form-group">
      <i class="fas fa-user"></i>
      <input
        type="text"
        class="form-control"
        id="patientName"
        placeholder="Enter the patient's name"
        required
      />
      </div>
      <span class="error-message" id="nameError" style="color: red; display: none;"></span>
    </div>


      <div >
      <div class="form-group">
        <i class="fas fa-phone-alt"></i>
        <input
          type="tel"
          class="form-control"
          id="mobileNumber"
          placeholder="Enter mobile number"
        />
        </div>
            <span class="error-message" id="mobileError" style="color: red; display: none;"></span>
      </div>


      <div>
      <div class="form-group">
        <i class="fas fa-envelope"></i>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
        />
        </div>
        <span class="error-message" id="emailError" style="color: red; display: none;"></span>
      </div>
     
     
      <button type="submit" class="btn btn-danger btn-block">
        <span>Book Now</span>
      </button>

    </form>
  </div>
</div>
`;





// تعريف مصفوفة الحجز
const reservations = [];

const form = document.querySelector(".form-book");

// التعامل مع الحدث submit
form.addEventListener("submit", function (event) {
  // منع التحديث الافتراضي للصفحة
  event.preventDefault();

  // الحصول على قيم المدخلات
  const patientName = document.getElementById("patientName").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  const email = document.getElementById("email").value.trim();

  // الحصول على عناصر رسائل الخطأ
  const nameError = document.getElementById("nameError");
  const mobileError = document.getElementById("mobileError");
  const emailError = document.getElementById("emailError");

  // إعادة تعيين رسائل الخطأ
  nameError.style.display = "none";
  mobileError.style.display = "none";
  emailError.style.display = "none";

  // التحقق من صحة المدخلات
  const nameParts = patientName.split(" ");
  const phonePattern = /^[0-9]{11}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  // التحقق من أن الاسم ثلاثي
  if (nameParts.length < 3) {
    nameError.textContent = "الاسم يجب أن يكون ثلاثيًا (ثلاث كلمات على الأقل).";
    nameError.style.display = "block";
    isValid = false;
  }

  // التحقق من أن رقم الهاتف يتكون من 11 رقمًا
  if (!phonePattern.test(mobileNumber)) {
    mobileError.textContent = "رقم الهاتف يجب أن يتكون من 11 رقمًا.";
    mobileError.style.display = "block";
    isValid = false;
  }

  // التحقق من صحة البريد الإلكتروني (إذا تم إدخاله)
  if (email && !emailPattern.test(email)) {
    emailError.textContent = "يرجى إدخال بريد إلكتروني صحيح.";
    emailError.style.display = "block";
    isValid = false;
  }

  // إذا كانت جميع المدخلات صحيحة، يتم إضافة البيانات إلى المصفوفة
  if (isValid) {
   

    const request = indexedDB.open("DoctorsDB", 1);

    request.onerror = function (event) {
        console.error("خطأ في فتح قاعدة البيانات:", event);
    };
    
    request.onsuccess = function (event) {
        const db = event.target.result;
        console.log("تم فتح قاعدة البيانات بنجاح");
    
        // اسم الطبيب الذي تريد تعديله
        const doctorNameToUpdateAR = doctor.name.ar // اسم الطبيب باللغة العربية
        const doctorNameToUpdateEN = doctor.name.en; // اسم الطبيب باللغة الإنجليزية
    
        // بدء معاملة للقراءة والكتابة
        const transaction = db.transaction("doctors", "readwrite");
        const doctorStore = transaction.objectStore("doctors");
    
        // البحث باستخدام openCursor
        const cursorRequest = doctorStore.openCursor();
    
        cursorRequest.onsuccess = function (event) {
            const cursor = event.target.result;
    
            if (cursor) {
                const doctorData = cursor.value;
    
                // التحقق من تطابق الاسم
                if (doctorData.name.ar === doctorNameToUpdateAR || doctorData.name.en === doctorNameToUpdateEN) {
                    // عرض بيانات الطبيب للتمكن من تعديلها
                    console.log("بيانات الطبيب الحالية:", doctorData);
    
                    // إعداد الحجز الجديد
                    const newReservation = {
                        patientName: patientName, // تأكد من تحديد قيمة patientName
                        date: selectedDate, // تأكد من تحديد قيمة selectedDate
                        contactNumber: mobileNumber, // تأكد من تحديد قيمة mobileNumber
                        email: email // تأكد من تحديد قيمة email
                    };
    
                    // التأكد من وجود مصفوفة الحجوزات
                    if (!doctorData.reservations) {
                        doctorData.reservations = [];
                    }
    
                    // تحقق مما إذا كانت الحجز موجودًا بالفعل
                    const isReservationExists = doctorData.reservations.some(reservation => 
                        reservation.date === selectedDate && reservation.patientName === patientName
                    );
    
                    if (isReservationExists) {
                        alert("هذا الموعد محجوز بالفعل!");
                        return;
                    }
    
                    // إضافة الحجز الجديد إلى مصفوفة reservations
                    doctorData.reservations.push(newReservation);
    
                    // تحديث العنصر في object store
                    const updateRequest = doctorStore.put(doctorData);
    
                    updateRequest.onsuccess = function () {
                        console.log("تم إضافة الحجز إلى قائمة الحجوزات بنجاح");
                        alert("تمت إضافة الحجز بنجاح!");
                    };
    
                    updateRequest.onerror = function () {
                        console.error("حدث خطأ أثناء تحديث بيانات الحجز");
                        alert("حدث خطأ أثناء تحديث بيانات الحجز");
                    };
                } else {
                    // متابعة البحث في السجلات الأخرى
                    cursor.continue();
                }
            } else {
                console.log("تمت عملية البحث بالكامل. لم يتم العثور على طبيب بهذا الاسم.");
            }
        };
    
        cursorRequest.onerror = function () {
            console.error("حدث خطأ أثناء البحث في قاعدة البيانات.");
        };
    
        transaction.oncomplete = function () {
            console.log("المعاملة اكتملت بنجاح.");
        };
    
        transaction.onerror = function () {
            console.error("حدث خطأ في المعاملة.");
        };
    };
    

    
    // form.reset();
  }
});
