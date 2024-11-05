





let isLogin = JSON.parse(localStorage.getItem("isLoginDoctor"))
let loggedDoctor = JSON.parse(localStorage.getItem("loggedDoctor"))
if (isLogin) {

    let divIsLogin = isLogin ? `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${loggedDoctor.name[lang]}</a>
        <ul class="dropdown-menu" style="direction: rtl;">
            <li><a class="dropdown-item" style="color:darkblue;" href="../pages/data_doctor/doctor-information.html"><i style="color:darkblue;" class="fa-solid fa-user me-2"></i> <span>بياناتى</span></a></li>
            <li><a class="dropdown-item" style="color:darkblue;" href="../pages/data_doctor/data.html"><i style="color:darkblue;" class="fa-regular fa-calendar-days me-2"></i> <span>مواعيدى</span></a></li>
            <li class="logout" onclick="logout()"><a class="dropdown-item" style="color:darkblue;" ><i style="color:darkblue;" class="fa-regular fa-circle-xmark me-2"></i> <span>خروج</span></a></li>
        </ul>
    </li> ` : `
    <li class="nav-item">
        <a class="btn btn-outline-light" href="/pages/Register_form/register.html" > انضم الان</a>
    </li>
    <li class="nav-item">
        <a id="login" class="nav-link text-white" href="/pages/Loin_form/login.html" >دخول</a>
    </li>
    <li class="nav-item">
        <a id="life-for-doctors" class="nav-link text-white" href="/pages/login_doctor/index.html">الحياة للاطباء</a>
    </li>
    `;

document.querySelector(".navbar-nav").innerHTML = divIsLogin + document.querySelector(".navbar-nav").innerHTML;
}

if (document.querySelector(".logout")) {
    document.querySelector(".logout").addEventListener("click" , logout)
}


function logout() {
    localStorage.removeItem("isLoginDoctor")
    localStorage.removeItem("loggedDoctor")
    location.reload();
    window.location.href = "../pages/index.html"
}


let isLoginPatient = localStorage.getItem("isLoginPatient")
let loggedPatient = JSON.parse(localStorage.getItem("loggedPatient"))



    if (isLoginPatient) {
        let divIsLoginPatient = isLoginPatient ?  `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${loggedPatient.fullName}</a>
        <ul class="dropdown-menu" style="direction: rtl;">
            <li><a class="dropdown-item" style="color:darkblue;" href="../pages/data_patient/patiend-information.html"><i style="color:darkblue;" class="fa-solid fa-user me-2"></i> <span>بياناتى</span></a></li>
            <li><a class="dropdown-item" style="color:darkblue;" href="../pages/data_patient/data.html"><i style="color:darkblue;" class="fa-regular fa-calendar-days me-2"></i> <span>مواعيدى</span></a></li>
            <li class="logout" onclick="logout()"><a class="dropdown-item" style="color:darkblue;" ><i style="color:darkblue;" class="fa-regular fa-circle-xmark me-2"></i> <span>خروج</span></a></li>
        </ul>
    </li>:
    
    ` :`<li class="nav-item">
        <a class="btn btn-outline-light" href="/pages/Register_form/register.html" > انضم الان</a>
    </li>
    <li class="nav-item">
        <a id="login" class="nav-link text-white" href="/pages/Loin_form/login.html" >دخول</a>
    </li>
    <li class="nav-item">
        <a id="life-for-doctors" class="nav-link text-white" href="/pages/login_doctor/index.html">الحياة للاطباء</a>
    </li>`
        document.querySelector(".navbar-nav").innerHTML = divIsLoginPatient + document.querySelector(".navbar-nav").innerHTML;
    }
    
if (document.querySelector(".logout")) {
    document.querySelector(".logout").addEventListener("click" , logoutPatient)
    function logoutPatient() {
        localStorage.removeItem("isLoginPatient")
        localStorage.removeItem("loggedPatient")
        window.location.href = "../pages/index.html";
        location.reload();
       
    
    }
}





if (!isLogin && !isLoginPatient) {
    let divIsLogin =
    `
    <li class="nav-item">
        <a class="btn btn-outline-light" href="/pages/Register_form/register.html" > انضم الان</a>
    </li>
    <li class="nav-item">
        <a id="login" class="nav-link text-white" href="/pages/Loin_form/login.html" >دخول</a>
    </li>
    <li class="nav-item">
        <a id="life-for-doctors" class="nav-link text-white" href="/pages/login_doctor/index.html">الحياة للاطباء</a>
    </li>
    `;

document.querySelector(".navbar-nav").innerHTML = divIsLogin + document.querySelector(".navbar-nav").innerHTML;
}