function kiemtra() {
	var dt = document.dangky.sdt.value;
	if (isNaN(dt) == true) {
		alert("Số điện thoại bạn nhập không phải là số");
		document.dangky.sdt.value = "";
		document.dangky.sdt.focus();
		return false;
	}
	alert("Bạn đã đăng kí thành công!");
	return true;
	}
