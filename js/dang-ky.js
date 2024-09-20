function kiemtra() 
{
    var ht=document.dangky.ten.value;
    var ng=document.dangky.ngay.value;
    var th=document.dangky.thang.value;
    var na=document.dangky.nam.value;
    var dc=document.dangky.ns.value;
    var nmht=document.dangky.nmht.value;
    var mk=document.getElementById("mk");
    var nlmk=document.getElementById("nlmk");
    if(ht.length==0)
    {
        alert("Vui lòng nhập họ tên!");
        document.dangky.ten.focus();
        return false;
    }
    if(dc.length==0)
    {
        alert("Vui lòng nhập nơi sống!");
        document.dangky.ns.focus();
        return false;
    }
    if(ng.length==0)
    {
        alert("Vui lòng nhập ngày sinh!");
        document.dangky.ngay.focus();
        return false;
    }
    if(isNaN(ng)==true)
    {
        alert("Ngày sinh không phải số !");
        document.dangky.ngay.value="";
        document.dangky.ngay.focus();
        return false;
    }
    if(th.length==0)
    {
        alert("Vui lòng nhập tháng sinh!");
        document.dangky.thang.focus();
        return false;
    }if(isNaN(th)==true)
    {
        alert("Tháng sinh không phải số !");
        document.dangky.thang.value="";
        document.dangky.thang.focus();
        return false;
    }
    if(na.length==0)
    {
        alert("Vui lòng nhập năm sinh!");
        document.dangky.nam.focus();
        return false;
    }if(isNaN(na)==true)
    {
        alert("Năm sinh không phải số !");
        document.dangky.nam.value="";
        document.dangky.nam.focus();
        return false;
    }
    if(mk.value=="")
    {
    alert("Bạn quên nhập mật khẩu!");		
    mk.focus();			
    return false;
}	
if(nlmk.value!=mk.value)
{
    alert("Mật khẩu nhập lại không đúng!");
    nlmk.focus();
    return false;
}
if(nmht.length==0)
    {
        alert("Vui lòng nhập mã hiển thị!");
        document.dangky.ngay.focus();
        return false;
    }
alert("Bạn đã đăng kí thành công!");
return true;
}
function doihinh()
{
    var stt_hinh;
    var mk=document.dangky.mk.value;
    re=/[A-Z]/;

    re1=/[A-Z]+[a-z]/;

    re2=/[A-Z]+[a-z]+[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    re3=/[A-Z]+[a-z]+[!,@,#,$,%,^,&,*,?,_,~,-,(,)]+\d/;

    if(re3.test(mk)==true)
    {
        stt_hinh=5;
    }
    else if(re2.test(mk)==true)
    {
        stt_hinh=4;
    }
    else if(re1.test(mk)==true)
        {stt_hinh=3;}
    else if(re.test(mk)==true)
        {stt_hinh=2;}
    else
        {stt_hinh=1;}
document.dangky.pic.src='images/'+stt_hinh+'.gif';
}
function doimaanh() {
  var image =document.getElementById('anh');
  if (image.src.match("images/1.jpg")) {
    image.src = "images/2.jpg";
  } 
  else if (image.src.match("images/2.jpg")) {
    image.src = "images/3.jpg";
  }
  else if (image.src.match("images/3.jpg")) {
    image.src = "images/4.jpg";
  }
  else if (image.src.match("images/4.jpg")) {
    image.src = "images/5.jpg";
  }
  else if (image.src.match("images/5.jpg")) {
    image.src = "images/6.jpg";
  }
  else if (image.src.match("images/6.jpg")) {
    image.src = "images/7.jpg";
  }
  else if (image.src.match("images/7.jpg")) {
    image.src = "images/8.jpg";
  }
  else if (image.src.match("images/8.jpg")) {
    image.src = "images/9.jpg";
  }
  else if (image.src.match("images/9.jpg")) {
    image.src = "images/10.jpg";
  }
  else {
    image.src = "images/1.jpg";
  }
}