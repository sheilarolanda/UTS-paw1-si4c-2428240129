let namabarang = document.getElementById("nama belanja");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");
let imageUrl = document.getElementById("imageUrl");

function simpan() {
    console.log(namabarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);
    console.log(imageUrl.value);

   
    if (localStorage.getItem("buah") == null) {
        // simpan array kosong []
        localStorage.setItem("buah", "[]")
    }
     let data = JSON.parse(localStorage.getItem("buah"))
    console.log(data)

    
    data.push({
        namabarang: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value,
        imageUrl: imageUrl.value

    });
    console.log(data)


    localStorage.setItem("buah", JSON.stringify(data))

    tampil()
}
function tampil(){
  
    let hasil = JSON.parse(localStorage.getItem("buah"))

    //clear element ul id=list=mhs
    document.getElementById("list-mhs").innerHTML=""
    //lakukan perulangan (forEach)
    hasil.forEach(element => { 
        //console.log(Element)
        let imgTag = element.imageurl ? `<img src="${element.imageurl}" alt="gambar belanja" 
        style="width:50px; height:auto;" onerror="this.style.display='none';">` : '';  
        document.getElementById("list-mhs").
        innerHTML += `<div class="col-lg-4 col-md-6"><h4 class="text-primary">${element.nama barang}</h4> <h6 class="text-danger">${element.jumlah}</h6></div>
         <img src="${element.imageurl}" alt="test">`
    });
}


tampil()