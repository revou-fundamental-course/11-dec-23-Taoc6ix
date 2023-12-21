document.getElementById('your-name').innerHTML = 'Rafli';

document.addEventListener("DOMContentLoaded", function() {
  var username = prompt("Please enter your name:");
  document.getElementById("username").innerText = username;
});

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

function validateForm() {
  let name = document.forms['my-form']['fname'].value;
  let birthDate = document.forms['my-form']['fbirthDate'].value;
  let gender = document.forms['my-form']['fgender'].value;
  let message = document.forms['my-form']['fmessage'].value;

  if (name === '' || birthDate === '' || gender === '' || message === '') {
    alert('can not be empty!');
    return false;
  }

  const displayValuesElement = document.getElementById('displayValues');
  displayValuesElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birth Date:</strong> ${birthDate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
  return false;
}

// function validateForm(){
//   const nama  = document.forms['form']['nama'].value;
//   const tanggal = document.forms['form']['tanggal'].value;
//   const jk = document.forms['form']['jk'].value;
//   const pesan = document.forms['form']['pesan'].value;
  

//   if(nama == ''){
//       document.getElementById('errorNama').innerHTML = "Nama tidak boleh kosong";
//   }
//   if(tanggal == ''){
//       document.getElementById('errorTanggal').innerHTML = "Tanggal tidak boleh kosong";
//   }if(jk == ''){
//       document.getElementById('errorJk').innerHTML = "Jenis kelamain tidak boleh kosong";
//   }if(pesan == ''){
//       document.getElementById('errorPesan').innerHTML = "Pesan tidak boleh kosong!"; 

//       return false;
//   }

//  setData(nama, tanggal, jk, pesan);
// }

// function setData(nama, tanggal, jk, pesan){
//   document.getElementById('namaData').innerHTML = nama;
//   document.getElementById('errorNama').innerHTML = "";

//   document.getElementById('tanggalData').innerHTML = tanggal;
//   document.getElementById('errorTanggal').innerHTML = "";

//   document.getElementById('jkData').innerHTML = jk;
//   document.getElementById('errorJk').innerHTML = "";

//   document.getElementById('pesanData').innerHTML = pesan;
//   document.getElementById('errorPesan').innerHTML = "";
// }