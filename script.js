// 0'dan 5'e kadar olan sayıları döngüde işler
for(var i = 0; i <= 5; i++) {         
    // Her döngü adımında bir uyarı penceresi açar ve mevcut döngü değerini gösterir
    alert("Döngü Değeri: " + i);
}

// isimler dizisindeki her bir öğe için forEach döngüsü kullanılır
var isimler = ["ahmet", "mehmet", "can"];
isimler.forEach((isim) => {
    // Her isim için bir uyarı penceresi açar ve ismi gösterir
    alert(isim);
});

// isimler dizisindeki her bir öğe için döngü kullanılır ve konsola yazdırılır
for(var i = 0; i < isimler.length; i++) {
    // Her bir ismi sıra numarasıyla birlikte konsola yazdırır
    console.log(i + 1 + ".isim" + isimler[i]);
}

// Bir değer 5'ten büyük olduğu sürece while döngüsü çalışır
var dd = 15;
while (dd > 5){
    // dd değerini konsola yazdırır
    console.log("dd = " + dd);
    // dd değerini 1 azaltır
    dd -= 1;
}
