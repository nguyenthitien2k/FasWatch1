
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");

    name = queries[0] ;
    phone = queries[1];
address = queries[2];
document.getElementById("hoten").innerText = name.substring(5);
document.getElementById("sdt").innerText = phone.substring(4);
document.getElementById("diachi").innerText = address.substring(7);



function loadGioHang() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "../Data/general.xml", true);
    xhttp.send();
}

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 3
})




var dsGioHang = JSON.parse(localStorage.getItem('session'));

function myFunction(xml) {
    
    tbgiohang = document.getElementById("tbgiohang");
    tbgiohang.innerHTML = "";
    var i;
    var tongphu = 0;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("sp");

    for (var i = 0; i < x.length; i++) {
        var maSP = x[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
        var Gia = parseFloat(x[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue) * 1000;
        //var Hinh = x[i].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
        var TenSP = x[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        var sl = 0;
        var giathuc;
        for (var j = 0; j < dsGioHang.length; j++) {
            if (maSP == dsGioHang[j]) {
                
                sl++;
                if (sl == 1) {
                    
                    tr = document.createElement("tr");
                    tr.setAttribute("id", "td" + i);
                    
                    tr.setAttribute("style", "border:1px solid black")
                    tbgiohang.appendChild(tr);
                    
                    

                    tdten = document.createElement("td");
                    tdten.innerText = TenSP;
                    
                    
                    
                    tr.appendChild(tdten);

                    tdsl = document.createElement("td");
                    tdsl.innerText =  sl;
                    tdsl.setAttribute("id", "sl" + i);
                    tdsl.setAttribute("style", "text-align:center");
                    tr.appendChild(tdsl);
                    
                    
                    tdgiathuc = document.createElement("td");
                    tdgiathuc.innerText = formatter.format(Gia);
                    tdgiathuc.setAttribute("id", "gia" + i);
                    tr.appendChild(tdgiathuc);
                    

                    
                }
                else {
                    slthaydoi = document.getElementById("sl" + i);
                    slthaydoi.innerText = sl;

                    tdgiathucthay = document.getElementById("gia" + i);
                    giathuc = sl * parseFloat(Gia);

                    tdgiathucthay.innerText = formatter.format(giathuc);
                }

                tongphu += Gia;
            }


        }

    }
    //document.getElementById("tongphu").innerText = formatter.format(tongphu);
    document.getElementById("tongcong").innerText = formatter.format(tongphu);

    localStorage.setItem("tongtien", formatter.format(tongphu));


}
function quayve(){
    document.location.href = "../html/Product.html";
}



