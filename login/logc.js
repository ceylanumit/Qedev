// Kullanıcı verilerini yerel depoda saklamak
function register() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!username || !email || !password) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    // Yeni kullanıcıyı kaydet
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Bu e-posta ile kayıtlı bir kullanıcı zaten var!");
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    window.location.href = "giris.html"; // Kayıt sonrası giriş sayfasına yönlendir
}

// Kullanıcı giriş işlemi
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Hoş geldiniz, ${user.username}!`);
        window.location.href = "../index.html"; // Giriş sonrası yönlendirme
    } else {
        alert("E-posta veya şifre hatalı!");
    }
}
