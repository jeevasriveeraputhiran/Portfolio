const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

       
        const navLinks = nav.querySelectorAll('.nav-links');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        });
    }
}


showMenu('nav_toggle', 'navlink');

document.getElementById('whatsappIcon').addEventListener('click', function() {
    document.getElementById('dialogBox').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('dialogBox').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('dialogBox')) {
        document.getElementById('dialogBox').style.display = 'none';
    }
});




