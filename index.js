const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})


var tl = gsap.timeline({defaults:{duration: 1}});

tl.from(".main-copy", {y: 50, opacity: 0})
  .to("h1 span", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
  .from("ul.featured-cabins li", {y: 50, opacity: 0, stagger: .3}, "-=.7")