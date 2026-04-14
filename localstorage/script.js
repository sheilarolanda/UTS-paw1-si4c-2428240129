// simpan ke lokal storage
localStorage.setItem("nama belanja",abc);

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("nama belanja"))

// tampilkan di paragraf id=npm 
document.getElementById("nama belanja").innerHTML=localStorage.getItem("nama belanja");