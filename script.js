// تحميل Navbar و Sidebar من الملفات المستقلة
document.addEventListener("DOMContentLoaded", () => {

    // تحديد المسار الصحيح تلقائيًا (في الصفحات الداخلية أو الرئيسية)
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

    // تحميل Navbar
    fetch(basePath + 'component/navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            attachMenuEvents(); // بعد تحميل الـ Navbar
        });

    // تحميل Sidebar
    fetch(basePath + 'component/sidebar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            attachMenuEvents(); // بعد تحميل الـ Sidebar
        });

    // دالة ربط الأحداث بعد تحميل القائمتين
    function attachMenuEvents() {
        const menuBtn = document.getElementById("menuBtn");
        const sidebar = document.getElementById("sidebar");
        const closeBtn = document.getElementById("closeBtn");
        let overlay = document.getElementById("overlay");

        // إذا لم يكن هناك overlay، نضيفه مرة واحدة فقط
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "overlay";
            overlay.className = "overlay";
            document.body.appendChild(overlay);
        }

        if (menuBtn && sidebar && overlay) {
            menuBtn.onclick = () => {
                sidebar.classList.add("show");
                overlay.classList.add("show");
            };
        }

        if (closeBtn && sidebar && overlay) {
            closeBtn.onclick = () => {
                sidebar.classList.remove("show");
                overlay.classList.remove("show");
            };
        }

        if (overlay && sidebar) {
            overlay.onclick = () => {
                sidebar.classList.remove("show");
                overlay.classList.remove("show");
            };
        }
    }
});
