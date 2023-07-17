function login(event) {
  event.preventDefault(); // Mencegah form submit default

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Memeriksa kredensial login
  if (username === "admin" && password === "admin") {
    // Jika login berhasil, arahkan ke halaman website
    window.location.href = "index.html";
  } else {
    // Jika login gagal, tampilkan pesan error
    alert("Username atau password salah!");
  }
}
  document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

 // Fungsi untuk menghasilkan captcha acak
function generateCaptcha() {
  var captcha = Math.random().toString(36).substr(2, 6);
  var captchaContainer = document.getElementById("captcha-container");
  captchaContainer.textContent = captcha;
  return captcha;
}

// Fungsi untuk memvalidasi captcha
function validateCaptcha() {
  var captchaInput = document.getElementById("captcha-input");
  var captchaValue = captchaInput.value.trim().toLowerCase();
  var captchaContainer = document.getElementById("captcha-container");
  var captchaText = captchaContainer.textContent.toLowerCase();

  if (captchaValue === captchaText) {
    alert("Captcha valid. Anda dapat melanjutkan proses login.");
    // Lakukan tindakan berikutnya, seperti mengirimkan data ke server
  } else {
    alert("Captcha tidak valid. Silakan coba lagi.");
    // Segarkan halaman
    location.reload();
  }
}


// Event listener untuk memanggil fungsi generateCaptcha() saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  generateCaptcha();
});

// Event listener untuk memvalidasi captcha saat pengguna mengirimkan form
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  validateCaptcha();
});