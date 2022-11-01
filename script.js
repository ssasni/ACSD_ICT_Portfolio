// Navigation //
window.addEventListener('scroll', function(){
    let nav = document.getElementById("nav");
    nav.classList.toggle('fixed', this.window.scrollY > 0)
})