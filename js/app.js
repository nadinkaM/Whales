window.addEventListener('scroll', e=> {
document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
 wrapper: '.wrapper' , 
 content: '.content'  
})
function openNewWindow() {
    // Замените "ВАША_ССЫЛКА" на URL, который вы хотите открыть в новом окне
    var link = "https://www.youtube.com/watch?v=L4dnmzJ9bZo";

    // Открываем новое окно с заданной ссылкой
    window.open(link, "_blank");
}