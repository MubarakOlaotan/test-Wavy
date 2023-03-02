const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const backdrop = document.getElementById('backdrop')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
        toggleBackdrop()
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
        toggleBackdrop()
    })
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('active')
}

backdrop.addEventListener('click', () => {
    nav.classList.remove('active')
    toggleBackdrop()
})




// News
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('.news-card')

let idx = 0

// let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${ -idx * 340 }px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})


// Crew
const crewImgs = document.getElementById('crew-imgs')
const crew = document.querySelectorAll('.crew-card')
const leftCrewBtn = document.getElementById('crew-left')
const rightCrewBtn = document.getElementById('crew-right')


// let interval = setInterval(run, 2000)


function run() {
    idx++
    changeImageCrew()
}

function changeImageCrew() {
    if (idx > crew.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = crew.length - 1
    }

    crewImgs.style.transform = `translateX(${ -idx * 290 }px)`
}

// function resetCrewInterval() {
//     clearInterval(interval)
//     interval = setInterval(run, 2000)
// }

rightCrewBtn.addEventListener('click', () => {
    console.log('right-clicked')
    idx++
    changeImageCrew()
    resetInterval()
})

leftCrewBtn.addEventListener('click', () => {
    console.log('clicked')
    idx--
    changeImageCrew()
    resetInterval()
})



AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




