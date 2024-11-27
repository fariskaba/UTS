document.addEventListener("DOMContentLoaded", () => {
    // Mengelola dropdown menu
    const dropdownItems = document.querySelectorAll(".dropdown > li");

    dropdownItems.forEach((menu) => {
        // Menampilkan submenu saat mouse masuk
        menu.addEventListener("mouseenter", () => {
            const submenu = menu.querySelector(".submenu");
            if (submenu) submenu.style.display = "block";
        });

        // Menyembunyikan submenu saat mouse keluar
        menu.addEventListener("mouseleave", () => {
            const submenu = menu.querySelector(".submenu");
            if (submenu) submenu.style.display = "none";
        });
    });

    // Event listener untuk tombol "Daftar Sekarang"
    const daftarButton = document.querySelector(".btn");
    if (daftarButton) {
        daftarButton.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Terima kasih telah mendaftar! Kami akan menghubungi Anda melalui email.");
            window.location.href = "Pendakian.html";
        });
    }
});
