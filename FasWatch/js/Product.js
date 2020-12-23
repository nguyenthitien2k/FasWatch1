var isFilterBrand = false;
var isFilterPrice = false;
var isFilterSex = false;
var isFilterMaterial = false;
var isFilterSize = false;
var isFilterColor = false;
var isFilterPower = false;
var pagenumber = 1;
var lastPage = false;
function DeleteFilter() {
    document.getElementById("labelthuonghieu").innerHTML = "";
    loadPage();
}
function brandChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    
    isFilterBrand = true;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = false;
    isFilterSize = false;
    isFilterColor = false;
    isFilterPower = false;
    cbo_onChange(obj.value);
    
}
function priceChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    
    isFilterPrice = true;    
    isFilterBrand = false;
    isFilterSex = false;
     isFilterMaterial = false;
     isFilterSize = false;
     isFilterColor = false;
    isFilterPower = false;
    cbo_onChange(obj.value);
}
function sexChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    isFilterSex = true;    
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterMaterial = false;
    isFilterSize = false;
    isFilterColor = false;
    isFilterPower = false;
    cbo_onChange(obj.value);
}
function materialChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;    
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = true;
    isFilterSize = false;
    isFilterColor = false;
    isFilterPower = false;
    cbo_onChange(obj.value);
}
function sizeChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = false;
    isFilterSize = true;
    isFilterColor = false;
    isFilterPower = false;
    cbo_onChange(obj.value);
}
function colorChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = false;
    isFilterSize = false;
    isFilterColor = true;
    isFilterPower = false;
    cbo_onChange(obj.value);
}
function powerChanged(obj) {
    pagenumber = 1;
    lastPage = false;
    document.getElementById("labelthuonghieu").innerHTML = obj.value;
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = false;
    isFilterSize = false;
    isFilterColor = false;
    isFilterPower = true;
    cbo_onChange(obj.value);
}
function loadPage() {
    isFilterBrand = false;
    isFilterPrice = false;
    isFilterSex = false;
    isFilterMaterial = false;
    isFilterSize = false;
    isFilterColor = false;
    isFilterPower = false;
    btnSee();
}
function cbo_onChange(select) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            filter(this, select); // truyen vao ket qua trar ve
        }
    };
    xhttp.open("GET", "../Data/general.xml", true);
    xhttp.send();
}
function loadSelect() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this); // truyen vao ket qua tra ve
        }
    };
    xhttp.open("GET", "../Data/general.xml", true);
    xhttp.send();

}
function myFunction(xml) {
    lstBrands = [];
    lstMaterial = [];
    lstColor = [];
    lstPower = [];
    var sel_brand = document.getElementById("brand");
    var sel_material = document.getElementById("material");
    var sel_color = document.getElementById("color");
    var sel_engine = document.getElementById("engine");

    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("sp");

    for (var i = 0; i < x.length; i++) {
        var name_xml = x[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
        var material_xml = x[i].getElementsByTagName("DayDeo")[0].childNodes[0].nodeValue;
        var color_xml = x[i].getElementsByTagName("MauMatSo")[0].childNodes[0].nodeValue;
        var engine_xml = x[i].getElementsByTagName("May")[0].childNodes[0].nodeValue;


        var brandOnSelect = name_xml.substring(0, name_xml.indexOf(" "));

        lstBrands.push(brandOnSelect);

        lstMaterial.push(material_xml);
        lstColor.push(color_xml);
        lstPower.push(engine_xml);


        var lengB = lstBrands.length;
        for (var j = 0; j < lengB - 1; j++) {
            if (brandOnSelect === lstBrands[j]) {
                lstBrands.splice(j, 1);
            }

        }
        var lengM = lstMaterial.length;
        //alert(lengM + "");
        for (var j = 0; j < lengM - 1; j++) {
            if (material_xml === lstMaterial[j])

                lstMaterial.splice(j, 1);
        }
        var lengC = lstColor.length;
        for (var j = 0; j < lengC - 1; j++) {
            if (color_xml === lstColor[j])
                lstColor.splice(j, 1);
        }
        var lengP = lstPower.length;
        for (var j = 0; j < lengP - 1; j++) {
            if (engine_xml === lstPower[j])
                lstPower.splice(j, 1);
        }

    }

    for (i = 0; i < lstBrands.length; i++) {

        option = document.createElement("option");
        sel_brand.appendChild(option);
        option.setAttribute("value", lstBrands[i]);
        text = document.createTextNode(lstBrands[i]);
        option.appendChild(text);
    }
    for (i = 0; i < lstMaterial.length; i++) {
        option = document.createElement("option");
        sel_material.appendChild(option);
        option.setAttribute("value", lstMaterial[i]);
        text = document.createTextNode(lstMaterial[i]);
        option.appendChild(text);
    }
    for (i = 0; i < lstColor.length; i++) {
        option = document.createElement("option");
        sel_color.appendChild(option);
        option.setAttribute("value", lstColor[i]);
        text = document.createTextNode(lstColor[i]);
        option.appendChild(text);
    }
    for (i = 0; i < lstPower.length; i++) {
        option = document.createElement("option");
        sel_engine.appendChild(option);
        option.setAttribute("value", lstPower[i]);
        text = document.createTextNode(lstPower[i]);
        option.appendChild(text);
    }

}
function filter(xml, select) {
    var lst = xml.responseXML.getElementsByTagName("sp");
    var lstResult = [];
    icon = document.getElementById("delete_icon");
    icon.setAttribute("style", "display:block");

    if (isFilterBrand) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue.indexOf(select) == 0) {
                lstResult.push(lst[i]);
            }
        }

    }
    else if (isFilterPrice) {
        for (var i = 0; i < lst.length; i++) {
            var price_xml = lst[i].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
            var dprice = parseFloat(price_xml, 0);
            if ((dprice < 5 && select == 'Dưới 5 triệu') || (dprice >= 5 && dprice < 10 && select == '5 - 10 triệu') || (dprice >= 10 && dprice < 20 && select == '10 - 20 triệu') || (dprice >= 20 && select == 'Trên 20 triệu')) {
                lstResult.push(lst[i]);
            }
        }
    }
    else if (isFilterSex) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].getElementsByTagName("GioiTinh")[0].childNodes[0].nodeValue.indexOf(select) == 0) {
                lstResult.push(lst[i]);
            }
        }
    }
    else if (isFilterMaterial) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].getElementsByTagName("DayDeo")[0].childNodes[0].nodeValue.indexOf(select) == 0) {
                lstResult.push(lst[i]);
            }
        }
    }
    else if (isFilterSize) {
        for (var i = 0; i < lst.length; i++) {
            var DKMatso_xml = lst[i].getElementsByTagName("DKMatso")[0].childNodes[0].nodeValue;
            var fdk = DKMatso_xml.substring(0, DKMatso_xml.indexOf(" "));
            //alert(fdk+"");
            var ddk = parseFloat(fdk, 0);
            if ((ddk < 30 && select == 'Dưới 30mm') || (ddk >= 30 && ddk < 40 && select == '30 - 40 mm') || (ddk >= 40 && select == 'Trên 40mm') ) {
                lstResult.push(lst[i]);
            }
        }
    }
    else if (isFilterColor) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].getElementsByTagName("MauMatSo")[0].childNodes[0].nodeValue.indexOf(select) == 0) {
                lstResult.push(lst[i]);
            }
        }
    }
    else if (isFilterPower) {
        for (var i = 0; i < lst.length; i++) {
            if (lst[i].getElementsByTagName("May")[0].childNodes[0].nodeValue.indexOf(select) == 0) {
                lstResult.push(lst[i]);
            }
        }
    }
    else {
        for (var i = 0; i < lst.length; i++) {          
                lstResult.push(lst[i]);            
        }
        icon.setAttribute("style", "display:none");
        
    }
    var btnListView = document.getElementById("btnListView");
    if (btnListView.className.indexOf("active") > -1)
        reloadDataListview(lstResult);
    else
        reloadDataGidview(lstResult);
}
function btnSee() {
    var lbloc = document.getElementById("labelthuonghieu").innerText;
    if (isFilterBrand)
        cbo_onChange(lbloc);
    else if (isFilterPrice)
        cbo_onChange(lbloc);
    else if (isFilterSex)
        cbo_onChange(lbloc);
    else if (isFilterSize)
        cbo_onChange(lbloc);
    else if (isFilterPower)
        cbo_onChange(lbloc);
    else if (isFilterMaterial)
        cbo_onChange(lbloc);
    else if (isFilterColor)
        cbo_onChange(lbloc);
    else {
        lbloc = "";
        cbo_onChange(lbloc)       
    }
}
function nextpage() {
    lastPage = false;
    pagenumber++;    
    btnSee();   
}
function previouspage() {
    lastPage = false;
        pagenumber--;
        btnSee();   
}
function firstpage() {
    lastPage = false;
    pagenumber = 1;
    btnSee();
}
function lastpage() {
    lastPage = true;
    btnSee();
}
function reloadDataListview(lstResult) {
    product = document.getElementById("product");
    product.innerHTML = "";

    document.getElementById("pagenumber").innerText = pagenumber;
    var sotrang = Math.floor(lstResult.length / 36) + 1;
    if (lstResult.length % 36 == 0)
        sotrang = sotrang-1;
   
    
    if (lastPage == true) {
        pagenumber = sotrang;
    }
    document.getElementById("pagenumber").innerText = pagenumber;
    if (pagenumber > sotrang) {
        pagenumber = sotrang;
        btnSee();
    }
    else if (pagenumber < 1) {
        pagenumber = 1;
        btnSee();
    }
    else {
        for (var i = 0; i < 36; i++) {
            item = i + (pagenumber - 1) * 36;
            code = lstResult[item].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
            hinh = lstResult[item].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
            ten = lstResult[item].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
            gia = lstResult[item].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;
            mota = lstResult[item].getElementsByTagName("MoTa")[0].childNodes[0].nodeValue;

            tr = document.createElement("div");
            
            tr.setAttribute("style","width:100%; display:flex")
            product.appendChild(tr);

            tdhinh = document.createElement("div");
            tdhinh.setAttribute("style", "width:20%")
            tr.appendChild(tdhinh);

            img = document.createElement("img");
            img.setAttribute("src", "../img/" + hinh);
            img.setAttribute("height", "250px");
           
           
            tdhinh.appendChild(img);

            tdchitiet = document.createElement("div");
            

            tensp = document.createElement("h3");
            tensp.innerHTML = ten;
            tensp.setAttribute("style", "padding-left: 40px")
            tdchitiet.appendChild(tensp);
            tensp.setAttribute("align", "left");
            tensp.setAttribute("onmouseover", "listchangeColor(this)")
            tensp.setAttribute("onmouseout", "listback(this)")
            


            motasp = document.createElement("p");
            motasp.innerHTML = mota;
            tdchitiet.appendChild(motasp);
            motasp.setAttribute("align", "left");
            motasp.setAttribute("style", "padding-left: 40px;padding-right: 40px;font-size:20px")
            
            
            

            giasp = document.createElement("h3");
           
            giasp.innerHTML = gia + "đ";

            
            tdchitiet.appendChild(giasp);
            giasp.setAttribute("align", "left");
            giasp.setAttribute("style", "padding-left: 40px;color:#a30303")

            tr.setAttribute("id", code);
            tr.setAttribute("onclick", "return openDetailProduct(this.id)");
           
            tr.onmouseover = function () {
                this.style.backgroundColor = "#e6f589";
                this.style.cursor = "pointer";
            }
            tr.onmouseout = function () {
                this.style.backgroundColor = "white";
            }
            tdchitiet.setAttribute("style", "margin-left: 40px")
            tr.appendChild(tdchitiet);
            tr.setAttribute("style", "width:100%; display:flex;border-radius:10px;margin:10px;padding:10px;background-color:white");

        }
    }
}
function reloadDataGidview(lstResult) {
    product = document.getElementById("product");
    product.innerHTML = "";
    
    var sotrang = Math.floor(lstResult.length / 36) + 1;
    if (lstResult.length % 36 == 0)
        sotrang = sotrang - 1;   
    if (lastPage == true) {
        pagenumber = sotrang;
    }
    document.getElementById("pagenumber").innerText = pagenumber;
    if (pagenumber > sotrang) {
        pagenumber = sotrang;
        btnSee();
    }
    else if (pagenumber < 1) {
        pagenumber = 1;
        btnSee();        
    }
    else  {
         for (var i = 0; i < 36; i++) {
             item = i + (pagenumber - 1) * 36;
            code = lstResult[item].getElementsByTagName("MaSP")[0].childNodes[0].nodeValue;
            hinh = lstResult[item].getElementsByTagName("Hinh")[0].childNodes[0].nodeValue;
            ten = lstResult[item].getElementsByTagName("TenSP")[0].childNodes[0].nodeValue;
            gia = lstResult[item].getElementsByTagName("Gia")[0].childNodes[0].nodeValue;

            if (item % 3 == 0) {

                tr = document.createElement("div");
                tr.setAttribute("style", "width:100%");
                
                product.appendChild(tr);
            }
             td = document.createElement("div");
             //td.setAttribute("style", "width:30%;")
              

            img = document.createElement("img");
             img.setAttribute("src", "../img/" + hinh);
             img.setAttribute("width", "100%");
            
            td.appendChild(img);


            
            tensp = document.createElement("h3");
            tensp.innerHTML = ten;
             tensp.setAttribute("style", "padding-left : 30px; margin-right : 30px");
             tensp.setAttribute("onmouseover", "changeColor(this)")
             tensp.setAttribute("onmouseout", "back(this)")
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
             icon = document.createElement("i");
             icon.setAttribute("class", "fas fa-star");
             icon.setAttribute("style", "color:gold");
             danhgiasp.appendChild(icon);
            
             td.appendChild(danhgiasp);


             giasp = document.createElement("h3");
             giasp.innerHTML = gia + "đ";
             giasp.setAttribute("style", "color:#a30303");
             td.appendChild(giasp);
             
             td.setAttribute("id", code);
             td.setAttribute("onclick", "return openDetailProduct(this.id)");
             td.setAttribute("style", "cursor:pointer");
             td.onmouseover = function () {
                 this.style.backgroundColor = "#e6f589";
                 
                 this.style.cursor = "pointer";
             }
             td.onmouseout = function () {
                 this.style.backgroundColor = "white";
             }
             td.setAttribute("style", "padding:10px ;margin: 5px;background-color: white;width:30%;border-radius:10px;")
             tr.setAttribute("style", "display:flex;");
             
             tr.appendChild(td);
        }
    }  
}

function openDetailProduct(ma) {
    localStorage.setItem("ma", ma);
    document.location.href = "../html/detailProduct.html";       
}
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}





function changeColor(obj) {
    obj.style = "color:red; text-decoration:underline;";
}
function back(obj) {
    obj.style = "color:black;padding-left : 30px; margin-right : 30px";
}
function listchangeColor(obj) {
    obj.style = "color:red; text-decoration:underline;padding-left: 40px";
    
}
function listback(obj) {
    obj.style = "color:black;padding-left: 40px";
}