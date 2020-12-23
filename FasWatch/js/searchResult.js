function loadSearch() {   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {           
            search1(this);            
        }
    };
    
    xhttp.open("GET", "../Data/general.xml", true);
    xhttp.send();
}
var tukhoa = localStorage.getItem("search").toLowerCase();
function search1(xml) {   
    tb = document.getElementById("tbsearch");
    lstResult = [];
    var i;
    var xmlDoc = xml.responseXML;//trả về kết quả           
    var dsSP = xmlDoc.getElementsByTagName("sp");
    
    for (i = 0; i < dsSP.length; i++) {
        
        maSP = dsSP[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
        var BDMatSo = dsSP[i].getElementsByTagName("BDMatSo")[0].childNodes[0].nodeValue;
        var BaoHanh = dsSP[i].getElementsByTagName("BaoHanh")[0].childNodes[0].nodeValue;
        var ChongNuoc = dsSP[i].getElementsByTagName("ChongNuoc")[0].childNodes[0].nodeValue;
        var DKMatso = dsSP[i].getElementsByTagName("DKMatso")[0].childNodes[0].nodeValue;
        var DayDeo = dsSP[i].getElementsByTagName("DayDeo")[0].childNodes[0].nodeValue;
        var Gia = dsSP[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
        var GioiTinh = dsSP[i].getElementsByTagName("GioiTinh")[0].childNodes[0].nodeValue;

        var Kinh = dsSP[i].getElementsByTagName("Kinh")[0].childNodes[0].nodeValue;
        var MauMatSo = dsSP[i].getElementsByTagName("MauMatSo")[0].childNodes[0].nodeValue;
        var May = dsSP[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;
        var MoTa = dsSP[i].getElementsByTagName("MoTa")[0].childNodes[0].nodeValue;
        var Nieng = dsSP[i].getElementsByTagName("Nieng")[0].childNodes[0].nodeValue;
        var TenSP = dsSP[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        var XuatXu = dsSP[i].getElementsByTagName("XuatXu")[0].childNodes[0].nodeValue;

        if (maSP.toLowerCase().search(tukhoa) > -1 || BDMatSo.toLowerCase().indexOf(tukhoa) > -1 ||
            BaoHanh.toLowerCase().indexOf(tukhoa) > -1 || ChongNuoc.toLowerCase().indexOf(tukhoa) > -1 ||
            DKMatso.toLowerCase().indexOf(tukhoa) > -1 || DayDeo.toLowerCase().indexOf(tukhoa) > -1 ||
            Gia.toLowerCase().indexOf(tukhoa) > -1 || MauMatSo.toLowerCase().indexOf(tukhoa) > -1 ||
            Kinh.toLowerCase().indexOf(tukhoa) > -1 || May.toLowerCase().indexOf(tukhoa) > -1 ||
            MoTa.toLowerCase().indexOf(tukhoa) > -1 || Nieng.toLowerCase().indexOf(tukhoa) > -1 ||
            TenSP.toLowerCase().indexOf(tukhoa) > -1 || XuatXu.toLowerCase().indexOf(tukhoa) > -1 ||
            GioiTinh.toLowerCase().indexOf(tukhoa) > -1) {
            lstResult.push(dsSP[i]);   
        }     
    }
    
    for (var i = 0; i < lstResult.length; i++) {  
       // maSP = dsSP[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;

            code = lstResult[i].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
            hinh = lstResult[i].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
            ten = lstResult[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
            gia = lstResult[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
        //gia = lstResult[item].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
        mota = lstResult[i].getElementsByTagName("MoTa")[0].childNodes[0].nodeValue;

        tr = document.createElement("tr");
        tb.appendChild(tr);

        tdhinh = document.createElement("td");
        tr.appendChild(tdhinh);

        img = document.createElement("img");
        img.setAttribute("src", "../img/" + hinh);
        img.setAttribute("height", "200px");

        tdhinh.appendChild(img);

        tdchitiet = document.createElement("td");

        tensp = document.createElement("h3");
        tensp.innerHTML = ten;
        tensp.setAttribute("style", "padding-left: 40px")
        tdchitiet.appendChild(tensp);
        tensp.setAttribute("align", "left");


        motasp = document.createElement("p");
        motasp.innerHTML = mota;
        tdchitiet.appendChild(motasp);
        motasp.setAttribute("align", "left");
        motasp.setAttribute("style", "padding-left: 40px")


        giasp = document.createElement("h4");
        giasp.innerHTML = gia + "đ";
        tdchitiet.appendChild(giasp);
        giasp.setAttribute("align", "left");
        
        giasp.setAttribute("style", "padding-left: 40px;color:#a30303")

        tr.setAttribute("id", code);
        tr.setAttribute("onclick", "return openDetailProduct(this.id)");
        tr.onmouseover = function () {
            this.style.backgroundColor = "#e6f589";
        }
        tr.onmouseout = function () {
            this.style.backgroundColor = "beige";
        }
        tdchitiet.setAttribute("style", "padding-left: 0px; font-family:Arial")
        tr.appendChild(tdchitiet);
        }

}
function openDetailProduct(ma) {
    localStorage.setItem("ma", ma);
    document.location.href = "../html/detailProduct.html";
}