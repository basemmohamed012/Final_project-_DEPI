const toggleMenuBtn = document.getElementById('toggleMenuBtn');
const menu = document.getElementById('menu');

function toggleMenu(menuId, arrowId) {
    const menu = document.getElementById(menuId);
    const arrowIcon = document.getElementById(arrowId);
    menu.classList.toggle('show');
    arrowIcon.classList.toggle('open');
}

document.getElementById('toggleMenuBtn1').addEventListener('click', function () {
    toggleMenu('menu1', 'arrowIcon1');
});

document.getElementById('toggleMenuBtn2').addEventListener('click', function () {
    toggleMenu('menu2', 'arrowIcon2');
});

document.getElementById('toggleMenuBtn3').addEventListener('click', function () {
    toggleMenu('menu3', 'arrowIcon3');
});

document.getElementById('toggleMenuBtn4').addEventListener('click', function () {
    toggleMenu('menu4', 'arrowIcon4');
});

document.getElementById('toggleMenuBtn5').addEventListener('click', function () {
    toggleMenu('menu5', 'arrowIcon5');
});









function fetchDoctors() {
    const transaction = db.transaction('doctors', 'readonly');
    const doctorObjectStore = transaction.objectStore('doctors');

    // عرض دكاترة الأسنان
    const dentistDoctors = doctorObjectStore.index('specialization').getAll('اسنان');
    dentistDoctors.onsuccess = function (event) {
        displayDoctors(event.target.result, 'dentist-doctors');
    };

    // عرض دكاترة الجراحة
    // const surgeonDoctors = doctorObjectStore.index('specialization').getAll('جراحة');
    // surgeonDoctors.onsuccess = function (event) {
    //     displayDoctors(event.target.result, 'surgeon-doctors');
    // };
}


function fetchDoctors() {
    const transaction = db.transaction('doctors', 'readonly');
    const doctorObjectStore = transaction.objectStore('doctors');

    // عرض دكاترة الأسنان
    const dentistDoctors = doctorObjectStore.index('specialization').getAll('نفسي');
    dentistDoctors.onsuccess = function (event) {
        displayDoctors(event.target.result, 'dentist-doctors');
    };

}

const displayStars = (count) => {
    const starContainer = document.createElement('div');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('i');
        star.classList.add('fa-solid', 'fa-star');
        starContainer.appendChild(star);
    }
    return starContainer.innerHTML;
};

function displayDoctors(doctors, elementId) {
    const container = document.querySelector(".box-cards");
    container.innerHTML = ''; 

    doctors.map(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.classList.add('doctor-card');
        doctorCard.innerHTML = `
            <div class="card-doctor mb-3">
                <div class="img">
                    <img src="${doctor.profileImage}" alt="${doctor.name}">
                </div>
                <div class="info">
                    <div class="name mb-3">
                        <div class="d-flex">
                            <span>${doctor.gender}</span>
                            <a href="#">
                                <h4>${doctor.name}</h4>
                            </a>
                        </div>
                        <p>${doctor.jobTitle}</p>
                    </div>
                    <div class="d-flex review mb-2">
                        ${displayStars(doctor.rating)}
                    </div>
                    <p>التقييم العام من ${doctor.countratings} زاروا الدكتور</p>
                    <div class="d-flex align-items-center mt-3 mb-2">
                        <i class="fa-solid fa-stethoscope main-color "></i>
                        <p class="mx-2">${doctor.description}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-solid fa-location-dot main-color "></i>
                        <p class="mx-2">${doctor.location}</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <i class="fa-regular fa-money-bill-1 main-color "></i>
                        <p class="mx-2">الكشف ${doctor.price} جنيه</p>
                    </div>
                    <div class="d-flex align-items-center mb-2 green-color">
                        <i class="fa-regular fa-clock"></i>
                        <p class="mx-2">مدة الانتظار: ${doctor.time}</p>
                    </div>
                </div>

                <div class="table-date mx-auto">
                    <div class="slider-container">
                        <!-- زر التأخير -->
                        <div class="nav-button prev-btn">⟨</div>

                        <!-- الأعمدة الخاصة بالتواريخ والمواعيد -->
                        <div class="date-columns-container d-flex justify-content-between gap-2 w-100">
                            <!-- سيتم إنشاء الأعمدة هنا -->
                        </div>

                        <!-- زر التقديم -->
                        <div class="nav-button next-btn">⟩</div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(doctorCard);

        doctorCard.addEventListener("click" , () => {
            localStorage.setItem("page-docotor" , JSON.stringify(doctor))
            window.location.href = "profile-doctor/doctor-details.html";
        })



        let currentStartIndex = 0;
        const dateContainer = doctorCard.querySelector('.date-columns-container');
        const prevBtn = doctorCard.querySelector('.prev-btn');
        const nextBtn = doctorCard.querySelector('.next-btn');

        const displayDates = (startIndex) => {
            dateContainer.innerHTML = ''; 

            for (let i = 0; i < 3; i++) {
                const date = new Date();
                date.setDate(date.getDate() + startIndex + i);
                const dateColumn = createDateColumn(date, i, currentStartIndex);
                dateContainer.appendChild(dateColumn);
            }
        };

        nextBtn.addEventListener('click', () => {
            currentStartIndex += 3;
            displayDates(currentStartIndex);
        });

        prevBtn.addEventListener('click', () => {
            if (currentStartIndex >= 3) {
                currentStartIndex -= 3;
                displayDates(currentStartIndex);
            }
        });

        displayDates(currentStartIndex);
        doctorCard.addEventListener('click', () => {
            localStorage.setItem('selectedDoctor', JSON.stringify(doctor)); 
            // window.location.href = '../profile-doctor/doctor-details.html'; 
        });
    });

}


function getArabicDay(date, i, currentStartIndex) {
    if (currentStartIndex === 0) {  
        if (i === 0) {
            return 'النهارده';
        } else if (i === 1) {
            return 'غدا';
        }
    }

    return `${date.getDate()}/${date.getMonth() + 1}`; 
}



function createDateColumn(date, i, currentStartIndex) {
    const column = document.createElement('div');
    column.classList.add('date-column');

    const dateHeader = document.createElement('div');
    dateHeader.classList.add("column-header")
    dateHeader.innerText = getArabicDay(date, i, currentStartIndex);
    column.appendChild(dateHeader);

    const timeSlotsContainer = document.createElement('div');
    timeSlots.slice(0, 5).forEach(time => {
        const timeSlotDiv = createTimeSlot(date, time);
        timeSlotsContainer.appendChild(timeSlotDiv);
    });
    column.appendChild(timeSlotsContainer);

    const moreSlotsContainer = document.createElement('div');
    moreSlotsContainer.classList.add('more-slots');
    timeSlots.slice(5).forEach(time => {
        const timeSlotDiv = createTimeSlot(date, time);
        moreSlotsContainer.appendChild(timeSlotDiv);
    });
    column.appendChild(moreSlotsContainer);

    const showMoreBtn = document.createElement('div');
    showMoreBtn.classList.add('show-more-btn');
    showMoreBtn.innerText = ' المزيد';
    showMoreBtn.addEventListener('click', () => {
        moreSlotsContainer.style.display = 'block';
        showMoreBtn.style.display = 'none';
        hideMoreBtn.style.display = 'inline-block';
    });
    column.appendChild(showMoreBtn);

    const hideMoreBtn = document.createElement('div');
    hideMoreBtn.classList.add('hide-more-btn');
    hideMoreBtn.innerText = 'إخفاء';
    hideMoreBtn.style.display = 'none';
    hideMoreBtn.addEventListener('click', () => {
        moreSlotsContainer.style.display = 'none';
        showMoreBtn.style.display = 'inline-block';
        hideMoreBtn.style.display = 'none';
    });
    column.appendChild(hideMoreBtn);

    const dateFooter = document.createElement('div');
    dateFooter.classList.add("column-footer")
    dateFooter.innerText = " أحجز" 
    column.appendChild(dateFooter);

    return column;
}

function createTimeSlot(date, time) {
    const timeSlotDiv = document.createElement('div');
    timeSlotDiv.classList.add('time-slot');
    timeSlotDiv.innerText = time;
    timeSlotDiv.addEventListener('click', () => saveDateTime(date, time));
    return timeSlotDiv;
}


function saveDateTime(date, time) {
    const selectedDateTime = {
        date: date.toDateString(),
        time: time
    };
    localStorage.setItem('selectedDateTime', JSON.stringify(selectedDateTime));
    alert(`تم حفظ التاريخ والوقت: ${selectedDateTime.date} - ${selectedDateTime.time}`);
}

const timeSlots = [
    '11:00 ص', '12:00 ص', '1:00 م', '2:00 م', '3:00 م',
    '4:00 م', '5:00 م', '6:00 م', '7:00 م', '8:00 م',
    '9:00 م', '10:00 م', '11:00 م'
];




