function toggleSidebar() {
    const sidebar = document.querySelector('.fixed-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const roles = ['Web Developer', 'Software Engineer', 'MERN Developer', 'Freelancer'];
    let index = 0, charIndex = 0;
    const textElement = document.getElementById('profession');

    function type() {
        let current = roles[index];
        textElement.textContent = current.substring(0, charIndex);
        if (charIndex < current.length) {
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                index = (index + 1) % roles.length;
                charIndex = 0;
                type();
            }, 2000);
        }
    }
    type();

    // Responsive Read More
    document.querySelectorAll('.card-text').forEach(desc => {
        const full = desc.innerText;
        if (full.length > 150) {
            const short = full.substring(0, 150) + "... ";
            desc.innerHTML = `<span>${short}</span><a href="#" class="read-btn" style="color: #007bff; text-decoration: none;">Read More</a>`;
            const btn = desc.querySelector('.read-btn');
            btn.onclick = (e) => {
                e.preventDefault();
                if (btn.innerText === "Read More") {
                    desc.querySelector('span').innerText = full;
                    btn.innerText = " Read Less";
                } else {
                    desc.querySelector('span').innerText = short;
                    btn.innerText = "Read More";
                }
            };
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});