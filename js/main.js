// nav bars 
const navEl = document.querySelector('nav')
const barsEl = document.querySelector('.bi-list')
const linksEl = document.querySelectorAll('.link')

barsEl.addEventListener('click', ()=> {
    navEl.classList.toggle('navShow')
})

linksEl.forEach((link)=> {
    link.addEventListener('click', ()=> {
        navEl.classList.toggle('navShow')
    })
})


// scrool height 
window.addEventListener('scroll', ()=> {
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect().height

    const scrollHeight = window.pageYOffset

    // header fixed 
    if (scrollHeight > headerHeight) {
        header.classList.add('headerFixed')
        header.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }else {
        header.classList.remove('headerFixed')
        header.style.boxShadow ='none'
    }
})