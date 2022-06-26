$(document).ready(() => {
  if (localStorage.getItem("user-bss")) {
    window.location.href = "/dashboard.html";
  }

  let username = $("#userName");
  let password = $("#password");

  $(".btn-login").click(() => {
    if (username.val() === "" || password.val() === "") {
      $(".error").text("Bạn hãy nhập đầy đủ username và password");
    } else if (username.val() !== "john" || password.val() !== "1234") {
      $(".error").text("Kiểm tra lại tài khoản hoặc mật khẩu của bạn");
    } else {
      localStorage.setItem("user-bss", true);
      window.location.href = "/dashboard.html";
    }

  })
})