


const dataDoctor = JSON.parse(localStorage.getItem("loggedDoctor"))
const reservations = dataDoctor.reservations

 // تحديد مكان إدخال البيانات في الجدول
 const tableBody = document.getElementById("table-body");




 
 // loop من خلال المصفوفة وإضافة كل عنصر إلى الجدول
 reservations.map(item => {
     const row = document.createElement("tr");

     // إنشاء الأعمدة وإضافة البيانات
     row.innerHTML = `
         <td>${item.patientName}</td>
         <td>${item.date.date} - ${item.date.time}</td>
         <td>${item.contactNumber}</td>
         <td>${item.details}</td>
     `;

     // إضافة الصف إلى الجدول
     tableBody.appendChild(row);
 });