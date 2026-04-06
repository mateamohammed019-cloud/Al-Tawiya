// تحميل Navbar و Sidebar من الملفات المستقلة
document.addEventListener("DOMContentLoaded", () => {

    // تحديد المسار الصحيح تلقائيًا
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

    // تحميل Navbar
    fetch(basePath + 'component/navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            attachMenuEvents();
        });

    // تحميل Sidebar
    fetch(basePath + 'component/sidebar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            attachMenuEvents();
        });

    function attachMenuEvents() {
        const menuBtn = document.getElementById("menuBtn");
        const sidebar = document.getElementById("sidebar");
        const closeBtn = document.getElementById("closeBtn");
        let overlay = document.getElementById("overlay");

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

    // ===== تشغيل حركة البراند =====
    const track = document.querySelector('.brands-track');

    if (track) {
        let position = 0;
        const speed = 0.5;

        function animate() {
            position += speed;
            track.style.transform = `translateX(-${position}px)`;

            const firstCard = track.children[0];
            const firstWidth = firstCard.offsetWidth + 25;

            if (position >= firstWidth) {
                track.appendChild(firstCard);
                position = 0;
                track.style.transform = `translateX(0)`;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

});