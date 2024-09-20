function kt() {
    var code=document.code1.input.value;
    if(code.length==8)
    {
        alert("Bạn đã nhập giftcode thành công!");
    return true;

    }
    else{
        alert("Nhập sai giftcode");
    document.code1.input.value = "";
    document.code1.input.focus();
    return false;
    }

}