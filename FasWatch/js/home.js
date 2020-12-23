function loadBestSeller() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            bestSeller(this);
        }
    };
    xhttp.open("GET", "../Data/banchay.xml", true);
    xhttp.send();
}
function loadNewProduct() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            newProduct(this);
        }
    };
    xhttp.open("GET", "../Data/new.xml", true);
    xhttp.send();
}
function bestSeller(xml) {
    tb = document.getElementById("bestseller");
    loadProduct(tb, xml);
}
function openDetailProduct(ma) {
    localStorage.setItem("ma", ma);
    document.location.href = "../html/detailProduct.html";

}
function loadProduct(tb,xml) {
    var i;
    var xmlDoc = xml.responseXML;//trả về kết quả      
    
    
    var dsCD = xmlDoc.getElementsByTagName("sp");
    for (i = 0; i < 8; i++) {
        code = dsCD[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
        hinh = dsCD[i].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
        ten = dsCD[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        gia = dsCD[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;

        if (i % 4 == 0) {

            tr = document.createElement("div");
            tr.setAttribute("style", "display:flex");
            tb.appendChild(tr);
        }

        td = document.createElement("div");
        td.setAttribute("style", "width:25%;border-radius:5px");

        img = document.createElement("img");
        img.setAttribute("src", "../img/" + hinh);
        img.setAttribute("height", "200px");
        img.setAttribute("style", "margin-top:20px");
        td.appendChild(img);

        tensp = document.createElement("p");
        tensp.setAttribute("style", "margin:20px");
        tensp.innerHTML = ten;
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
        td.appendChild(danhgiasp);

        giasp = document.createElement("p");
        giasp.innerHTML = gia + "đ";
        giasp.setAttribute("style", "color:#a30303;font-weight:bold");
        td.appendChild(giasp);
        td.setAttribute("id", code);
        td.setAttribute("onclick", "return openDetailProduct(this.id)");
        td.onmouseover = function () {
            this.style.backgroundColor = "#e6f589";
        }
        td.onmouseout = function () {
            this.style.backgroundColor = "white";
        }
        tr.appendChild(td);


    }

}
function newProduct(xml) {
    tb = document.getElementById("newwatch");
    loadProduct(tb,xml);
}
