function openModal(element) {
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("imageModalLabel");

    modalImage.src = element.src; // Set the modal image source to the clicked image
    modalTitle.innerHTML = element.alt; // Set the modal title to the image alt text

    $('#imageModal').modal('show'); // Show the modal
}


const pageContent = JSON.parse(localStorage.getItem("page-docotor"))
const lang = localStorage.getItem("lang")

if (lang === "ar") {
    document.documentElement.dir = "rtl";
    // document.body.style.textAlign = "right";
} else {
    document.documentElement.dir = "ltr";
    // document.body.style.textAlign = "left";
}


document.querySelector("section .container").innerHTML = `
 <div class="row d-flex align-items-start small-screen">


        <div class="col-lg-7">


            <div class="col section d-flex align-items-start  ">
                <img src="${pageContent.profileImage}" alt="Doctor Eman Tantawy" class="profile-img mr-3">
                <div>
                    <h2>${pageContent.name[lang]}</h2>
                    <p>${pageContent.jobTitle[lang].join(" ")}</p>
                    <div class="specializations" id="specializations">
                    ${pageContent.description[lang].join(" ")}
                    </div>
                    <div class="more-specializations" id="more-specializations">
                        <p> ${pageContent.description[lang].join(" ")}</p>
                    </div>
                    <div class="rating bg-light">
                        ★★★★☆ (4.5/5)
                    </div >
                    <p class="bg-light">${lang === "ar" ? "كانت تجربه ممتازه فاقت توقعاتي من فريق طبي محترف وطاقم استقبال ودود جدا والعياده كانت نظيفه والتعقيم ممتاز ومعامله حسنه" : "An excellent experience that exceeded my expectations from a professional medical team, very friendly reception staff, a clean clinic, excellent sanitation, and good treatment."}
</p>
                </div>
            </div>
            

            <div class="col section mt-2">
                <h3>${lang === "ar" ? " معلومات عن الدكتور "  :  "Information about the Doctor"}</h3>
                <p>${pageContent.description[lang].join(" ")} </p>
            </div>

            <!-- Clinic Album Section -->
            <div class="col clinic-album section mt-3 ">
                <div>
                    <i class="fa-regular fa-image fs"></i>
                    <h4> ${lang === "ar" ? " العيادة "  :  " Clinic"}</h4>
                </div>
                
                <div>
            <div class="row">
            <div class="col-md-4">
                <img src="1.jpg" alt="Image 1" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <div class="col-md-4">
                <img src="2.jpg" alt="Image 2" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <div class="col-md-4">
                <img src="3.jpg" alt="Image 3" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <div class="col-md-4">
                <img src="4.jpg" alt="Image 1" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <div class="col-md-4">
                <img src="5.jpg" alt="Image 2" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <div class="col-md-4">
                <img src="6.jpg" alt="Image 3" class="img-thumbnail" onclick="openModal(this)">
            </div>
            <!-- Add more images as needed -->
            </div>
            </div>
            </div>
    
            <!-- Modal -->
            <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="imageModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <img id="modalImage" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
            </div>


        </div>


        <div class="col-lg-5 section  booking-info ">
                <div class="text-center"> 
                    <h1>${lang === "ar" ? "احجز": "Book"}</h1> 
                    <h2 style="color: #007bff;">${lang === "ar" ? " كشف طبي": "Book a medical examination"}  </h2> 
                </div> 

                <div class="d-flex justify-content-around align-items-center mb-4  text-center"> 
                    <div class="p-2 icon-box" > <i class="fas fa-clock text-success"></i> <span>${lang=== "ar" ? ` مدة الانتظار: ${pageContent.time[lang]}  ` :"Waiting time" }   </span> 
                    </div> 

                    <div class="p-2  icon-box"> <i class="fas fa-money-bill-wave text-primary"></i> <span>${lang=== "ar" ?" سعر الكشف " :"Examination price" } : <strong>${pageContent.price} ${lang=== "ar" ? "جنيه" :"Pound" } </strong></span> 
                    </div> 




                    </div> 

                    
                    <hr> 
                <div class=" mb-4"> 
                    <h5 class="w-fit"><i class="fas fa-map-marker-alt text-primary"></i>${pageContent.location[lang]}</h5> 
                    <hr> 
                </div> 


                <div id="tabsContainer"> 
                    <h4 class="mb-3 w-fit">${lang=== "ar" ? ` اختيار موعد الحجز ` :"Choose a booking date" } </h4> 
                    <div class="row mb-3" id="schedule-مهندسين"></div> 

                    <div class="table-date mx-auto">
                    <div class="slider-container">
                        <div class="nav-button prev-btn">⟨</div>
                        <div class="date-columns-container d-flex justify-content-between gap-2 w-100"></div>
                        <div class="nav-button next-btn">⟩</div>
                    </div>
                </div>

                 <div class="form-header">${lang=== "ar" ? ` ادخل بيانات الحجز ` :"Enter your booking information" } </div>
    <form class="form-book" style="display: none;">

    <div> 
      <div class="form-group">
    <i class="fas fa-user"></i>
      <input
      type="text" 
      class="form-control"
      id="patientName"
      placeholder="${lang=== "ar" ? ` اسم المريض الذي سيقوم بالكشف ` :"Name of the patient who will be examined" } "
      
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
          placeholder="${lang=== "ar" ? ` ادخل رقم الموبايل ` :"ُEnter you mobile number" } "
          
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
          placeholder="${lang=== "ar" ? ` ادخل البريد الالكتروني ` :"ُEnter you Email" }"
        />
        </div>
        <span class="error-message" id="emailError" style="color: red; display: none;"></span>
      </div>
    
      <div class="d-flex">
      <button type="submit" class="btn btn-danger btn-block">
        <span>${lang=== "ar" ? ` احجز   ` :" Book" }</span>
      </button>
      <button  class="btn btn-secondary btn-block cancel">
        <span>${lang=== "ar" ? ` الغاء   ` :" Cancel" }</span>
      </button>
      </div>
      
    </form>
  </div>
</div>
                </div> 



                </div>
                
                

    

            </div> 
            
            
        </div>
        
    </div>

`








const scheduleContainer = document.querySelector('.date-columns-container');
        displayDoctorSchedule(pageContent, scheduleContainer, 0);

        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentStartIndex = 0;

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            currentStartIndex += 1;
            updateScheduleDisplay(pageContent, scheduleContainer, currentStartIndex);
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            if (currentStartIndex > -1) { 
                currentStartIndex -= 1; 
                updateScheduleDisplay(scheduleContainer, scheduleContainer, currentStartIndex);
            }
        });

    function displayDoctorSchedule(pageContent, scheduleContainer, startIndex) {
        const today = new Date();
        const daysToShow = 3;

        scheduleContainer.innerHTML = ''; 

        for (let i = 0; i < daysToShow; i++) {
            const currentDay = new Date(today);
            currentDay.setDate(today.getDate() + startIndex + i); 

            const dateColumn = createDoctorScheduleColumn(pageContent, currentDay, i);
            scheduleContainer.appendChild(dateColumn);
        }
    }

    function updateScheduleDisplay(pageContent, scheduleContainer, startIndex) {
        displayDoctorSchedule(pageContent, scheduleContainer, startIndex);
    }

    function createTimeSlot(date, time , pageContent) {
        const timeSlotDiv = document.createElement('div');
        timeSlotDiv.classList.add('time-slot');
        timeSlotDiv.innerText = time;
        timeSlotDiv.addEventListener('click', (e) => {
            e.stopPropagation()
            saveDateTime(date, time , pageContent)

        });
        return timeSlotDiv;
    }

    // دالة لحفظ التاريخ والوقت
    function saveDateTime(date, time, pageContent) {
        document.querySelector(".table-date").style.display = "none"
        document.querySelector(".form-book").style.display = "block"
        const selectedDateTime = {
            date: date.toDateString(),
            time: time
        };
        localStorage.setItem('selectedDateTime', JSON.stringify(selectedDateTime));
        localStorage.setItem("selected-docotor", JSON.stringify(pageContent));
    }

    function getDayName(date) {
        const lang = localStorage.getItem("lang");
        const daysOfWeek = lang === 'ar' 
            ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'] 
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()]; 
    }

    function getDayLabel(date ) {
        const lang = localStorage.getItem("lang");
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) {
            return lang === 'ar' ? 'اليوم' : 'Today';
        }
        if (date.toDateString() === tomorrow.toDateString()) {
            return lang === 'ar' ? 'غداً' : 'Tomorrow';
        }

        // بقية الأيام تعرض بشكل يوم/شهر
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }


    function createDoctorScheduleColumn(pageContent, date, i) {
        const column = document.createElement('div');
        column.classList.add('date-column');
    
        const dateHeader = document.createElement('div');
        dateHeader.classList.add("column-header");
        dateHeader.innerText = getDayLabel(date); // استخدام دالة الحصول على اسم اليوم
        column.appendChild(dateHeader);
    
        // جلب مواعيد اليوم للطبيب
        const dayName = getDayName(date);
        const timeSlots = pageContent.schedule[lang][dayName] || []; // تأكد من استخدام أسماء الأيام الصحيحة
    
        const timeSlotsContainer = document.createElement('div');
        timeSlotsContainer.classList.add('time-slots-container');
    
        // حدد عدد المواعيد الظاهرة افتراضياً
        const initialDisplayCount = 5;
        let showingAll = false;
    
        // عرض المواعيد الأساسية فقط في البداية
        timeSlots.slice(0, initialDisplayCount).forEach(time => {
            const timeSlotDiv = createTimeSlot(date, time, pageContent);
            timeSlotsContainer.appendChild(timeSlotDiv);
        });
    
        // إذا كانت هناك مواعيد إضافية، أضف زر "Show More"
        if (timeSlots.length > initialDisplayCount) {
            const toggleButton = document.createElement('div');
            toggleButton.classList.add('toggle-btn');
            toggleButton.innerText = lang === 'ar' ? 'المزيد' : 'Show More';
    
            // اضغط على الزر للتبديل بين "Show More" و "Show Less"
            toggleButton.addEventListener('click', () => {
                timeSlotsContainer.innerHTML = ''; // تفريغ المواعيد
                if (showingAll) {
                    // إذا كانت جميع المواعيد ظاهرة، أعد عرض المواعيد الأساسية
                    timeSlots.slice(0, initialDisplayCount).forEach(time => {
                        const timeSlotDiv = createTimeSlot(date, time);
                        timeSlotsContainer.appendChild(timeSlotDiv);
                    });
                    toggleButton.innerText = lang === 'ar' ? 'المزيد' : 'Show More';
                } else {
                    // عرض جميع المواعيد
                    timeSlots.forEach(time => {
                        const timeSlotDiv = createTimeSlot(date, time);
                        timeSlotsContainer.appendChild(timeSlotDiv);
                    });
                    toggleButton.innerText = lang === 'ar' ? 'أقل' : 'Show Less';
                }
                showingAll = !showingAll; // عكس القيمة
            });
    
            column.appendChild(timeSlotsContainer);
            column.appendChild(toggleButton);
        } else {
            column.appendChild(timeSlotsContainer);
        }
    
        const dateFooter = document.createElement('div');
        dateFooter.classList.add("column-footer");
        dateFooter.innerText = lang === 'ar' ? "أحجز" : "Book Now";
        column.appendChild(dateFooter);
    
        // تحقق إذا كان اليوم محجوز
        const today = new Date();
        const formattedDate = date.toDateString();
    
        // إذا كانت المواعيد محجوزة، أضف تأثير مرئي
        const reservations = pageContent.reservations || [];
        const isBooked = reservations.some(reservation => reservation.date === formattedDate);
    
        if (isBooked) {
            column.classList.add('booked'); // إضافة كلاس للمواعيد المحجوزة
            dateFooter.innerText = lang === 'ar' ? "محجوز" : "Booked";
            dateFooter.style.color = 'red'; // يمكنك تخصيص اللون حسب الحاجة
            dateFooter.style.pointerEvents = 'none'; // منع التفاعل مع الزر
            dateFooter.style.textDecoration = 'line-through'; // إضافة خط على النص
        }
    
        return column;
    }
    
    







    // تعريف مصفوفة الحجز
const reservations = [];

const form = document.querySelector(".form-book");

document.querySelector(".cancel").addEventListener("click" , () => {
    form.style.display="none"
    document.querySelector(".table-date").style.display = "block"

})

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

  if (isValid) {
   

    const request = indexedDB.open("DoctorsDB", 1);

    request.onerror = function (event) {
        console.error("خطأ في فتح قاعدة البيانات:", event);
    };
    
    request.onsuccess = function (event) {
        const db = event.target.result;
        console.log("تم فتح قاعدة البيانات بنجاح");
    
        // اسم الطبيب الذي تريد تعديله
        const doctorNameToUpdateAR = pageContent.name.ar // اسم الطبيب باللغة العربية
        const doctorNameToUpdateEN = pageContent.name.en; // اسم الطبيب باللغة الإنجليزية
    
        const transaction = db.transaction("doctors", "readwrite");
        const doctorStore = transaction.objectStore("doctors");
    
        const cursorRequest = doctorStore.openCursor();
    
        cursorRequest.onsuccess = function (event) {
            const cursor = event.target.result;
    
            if (cursor) {
                const doctorData = cursor.value;
    
                if (doctorData.name.ar === doctorNameToUpdateAR || doctorData.name.en === doctorNameToUpdateEN) {
                    console.log("بيانات الطبيب الحالية:", doctorData);
                    const selectedDate=  JSON.parse(localStorage.getItem("selectedDateTime"))
    
                    const newReservation = {
                        patientName: patientName, 
                        date:  selectedDate, 
                        contactNumber: mobileNumber, 
                        email: email 
                    };
    
                    if (!doctorData.reservations) {
                        doctorData.reservations = [];
                    }
    
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
    

    
  }
});