// show menu on click
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// remove menu on click
const navLink = document.querySelectorAll('.nav_link'),
    navMenu = document.getElementById('nav-menu')

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections linked
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

//header change color
window.onscroll = () => {
    const nav = document.getElementById('header')
    if (this.scrollY >= 125) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

// //scroll animation
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 500,
//     reset: true

// });

// sr.reveal(`.home_data, .home_sneaker,
// .sneaker, .collection_card,
// .offer_data, 
// .new_mens, .new_sneaker,
// .newsletter_container, .footer_container`, {
//     interval: 250
// })