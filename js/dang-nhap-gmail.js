function kiemtra() {
	var email = document.dangky.em.value;
	re = /\w+@\w+\.\w+/;
	 if (re.test(email) == false) {
		alert("Email không đúng định dạng");
		document.dangky.em.focus();
		return false;
	}
	alert("Bạn đã đăng kí thành công!");
	return true;
	}