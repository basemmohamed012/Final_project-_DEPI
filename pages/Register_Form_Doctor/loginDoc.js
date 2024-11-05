const lang = localStorage.getItem("lang") || "ar";

let imgSrc;

document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    const imagePreview = document.getElementById('image-preview');
    const uploadButton = document.getElementById('upload-button');

    if (file) {
        const reader = new FileReader(); 
        reader.onload = function(e) {

            imagePreview.src = e.target.result; 
            imgSrc= e.target.result; 
            imagePreview.style.display = 'block'; 
            uploadButton.style.display = 'none'; 
        };
        reader.readAsDataURL(file); 
    } else {
        imagePreview.style.display = 'none';
        uploadButton.style.display = 'inline-block'; 
    }
});



    const subSpecialtyOptions = {
        ar :{
            "اسنان":[
                "دكتورة اسنان متخصص في ",
                "تجميل اسنان",
                "حشو وعلاج الجذور والاعصاب",
                "علاج اللثة",
                " جراحة وجه وفكين",
                "تقويم اسنان",
                " تركيبات اسنان",
                "زراعة اسنان",
                "اسنان اطفال",
                "اسنان مسنين",
                "اشعة الاسنان",
                "اسنان بالغين",
            ],
            "جراحه":[
            "دكتور جراحة أوعية دموية متخصص في",
            "جراحة أوعية دموية أطفال",
            "جراحة أوعية دموية بالغين",
            "وعلاج قدم سكري.",
            ],

            "جلدية": [
            "دكتور جلدية متخصص في ",
            "جلدية بالغين",
            "وأمراض ذكورة"
            ],

            "عظام":[
                "دكتور عظام متخصص في ",
                "جراحة عظام بالغين",
                "عظام القدم والكاحل",
                "تقويم عظام",
                "إصابات ملاعب",
                "ومناظير مفاصل",
            ],
            
            "أنف وأذن و حنجرة": [
                "دكتور أنف وأذن وحنجرة متخصص في",
                "جراحة أنف وأذن وحنجرة بالغين",
                "اضطرابات السمع والتوازن",
                "جراحة أنف وأذن وحنجرة أطفال",
            ]
        } ,
        en : {
            'Dentist': [
            'Cosmetic Dentistry', 'Root Canal Treatment', 'Gum Treatment', 
            'Jaw and Facial Surgery', 'Orthodontics', 'Dental Prosthetics', 
            'Dental Implants', 'Pediatric Dentistry', 'Geriatric Dentistry', 
            'Dental X-rays', 'Adult Dentistry'
        ],
        'Surgery': [
            'Pediatric Vascular Surgery', 'Adult Vascular Surgery', 
            'Diabetic Foot Treatment'
        ],
        'Dermatology': [
            'Adult Dermatology', 'Male Disorders'
        ],
        'Orthopedics': [
            'Adult Orthopedic Surgery', 'Foot and Ankle Surgery', 
            'Orthopedic Correction', 'Sports Injuries', 'Joint Arthroscopy'
        ],
        'ENT': [
            'Adult Ear, Nose, and Throat', 'Hearing and Balance Disorders', 
            'Pediatric Ear, Nose, and Throat Surgery'
        ]
        }
    };

    let selectedSubSpecialtiesAr = []; 
    let selectedSubSpecialtiesEn = []; 

    console.log(selectedSubSpecialtiesAr , selectedSubSpecialtiesEn)
    
    document.getElementById('specialty').addEventListener('change', function () {
        const specialty = this.value.split(' | '); 
        const specialtyEn = specialty[0];
        const specialtyAr = specialty[1]; 
        const subSpecialtySelect = document.getElementById('sub-specialty');
    
        subSpecialtySelect.innerHTML = '<option value="">Select Sub-Specialty</option>';
        document.getElementById('sub-specialty-container').style.display = 'none'; 
    
        if (subSpecialtyOptions.en[specialtyEn] || subSpecialtyOptions.ar[specialtyAr]) {
            const optionsEn = subSpecialtyOptions['en'][specialtyEn] || [];
            const optionsAr = subSpecialtyOptions['ar'][specialtyAr] || [];
    
            optionsEn.forEach((subSpecialtyEn, index) => {
                const subSpecialtyAr = optionsAr[index] || '';  
                const option = document.createElement('option');
                option.value = `${subSpecialtyEn} | ${subSpecialtyAr}`;  // تخزين اللغتين معًا في الـ value
                option.textContent = subSpecialtyEn; // يمكن تعديل هذا إذا أردت عرض اللغة العربية
                subSpecialtySelect.appendChild(option);
            });
    
            // إظهار حاوية التخصصات الفرعية بعد ملئها
            document.getElementById('sub-specialty-container').style.display = 'block';
        }
    });
    
    document.getElementById('sub-specialty').addEventListener('change', function() {
        const selectedSubSpecialty = this.value;
    
        if (selectedSubSpecialty && !selectedSubSpecialtiesAr.includes(selectedSubSpecialty.split(' | ')[1]) && !selectedSubSpecialtiesEn.includes(selectedSubSpecialty.split(' | ')[0])) {
            const [subAr, subEn] = selectedSubSpecialty.split(' | '); // تفكيك القيمة المختارة
    
            selectedSubSpecialtiesAr.push(subAr.trim());
            selectedSubSpecialtiesEn.push(subEn.trim());
    
            const subSpecialtyBadge = document.createElement('span');
            subSpecialtyBadge.className = 'badge badge-primary mr-1';
            subSpecialtyBadge.textContent = subEn.trim(); 
    
            subSpecialtyBadge.addEventListener('click', function() {
                selectedSubSpecialtiesAr = selectedSubSpecialtiesAr.filter(item => item !== subAr.trim());
                selectedSubSpecialtiesEn = selectedSubSpecialtiesEn.filter(item => item !== subEn.trim());
                subSpecialtyBadge.remove(); // إزالة الشارة
            });
    
            document.getElementById('selected-sub-specialties').appendChild(subSpecialtyBadge);
        }
    });
    

    const dbPromise = new Promise((resolve, reject) => {
        const request = indexedDB.open("DoctorsDB", 1);
    
        request.onerror = function (event) {
            console.error("خطأ في فتح قاعدة البيانات:", event);
            reject(event.target.error);
        };
    
        request.onsuccess = function (event) {
            const db = event.target.result;
            console.log("تم فتح قاعدة البيانات بنجاح");
            resolve(db);
        };
    
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            const doctorStore = db.createObjectStore("doctors", {
                keyPath: "id",
                autoIncrement: true,
            });
            doctorStore.createIndex("specialization", "specialization", { unique: false });
            doctorStore.createIndex("email", "email", { unique: true }); // تأكد من أن البريد الإلكتروني فريد
        };
    });
    function addDoctor(doctorData) {
        dbPromise.then(db => {
            const transaction = db.transaction(["doctors"], "readwrite");
            const doctorStore = transaction.objectStore("doctors");
            
            const request = doctorStore.add(doctorData);
            
            request.onsuccess = function() {
                console.log("تم إضافة الطبيب بنجاح:", doctorData);
            };
            
            request.onerror = function() {
                console.error("خطأ في إضافة الطبيب:", request.error);
            };
        }).catch(error => {
            console.error("خطأ في فتح قاعدة البيانات:", error);
        });
    }
    

    
    document.getElementById('personal-form').addEventListener('submit', function(e) {
        e.preventDefault(); 
        let valid = true;
    
        document.querySelectorAll('.error-message').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.form-control').forEach(function(el) {
            el.classList.remove('error');
        });
    
        if (document.getElementById('full-name').value === '') {
            document.getElementById('full-name-error').style.display = 'block';
            document.getElementById('full-name').classList.add('error');
            valid = false;
        }
            if (document.getElementById('specialty').value === '') {
            document.getElementById('specialty-error').style.display = 'block';
            document.getElementById('specialty').classList.add('error');
            valid = false;
        }
    
        const email = document.getElementById('email').value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('email-error').textContent = 'Invalid email format.';
            document.getElementById('email-error').style.display = 'block';
            document.getElementById('email').classList.add('error');
            valid = false;
        }
    
        const password = document.getElementById('password').value;
    
        const fieldsToValidate = ['location', 'price', 'waiting-time', 'doctor-info'];
        fieldsToValidate.forEach(fieldId => {
            if (document.getElementById(fieldId).value === '') {
                document.getElementById(fieldId).classList.add('error');
                valid = false;
            }
        });

        console.log(selectedSubSpecialtiesAr , selectedSubSpecialtiesEn)

        if (valid) {
            const doctorData = {
                email: email,
                password: password,
                name: {
                    ar: document.getElementById('full-name-ar').value,
                    en: document.getElementById('full-name').value,
                },
                specialization: document.getElementById('specialty').value.split(' | ')[1],
                profileImage: imgSrc,
                jobTitle: {
                    ar: ["استشاري", "طب و جراحة الفم و الاسنان و تجميل الاسنان"],
                    en: ["Consultant", "in Oral Surgery and Aesthetic Dentistry"]
                },
                gender: {
                    ar: document.getElementById('gender').value === "Female" ? "دكتوره" :  'دكتور' ,
                    en:  document.getElementById('gender').value
                },
                rating: 0,
                countratings: 0,
                description: {
                    ar: selectedSubSpecialtiesAr ,
                    en: selectedSubSpecialtiesEn
                },
                location: {
                    ar: document.getElementById('location').value,
                    en: document.getElementById('location').value, // يمكنك إضافة نص اللغة الإنجليزية هنا
                },
                price: parseFloat(document.getElementById('price').value),
                time: {
                    ar: `${document.getElementById('waiting-time').value}  دقيقه`,
                    en: `${document.getElementById('waiting-time').value}  minutes` // يمكنك إضافة نص اللغة الإنجليزية هنا
                },
                clinicImages: [
                    "https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTb2823f/Facilities/3a4d332f8262f80.jpg",
                    "https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTb2823f/Facilities/927ed49412b596e0.jpg",
                    "https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTb2823f/Facilities/806fd857fbce0bc0.jpg",
                    "https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTb2823f/Facilities/77879c2916127370.jpg",
                    "https://cdn-dr-images.vezeeta.com/Assets/Images/SelfServiceDoctors/ENTb2823f/Facilities/33d81ed1357236a0.jpg"
                ],
                reservations: [],
                schedule: {
                    ar: {
                        "السبت": ["11:00 ص", "12:00 م", "1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م", "7:00 م", "8:00 م", "9:00 م"],
                        "الأحد": ["10:00 ص", "11:00 ص", "12:00 م", "1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م"],
                        "الاثنين": ["1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م", "7:00 م", "8:00 م", "9:00 م", "10:00 م"],
                        "الثلاثاء": ["12:00 م", "1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م", "7:00 م", "8:00 م"],
                        "الأربعاء": ["11:00 ص", "12:00 م", "1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م", "7:00 م", "8:00 م", "9:00 م"],
                        "الخميس": ["10:00 ص", "11:00 ص", "12:00 م", "1:00 م", "2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م"],
                        "الجمعة": []
                    },
                    en: {
                        "Saturday": ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
                        "Sunday": ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
                        "Monday": ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"],
                        "Tuesday": ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
                        "Wednesday": ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
                        "Thursday": ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
                        "Friday": []
                    }
                }
            }

            addDoctor(doctorData)
            localStorage.setItem("loggedDoctor", JSON.stringify(doctorData));
            localStorage.setItem("isLoginDoctor" , true)
            window.location.href = "../index.html";
    
            console.log(doctorData);
        }
    });