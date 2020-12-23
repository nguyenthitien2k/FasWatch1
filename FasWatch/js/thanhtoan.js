

tong = localStorage.getItem("tongtien");

document.getElementById("tongtien").innerText = tong;

function show1() {
    document.getElementById('show3').style.display = 'none';
    document.getElementById('show2').style.display = 'none';
    document.getElementById('show1').style.display = 'block';
}
function show2() {
    document.getElementById('show3').style.display = 'none';
    document.getElementById('show1').style.display = 'none';
    document.getElementById('show2').style.display = 'block';
}
function show3() {
    document.getElementById('show2').style.display = 'none';
    document.getElementById('show1').style.display = 'none';
    document.getElementById('show3').style.display = 'block';
}
function xacNhan() {

    var name = document.getElementById("name").value;
    var sdt = document.getElementById("phone").value;
    var diaChi = document.getElementById("adr").value + ", " +
        document.getElementById("zip").value + ", " +
        document.getElementById("state").value + ", " +
        document.getElementById("city").value;
    if (name == "" || sdt == "" || diaChi == "") {
        var modal = document.getElementById("myModal");

        

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        
            modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
        //alert("Bạn phải điền các thông tin bắt buộc");
    else {
        var queryString = "?name=" + name + "&sdt=" + sdt + "&diaChi=" + diaChi;
        window.location.href = "../html/DatHangThanhCong.html" + queryString;

    }
 
}
// Get the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}