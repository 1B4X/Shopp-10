const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navLink = document.querySelectorAll('.nav-link')

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}



function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const url = "https://api.whatsapp.com/send?phone=62081226107527&text=hallo%20admin%0Asaya%20"+ name +"%0Aemail%20saya%20"+ email +"%0A%0A"+ message +"";

    window.open(url);
}