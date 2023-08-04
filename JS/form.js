var trai = document.querySelector(".left11");
var phai = document.querySelector(".right11");
var tongtruot = document.querySelectorAll(".slider-product-one-content-items");
var index = 0;
trai.addEventListener("click", function () {
  index++;
  if (index > tongtruot.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-product-one-content-items-all").style.right =
    index * 100 + "%"; //đặt vị trí bên phải theo chiều rộng phần tử mẹ
});

phai.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = tongtruot.length - 1;
  }
  document.querySelector(".slider-product-one-content-items-all").style.right =
    index * 100 + "%";
});

var bt = document.getElementById("checkform");
console.log(bt);

bt.addEventListener("click", function () {
  var name_form = document.getElementById("name_form").value;
  if (name_form.length == 0) {
    document.getElementById("errol_name_form").innerHTML =
      "Vui lòng nhập tên...";
    return false;
  } else {
    document.getElementById("errol_name_form").innerHTML = "";
  }

  for (var i = 0; i < name_form.length; i++) {
    if (!isNaN(name_form[i])) {
      document.getElementById("errol_name_form").innerHTML =
        "Vui lòng nhập tên không chứa kí tự số...";
      return false;
    } else {
      document.getElementById("errol_name_form").innerHTML = "";
    }
  }

  var email_form = document.getElementById("email_form").value;

  if (email_form.length == 0) {
    document.getElementById("errol_email_form").innerHTML =
      "Vui lòng nhập email...";
    return false;
  } else {
    document.getElementById("errol_email_form").innerHTML = "";
  }

  var chuanEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!chuanEmail.test(email_form)) {
    document.getElementById("errol_email_form").innerHTML =
      "Nhập chưa đúng định dạng Email...";
    return false;
  } else {
    document.getElementById("errol_email_form").innerHTML = "";
  }

  var phone_form = document.getElementById("phone_form").value;
  if (phone_form.length == 0) {
    document.getElementById("errol_phone_form").innerHTML =
      "Vui lòng nhập số điện thoại...";
    return false;
  } else {
    document.getElementById("errol_phone_form").innerHTML = "";
  }

  var chuanPhone = /((09|03|07|08|05)+([0-9]{8}))/;
  if (!chuanPhone.test(phone_form)) {
    document.getElementById("errol_phone_form").innerHTML =
      "Nhập chưa đúng định dạng số điện thoại...";
    return false;
  } else {
    document.getElementById("errol_phone_form").innerHTML = "";
  }

  var add_form = document.getElementById("add_form").value;
  if (add_form.length == 0) {
    document.getElementById("errol_add_form").innerHTML =
      "Vui lòng nhập địa chỉ...";
    return false;
  } else {
    document.getElementById("errol_add_form").innerHTML = "";
  }

  var mess_form = document.getElementById("mess_form").value;
  if (mess_form.length == 0) {
    document.getElementById("errol_mess_form").innerHTML =
      "Vui lòng nhập lời nhắn...";
    return false;
  } else {
    document.getElementById("errol_mess_form").innerHTML = "";
  }
  alert("Bạn đã gửi thành công");
  return true;
});
