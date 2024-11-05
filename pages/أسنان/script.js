const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const menu = document.getElementById('menu');

function toggleMenu(menuId, arrowId) {
    const menu = document.getElementById(menuId);
    const arrowIcon = document.getElementById(arrowId);
    menu.classList.toggle('show');
    arrowIcon.classList.toggle('open');
}



let dataArrays = []

function fetchDoctorsDentistry() {
    dbPromise.then((db) => {
        const transaction = db.transaction('doctors', 'readonly');
        const doctorObjectStore = transaction.objectStore('doctors');

        // const dentistDoctors = doctorObjectStore.index('specialization').getAll(
        //     localStorage.getItem("lang") === "ar" ? "اسنان" : "Dentistry"
        // );
        const dentistDoctors = doctorObjectStore.index('specialization').getAll("اسنان");

        dentistDoctors.onsuccess = function (event) {
            console.log(event.target.result)
            
            dataArrays = event.target.result
            displayDoctors(dataArrays);
        };

        dentistDoctors.onerror = function (event) {
            console.error("حدث خطأ في جلب دكاترة الأسنان:", event.target.error);
        };
    }).catch((error) => {
        console.error("خطأ في فتح قاعدة البيانات:", error);
    });
}
fetchDoctorsDentistry();

const displayStars = (count) => {
    const starContainer = document.createElement('div');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('i');
        star.classList.add('fa-solid', 'fa-star');
        starContainer.appendChild(star);
    }
    return starContainer.innerHTML;
};

function displayDoctors(dataArrays) {
    const lang = localStorage.getItem("lang")
    document.querySelector(".col .d-flex h2").innerHTML = `${lang === "ar" ? "اسنان" : "Dentistry"}`
    document.querySelector(".col .d-flex p").innerHTML = `${lang === "ar" ? `  دكتور ${dataArrays.length}` : `  Doctor ${dataArrays.length}`}`
    const container = document.querySelector(".box-cards");
    container.innerHTML = '';

    dataArrays.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');
        doctorCard.innerHTML = `
            <div class="card-doctor mb-3">
                <div class="parent-info">
                <div class="img">
                    <img src="${doctor.profileImage}" alt="${doctor.name[lang]}">
                </div>
                <div class="info">
                    <div class=""> 
                        <div class="name mb-3">
                        <div class="d-flex">
                            <span>
                            ${lang === 'en' ? doctor.gender[lang] === "Female" ? "Doctor" :"Doctor" : doctor.gender[lang]}
                            </span>
                            <a href="#">
                                <h4>${doctor.name[lang]}</h4>
                            </a>
                        </div>
                        <p class="${lang === 'ar' ? 'text-end' : 'text-start'}  shortened-text">${doctor.jobTitle[lang].join(", ")}</p>
                    </div>
                    <div class="d-flex review mb-2 ${lang === 'ar' ? 'text-end' : 'text-start'}">
                        ${displayStars(doctor.rating)}
                    </div>
                    <p class="d-flex review mb-2 ${lang === 'ar' ? 'text-end' : 'text-start'}">${lang === "ar" ? ` التقييم العام من ${doctor.countratings} زاروا الدكتور ${dataArrays.length} ` : ` Overall Rating From ${doctor.countratings} Visitors `}</p>

                    </div>

                    <div class="box-details screen-info">
                           <div class="d-flex align-items-start ${lang === 'ar' ? 'text-end' : 'text-start'} mt-3 mb-2">
                        <i class="fa-solid fa-stethoscope main-color"></i>
                        <p class="mx-2 shortened-text">${doctor.description[lang].join(', ')}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-solid fa-location-dot main-color"></i>
                        <p class="mx-2">${doctor.location[lang]}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-regular fa-money-bill-1 main-color"></i>
                        <p class="mx-2">${lang === "ar" ? `  الكشف ${doctor.price} جنيه` : ` Fees ${doctor.price}`}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2 green-color">
                        <i class="fa-regular fa-clock"></i>
                        <p class="mx-2">${lang === "ar" ? `مدة الانتظار: ${doctor.time[lang]}` : ` Waiting Time ${doctor.time[lang]}`}</p>
                    </div>
                    </div>



                </div>
                
                </div>


                <div class="box-details screen-mobile mx-auto">
                           <div class="d-flex align-items-start ${lang === 'ar' ? 'text-end' : 'text-start'} mt-3 mb-2">
                        <i class="fa-solid fa-stethoscope main-color"></i>
                        <p class="mx-2 shortened-text">${doctor.description[lang].join(', ')}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-solid fa-location-dot main-color"></i>
                        <p class="mx-2">${doctor.location[lang]}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-regular fa-money-bill-1 main-color"></i>
                        <p class="mx-2">${lang === "ar" ? `  الكشف ${doctor.price} جنيه` : ` Fees ${doctor.price}`}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2 green-color">
                        <i class="fa-regular fa-clock"></i>
                        <p class="mx-2">${lang === "ar" ? `مدة الانتظار: ${doctor.time[lang]}` : ` Waiting Time ${doctor.time[lang]}`}</p>
                    </div>
                    </div>


                <div class="table-date-mobile mx-auto">
                    <p>Available Today From 4:00 PM</p>
                    <span>
                    <a href="/pages/profile_doctor/index.html"> Book </Book>
                    </span>
                </div>
                <div class="table-date mx-auto">
                    <div class="slider-container">
                        <div class="nav-button prev-btn">⟨</div>
                        <div class="date-columns-container d-flex justify-content-between gap-2 w-100"></div>
                        <div class="nav-button next-btn">⟩</div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(doctorCard);

        const scheduleContainer = doctorCard.querySelector('.date-columns-container');
        displayDoctorSchedule(doctor, scheduleContainer, 0); // تمرير الحاوية الخاصة بالجدول

        doctorCard.addEventListener("click", () => {
            localStorage.setItem("page-docotor", JSON.stringify(doctor));
            window.location.href = "/pages/profile_doctor/index.html";
        });

        // إضافة وظائف السلايدر
        const prevBtn = doctorCard.querySelector('.prev-btn');
        const nextBtn = doctorCard.querySelector('.next-btn');
        let currentStartIndex = 0; // بداية العرض

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            currentStartIndex += 1; // الانتقال للأمام
            updateScheduleDisplay(doctor, scheduleContainer, currentStartIndex);
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation()
            if (currentStartIndex > -1) { // تأكد من عدم الرجوع لما قبل اليوم الحالي
                currentStartIndex -= 1; // الرجوع للخلف
                updateScheduleDisplay(doctor, scheduleContainer, currentStartIndex);
            }
        });
    });

    function displayDoctorSchedule(doctor, scheduleContainer, startIndex) {
        const today = new Date();
        const daysToShow = 3; // عدد الأيام المراد عرضها

        scheduleContainer.innerHTML = ''; // تنظيف الجدول قبل إضافة المحتوى

        for (let i = 0; i < daysToShow; i++) {
            const currentDay = new Date(today);
            currentDay.setDate(today.getDate() + startIndex + i); // إضافة الأيام

            const dateColumn = createDoctorScheduleColumn(doctor, currentDay, i);
            scheduleContainer.appendChild(dateColumn);
        }
    }

    function updateScheduleDisplay(doctor, scheduleContainer, startIndex) {
        displayDoctorSchedule(doctor, scheduleContainer, startIndex);
    }

    function createTimeSlot(date, time , doctor) {
        const timeSlotDiv = document.createElement('div');
        timeSlotDiv.classList.add('time-slot');
        timeSlotDiv.innerText = time;
        timeSlotDiv.addEventListener('click', (e) => {
            e.stopPropagation()
            saveDateTime(date, time , doctor)
        });
        return timeSlotDiv;
    }

    // دالة لحفظ التاريخ والوقت
    function saveDateTime(date, time, doctor) {
        const selectedDateTime = {
            date: date.toDateString(),
            time: time
        };
        localStorage.setItem('selectedDateTime', JSON.stringify(selectedDateTime));
        window.location.href = "../book/book.html";
        localStorage.setItem("selected-docotor", JSON.stringify(doctor));
    }

    function getDayName(date) {
        const lang = localStorage.getItem("lang");
        const daysOfWeek = lang === 'ar' 
            ? ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'] 
            : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[date.getDay()]; 
    }

    // دالة لجلب تسميات الأيام
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

    function createDoctorScheduleColumn(doctor, date, i) {
        const column = document.createElement('div');
        column.classList.add('date-column');
    
        const dateHeader = document.createElement('div');
        dateHeader.classList.add("column-header");
        dateHeader.innerText = getDayLabel(date); // استخدام دالة الحصول على اسم اليوم
        column.appendChild(dateHeader);
    
        const dayName = getDayName(date);
        const timeSlots = doctor.schedule[lang][dayName] || []; // تأكد من استخدام أسماء الأيام الصحيحة

        


    
        const timeSlotsContainer = document.createElement('div');
        timeSlotsContainer.classList.add('time-slots-container');
    
        // حدد عدد المواعيد الظاهرة افتراضياً
        const initialDisplayCount = 5;
        let showingAll = false;
    
        // عرض المواعيد الأساسية فقط في البداية
        timeSlots.slice(0, initialDisplayCount).forEach(time => {
            const timeSlotDiv = createTimeSlot(date, time, doctor);
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
        const reservations = doctor.reservations || [];
        const isBooked = reservations.some(reservation => reservation.date === formattedDate);
    
        if (isBooked) {
            column.classList.add('booked'); 
            dateFooter.innerText = lang === 'ar' ? "محجوز" : "Booked";
            dateFooter.style.color = 'red'; 
            dateFooter.style.pointerEvents = 'none';
            dateFooter.style.textDecoration = 'line-through'; 
        }
    
        return column;
    }
    
    
}


document.querySelector(".fixed-width").innerHTML = `
    
                <div class="side-bar w-full">
                    <div class="head">
                        <i class="fa-solid fa-filter"></i>
                    <p> حدد بحثك</p>
                    </div>

                    <!-- Button 1 to toggle menu 1 -->
                    <div class="btn-group mt-2">
                        <button id="toggleMenuBtn1">
                            <i class="fa-solid fa-stethoscope"></i>
                            <p>التخصصات الفرعية</p>
                            <i id="arrowIcon1" class="fas fa-chevron-down rotate-icon open"></i>
                        </button>
                        <div id="menu1" class="menu show">
                        </div>
                    </div>

                    <!-- Button 2 to toggle menu 2 -->
                    <div class="btn-group">
                        <button id="toggleMenuBtn2">
                            النوع <i id="arrowIcon2" class="fas fa-chevron-down rotate-icon open"></i>
                        </button>
                        <div id="menu2" class="menu">
                            <div class="menu-item">
                                <label>
                                    <input type="checkbox"> دكتور
                                </label>
                            </div>
                            <div class="menu-item">
                                <label>
                                    <input type="checkbox"> دكتوره
                                </label>
                            </div>
                        </div>
                    </div>

                    
                </div>
`
document.querySelector(".offcanvas-body-filter").innerHTML = `
    
                <div class="side-bar w-full">
                    <div class="head">
                        <i class="fa-solid fa-filter"></i>
                    <p> حدد بحثك</p>
                    </div>

                    <!-- Button 1 to toggle menu 1 -->
                    <div class="btn-group mt-2">
                        <button id="toggleMenuBtn1">
                            <i class="fa-solid fa-stethoscope"></i>
                            <p>التخصصات الفرعية</p>
                            <i id="arrowIcon1" class="fas fa-chevron-down rotate-icon open"></i>
                        </button>
                        <div id="menu1" class="menu show">
                            
    
                        </div>
                    </div>

                    <!-- Button 2 to toggle menu 2 -->
                    <div class="btn-group">
                        <button id="toggleMenuBtn2">
                            النوع <i id="arrowIcon2" class="fas fa-chevron-down rotate-icon open"></i>
                        </button>
                        <div id="menu2" class="menu">
                            <div class="menu-item">
                                <label>
                                    <input type="checkbox"> دكتور
                                </label>
                            </div>
                            <div class="menu-item">
                                <label>
                                    <input type="checkbox"> دكتوره
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
`

window.addEventListener('DOMContentLoaded', () => {
    const menuItems = {
        ar: {
            mainTitle: "حدد بحثك",
            title: " التخصصات الفرعية",
            items: [
                "الكل", 
                "تجميل اسنان", 
                "حشو وعلاج الجذور والاعصاب", 
                "علاج اللثة", 
                "تقويم اسنان", 
                "تركيبات اسنان", 
                "زراعة اسنان", 
                "اسنان اطفال", 
                "اسنان مسنين", 
                "اشعة الاسنان و اسنان بالغين"
            ],
            gender: ["دكتور", "دكتورة"]
        },
        en: {
            mainTitle: "Filter",
            title: "Sub Specialties",
            items: [
                "All", 
                "Cosmetic Dentistry", 
                "Root Canal and Nerve Treatment", 
                "Gum Treatment", 
                "Orthodontics", 
                "Dental Crowns", 
                "Dental Implants", 
                "Pediatric Dentistry", 
                "Geriatric Dentistry", 
                "Dental Radiology and Adult Dentistry"
            ],
            gender: ["Male", "Female"]
        }
    };

    const container = document.getElementById('menu1');
    const container2 = document.querySelector('.offcanvas-body-filter #menu1');

    function updateMenu() {
        const lang = localStorage.getItem("lang") 
        const items = menuItems[lang].items;

        document.querySelector(".side-bar .head p").innerHTML = menuItems[lang].mainTitle;
        document.querySelector("#toggleMenuBtn1 p").innerHTML = menuItems[lang].title;

        container.innerHTML = '';
        container2.innerHTML = '';

        items.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const label = document.createElement('label');
            label.classList.add('cursor-pointer');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('ml-3');
            checkbox.value = item;
            checkbox.classList.add('filter-checkbox');

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(item));
            menuItem.appendChild(label);

            const menuItem2 = document.createElement('div');
            menuItem2.classList.add('menu-item');

            const label2 = document.createElement('label');
            label2.classList.add('cursor-pointer');

            const checkbox2 = document.createElement('input');
            checkbox2.type = 'checkbox';
            checkbox2.classList.add('ml-3');
            checkbox2.value = item;
            checkbox2.classList.add('filter-checkbox');

            label2.appendChild(checkbox2);
            label2.appendChild(document.createTextNode(item));
            menuItem2.appendChild(label2);


            container.appendChild(menuItem);
            container2.appendChild(menuItem2);
        });

        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterData);
        });
        const checkboxes2 = container2.querySelectorAll('input[type="checkbox"]');
        checkboxes2.forEach(checkbox => {
            checkbox.addEventListener('change', filterData);
        });

        const allCheckbox = container.querySelector('input[type="checkbox"][value="الكل"]') || container.querySelector('input[type="checkbox"][value="All"]');
        if (allCheckbox) {
            allCheckbox.checked = true;
        }
        const allCheckbox2 = container.querySelector('input[type="checkbox"][value="الكل"]') || container2.querySelector('input[type="checkbox"][value="All"]');
        if (allCheckbox2) {
            allCheckbox2.checked = true;
        }
        displayDoctors(dataArrays); 
    }

    function filterData(event) {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        const allCheckbox = container.querySelector('input[type="checkbox"][value="الكل"]') || container.querySelector('input[type="checkbox"][value="All"]');
        const checkboxes2 = container2.querySelectorAll('input[type="checkbox"]');
        const allCheckbox2 = container2.querySelector('input[type="checkbox"][value="الكل"]') || container2.querySelector('input[type="checkbox"][value="All"]');

        if (event.target.value === "الكل" || event.target.value === "All") {
            if (event.target.checked) {
                checkboxes.forEach(checkbox => {
                    if (checkbox.value !== "الكل" && checkbox.value !== "All") checkbox.checked = false;
                });
                displayDoctors(dataArrays);
            }
        } else {
            allCheckbox.checked = false;

            const selectedValues = Array.from(checkboxes)
                .filter(checkbox => checkbox.checked && checkbox.value !== "الكل" && checkbox.value !== "All")
                .map(checkbox => checkbox.value);
                console.log(selectedValues)

            if (selectedValues.length === 0) {
                allCheckbox.checked = true;
                displayDoctors(dataArrays);
            } else {
                const filteredData = dataArrays.filter(doctor =>
                    doctor.description[lang] && selectedValues.some(selectedValue => doctor.description[lang].includes(selectedValue))
                );

                displayDoctors(filteredData);
            }
        }
        if (event.target.value === "الكل" || event.target.value === "All") {
            if (event.target.checked) {
                checkboxes2.forEach(checkbox => {
                    if (checkbox.value !== "الكل" && checkbox.value !== "All") checkbox.checked = false;
                });
                displayDoctors(dataArrays);
            }
        } else {
            allCheckbox2.checked = false;

            const selectedValues = Array.from(checkboxes2)
                .filter(checkbox => checkbox.checked && checkbox.value !== "الكل" && checkbox.value !== "All")
                .map(checkbox => checkbox.value);
                console.log(selectedValues)

            if (selectedValues.length === 0) {
                allCheckbox2.checked = true;
                displayDoctors(dataArrays);
            } else {
                const filteredData = dataArrays.filter(doctor =>
                    doctor.description[lang] && selectedValues.some(selectedValue => doctor.description[lang].includes(selectedValue))
                );

                displayDoctors(filteredData);
            }
        }
    }

    updateMenu();


    function setDirectionBasedOnLanguage() {
        const lang = localStorage.getItem("lang") || "ar";
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }

    
    document.querySelector(".navbar .lang").addEventListener("click", () => {
        const currentLang = localStorage.getItem("lang") || "ar";
        const newLang = currentLang === "ar" ? "en" : "ar";
        localStorage.setItem("lang", newLang);
    
        document.querySelector(".navbar .lang").innerHTML = newLang === "ar" ? "English" : "عربي";

    
        updateMenu();
        fetchDoctorsDentistry();
        setDirectionBasedOnLanguage();
    });
});



document.getElementById('toggleMenuBtn1').addEventListener('click', function () {
    toggleMenu('menu1', 'arrowIcon1');
});
document.getElementById('toggleMenuBtn2').addEventListener('click', function () {
    toggleMenu('menu2', 'arrowIcon2');
});










