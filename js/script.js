function toggleSidebar() {
    const sidebar = document.querySelector('.fixed-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // Dynamic typing effect
    const roles = ['Software Developer', 'Full-Stack Engineer', 'Technology Consultant', 'Azure Specialist'];
    let index = 0, charIndex = 0;
    const textElement = document.getElementById('profession');

    function type() {
        let currentRole = roles[index];
        textElement.textContent = currentRole.substring(0, charIndex);
        if (charIndex < currentRole.length) {
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

    // Responsive Sidebar Close on Link Click
    document.querySelectorAll('.nav-icon').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.fixed-sidebar').classList.remove('active');
            }
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});