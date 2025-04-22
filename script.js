document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
 });

 document.getElementById('menu-toggle').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
 });