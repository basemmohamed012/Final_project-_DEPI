const lang =localStorage.getItem("lang")
if (lang === "ar") {
  document.documentElement.dir = "rtl";
  // document.body.style.textAlign = "right";
} else {
  document.documentElement.dir = "ltr";
  // document.body.style.textAlign = "left";
}



function displayData() {
const loggedPatient =   JSON.parse(localStorage.getItem("loggedPatient"))


    document.querySelector("section .container").innerHTML =` 
    <div class="card form-container">
        <div class="card-header text-center bg-primary text-white mb-4">
            ا${lang=== "ar" ? ` ادارة الملف الشخصي   ` :" Manage your profile" }

        </div>
        <div class="card-body">
         
          
          <form id="registrationForm"  onsubmit="handleFormSubmit(event)">
            <!-- الاسم -->
            <div class="mb-3 row">
              <label for="fullName" class="col-sm-4 col-form-label form-label"
                >${lang=== "ar" ? ` الاسم   ` :" name" } <span class="text-danger"></span></label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  value= "${loggedPatient.fullName}"
                  readonly
                
                />
                <small id="nameError" class="text-danger"></small>
              </div>
            </div>

            <!-- رقم الموبايل -->
            <div class="mb-3 row">
                <label for="mobnumer" class="col-sm-4 col-form-label form-label"
                  >${lang=== "ar" ? ` رقم الموبايل   ` :" Phone number" } <span class="text-danger"></span></label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="mobnumber"
                                      value= "${loggedPatient.mobileNumber}"

                  
                  />
                  <small id="nameError" class="text-danger"></small>
                </div>
              </div>

            <!-- البريد الإلكتروني -->
            <div class="mb-3 row">
              <label for="email" class="col-sm-4 col-form-label form-label"
                >${lang=== "ar" ? `  البريد الالكتروني  ` :" Email" } <span class="text-danger">*</span></label
              >
              <div class="col-sm-8">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value= "${loggedPatient.email}"
                  
                />
                <small id="emailError" class="text-danger"></small>
              </div>
            </div>

            <!-- النوع -->
            <div class="mb-3 row">
              <label for="gender" class="col-sm-4 col-form-label form-label"
                >${lang=== "ar" ? ` النوع   ` :" gender" } <span class="text-danger"></span></label
              >
              <div class="col-sm-8 d-flex align-items-center">
                <input
                  type="text"
                  class="form-control"
                  id="gender"
                  value= "${loggedPatient.gender}"
                
                />
        
              </div>
              <small id="genderError" class="text-danger"></small>
            </div>

            <!-- تاريخ الميلاد -->
            <div class="mb-3 row">
              <label for="dob" class="col-sm-4 col-form-label form-label"
                >${lang=== "ar" ? ` تاريخ الميلاد ` :" Date Of Birth" }</label
              >
              <div class="col-sm-8"> 
                <input type="text" class="form-control" id="dob"  value="${loggedPatient.dob} "readonly/>
              </div>
            </div>



            <!-- زر التسجيل -->
            <div class="mb-3 text-center">
              <button type="submit" class="btn btn-danger">${lang=== "ar" ? ` حفظ ` :" save" }</button>
            </div>

           
          </form>
        </div>
      </div>
    `
}


displayData()