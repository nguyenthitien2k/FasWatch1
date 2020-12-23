
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
        var Gia = parseFloat(x[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue)*1000;
        var Hinh = x[i].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
        var TenSP = x[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        var sl = 0;
        var giathuc;
        for (var j = 0; j < dsGioHang.length; j++) {
            if (maSP == dsGioHang[j]) {    
                sl++;
                if (sl == 1) {                   
                    
                    tr = document.createElement("tr");
                    tr.setAttribute("id", "td"+i);
                   
                    tr.setAttribute("style","border:1px solid black")
                    tbgiohang.appendChild(tr);

                    tdhinh = document.createElement("td");
                    img = document.createElement("img");
                    img.setAttribute("src", "../img/" + Hinh);
                    img.setAttribute("height", "100px");
                    tdhinh.appendChild(img);
                    tr.appendChild(tdhinh);

                    tdten = document.createElement("td");
                    tdten.setAttribute("id", "ma" + maSP);
                    tdten.innerText = TenSP;
                    tdten.setAttribute("onclick", "openDetailProduct(this.id)");
                    tdten.setAttribute("onmouseover", "over(this)");
                    tdten.setAttribute("onmouseout", "out(this)");
                    tr.appendChild(tdten);
                    

                    tdgia = document.createElement("td");
                    tdgia.innerText = formatter.format(Gia);
                    tr.appendChild(tdgia);

                    tdsl = document.createElement("td");
                    tdsl.innerText = sl;
                    tdsl.setAttribute("id", "sl"+i);
                    tr.appendChild(tdsl);

                    tdgiathuc = document.createElement("td");
                    tdgiathuc.innerText = formatter.format(Gia);
                    tdgiathuc.setAttribute("id", "gia" + i);
                    tr.appendChild(tdgiathuc);

                    tdxoa = document.createElement("td");
                    btnXoa = document.createElement("button");
                    btnXoa.innerText = "X";

                    btnXoa.setAttribute("id", maSP);
                    btnXoa.setAttribute("style", "border:none");

                    
                    btnXoa.setAttribute("onclick", "xoaSP(this.id)");
                    tdxoa.appendChild(btnXoa);   
                    
                    tr.appendChild(tdxoa);
                }
                else {
                    slthaydoi = document.getElementById("sl"+i);    
                    slthaydoi.innerText = sl;

                    tdgiathucthay = document.getElementById("gia" + i);
                    giathuc = sl * parseFloat(Gia);
                    //localStorage.setItem("giathuc");
                    
                    tdgiathucthay.innerText = formatter.format(giathuc);
                }
                
                tongphu += Gia;
            }
            

        }     
        
    }
    document.getElementById("tongphu").innerText = formatter.format(tongphu);
    document.getElementById("tongcong").innerText = formatter.format(tongphu);
    
    localStorage.setItem("tongtien", formatter.format(tongphu));
    
    
}
function over(obj) {
    obj.style = "text-decoration:underline;color:red;font-size:larger;cursor:pointer";
}
function out(obj) {
    obj.style = "text-decoration:none;color:black;font-size:medium";
}
function openDetailProduct(obj) {
    var ma = obj.substring(2);
    
    localStorage.setItem("ma", ma);
    document.location.href = "../html/detailProduct.html";
}
function thanhtoan() {
    
    localStorage.setItem('session', JSON.stringify(dsGioHang));
    document.location.href = "../html/ThanhToan.html";
}
function xoaSP(obj) {
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    
    modal.style.display = "block";
    var btnOk = document.getElementsByClassName("btnOK")[0];
    var btnCancel = document.getElementsByClassName("btnCancel")[0];


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    btnCancel.onclick = function () {
        modal.style.display = "none";
    }
    btnOk.onclick = function () {
        modal.style.display = "none";
        var len = dsGioHang.length;
        modal.style.display = "none";
        for (i = 0; i < len; i++) {
            while (dsGioHang[i] == obj) {
                dsGioHang.splice(i, 1)
            }
        }
        localStorage.setItem('session', JSON.stringify(dsGioHang));
        loadGioHang();

        ifrm = parent.document.getElementById('iframeheader');

        var doc = ifrm.contentDocument ?
            ifrm.contentDocument : ifrm.contentWindow.document;
        var fld = doc.getElementById("slgio");
        fld.innerText = dsGioHang.length;

        localStorage.setItem("count", dsGioHang.length);
        
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    

}



