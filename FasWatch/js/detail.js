var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


value = localStorage.getItem("ma");
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "../Data/general.xml", true);
    xhttp.send();
}
var btnMuaNgay = document.getElementById("muangay");
var btnThemGio = document.getElementById("addCart");
function myFunction(xml) {      
    tb = document.getElementById("related");
    
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("sp");
    for (var i = 0; i < x.length; i++) {
        var maSP = x[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
        var BDMatSo = x[i].getElementsByTagName("BDMatSo")[0].childNodes[0].nodeValue;
        var BaoHanh = x[i].getElementsByTagName("BaoHanh")[0].childNodes[0].nodeValue;
        var ChongNuoc = x[i].getElementsByTagName("ChongNuoc")[0].childNodes[0].nodeValue;
        var DKMatso = x[i].getElementsByTagName("DKMatso")[0].childNodes[0].nodeValue;
        var DayDeo = x[i].getElementsByTagName("DayDeo")[0].childNodes[0].nodeValue;
        var Gia = x[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
        var GioiTinh = x[i].getElementsByTagName("GioiTinh")[0].childNodes[0].nodeValue;
        var Hinh = x[i].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
        var Hinh2 = x[i].getElementsByTagName("Hinh2")[0].childNodes[0].nodeValue;
        var Hinh3 = x[i].getElementsByTagName("Hinh3")[0].childNodes[0].nodeValue;

        var Kinh = x[i].getElementsByTagName("Kinh")[0].childNodes[0].nodeValue;
        var MauMatSo = x[i].getElementsByTagName("MauMatSo")[0].childNodes[0].nodeValue;
        var May = x[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;
        var MoTa = x[i].getElementsByTagName("MoTa")[0].childNodes[0].nodeValue;
        var Nieng = x[i].getElementsByTagName("Nieng")[0].childNodes[0].nodeValue;
        var TenSP = x[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        var XuatXu = x[i].getElementsByTagName("XuatXu")[0].childNodes[0].nodeValue;

        if (maSP == value) {
            document.getElementById("tenSp").innerText = TenSP;
            document.getElementById("hinh1").src = "../img/" + Hinh;
            document.getElementById("maSp").innerText += " " + maSP;
            document.getElementById("gia").innerText = Gia + " đ";
            document.getElementById("moTa").innerText = MoTa;
            document.getElementById("xuatXu").innerText = XuatXu;
            document.getElementById("gioiTinh").innerText = GioiTinh;

            document.getElementById("kinh").innerText = Kinh;
            document.getElementById("may").innerText = May;
            document.getElementById("baoHanh").innerText = BaoHanh;
            document.getElementById("dkMatSo").innerText = DKMatso;
            document.getElementById("bdMatSo").innerText = BDMatSo;
            document.getElementById("nieng").innerText = Nieng;
            document.getElementById("dayDeo").innerText = DayDeo;
            document.getElementById("mauMatSo").innerText = MauMatSo;
            document.getElementById("chongNuoc").innerText = ChongNuoc;
            document.getElementById("hinh1nho").src = "../img/" + Hinh;
            document.getElementById("hinh2").src = "../img/" + Hinh2;
            document.getElementById("hinh3").src = "../img/" + Hinh3;
            hinh2 = document.getElementById("hinh2");
            h2 = document.getElementById("h2").src = hinh2.src;
            hinh3 = document.getElementById("hinh3");
            h3 = document.getElementById("h3").src = hinh3.src;

            localStorage.setItem("maSP", maSP);
            btnThemGio.setAttribute("onclick", "return addCart()");
            btnMuaNgay.setAttribute("onclick", "return buy()");
    
        }

        if (i < 8) {
            if (i % 4 == 0) {
                tr = document.createElement("div");

                tb.appendChild(tr);
            }

            td = document.createElement("div");
            td.setAttribute("style", "width:25%;border-radius:5px;background-color:white");

            img = document.createElement("img");
            img.setAttribute("src", "../img/" + Hinh);
            img.setAttribute("height", "240px");
            img.setAttribute("style", "margin-top:20px");
            td.appendChild(img);

            tensp = document.createElement("p");
            tensp.innerHTML = TenSP;
            tensp.setAttribute("style", "text-align:center");
            tensp.setAttribute("style", "margin-left:20px;margin-right:20px");
            td.appendChild(tensp);

            danhgiasp = document.createElement("p");
            icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-star");
            icon.setAttribute("style", "color:gold");
            danhgiasp.appendChild(icon);
            icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-star");
            icon.setAttribute("style", "color:gold");
            danhgiasp.appendChild(icon);
            icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-star");
            icon.setAttribute("style", "color:gold");
            danhgiasp.appendChild(icon);
            icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-star");
            icon.setAttribute("style", "color:gold");
            danhgiasp.appendChild(icon);
            danhgiasp.setAttribute("style", "text-align:center");
            td.appendChild(danhgiasp);

            

            giasp = document.createElement("p");
            giasp.innerHTML = Gia;
            giasp.setAttribute("style", "color:#a30303;font-weight:bold;text-align:center");

            td.appendChild(giasp);

            td.setAttribute("id", maSP);
            td.setAttribute("onclick", "return openDetailProduct(this.id)");            
            td.onmouseover = function () {
                this.style.backgroundColor = "#e6f589";
            }
            td.onmouseout = function () {
                this.style.backgroundColor = "white";
            }
            tr.setAttribute("style", "display:flex");
            tr.appendChild(td);
        }          
    }
}
function openDetailProduct(ma) {
    localStorage.setItem("ma", ma);
    document.location.href = "../html/detailProduct.html";
}
function loadHinh2(obj) {
    alert(obj);

    document.getElementById("hinh1").src = obj;
}
var dsGioHang = [];
function addCart() {
    masp = localStorage.getItem("maSP");    
    dsGioHang = JSON.parse(localStorage.getItem('session')) || [];
   
    dsGioHang.push(masp);
    
    localStorage.setItem('session', JSON.stringify(dsGioHang));
    
    ifrm = parent.document.getElementById('iframeheader');
    
    var doc = ifrm.contentDocument ?
        ifrm.contentDocument : ifrm.contentWindow.document;
    var fld = doc.getElementById("slgio");
    fld.innerText = dsGioHang.length;
    
    localStorage.setItem("count", dsGioHang.length);
   
    
}


function buy() {
    addCart();   
    document.location.href = "../html/GioHang.html";
}

