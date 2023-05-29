/** bài tập 1
 * đầu vào
 * + số ngày làm việc: soNgay
 * xử lí
 * + số ngày làm việc nhân tiền lương một ngày : soNgay * luongMotNgay
 * + gán kết qua total
 * đầu ra
 * + in ra thẻ p ở footer
 */
document.getElementById("btnTinhLuong").onclick = function() {
    var luongMotNgay = document.getElementById("luongMotNgay").value *1;
    var soNgay = document.getElementById("soNgay").value * 1;
    var total = soNgay * luongMotNgay;
    var result = "<p class='alert alert-success' >Tiền lương nhận được là: " + total + "</p>";
    document.getElementById("footerTinhTienLuong").innerHTML = result;
};
/**bài tập 2
 * đầu vào
 * - nhập vào 5 số: thuNhat, thuHai........
 * xử lí
 * - cộng 5 số đó lại r chia cho năm
 * đẩu ra
 * - in kết quả ra thẻ p ở footer
 */
document.getElementById("btnTinhNao").onclick = function() {
    var thuNhat = document.getElementById("thuNhat").value * 1;
    var thuHai = document.getElementById("thuHai").value * 1;
    var thuBa = document.getElementById("thuBa").value * 1;
    var thuTu = document.getElementById("thuTu").value * 1;
    var thuNam = document.getElementById("thuNam").value * 1;
    var total = (thuNhat + thuHai + thuBa + thuTu + thuNam ) / 5;
    var result = "<p class='alert alert-success' >Gía trị trung bình là: " + total + "</p>";
    document.getElementById("footerTinhTrungBinh").innerHTML = result;
};
/**bài tập 3
 * đàu vào
 * - nhập số tiền USD muốn đổi
 * xử lí
 * - lấy số tiền nhân 23.500
 * 
 * đầu ra
 * -  dùng fomat để lấy giá trị vnd
 * - in kết quả ra thẻ p ở footer
 */
document.getElementById("btnQuyDoi").onclick = function() {
    var soTien = document.getElementById("soTien").value * 1;
    var total = soTien * 23500;
    var numberFormat = new Intl.NumberFormat("vn-VN");
    var result = "<p> Số tiền là: " + numberFormat.format(total) + "VND</p>";
    document.getElementById("footerDoiTien").innerHTML = result;
};
/**bài tập 4
 * đầu vào
 * - nhập vào chiều dài và chiều rộng: chieuDai chieuRong
 * xử lí
 * - chu vi = dài cộng rộng nhân 2 : chuVi = (chieuDai + chieuRong) * 2
 * - diện tích = dài nhân rộng
 * đầu ra
 * tích lũy rồi in ra footer
 * 
 */
document.getElementById("btnThoi").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    var content = "";
    content += "<p>Chu vi: " + chuVi + "</p>" ;
    content += "<p>Diện tích: " + dienTich + "</p>" ;
    document.getElementById("footerTinhToan").innerHTML = content;
};
/**
 * bài tập 5
 * đầu vào
 * - nhập vào 1 số có hai chữ số: nhapSo
 * xử lí
 * - lấy số hàng chục : hangChuc = nhapSo / 10
 * - lấy số hàng đơn vị: donVi =nhapSo % 10
 * - tính tổng 2 ký số: total = hangChuc + donVi
 * đầu ra
 * - in kết quả tính được ra footer
 */
document.getElementById("btnTinhTong").onclick = function() {
    var nhapSo = document.getElementById("nhapSo").value * 1;
    var hangChuc = (nhapSo - (nhapSo % 10)) / 10;
    var donVi = nhapSo % 10;
    var total = hangChuc + donVi;
    var result = "<p> Tổng hai ký số là: " + total + "</p>";
    document.getElementById("footerTinhTong").innerHTML = result;
}

