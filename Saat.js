function zamaniGoster(){
    var tarih = new Date();
    var birSaat = tarih.getHours(); // 0 - 23
    var dakika = tarih.getMinutes(); // 0 - 59
    var saniye = tarih.getSeconds(); // 0 - 59
    
    birSaat = (birSaat < 10) ? "0" + birSaat : birSaat;
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;
    
    var time = birSaat + ":" + dakika + ":" + saniye + " ";
    document.getElementById("dijitalSaat").innerText = time;
    document.getElementById("dijitalSaat").textContent = time;
    
    setTimeout(zamaniGoster, 1000); 
}

zamaniGoster();